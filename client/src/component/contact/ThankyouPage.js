import React from "react";
import { Row, Col } from "rsuite";

export default function ThankyouPage() {
  return (
    <div>
      <Row>
        <Col md={2} sm={0}></Col>
        <Col md={20} sm={24}>
          <div className="thankyoudiv">
            <h3>THANK YOU</h3>
            <p>
              Thank you for contacting us. Someone will Answer you query or give
              you a call shortly
            </p>
            <p>
              <b>HAVE A NICE DAY!</b>
            </p>
          </div>
        </Col>
        <Col md={2} sm={0}></Col>
      </Row>
    </div>
  );
}
