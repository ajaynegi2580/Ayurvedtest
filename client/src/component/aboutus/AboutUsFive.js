import React from "react";
import "./asset/css/aboutus.css";
import { Container, Row, Col, Button } from "rsuite";
import logo from "../home/asset/images/Logo.png";

import Major_Diagonistics_banner from "./asset/images/Major_Diagonistics_banner.png";
import BookingSlots from "../Booking_slots/BookingSlots";
import "rsuite/dist/rsuite.min.css";
export default function AboutUsFive() {
  return (
    <div>
      <div>
        <Container>
          <div className="bannerimage">
            {/* <img src={Major_Diagonistics_banner} style={{ width: "100%" }} /> */}
            <h2 className="majortestsh">MAJOR DIAGNOSTIC TESTS</h2>
            <p style={{ paddingTop: "10px" }}>
              <b>IMAGING TESTS</b>
            </p>
          </div>
          <Row className="show-grid acutekidneylastdiv">
            <Col md={2}></Col>
            <Col md={10} className="measurement">
              <h5 className="outputmeasurement">IMAGING TESTS</h5>
              <p>
                Imaging tests involve a series of tests to know any physical
                damage in your kidney's structure. They may include:
              </p>
              <p>
                <b>RENAL ULTRASOUND</b>
              </p>
              <p>
                The imaging test involves high-frequency sound waves to view the
                kidney's inside structure.
              </p>
              <p>
                <b>COMPUTED TOMOGRAPHY</b>
              </p>
              <p>
                Doctors use x-ray equipment to produce multiple images or
                pictures of the inside of the body. Since there can be various
                reasons for renal failure; this test gives a broader picture of
                what could be the possible reason for damage.
              </p>
              <p>
                <b>MAGNETIC TESONANCE IMAGING</b>
              </p>

              <p>
                This is another test that uses magnetic field and radio
                frequency to get a featured view of the kidneys.
              </p>

              <p>
                <b>RENAL SCINTIGRAPHY</b>
              </p>

              <p>
                During this medical test, the kidneys are assessed using a gamma
                camera and a radio tracer. This test allows the physician or
                doctor to see how well the kidneys are fuctioning and excreting
                urine.
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
