import React from "react";

import Polysystic_Kidney_diease from "../aboutus/asset/images/Polysystic_Kidney_diease.png";
import { Row, Col, Button } from "rsuite";
import Nephrotic_syndrome from "../aboutus/asset/images/Nephrotic_syndrome.png";
import { Link } from "react-router-dom";
import BookingSlots from "../Booking_slots/BookingSlots";
export default function PolycysticKidneyDisease() {
  return (
    <div>
      <div className="acutekidney">
        <Row className="acutekidneydisease">
          <Col md={1}></Col>
          <Col md={10} className="chronickidneydisease">
            <h2 className="acutkidydish">POLYCYSTIC KIDNEY DISEASE</h2>
            <img
              src={Polysystic_Kidney_diease}
              className="image-mobile"
              style={{ width: "100%" }}
              alt="Polysystic_Kidney_diease"
            />
            <p className="acutkidydisp">
              Polycystic kidney disease (PKD) is a genetic disorder in which
              multiple cysts develop in the kidneys. These cysts can enlarge and
              eventually cause kidney damage and, in some cases, kidney failure.
              There are two types of PKD - autosomal dominant PKD (ADPKD) and
              autosomal recessive PKD (ARPKD).
            </p>
            <Button className="acutekidneybtnsign">SIGN ME UP</Button>
          </Col>
          <Col md={12} className="image-desktop">
            <img
              src={Polysystic_Kidney_diease}
              style={{ width: "100%" }}
              alt="Polysystic_Kidney_diease"
            />
          </Col>
        </Row>
        <Row className="show-grid acutediseasetreatment">
          <Col md={1}></Col>
          <Col md={11} className="measurement">
            <h5 className="acutkidydishfive">POLYCYSTIC KIDNEY DISEASE</h5>
            <p>
              With polycystic kidney disease, the renal has cysts that are
              outgrowing. It is a hereditary disorder, and people who have it
              typically inherit the disordered genes of one or both of their
              parents. The development of cysts on the kidney’s outer surface
              causes the organ to grow larger and impairs renal function.
            </p>

            <p>
              Moreover, PKD promotes the growth of cysts on other organs like
              the liver and ovaries. High blood pressure and kidney failure are
              two symptoms of the disease that could ultimately endanger your
              life.
            </p>

            <p>
              Because it’s largely genetic, allopathic doctors only have means
              to control the side effects that develop along with it; they may
              not be able to fully treat it. Certainly, you can take drugs to
              reduce your pain (resulting because of stretching of the cysts).
              Yet, to fully recover from it, you would need a workable strategy,
              such as an Ayurvedic polycystic kidney disease treatment. Ayurveda
              can help avoid kidney damage, but so can making certain lifestyle
              adjustments and following some preventative measures.
            </p>

            <p>
              Cysts grow by 0.5 inches or more, depending on the situation.
              Changes in size are therefore considered to be the first PKD
              problem.
            </p>

            <h5 className="signacutekidney">
              WHAT ARE THE SIGN POLYCYSTIC KIDNEY DISEASE?
            </h5>
            <p>
              The following are the symptoms that indicate you may have PKD:
              elevated blood pressure Blood pressure that rises without apparent
              cause may indicate that your kidneys need to be repaired.
            </p>

            <p>
              Back or side pain: When you move or stretch your body, the pain
              develops. Headache: The body’s capacity to manufacture red blood
              cells may be reduced by the blood-filled cysts. Your abdomen has
              grown larger as a result of enlarged kidneys: The size of the
              kidneys increases when cysts are present.
            </p>

            <p>
              Urine with blood in it: When someone develops PKD, they experience
              hematuria. renal stones When PKD is present, the kidneys may
              develop stones. renal failure total impairment of kidney function
              infections of the kidneys or urinary tract: Kidney infections are
              caused by the toxic blood inside the cysts.
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={10}>
            <BookingSlots />
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row className="show-grid diagnosischronicdidease">
          <Col md={1}></Col>
          <Col md={11} className="measurement">
            <h5 className="acutkidydishfive">
              WHAT METHODS ARE THERE FOR DIAGNOSING KIDNEY CYSTS?
            </h5>
            <p>
              In order to diagnose PKD, medical professionals use genetic and
              imaging studies. To determine the type of PKD, he may also
              investigate the family history of kidney disease. The likelihood
              of a successful outcome from treatment is higher the earlier PKD
              is diagnosed.
            </p>
            <p>
              <b>imaging exams</b>
              <br />
              To determine the size of the kidney, photographs of the organs are
              obtained. The radiologist interprets the kidney image and
              determines whether you have the disease or not.
            </p>
            <p>
              <b>various imaging tests</b>
              <br />
              To visualise the kidney’s anatomy using ultrasound With computed
              tomography, the urinary tract can be seen. To obtain a thorough
              view of the internal organs and tissues connected with them, use
              magnetic resonance imaging. Genetic testing: A blood or saliva
              sample is used to check for gene alterations during genetic
              testing. Get your PKD test right away if you experience the
              symptom!
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
