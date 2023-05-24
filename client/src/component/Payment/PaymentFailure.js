import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Button } from "rsuite";
import { axiosPrivate } from "../api/axios";
import logo from "../home/asset/images/Logo.png";

export default function PaymentFailure() {
  return (
    <div className="thankyoudiv" style={{ textAlign: "center" }} id="sectionId">
      <Row>
        <Col md={4}></Col>
        <Col md={16}>
          <h3 style={{ color: "#046a38" }}>Your Payment has been failed...</h3>
          <Row>
            <Col md={24}>
              <p style={{ marginTop: "5%" }}>
                <b>Payment Reference Id</b>- 38y23535
              </p>
              <p>
                <b>Booking ID</b>- 69235352359sfcfsf92435
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={24}>
              <img
                src={logo}
                alt="logo"
                style={{ width: "20%", marginTop: "5%" }}
              />
            </Col>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
