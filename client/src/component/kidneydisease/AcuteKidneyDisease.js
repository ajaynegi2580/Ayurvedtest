import React from "react";
import About_us_para_image from "../aboutus/asset/images/About_us_para_image.png";

import Types_of_Kideny_diseases_2 from "../home/asset/images/Types_of_Kideny_diseases_2.png";
import { Row, Col, Button, List, Rate, Panel, Container } from "rsuite";
import BookingSlots from "../Booking_slots/BookingSlots";
import Acute_Kidney_Disese from "../aboutus/asset/images/Acute_Kidney_Disese.png";
import { Link } from "react-router-dom";
import "./asset/css/kidneydisease.css";
export default function AcuteKidneyDisease() {
  return (
    <div>
      <div className="acutekidney">
        <Row className="acutekidneydisease">
          <Col md={1}></Col>

          <Col md={8}>
            <h2 className="acutkidydish">ACUTE KIDNEY DISEASE</h2>
            <img
              src={Acute_Kidney_Disese}
              style={{ width: "100%" }}
              className="image-mobile"
              alt="Acute_Kidney_Disese"
            />
            <p className="acutkidydisp">
              Acute kidney disease, also known as acute kidney injury (AKI), is
              a sudden and often reversible loss of kidney function that can
              occur within hours or days. It is a serious condition that
              requires prompt medical attention. Some of the common causes of
              acute kidney disease include dehydration, infections, medication
              side effects, kidney stones, and urinary tract obstructions.
            </p>

            <Button className="acutekidneybtnsign">SIGN ME UP</Button>
          </Col>
          <Col md={14} className="image-desktop">
            <img
              src={Acute_Kidney_Disese}
              style={{ width: "100%" }}
              alt="Acute_Kidney_Disease"
            />
          </Col>
        </Row>
        <Row className="show-grid acutekidneylastdiv">
          <Col md={1}></Col>
          <Col md={11} className="measurement">
            <h5 className="signacutekidney">ACUTE KIDNEY DISEASE: TREATMENT</h5>
            <p>
              Acute Kidney Failure, often known as AKD, is a disorder that can
              strike suddenly and cause unexpected damage to the kidneys. The
              primary function of the kidneys is to eliminate excess salts,
              fluid, and waste materials created by internal chemical processes.
              Acute kidney disease causes dangerous levels of bodily fluid to
              build up and an imbalance in the electrolyte levels, which can
              endanger a person’s life.
            </p>

            <p>
              Acute renal illness can occasionally be prevalent in patients
              already being treated in a hospital. It just takes a few days to a
              few weeks for the situation to become dangerous, therefore
              choosing the proper course of therapy is essential if you want to
              recover possibly quickly.
            </p>

            <h5 className="signacutekidney">
              WHAT ARE THE SIGN AND SYMPTOMS OF ACUTE KIDNEY DISEASE?
            </h5>
            <p>
              These are a few indicators that, although you might not notice
              them right away, can let you know if your kidney function is poor
              or accurate.
            </p>

            <p>Yet, these warning indicators could be useful to you:</p>

            <p>
              Insufficient urination: Your urinary process is the first item to
              be affected when kidney function changes. You could get frothy
              urine because of the protein because the kidneys’ filters become
              compromised. Dizziness: When kidney function deteriorates, you
              experience fatigue and a puckish feeling. Swelling: Fluffiness may
              also be an indication that fluid is beginning to accumulate in
              cells and tissues rather than be eliminated.
            </p>
            <p>
              Alteration in psychological state: This occurs as a result of the
              anaemia condition, which, especially in older persons, causes
              confusion in the mind and makes you wonder with poor memory.
            </p>
            <p>
              Malnutrition: When kidney function declines, the body may feel
              unable to digest food, and some people experience inadequate
              levels of hunger. Malnutrition therefore happens when your body’s
              needs are not supplied. High blood pressure: Kidney disease has
              high blood pressure as both a symptom and a primary cause. Blood
              struggles to transform waste and flows under such pressure as it
              builds up in the bloodstream.
            </p>
            <p>
              Chest discomfort: Chest pain can happen when waste accumulates at
              the heart and lung linings.
            </p>

            <p>
              You could go into a coma or have a seizure if you have severe
              acute renal illness. If you observe any such symptoms, get in
              touch with your doctor right once.
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={10}>
            <BookingSlots />
          </Col>
          <Col md={1}></Col>
        </Row>

        <Row className="acutekidneydiv">
          <Col md={1}></Col>
          <Col md={11} className="measurement">
            <h5 className="signacutekidney">
              DIAGNOSIS OF ACUTE KIDNEY DISEASE
            </h5>
            <p>
              If you have acute renal disease, fluid retention may cause
              widespread swelling to appear. The doctor may perform physical
              examinations with a stethoscope in addition to some kidney
              function tests to listen for any crackling in the lungs. These
              noises can be used to detect trash at the lungs’ linings.
            </p>
            <h5 className="signacutekidney">
              PREVENTION OF ACUTE KIDNEY FAILURE
            </h5>
            <p>
              If you have acute renal disease, fluid retention may cause
              widespread swelling to appear. The doctor may perform physical
              examinations with a stethoscope in addition to some kidney
              function tests to listen for any crackling in the lungs. These
              noises can be used to detect trash at the lungs’ linings.
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={10}>
            <div className="openighour">
              <img
                src={Types_of_Kideny_diseases_2}
                style={{ width: "70%" }}
                alt="Chronic Kidney Disease"
              />
              <h5>Chronic Kidney Disease</h5>
              <p style={{ padding: "0px 10px" }}>
                Chronic kidney disease, in contrast to AKD, involves a steady
                decline in kidney function. Because the symptoms are not
                immediately obvious, many patients do not realise they have CKD.
                On the rare chance that it is discovered, over half of them are
                unable to receive a workable course of treatment.
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
