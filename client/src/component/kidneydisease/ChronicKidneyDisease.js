import React from "react";

import Polysystic_Kidney_diease from "../aboutus/asset/images/Polysystic_Kidney_diease.png";
import { Row, Col, Button, List, Rate, Panel, Container } from "rsuite";
import BookingSlots from "../Booking_slots/BookingSlots";
import Chronic_Kidney_Disease from "../aboutus/asset/images/Chronic_Kidney_Disease.png";
import { Link } from "react-router-dom";
export default function ChronicKidneyDisease() {
  return (
    <div>
      <div className="acutekidney">
        <Row className="acutekidneydisease">
          <Col md={1}></Col>
          <Col md={10} className="chronickidneydisease">
            <h2 className="acutkidydish">CHRONIC KIDNEY DISEASE</h2>
            <img
              src={Chronic_Kidney_Disease}
              style={{ width: "100%" }}
              className="image-mobile"
              alt="Chronic_Kidney_Disease"
            />
            <p className="acutkidydisp">
              Chronic kidney disease (CKD) is a long-term condition in which the
              kidneys gradually lose their ability to function properly. It is a
              progressive condition that can lead to kidney failure if left
              untreated. Some of the common causes of CKD include diabetes, high
              blood pressure, and genetic factors.
            </p>
            <Button className="acutekidneybtnsign">SIGN ME UP</Button>
          </Col>
          <Col md={12} className="image-desktop">
            <img
              src={Chronic_Kidney_Disease}
              style={{ width: "100%" }}
              alt="Chronic_Kidney_Disease"
            />
          </Col>
        </Row>
        <Row className="show-grid acutediseasetreatment">
          <Col md={1}></Col>
          <Col md={11} className="measurement">
            <h5 className="acutkidydishfive">
              ACUTE KIDNEY DISEASE: TREATMENT
            </h5>
            <p>
              The kidneys’ ability to function is deteriorating day by day in
              patients with chronic renal disease. The term “chronic renal
              disease” refers to kidney impairment that continues over time and
              could be dangerous to your health. In severe cases of injury, the
              kidneys will finally quit functioning. End-stage renal disease is
              recognised as this stage.
            </p>

            <p>
              The urine produced by the kidneys is intended to filter waste and
              toxic elements from the body. Any health problem that impairs
              kidney function can happen by chance; the kidneys struggle to
              perform to their full potential.
            </p>

            <p>
              Think of the blood as a collection of waste products from various
              chemical activities. You wouldn’t feel ill at that time, right? Of
              course you would! When CKD prevents you from maintaining a healthy
              lifestyle, you must rely on an effective strategy like Ayurveda to
              keep you alive.
            </p>

            <h5 className="signacutekidney">
              WHAT ARE THE SIGN AND SYMPTOMS OF CHRONIC KIDNEY DISEASE?
            </h5>
            <p>
              It is arduous enough for a person to be conscious of decreased
              kidney function. They can still perform a blood purification
              procedure when they are slightly injured, although not to the same
              extent. This explains why some people put off seeking treatment
              for chronic renal disease for years.
            </p>

            <p>
              The indicators should still be recognised, and you should screen
              yourself at least once a year. The likelihood of benefiting from
              early therapy increases with earlier diagnosis of chronic renal
              disease.
            </p>

            <p>
              The following warning indications should not be ignored or
              disregarded:
            </p>
            <p>
              Urination changes: This also involves urinating more frequently at
              night and having more or less blood in the urine.
            </p>
            <p>
              drained body Compared to other healthy people, you typically feel
              lethargic and short on energy. Body itch: Itching may result from
              the kidneys’ diminished capacity to absorb liquids. Shortness of
              breath: Low RBC production may cause the body to receive less
              oxygen, which will cause panting. back discomfort time you move,
              there is excruciating pain in or near the kidneys. High blood
              pressure: Fluid retention causes the blood flow against the
              circulation to increase. lack of appetite You might not feel
              hungry, or even if you do, the food might taste metallic. Foot or
              hand swelling: Edema and puffiness around the eyes are caused by
              fluid retention in the cells and tissues.
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
            <h5 className="signacutekidney">
              DIAGNOSIS OF CHRONIC KIDNEY DISEASE
            </h5>
            <p>
              Learn the tests to diagnose kidney health
              <br /> Estimated Glomerular Rate: To know how well your kidneys
              are cleaning the blood. Urine tests: To evaluate the signs of the
              protein in the urine Blood Pressure: To check if your blood
              pressure is healthy or not Serum Creatinine: The test tells
              whether there is creatinine in the blood Blood Urea Nitrogen: It
              checks for the waste product in the blood If you find similar
              signs in the body, talk to your doctor and get it diagnosed!
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={10}>
            <div className="openighour">
              <img
                src={Polysystic_Kidney_diease}
                style={{ width: "70%" }}
                alt="Chronic Kidney Disease"
              />
              <h5>Polysystic_Kidney_diease</h5>
              <p style={{ padding: "0px 10px" }}>
                Although somewhat inherited, it is a different kind of kidney
                illness. Comprehend that PKD accounts for roughly 2% of kidney
                failure. Although it is a prevalent misconception that PKD is
                entirely genetic, the disorder can occasionally be
                non-hereditary.
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
