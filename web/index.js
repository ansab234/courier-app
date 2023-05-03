import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";

import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";

import Service from "./Models/serviceModel.js";
import connectdb from "./mongodb/db.js";

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

connectdb();

app.use(express.json());

app.post("/api/create-service", async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const service = new Service({
      name,
      description,
      price,
    });
    await service.save();
    return res.status(200).send(service);
  } catch (error) {
    console.log("error", { error });
    return res.status(500).send(error);
  }
});

app.use("/api/*", shopify.validateAuthenticatedSession());

app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
});

app.post("/api/fulfill-orders", async (req, res) => {
  const data = { success: true, id: req.body.orderId };
  const id = req.body.orderId;

  const fulfill_orders = await shopify.api.rest.FulfillmentOrder.all({
    session: res.locals.shopify.session,
    order_id: id,
  });

  fulfill_orders.forEach(async (element) => {
    if (element.status == "open") {
      const lineItems_filtered = [];
      const fulfill_id = element.id;
      console.log("loiue", element.line_items);
      element.line_items.forEach((item) => {
        const a = {
          id: item.id,
          quantity: item.quantity,
        };
        lineItems_filtered.push(a);
      });

      const fulfillment = new shopify.api.rest.Fulfillment({
        session: res.locals.shopify.session,
      });

      fulfillment.notify_customer = true;
      fulfillment.tracking_info = {
        number: 1562678,
        url: "https://www.my-shipping-company.com",
        company: "my-shipping-company",
      };

      fulfillment.line_items_by_fulfillment_order = [
        {
          fulfillment_order_id: fulfill_id,
          fulfillment_order_line_items: lineItems_filtered,
        },
      ];
      await fulfillment.save({
        update: true,
      });
      console.log("fullfiment", fulfillment);
    } else {
      console.log("status close!!");
    }
  });
});

app.get("/api/products/create", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

app.get("/api/orders", async (req, res) => {
  const orders = await shopify.api.rest.Order.all({
    session: res.locals.shopify.session,
    status: "any",
  });
  res.status(200).send({ orders });
});

app.get("/api/service", async (req, res) => {
  const data = await Service.find({ user: req.user._id });
  res.json(data);
});

app.put("/api/update", async (req, res) => {
  const { name, descrption, price } = req.body;

  const service = await Service.findById(req.params.id);

  if (service) {
    service.name = name;
    service.descrption = descrption;
    service.price = price;

    const updatedServicee = await service.save();
    res.json(updatedServicee);
  } else {
    res.status(404);
    throw new Error("Service not found");
  }
});

app.delete("/api/delete", async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (service) {
    await service.remove();
    res.json({ message: "Service Removed" });
  } else {
    res.status(404);
    throw new Error("Not Found");
  }
});

app.use(shopify.cspHeaders());
app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});

app.listen(PORT, () => {
  console.log(PORT);
});
