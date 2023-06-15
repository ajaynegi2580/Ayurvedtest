import React from "react";
import { Row, Col, Button } from "rsuite";
import Nephrotic_syndrome from "../aboutus/asset/images/Nephrotic_syndrome.png";
import Cretenine from "../aboutus/asset/images/Cretenine.png";
import { Link } from "react-router-dom";
import BookingSlots from "../Booking_slots/BookingSlots";
export default function Creatinine(props) {
  return (
    <div>
      <div className="acutekidney">
        <Row className="acutekidneydisease">
          <Col md={1}></Col>
          <Col md={10} className="chronickidneydisease">
            <h2 className="acutkidydish">CREATININE</h2>
            <img
              src={Cretenine}
              className="image-mobile"
              style={{ width: "100%" }}
              alt="Cretenine"
            />
            <p className="acutkidydisp">
              Creatinine is a waste product that is produced by the muscles
              during normal metabolism and is excreted by the kidneys.
              Creatinine levels in the blood are used as a measure of kidney
              function, as the kidneys are responsible for removing creatinine
              from the body.
            </p>
            <Button className="acutekidneybtnsign">SIGN ME UP</Button>
          </Col>
          <Col md={13} className="image-desktop">
            <img src={Cretenine} style={{ width: "100%" }} alt="Cretenine" />
          </Col>
        </Row>
        <Row className="show-grid acutediseasetreatment">
          <Col md={1}></Col>
          <Col md={11} className="measurement">
            <h5 className="signacutekidney">CREATININE</h5>
            <p>
              The regular physical activity that our muscles perform produces
              creatinine, a chemical waste that is detected in the blood. Your
              body will manufacture more creatinine the more muscle mass you
              have. The blood creatinine levels show how often your kidneys are
              excreting this chemical waste. It is your kidneys’ job to filter
              creatinine because it is a waste that is found in the blood.
              Whereas the typical creatinine range for healthy women is 0.5 to
              1.1 mg/dL, the range for most males with healthy renal function is
              between 0.6 and 1.2 mg/dL. Because women have less muscle mass
              than men, there is a variance in the ranges. You are well aware of
              the fact that clean blood is necessary for the body to function to
              its fullest potential. Blood with a high creatinine and other
              waste content puts the body at risk for deadly illnesses like
              uraemia. For those who desire to use Ayurveda to rid their bodies
              of poisonous chemicals, ayurvedic treatment for creatinine is the
              finest option.
            </p>
            <h5 className="signacutekidney">
              CREATININE AND CHRONIC KIDNEY DISEASE
            </h5>
            <p>
              The liver creates a byproduct called creatine when you consume
              protein. The blood then transports this to the muscles, where it
              is converted to energy. The muscles use the required amount of
              creatine to produce energy, and the remaining amount is converted
              to creatinine waste.
            </p>
            <p>
              The kidneys are responsible for removing creatinine along with the
              waste products from the body through the urine. Any kidney disease
              or damage makes it difficult for the kidneys to carry out the
              elimination process, which causes the waste level to increase.
            </p>
            <p>
              When a patient has a high creatinine level, many clinicians
              recommend dialysis. Whether you require kidney therapy or not
              depends on a number of factors, one of which is this.
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
              WHEN SHOULD YOU GET YOUR CREATININE LEVELS CHECKED?
            </h5>
            <p>
              Tests for creatinine are performed using both blood and urine
              samples because it can be present in both. These tests can also be
              used to determine your kidneys’ other functional parameters. To
              determine how much creatinine is in the bloodstream, serum
              creatinine testing is done. When serum creatinine is measured,
              your doctor can determine the creatinine level depending on your
              age and gender from which to calculate your glomerular filtration
              rate.
            </p>
            <p>
              The doctor can determine your stage of chronic renal disease if
              serum creatinine is provided. The ability of the kidneys to
              function is measured by creatinine clearance. It functions
              according to how much creatinine is eliminated from the body over
              time. Urine is collected over the course of 24 hours, and after
              measuring serum creatinine and glomerular filtration rate, the
              creatinine clearance is assessed.
            </p>

            <p>Knowing how to interpret abnormal creatinine test results</p>

            <p>
              Your kidneys are ill if you have a low glomerular filtration rate
              or low levels of creatinine clearance. It is possible for kidney
              injury to be either acute or chronic. Hence, to detect the
              presence of renal illness, be careful to undergo numerous tests
              throughout time.
            </p>

            <p>
              People lose 30 to 40% of their kidney function without
              experiencing any serious health problems in many situations, such
              as ageing. Based on the stage of chronic renal disease, doctors
              determine the severity of your kidney disease. Based on the GFR,
              the stages have been separated into the following:
            </p>

            <p>
              Stage 1: Your kidney function is normal if your GFR is greater
              than 90.
            </p>
            <p>
              Stage 2: GFR readings between 60 and 89 suggest minor renal
              impairment.
            </p>
            <p>
              Stage 3: With a GFR between 30 and 59, the third stage causes the
              mild renal damage.
            </p>
            <p>
              Stage 4: The fourth stage, which is severe, is brought on by a GFR
              between 15 and 29.
            </p>
            <p>
              Stage 5: At this point, therapy for renal failure is necessary.
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
              <h5 className="signacutekidney">Nephrotic Syndrome</h5>
              <p style={{ padding: "0px 10px" }}>
                Similar to proteinuria, nephrotic syndrome causes protein to
                leak from the blood. Men are more likely than women to get
                Nephrotic Syndrome, which is characterised by renal
                dysfunction. This kidney condition most frequently affects
                youngsters between the ages of 2 and 6.
              </p>
              <Link to="/kidneydisease/nephroticsyndrome">
                <p className="bookapoin">
                  <Button
                    color="green"
                    appearance="primary"
                    className="openighourbtn"
                  >
                    KNOW MORE
                  </Button>
                </p>
              </Link>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    </div>
  );
}
