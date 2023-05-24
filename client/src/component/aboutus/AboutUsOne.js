import React from "react";
import "./asset/css/aboutus.css";
import { Container, Row, Col, Button } from "rsuite";
import logo from "../home/asset/images/Logo.png";

import Major_Diagonistics_banner from "./asset/images/Major_Diagonistics_banner.png";
import BookingSlots from "../Booking_slots/BookingSlots";
import "rsuite/dist/rsuite.min.css";
export default function AboutUsOne() {
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
              <h5 className="outputmeasurement">URINE OUTPUT MEASUREMENTS</h5>
              <p>
                Urine output is an important part of major diagnostic tests that
                alert problems related to the kidneys. Patients who have
                experienced or are experiencing kidney damage because of
                hypertension and insufficient flow of blood can suffer severe
                kidney problems. Hence, it is important to measure decreased
                urine output that can notify you of the damage. The UO can
                evaluate kidney function without checking blood values.
                Producing large volumes of urine is a sign of a condition called
                polyuria. The normal urine output of a healthy person is 1-2
                ml/kg/hr.
              </p>
              <p>Some conditions that can increase your urine output are:</p>
              <p>
                Kidney disease
                <br /> Consumption of diuretic medications
                <br /> Diabetes
                <br /> High fluid intake
                <br /> To determine the UO of the patient, a doctor needs to
                know their weight, the amount of urine excreted, and the time it
                took them to produce that urine. The formula is as follow:
              </p>
              <p>
                Urine Output= (amount of urine/number of hours)/ weight of the
                person in Kg
              </p>
              <p>
                Urine output should be measured at least once in four hours if
                possible.
              </p>
              <p>
                Once the urine output of the patient is calculated, it is
                important to look at other excretions such as vomit, diarrhea,
                etc to know the exact UO.
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
