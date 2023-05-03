import { useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import * as ToolTipText from "../TooltipText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

const userNameTip = ToolTipText.UserName;
const AccountSetupFields = (props) => {
  const { courier, updateCourier, removeCourier, showClose } = props;

  // const [courier, setCourier] = useState("");
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [minWeight, setMinWeight] = useState("");
  // const [shipperCity, setShipperCity] = useState("");
  // const [serviceType, setServiceType] = useState("");
  // const inputHandler = (e, fn) => {
  //   console.log(e.target.value);
  //   fn(e.target.value);
  // };
  const [checked, setChecked] = useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <>
      <Card className="px-5 py-2 mb-4  box-shadow">
        <Grid
          container
          direction="row"
          spacing={3}
          sx={{ paddingTop: "50px", paddingBottom: "30px" }}
        >
          <Form>
            {showClose ? (
              <Grid container direction="row" justifyContent="end">
                <Grid item sx={{ position: "relative" }}>
                  <IconButton
                    onClick={removeCourier}
                    sx={{ position: "absolute", top: "10px", right: "10px" }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ) : // <Row>
            //   <Col
            //     className="d-flex justify-content-end "
            //     style={{ position: "relative" }}
            //   >
            //     <IconButton
            //       onClick={removeCourier}
            //       sx={{ position: "absolute", top: "10px", right: "10px" }}
            //     >
            //       <CloseIcon />
            //     </IconButton>
            //   </Col>
            // </Row>
            null}

            <Grid container direction="row" spacing={3}>
              <Grid container item direction="row" spacing={3}>
                <Grid item md={3}>
                  <Form.Label htmlFor="selectCourier">
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
                </Grid>

                <Grid item md={3}>
                  <h6>Status</h6>
                  <FormControl component="fieldset">
                    <FormControlLabel
                      value="start"
                      control={<Switch color="primary" defaultChecked />}
                      label="Active"
                      labelPlacement="start"
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container item direction="row" spacing={3}>
                <Grid item md={3}>
                  <Form.Label htmlFor="userName">
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
                    <Tooltip title="Add" arrow>
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
                  <Form.Label htmlFor="minWeight">
                    Min Weiight in grams
                  </Form.Label>
                  <Form.Control
                    type="text"
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
                      updateCourier({
                        key: "shipperCity",
                        value: e.target.value,
                      })
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

              <Grid container item direction="row" spacing={3}>
                <Grid item md={3}>
                  <Form.Label htmlFor="selectType">
                    Service type{" "}
                    <Tooltip title="Add" arrow>
                      <InfoOutlinedIcon />
                    </Tooltip>
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      updateCourier({
                        key: "serviceType",
                        value: e.target.value,
                      })
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
          </Form>
        </Grid>
      </Card>
      {/* <Row className="mb-4">
        <Form>
          <Card className="px-5 py-2 box-shadow">
            {showClose ? (
              <Row>
                <Col
                  className="d-flex justify-content-end "
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

            <Row className="my-3">
              <Col md={3}>
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
                <Form.Label htmlFor="userName">
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
              </Col>

              <Col md={3}>
                <Form.Label htmlFor="password">
                  Password{" "}
                  <Tooltip title="Add" arrow>
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
              </Col>

              <Col md={3}>
                <Form.Label htmlFor="minWeight">
                  Min Weiight in grams
                </Form.Label>
                <Form.Control
                  type="text"
                  id="minWeight"
                  placeholder="Add"
                  onChange={(e) =>
                    updateCourier({ key: "minWeight", value: e.target.value })
                  }
                  value={courier.minWeight}
                />
              </Col>

              <Col md={3}>
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
              </Col>
            </Row>
            <Row className="my-3">
              <Col md={3}>
                <Form.Label htmlFor="selectType">
                  Service type{" "}
                  <Tooltip title="Add" arrow>
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
      </Row> */}
    </>
  );
};

export default AccountSetupFields;
