import React from "react";
import "./asset/css/aboutus.css";
import { Container, Row, Col, Button } from "rsuite";
import logo from "../home/asset/images/Logo.png";

import Major_Diagonistics_banner from "./asset/images/Major_Diagonistics_banner.png";
import BookingSlots from "../Booking_slots/BookingSlots";
import "rsuite/dist/rsuite.min.css";
export default function AboutUsThree() {
  return (
    <div>
      <div>
        <Container>
          <div className="bannerimage">
            {/* <img src={Major_Diagonistics_banner} style={{ width: "100%" }} /> */}
            <h2 className="majortestsh">MAJOR DIAGNOSTIC TESTS</h2>
            <p style={{ paddingTop: "10px" }}>
              <b>URINE TESTS</b>
            </p>
          </div>
          <Row className="show-grid acutekidneylastdiv">
            <Col md={2}></Col>
            <Col md={10} className="measurement">
              <h5 className="outputmeasurement">URINE TESTS</h5>
              <p>
                During kidney damage, your kidneys start to leak protein from
                the blood. A urine test is usually recommended to the patients
                whose kidneys have malfuctioned and leaking important nutrients
                through the urine.
              </p>
              <p>
                There are many reasons why your body is losing protein off the
                blood and not all of which are related to the kidneys. But a
                urine testis usually recommended to the patients whose kidneys
                have got malfunctioned and leaking important nutrients through
                the urine. Hence, a urine test is actually done for two to three
                times, to know if the results are similar.
              </p>
              <p>
                <b>
                  THERE ARE TWO TYPES OF URINE TESTS THAT WE ASK THE PATIENTS TO
                  GO FOR:
                </b>
              </p>
              <p>
                Dipstic urine test
                <br />A sample of the urine test tells if there is albumin
                present in your urine, doctors conduct a series of dipstick
                tests if the first tests show protein in your urine. Urine
                albumin-to-creatimine ration (UACR)
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
