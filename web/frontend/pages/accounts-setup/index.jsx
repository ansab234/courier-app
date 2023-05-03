import { ProductsCard } from "../../components";
import AccountsSetupContent from "../../components/AccountSetup/AccountsSetupContent";
import DashboardNav from "../../components/DashboardNav";

const DeliveredOrders = () => {
  return (
    <>
      <DashboardNav />
      {/* <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        This is a Accounts setup Page
      </h2> */}
      {/* <AccountsSetupContent /> */}

      <ProductsCard />
    </>
  );
};

export default DeliveredOrders;
