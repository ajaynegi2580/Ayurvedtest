import React from "react";
import "./asset/css/aboutus.css";
import { Container, Row, Col, Button } from "rsuite";
import logo from "../home/asset/images/Logo.png";

import Major_Diagonistics_banner from "./asset/images/Major_Diagonistics_banner.png";
import BookingSlots from "../Booking_slots/BookingSlots";
import "rsuite/dist/rsuite.min.css";
export default function AboutUsFour() {
  return (
    <div>
      <div>
        <Container>
          <div className="bannerimage">
            {/* <img src={Major_Diagonistics_banner} style={{ width: "100%" }} /> */}
            <h2 className="majortestsh">MAJOR DIAGNOSTIC TESTS</h2>
            <p style={{ paddingTop: "10px" }}>
              <b>BLOOD TEST</b>
            </p>
          </div>
          <Row className="show-grid acutekidneylastdiv">
            <Col md={2}></Col>
            <Col md={10} className="measurement">
              <h5 className="outputmeasurement">BLOOD TESTS</h5>
              <p>
                A healthy kidney's job is to eleminate wastes and harmful
                substances from the blood. Blood and urine tests are the
                performance meters of healthy kidney. The abnomal amount of
                certain wastes in the blood reveals there is something wrong
                with the kidney's effecacy. Forllowing are the type of blood
                tests that we use as a paremeterer to judge your kidney
                function:
              </p>
              <p>
                <b>SERUM CREATININE</b>
              </p>
              <p>
                Creatinine is a chemical waste or a by-product of muscle
                metabolism. The waste that gets produced with the wear and tear
                of the muscles stays in your blood for the elimination by your
                kidneys. Creatinine level in the blood varies according to the
                gender and the physical work you do. As kidney diseases progress
                this level increases in the blood. A creatinine level in a
                healthy woman should not be more than 1.1 while in a man it
                should not exceed 1.2.
              </p>
              <p>
                <b>ESTIMATED GLOMERULAR FILTRATION RATE</b>
              </p>
              <p>
                To know how well your renal is working, doctors usually ask for
                an eGFR count. It is calculated on the basis of serum
                creatinine, age, and gender, Normal GFR can vary according to
                your age, but the adequate level in the body should not be less
                tha 90. As eGFR decreases, your kidney function starts to
                deteriorate, even to and extent of 15 or less, it signifies a
                complete failure of your kidneys.
              </p>
              <p>
                <b>BLOOD UREA NITROGEN</b>
              </p>
              <p>
                Urea nitrogen producess with the breakdown of proteins in the
                food you consume. When healthy kidneys lose their ability to
                filter, the BUN level rises. Note that the normal range of BUN
                is somewhere between 7 and 20.
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
