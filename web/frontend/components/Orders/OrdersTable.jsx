import React, { useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useState } from "react";
import { useAuthenticatedFetch } from "../../hooks";

export default function OrdersTable() {
  const fetch = useAuthenticatedFetch();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const resp = await fetch(`/api/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await resp.json();
    setOrders(result.orders);
    console.log("orders list--", result.orders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const fullfill_order = async (id) => {
    console.log("order-id--", id);
    const resp = await fetch(`/api/fulfill-orders`, {
      method: "POST",
      body: JSON.stringify({
        orderId: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await resp.json();
    console.log(result);
  };

  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope="col">Order No.</th>
          <th scope="col">Order ID</th>
          <th scope="col">App id</th>
          <th scope="col">Customer Locale</th>
        </tr>
      </MDBTableHead>

      {orders?.map((index, value) => {
        return (
          <MDBTableBody>
            <tr>
              <th scope="row">{value}</th>
              <td>{index.id}</td>
              <td>{index.app_id}</td>
              <td>{index.customer_locale}</td>
              <button onClick={() => fullfill_order(index.id)}>Order</button>
            </tr>
          </MDBTableBody>
        );
      })}
    </MDBTable>
  );
}
