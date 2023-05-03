import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import CourierAccountFields from "./CourierAccountFields";
import Router from "next/router";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const FormFields = () => {
  const [couriers, setCouriers] = useState([]);

  const courierObj = {
    courier: "",
    username: "",
    password: "",
    minWeight: "",
    shipperCity: "",
    serviceType: "",
  };

  useEffect(() => {
    setCouriers([{ ...courierObj }]);
  }, []);

  const updateCourierInfo = ({ key, index, value }) => {
    const couriersArr = [...couriers];
    const courier = couriersArr[index];
    courier[key] = value;
    setCouriers([...couriersArr]);
  };

  const removeCourier = ({ index }) => {
    const copyCourier = [...couriers];
    copyCourier.splice(index, 1);
    setCouriers([...copyCourier]);
  };

  const addAccountHandler = () => {
    setCouriers([...couriers, { ...courierObj }]);
  };

  let formIsValid = false;
  const submitHandler = (e) => {
    e.preventDefault();

    Router.push("/consignee-information");
  };
  return (
    <>
      <Grid container direction="row">
        <Form onSubmit={submitHandler}>
          {couriers.map((courier, index) => {
            return (
              <CourierAccountFields
                courier={courier}
                key={index}
                updateCourier={(obj) => updateCourierInfo({ ...obj, index })}
                removeCourier={() => removeCourier(index)}
                showClose={couriers.length > 1}
              />
            );
          })}

          <Grid container direction="row">
            <Grid item>
              <Button
                className="primary-bg px-3 font-white"
                onClick={addAccountHandler}
              >
                Add another account
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "3rem 0" }}
          >
            <Grid item>
              {/* <Button
                variant="outline-success"
                className=" px-5 mx-3"
                onClick={() => Router.push("/")}
              >
                Back
              </Button> */}
              <Button
                variant="outlined"
                sx={{
                  padding: "8px 50px",
                  color: "#008060",
                  borderColor: "#008060",
                  margin: "0 5px",
                }}
                onClick={() => Router.push("/")}
              >
                Back
              </Button>
            </Grid>

            <Grid item>
              <Button
                type="submit"
                className="primary-bg"
                sx={{
                  margin: "0 5px",
                  padding: "8px 50px",
                }}
              >
                Next
              </Button>
            </Grid>

            <Grid item>
              <Button
                type="button"
                variant="text"
                className="text-dark mx-3 text-decoration-none"
                onClick={() => Router.push("/consignee-information")}
              >
                Skip
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </>
  );
};

export default FormFields;
