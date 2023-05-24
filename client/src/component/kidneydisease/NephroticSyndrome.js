import React from "react";

import { Row, Col, Button } from "rsuite";
import Nephrotic_syndrome from "../aboutus/asset/images/Nephrotic_syndrome.png";
import { Link } from "react-router-dom";
import BookingSlots from "../Booking_slots/BookingSlots";
export default function NephroticSyndrome() {
  return (
    <div>
      <div className="acutekidney">
        <Row className="acutekidneydisease">
          <Col md={1}></Col>
          <Col md={9} className="chronickidneydisease">
            <h2 className="acutkidydish">NEPHROTIC SYNDROME</h2>
            <img
              src={Nephrotic_syndrome}
              className="image-mobile"
              style={{ width: "100%" }}
              alt="Nephrotic_syndrome"
            />
            <p className="acutkidydisp">
              Nephrotic syndrome is a condition in which there is damage to the
              small blood vessels in the kidneys, causing the kidneys to leak
              large amounts of protein into the urine. This results in low
              levels of protein in the blood and fluid accumulation in the body,
              leading to symptoms such as swelling in the legs, feet, and
              abdomen.
            </p>
            <Button className="acutekidneybtnsign">SIGN ME UP</Button>
          </Col>
          <Col md={13} className="image-desktop">
            <img
              src={Nephrotic_syndrome}
              style={{ width: "100%" }}
              alt="Nephrotic_syndrome"
            />
          </Col>
        </Row>
        <Row className="show-grid acutekidneylastdiv">
          <Col md={1}></Col>
          <Col md={11} className="measurement">
            <h5 className="acutkidydishfive">NEPHROTIC SYNDROME</h5>
            <p>
              Nephrotic syndrome is a collection of symptoms that point to
              kidney disease, damage to the kidneys’ filters where the blood is
              filtered, and excessive protein excretion from the body rather
              than being a disease in and of itself.
            </p>

            <p>
              The kidneys’ tiny blood channels are always removing waste and
              other chemicals from the blood. The filtered waste is then moved
              to your bladder, where it eventually leaves your body as urine.
              These kidney tubes, called glomeruli, help keep vital nutrients in
              the blood and eliminate waste products from digestion. The body
              can no longer retain protein when the kidneys are impaired. The
              term for this is nephrotic syndrome.
            </p>

            <p>
              The following conditions also characterise the nephrotic syndrome
              in addition to protein excretion:
            </p>

            <p>
              Decreased protein levels in the blood
              <br /> Blood fat and cholesterol levels that are excessive
              <br /> your hands, feet, ankles, or legs edema
            </p>
            <h5 className="nephroticsyndfive">
              WHO IS SUSCEPTIBLE TO NEPHROTIC SYNDROME?
            </h5>
            <p>
              There is no reason to suspect that any individual may develop
              nephrotic syndrome, however more men than women present with the
              condition. Typically, children between the ages of 2 and 6
              experience this.
            </p>

            <p>
              The following additional criteria or risk factors can raise your
              likelihood of developing nephrotic syndrome:
              <br />
              The condition that can cause the tissues surrounding the kidneys
              to become scarred, such as focal segment glomerulosclerosis. The
              glomeruli gradually swell up and scar in this syndrome.
            </p>

            <p>
              Nonsteroidal anti-inflammatory drugs (NSAIDs) and analgesics are
              two pharmaceuticals that might cause kidney function to decline.
              The chemicals and salts that are found in them are difficult for
              sick people to eliminate because the kidneys are required to
              remove this waste.
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
              WHAT SIGNS INDICATE NEPHROTIC SYNDROME?
            </h5>

            <p>
              The four primary symptoms of nephrotic syndrome are as follows:
              <br />
              Proteinuria, a condition associated with nephrotic syndrome,
              causes foamy urine. Albumin is a protein that leaves the blood
              during proteinuria.
              <br />
              Edema: As waste builds up in cells and tissues, it causes a
              condition known as swelling of the ankles, face, and feet.
              <br />
              Hypoalbuminemia is a condition where the blood’s albumin level
              drops too low.
              <br />
              If you believe you may be exhibiting nephrotic syndrome symptoms,
              schedule an appointment with your doctor.
            </p>
            <h5 className="signacutekidney">NEPHROTIC SYNDROME TREATMENTS</h5>
            <p>
              Using allopathy is the greatest technique to relieve the symptoms
              of nephrotic syndrome. But, Nephrotic syndrome Ayurveda treatment
              is the best option if you want to address the underlying causes of
              the condition. In addition, you can take some preventative steps
              to stop the nephrotic syndrome from developing into renal failure.
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={10}>
            <div className="openighour">
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
