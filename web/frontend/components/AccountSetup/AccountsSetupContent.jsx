// import { useState, useEffect } from "react";
// import Router from "next/router";
// import AccountSetupFields from "./AccountSetupFields";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { nanoid } from "nanoid";
// import AddCourier from "./add-courier";

const AccountsSetupContent = () => {
  //   // const [courier, setCourier] = useState("");
  //   // const [userName, setUserName] = useState("");
  //   // const [password, setPassword] = useState("");
  //   // const [minWeight, setMinWeight] = useState("");
  //   // const [shipperCity, setShipperCity] = useState("");
  //   // const [serviceType, setServiceType] = useState("");
  //   // const [addAccount, setAddAccount] = useState(false);
  //   const [checked, setChecked] = useState(true);
  //   const [couriers, setCouriers] = useState([]);
  //   let key = nanoid();
  //   const courierObj = {
  //     courier: "",
  //     username: "",
  //     password: "",
  //     minWeight: "",
  //     shipperCity: "",
  //     serviceType: "",
  //   };
  //   useEffect(() => {
  //     setCouriers([{ ...courierObj }]);
  //   }, []);
  //   const inputHandler = (e, fn) => {
  //     console.log(e.target.value);
  //     fn(e.target.value);
  //   };
  //   const handleChange = (event) => {
  //     setChecked(event.target.checked);
  //   };
  //   const addAccountHandler = () => {
  //     // if (
  //     //   courier !== "" &&
  //     //   userName !== "" &&
  //     //   password !== "" &&
  //     //   minWeight !== "" &&
  //     //   shipperCity !== "" &&
  //     //   serviceType !== ""
  //     // ) {
  //     //   setAddAccount(!addAccount);
  //     // } else {
  //     //   alert("Fields Cann't be Empty");
  //     // }
  //     setCouriers([...couriers, { ...courierObj }]);
  //   };
  //   const onSaveHandler = () => {
  //     console.log("Account Saved!!");
  //   };
  //   const addCourierHandler = () => {
  //     // do some checks
  //     setCouriers([...couriers, { ...courierObj }]);
  //   };
  //   const updateCourierInfo = ({ index, key, value }) => {
  //     const couriersArr = [...couriers];
  //     const courier = couriersArr[index];
  //     courier[key] = value;
  //     setCouriers([...couriersArr]);
  //   };
  //   const removeCourier = (index) => {
  //     const copyCouriers = [...couriers];
  //     copyCouriers.splice(index, 1);
  //     setCouriers([...copyCouriers]);
  //   };
  //   return (
  //     <>
  //       <Container className="accountsSetup my-5">
  //         <Row className="my-3">
  //           <Col className="d-flex justify-content-between">
  //             <h4>Accounts setup</h4>
  //             <Button className="primary-bg px-3" onClick={onSaveHandler}>
  //               Save
  //             </Button>
  //           </Col>
  //         </Row>
  //         {couriers.map((courier, index) => {
  //           return (
  //             // <AddCourier
  //             //   courier={courier}
  //             //   key={index}
  //             //   updateCourier={(obj) => updateCourierInfo({ ...obj, index })}
  //             //   removeCourier={() => removeCourier(index)}
  //             //   showClose={couriers.length > 1}
  //             // />
  //             <AccountSetupFields
  //               key={index}
  //               courier={courier}
  //               updateCourier={(obj) => updateCourierInfo({ ...obj }, index)}
  //               removeCourier={() => removeCourier(index)}
  //               showClose={couriers.length > 1}
  //             />
  //           );
  //         })}
  //         <Row className="my-4">
  //           <Col>
  //             <Button className="primary-bg px-3" onClick={addAccountHandler}>
  //               Add another account
  //             </Button>
  //           </Col>
  //         </Row>
  //       </Container>
  //     </>
  //   );
};

export default AccountsSetupContent;
