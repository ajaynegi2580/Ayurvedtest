import React, { useState } from "react";
import {
  Button,
  Form,
  ButtonToolbar,
  Input,
  Row,
  Col,
  Schema,
  Panel,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./asset/css/Contactus.css";
import axiosPrivate from "../api/axios";

const { StringType, NumberType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  phone_no: NumberType().isRequired("This phone no is required.").min(10),
  city: StringType().isRequired("This field is required."),
});

const Textarea = React.forwardRef((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));
export default function Contact() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone_no: "",
    city: "",
    textarea: "",
  });

  // function handleInputChange(newValue, name) {
  //   console.log(name, newValue);
  //   setFormValue((ev) => ({
  //     ...ev,
  //     [name]: newValue,
  //   }));
  // }
  console.log(formValue);
  return (
    <div>
      <Row className="show-grid">
        <Col md={2}></Col>
        <Col md={20} sm={24} xs={24}>
          <h3>CONTACT US</h3>
          <p>
            You can stop renal failure, a fatal condition, with prompt
            treatment. Fill out the form below to experience the effectiveness
            of ayurveda in treating renal issues. soon, one of our specialists
            will assist you further.
          </p>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="acutekidneylastdiv">
        <Col md={4}></Col>
        <Col md={16} sm={24} xs={24}>
          <div className="contactus">
            <h5 className="headingyourdeatail">YOUR DETAIL</h5>
            <Form
              fluid
              model={model}
              formValue={formValue}
              onChange={(formValue, event) => setFormValue(formValue)}
            >
              <Row className="show-grid">
                <Col md={12} sm={24} xs={24}>
                  <Form.Group>
                    <Form.ControlLabel className="formlabel">
                      Name
                    </Form.ControlLabel>
                    <Form.Control name="name" className="contactinput" />
                  </Form.Group>
                </Col>
                <Col md={12} sm={24} xs={24}>
                  <Form.Group controlId="email-1">
                    <Form.ControlLabel className="formlabel">
                      Email
                    </Form.ControlLabel>
                    <Form.Control
                      name="email"
                      type="email"
                      className="contactinput"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col md={12} sm={24} xs={24}>
                  <Form.Group controlId="name-1">
                    <Form.ControlLabel className="formlabel">
                      Phone No.
                    </Form.ControlLabel>
                    <Form.Control
                      name="phone_no"
                      type="tel"
                      className="contactinput"
                    />
                  </Form.Group>
                </Col>
                <Col md={12} sm={24} xs={24}>
                  <Form.Group controlId="email-1">
                    <Form.ControlLabel className="formlabel">
                      City
                    </Form.ControlLabel>
                    <Form.Control
                      name="city"
                      type="city"
                      className="contactinput"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="textarea-1" className="show-grid">
                <Form.ControlLabel className="formlabel">
                  Textarea
                </Form.ControlLabel>
                <Form.Control rows={5} name="textarea" accepter={Textarea} />
              </Form.Group>

              <Button
                color="green"
                appearance="primary"
                className="contactusbtn"
                type="submit"
              >
                SUBMIT ME
              </Button>
            </Form>
          </div>
          <Row>
            <Col md={8} sm={2} xs={0}></Col>
            <Col md={11} sm={20} xs={24}>
              <div className="contactusdis">
                <p>
                  For further assistance contact us on: <br />
                  Phone no.:- +91 88888 88888 <br />
                  Email:-
                </p>
              </div>
            </Col>
            <Col md={6} sm={2} xs={0}></Col>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
