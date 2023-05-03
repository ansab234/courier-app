import { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import * as ToolTipTxt from "../../TooltipText";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";

const CourierAccountFields = (props) => {
  const { courier, updateCourier, removeCourier, showClose } = props;

  const userNameTip = ToolTipTxt.UserName;
  const passwordTip = ToolTipTxt.Password;
  const serviceTypeTip = ToolTipTxt.ServiceType;

  const [checked, setChecked] = useState(true);

  const inputHandler = (e, fn) => {
    console.log(e.target.value);
    fn(e.target.value);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Card className="px-5 py-4 box-shadow my-3">
        <Grid container direction="row" spacing={3}>
          {showClose ? (
            <Row>
              <Col
                className="d-flex justify-content-end"
                style={{ position: "realitive" }}
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

          <Grid container item direction="row" spacing={3}>
            <Grid item md={3}>
              <Form.Label htmlFor="selectCourier">Select Courier</Form.Label>
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
            </Grid>
          </Grid>

          <Grid container item direction="row" spacing={3}>
            <Grid item md={3}>
              <Form.Label htmlFor="userName" className="form-label">
                User Name{" "}
                <Tooltip title={userNameTip} arrow>
                  <InfoOutlinedIcon />
                </Tooltip>
              </Form.Label>
              <Form.Control
                type="text"
                id="userName"
                placeholder="Add"
                onChange={(e) =>
                  updateCourier({ key: "username", value: e.target.value })
                }
                value={courier.username}
              />
            </Grid>

            <Grid item md={3}>
              <Form.Label htmlFor="password">
                Password{" "}
                <Tooltip title={passwordTip} arrow>
                  <InfoOutlinedIcon />
                </Tooltip>
              </Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Add"
                onChange={(e) =>
                  updateCourier({ key: "password", value: e.target.value })
                }
                value={courier.password}
              />
            </Grid>

            <Grid item md={3}>
              <Form.Label htmlFor="minWeight">Min Weiight in grams</Form.Label>
              <Form.Control
                type="number"
                id="minWeight"
                placeholder="Add"
                onChange={(e) =>
                  updateCourier({ key: "minWeight", value: e.target.value })
                }
                value={courier.minWeight}
              />
            </Grid>

            <Grid item md={3}>
              <Form.Label htmlFor="selectCourier">Shipper City</Form.Label>
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
            </Grid>
          </Grid>

          <Grid container item direction="row">
            <Grid item md={3}>
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
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CourierAccountFields;
