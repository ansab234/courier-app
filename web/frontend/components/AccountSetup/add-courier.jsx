import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";
import * as TooltipText from "../TooltipText";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Card from "react-bootstrap/Card";

const addCourier = (props) => {
  const { courier, updateCourier, removeCourier, showClose } = props;

  const usernameTip = TooltipText.UserName;
  const passwordTip = TooltipText.Password;
  const serviceTypeTip = TooltipText.ServiceType;

  let formIsValid = false;
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      courier !== "" &&
      userName !== "" &&
      password !== "" &&
      minWeight !== "" &&
      shipperCity !== "" &&
      serviceType !== ""
    ) {
      formIsValid = true;
      Router.push("/consignee-information");
    } else {
      alert("Fields Cann't be Empty");
    }
  };
  // const [hideFields, setHideFields] = useState(false);

  return (
    <Row className="mb-4">
      <Form onSubmit={submitHandler}>
        <Card className="px-5 py-3 box-shadow">
          {showClose ? (
            <Row>
              <Col
                className="d-flex justify-content-end"
                style={{ position: "relative" }}
              >
                <IconButton
                  onClick={removeCourier}
                  sx={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  <CloseIcon />
                </IconButton>
              </Col>
            </Row>
          ) : null}

          <Row className=" my-3">
            <Col md={3}>
              <Form.Label htmlFor="selectCourier" className="form-label">
                Select Courier
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) =>
                  updateCourier({ key: "courier", value: e.target.value })
                }
                value={courier.courier}
              >
                <option value="">TCS</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <h6>Status</h6>
              <FormControl component="fieldset">
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" defaultChecked />}
                  label="Active"
                  labelPlacement="start"
                />
              </FormControl>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md={3}>
              <Form.Label htmlFor="userName" className="form-label">
                User Name{" "}
                <Tooltip title={usernameTip} arrow>
                  <InfoOutlinedIcon />
                </Tooltip>
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="userName"
                placeholder="Add"
                onChange={(e) =>
                  updateCourier({ key: "username", value: e.target.value })
                }
                value={courier.username}
              />
            </Col>

            <Col md={3}>
              <Form.Label htmlFor="password" className="form-label">
                Password{" "}
                <Tooltip title={passwordTip} arrow>
                  <InfoOutlinedIcon />
                </Tooltip>
              </Form.Label>
              <Form.Control
                type="password"
                className="form-control"
                id="password"
                placeholder="Add"
                onChange={(e) =>
                  updateCourier({ key: "password", value: e.target.value })
                }
                value={courier.password}
              />
            </Col>

            <Col md={3}>
              <Form.Label htmlFor="minWeight" className="form-label">
                Min Weiight in grams
              </Form.Label>
              <Form.Control
                type="number"
                id="minWeight"
                placeholder="Add"
                onChange={(e) =>
                  updateCourier({ key: "minWeight", value: e.target.value })
                }
                value={courier.minWeight}
              />
            </Col>

            <Col md={3}>
              <Form.Label htmlFor="selectCourier" className="form-label">
                Shipper City
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) =>
                  updateCourier({ key: "shipperCity", value: e.target.value })
                }
                value={courier.shipperCity}
              >
                <option value="">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md={3}>
              <Form.Label htmlFor="selectType" className="form-label">
                Service type{" "}
                <Tooltip title={serviceTypeTip} arrow>
                  <InfoOutlinedIcon />
                </Tooltip>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) =>
                  updateCourier({ key: "serviceType", value: e.target.value })
                }
                value={courier.serviceType}
              >
                <option value="">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
        </Card>
      </Form>
    </Row>
  );
};

export default addCourier;
