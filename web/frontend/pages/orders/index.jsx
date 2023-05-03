import DashboardNav from "../../components/DashboardNav";
import OrdersTable from "../../components/Orders/OrdersTable";

const Orders = () => {
  return (
    <>
      <DashboardNav />
      {/* <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        This is a Order Page
      </h2> */}
      {/* <OrdersNav />
      <OrdersContent /> */}

      <OrdersTable />
    </>
  );
};

export default Orders;
