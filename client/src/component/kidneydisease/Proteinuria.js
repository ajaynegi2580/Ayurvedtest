import React from "react";

import { Row, Col, Button } from "rsuite";
import Nephrotic_syndrome from "../aboutus/asset/images/Nephrotic_syndrome.png";

import Proteinuriaimg from "../aboutus/asset/images/Proteinuria.png";
import { Link } from "react-router-dom";
import BookingSlots from "../Booking_slots/BookingSlots";
export default function Proteinuria() {
  return (
    <div>
      <div className="acutekidney">
        <Row className="acutekidneydisease">
          <Col md={1}></Col>
          <Col md={10} className="chronickidneydisease">
            <h2 className="acutkidydish">PROTEINURIA</h2>
            <img
              src={Proteinuriaimg}
              className="image-mobile"
              style={{ width: "100%" }}
              alt="Proteinuriaimg"
            />
            <p className="acutkidydisp">
              Proteinuria is a medical condition in which there is an abnormal
              amount of protein in the urine. Normally, only a small amount of
              protein is present in the urine, but when the kidneys are not
              functioning properly, excess protein can leak into the urine.
            </p>
            <Button className="acutekidneybtnsign">SIGN ME UP</Button>
          </Col>
          <Col md={12} className="image-desktop">
            <img
              src={Proteinuriaimg}
              style={{ width: "100%" }}
              alt="Proteinuriaimg"
            />
          </Col>
        </Row>
        <Row className="show-grid acutekidneylastdiv">
          <Col md={1}></Col>
          <Col md={11} className="measurement">
            <h5 className="signacutekidney">PROTEINURIA</h5>
            <p>
              Whenever people urinate immediately after waking up in the
              morning, most persons detect bubbles in the urine. While though
              discernible foamy urine typically indicates a kidney disease, it
              can occasionally be an indication of the body producing too many
              proteins. Proteinuria patients’ urine may include an excessive
              amount of protein, giving it the appearance of scrambled eggs.
            </p>

            <p>
              If your kidneys aren’t healthy, they might not let you vent that
              much, barring any extremely unusual circumstances. However, the
              proper strategy for treating proteinuria, such as proteinuria
              ayurveda treatment, can help stop this illness from progressing
              into the latter stages of CKD.
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={10}>
            <BookingSlots />
          </Col>
          <Col md={1}></Col>
        </Row>

        <Row className="diagnosischronicdidease">
          <Col md={1}></Col>
          <Col md={11} className="measurement">
            <h5 className="creatininecronic">
              VARIOUS PROTEIN'S WHICH IS ASSOCIATED WITH PROTEINURIA?
            </h5>
            <p>
              Our blood conOur blood contains a variety of proteins that are
              necessary for our health, but albumin and globulins are the two
              main types. Blood contains large amounts of albumin, which makes
              up close to 50% of all serum proteins. Like other proteins, its
              job is not confined to maintaining the health of the muscles; in
              fact, they support the body’s other regulatory processes. They may
              consist of:
            </p>

            <p>
              maintaining the proper fluid and electrolyte balance in the
              vascular system playing the role of a transport agent preventing
              the body’s enlargement It is preferable for you if your urine
              contains less albumin.
            </p>

            <p>Why is it vital to measure urine albumin?</p>

            <p>
              Urinary albumin measurement is a crucial knowledge to have:tains a
              variety of proteins that are necessary for our health, but albumin
              and globulins are the two main types. Blood contains large amounts
              of albumin, which makes up close to 50% of all serum proteins.
              Like other proteins, its job is not confined to maintaining the
              health of the muscles; in fact, they support the body’s other
              regulatory processes. They may consist of:
            </p>

            <p>
              maintaining the proper fluid and electrolyte balance in the
              vascular system playing the role of a transport agent preventing
              the body’s enlargement It is preferable for you if your urine
              contains less albumin.
            </p>

            <p>Why is it vital to measure urine albumin?</p>

            <p>Urinary albumin measurement is a crucial knowledge to have:</p>

            <p>
              Having renal disease To track the development of any kidney
              condition
            </p>

            <p>
              Proteinuria testing is typically done routinely by medical
              professionals to determine how well a patient’s kidneys are
              functioning. A urine albumin level that remains constant or
              decreases over the course of a few tests indicates that the
              medication is having an effect. The chance of developing renal
              disease in its advanced stages may be reduced by the treatment to
              lower urine albumin.
            </p>

            <p>
              How frequently you should have it tested should be discussed with
              your healthcare professional.
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={10}>
            <div className="openighour nephroticsyndromepart">
              <img
                src={Nephrotic_syndrome}
                style={{ width: "70%" }}
                alt="Chronic Kidney Disease"
              />
              <h5>Nephrotic Syndrome</h5>
              <p style={{ padding: "0px 10px" }}>
                Similar to proteinuria, nephrotic syndrome causes protein to
                leak from the blood. Men are more likely than women to get
                Nephrotic Syndrome, which is characterised by renal
                dysfunction. This kidney condition most frequently affects
                youngsters between the ages of 2 and 6.
              </p>
              <p className="bookapoin">
                <Button
                  color="green"
                  appearance="primary"
                  className="openighourbtn"
                >
                  KNOW MORE
                </Button>
              </p>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    </div>
  );
}
