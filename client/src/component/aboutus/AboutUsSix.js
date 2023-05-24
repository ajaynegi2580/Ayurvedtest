import React from "react";
import "./asset/css/aboutus.css";
import { Container, Row, Col, Button } from "rsuite";
import logo from "../home/asset/images/Logo.png";

import Major_Diagonistics_banner from "./asset/images/Major_Diagonistics_banner.png";
import BookingSlots from "../Booking_slots/BookingSlots";
import "rsuite/dist/rsuite.min.css";
export default function AboutUsSix() {
  return (
    <div>
      <div>
        <Container>
          <div className="bannerimage">
            {/* <img src={Major_Diagonistics_banner} style={{ width: "100%" }} /> */}
            <h2 className="majortestsh">MAJOR DIAGNOSTIC TESTS</h2>
            <p style={{ paddingTop: "10px" }}>
              <b>OTHER TESTS</b>
            </p>
          </div>
          <Row className="show-grid acutekidneylastdiv">
            <Col md={2}></Col>
            <Col md={10} className="measurement">
              <h5 className="outputmeasurement">
                HOLISTIC AYURVEDIC HELTHCARE CENTER
              </h5>
              <p>
                At a period when Ayurveda was in trouble and people had all but
                forgotten about it, 1Ayurveda took the initive to raise people's
                awareness of Ayurveda.
              </p>
              <p>
                1Ayurveda began offering kidney disease cures with the aid of
                Ayurvedic treatment after taking into consideration the
                condition and struggle of kidney patients to obtain kidney
                disease treatment. Working tirelessly to help kidney patients,
                1Ayurveda has established a reputation for excellence in
                Ayurvedic kidney care.
              </p>
              <p>
                With decades of experience treating kidney patients, this kidney
                care facility has carved out a niche for itself and is now
                recognized as one of india's top kidney care facilities.
              </p>
            </Col>
            <Col md={10}>
              <BookingSlots />
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
