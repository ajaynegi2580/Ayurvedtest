import React from "react";
import "./asset/css/aboutus.css";
import { Container, Row, Col, Button } from "rsuite";
import logo from "../home/asset/images/Logo.png";

import Major_Diagonistics_banner from "./asset/images/Major_Diagonistics_banner.png";
import BookingSlots from "../Booking_slots/BookingSlots";
import "rsuite/dist/rsuite.min.css";
export default function AboutUsTwo() {
  return (
    <div>
      <div>
        <Container>
          <div className="bannerimage">
            {/* <img src={Major_Diagonistics_banner} style={{ width: "100%" }} /> */}
            <h2 className="majortestsh">MAJOR DIAGNOSTIC TESTS</h2>
            <p style={{ paddingTop: "10px" }}>
              <b>A KIDNEY BIOPSY</b>
            </p>
          </div>
          <Row className="show-grid acutekidneylastdiv">
            <Col md={2}></Col>
            <Col md={10} className="measurement">
              <h5 className="outputmeasurement">A KIDNEY BIOPSY</h5>
              <p>
                A kidney biopsy is done with a sample tissue extracted from the
                kidneys. One or more of kidney tissues are examined under
                special microscopes to know any fluctuations in the kidneys. A
                kidney biopsy is done in two ways:
              </p>
              <p>
                Percutaneous: A needle is inserted inside the skin layered over
                the kidney with the help of an ultrasound.
              </p>
              <p>
                Open biopsy: During surgery, a kidney sample is taken directly
                which is further sent to the doctors for evaluation. This is
                often done to know the signs of kidney damage.
              </p>
              <p>
                <b>A KIDNEY BIOPSY IS DONE TO CHECK FOR:</b>
              </p>
              <p>
                Blood in the urine
                <br />
                Blood tests signifying some kidney damage
                <br />
                Acute or chronic kidney disease
                <br />
                Nephrotic syndrome
                <br />
                Glomerular disease
                <br />
                A kidney tumor
                <br />
                If a certain treatment is not curing your kidney problem
                <br />
                Permanent damage to the kidneys
                <br />
                After a transplant to know if a transplanted kidney is working
                well or not
              </p>

              <p>
                <b>PREPARING FOR THE KIDNEY BIOPSY</b>
              </p>

              <p>
                Avoid aspirin, for two weeks before the biopsy. This also
                includes over the counter pain medicines, ibuprofen, and
                naproxen because they may cause blood thinning. These
                antibiotics can create blood clots and increase the risk of
                bleeding. Similarly, you should also avoid supplements such as
                multivitamins, fish oil, etc. Just like any other blood tests,
                do not eat or drink anything before the procedure.
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
