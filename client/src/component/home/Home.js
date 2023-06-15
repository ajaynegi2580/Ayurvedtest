import React, {
  useState,
  useEffect,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";
import "./asset/css/Home.css";
import { ner, Row, Col, Button, Panel, Rate, Container } from "rsuite";
import { Link } from "react-router-dom";
import "./asset/css/Home.css";
import logo from "./asset/images/Logo.png";
import Herobanener from "./asset/images/Hero_Banner_image.png";
import About_Us_image from "./asset/images/About_Us_image.png";
import About_Us_icon_1 from "./asset/images/About_Us_icon_1.png";
import About_Us_icon_2 from "./asset/images/About_Us_icon_2.png";
import About_Us_icon_3 from "./asset/images/About_Us_icon_3.png";
import Science_of_Ayurveda from "./asset/images/Science_of_Ayurveda_Image.png";
import Science_of_Ayurveda_mobimg from "./asset/images/Science_of_Ayurveda_mobimg.png";
import Why_choose_us_1 from "./asset/images/Why_choose_us_1.png";
import Why_choose_us_2 from "./asset/images/Why_choose_us_2.png";
import Why_choose_us_3 from "./asset/images/Why_choose_us_3.png";
import Types_of_Kideny_diseases_1 from "./asset/images/Types_of_Kideny_diseases_1.png";
import Types_of_Kideny_diseases_2 from "./asset/images/Types_of_Kideny_diseases_2.png";
import Types_of_Kideny_diseases_3 from "./asset/images/Types_of_Kideny_diseases_3.png";
import Types_of_Kideny_diseases_4 from "./asset/images/Types_of_Kideny_diseases_4.png";
import Types_of_Kideny_diseases_5 from "./asset/images/Types_of_Kideny_diseases_5.png";
import Types_of_Kideny_diseases_6 from "./asset/images/Types_of_Kideny_diseases_6.png";
import MDT_1 from "./asset/images/MDT_1.png";
import MDT_2 from "./asset/images/MDT_2.png";
import MDT_3 from "./asset/images/MDT_3.png";
import MDT_4 from "./asset/images/MDT_4.png";
import MDT_5 from "./asset/images/MDT_5.png";
import MDT_6 from "./asset/images/MDT_6.png";
import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";
import PageEndIcon from "@rsuite/icons/PageEnd";
import CountDown from "./CountDown";
import BookingSlots from "../Booking_slots/BookingSlots";

const reviews = [
  {
    rating: 4,
    text: "Thanks to SMB Solutions' Ayurveda website, I found effective treatments for my kidney disease. Their expertise and personalized approach improved my kidney function and overall health. Highly recommended.",
  },

  {
    rating: 4,
    text: "SMB Solutions' Ayurveda website provided invaluable insights and treatments for my kidney disease. Their expertise halted the progression of my condition and improved my well-being. Trustworthy and reliable.",
  },
  {
    rating: 5,
    text: "Grateful to SMB Solutions' Ayurveda website for their expertise in managing kidney diseases. Their treatments reduced symptoms and offered hope for a better future. Highly recommendeda.",
  },
  {
    rating: 4,
    text: "SMB Solutions' Ayurveda website guided me in managing Creatinine and Proteinuria. Their practical advice and treatments made a noticeable difference in my kidney health. Thank you.",
  },
  {
    rating: 5,
    text: "I found reliable solutions for my kidney disease on SMB Solutions' Ayurveda website. Their expertise and holistic approach improved my condition and quality of life. Thank you, SMB Solutions.",
  },
];

export default function Home({ target, jump }) {
  const [showComponent, setShowComponent] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };
  const handleClick = () => {
    setShowComponent(true);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const dotControlNav = (index) => {
    setCurrentIndex(Number(index));
  };

  return (
    <div>
      <Container>
        <Row className="show-grid naturalslutionforkidney">
          <Col sm={24} md={10} className="nature">
            <h2 className="naturalslution">
              A NATURAL SOLUTION FOR YOUR KIDNEY
            </h2>
            <h6 className="naturalslutionfree">
              GO DIALYSIS FREE IN 3 MONTHS*
            </h6>
            <p>
              *Patients with additional ailments might take longer time than 3
              months to go dialysis free.
            </p>
            <p>
              The 1ayurveda Kidney Care Center is dedicated to combining
              Ayurveda medical practises with cutting-edge medical treatment.
              Together with offering a customised herbal treatment plan based on
              each patient's degree of kidney illness, we also aim to restore
              each person's health and give them a fresh start in life.
            </p>

            <Button
              color="green"
              appearance="primary"
              className="bookappoinbtn"
              onClick={() => jump("bookslots", "/about")}
            >
              <b>Book An Appointment</b>
            </Button>

            {showComponent && <BookingSlots />}
          </Col>
          <Col sm={24} md={14}>
            <img
              src={Herobanener}
              alt="Herobanener"
              className="natsolforkid"
            ></img>
          </Col>
        </Row>

        <h3 className="homeaboutus" id="about">
          ABOUT US
        </h3>
        <Row className="show-grid aboutusayurveda">
          <Col sm={24} md={10} className="nature">
            <p>
              We are a leading Ayurvedic kidney care hospital, led by Doctor
              Deepak Dhankar, with over two decades of experience in treating
              kidney-related disorders. At 1Ayurveda Hospital, we believe in the
              therapeutic effects of Ayurvedic herbs and strive to bring the
              benefits of natural healing to our patients. We are proud to say
              that our success is measured by the positive outcomes and feedback
              of our patients.
            </p>

            <p>
              Our commitment to excellence is reflected in our ability to
              provide patients with complete assurance of a breakdown of
              dialysis or organ transplant. This is a testament to the
              effectiveness of our Ayurvedic treatments and the personalized
              care we provide to each patient. We believe in addressing the root
              cause of the patient's condition and providing a holistic approach
              to healthcare that promotes long-term health and wellness.
            </p>

            <Row className="suitablecomb">
              <Col sm={4} md={4} xs={8}>
                <img
                  src={About_Us_icon_1}
                  alt="About_Us_icon_1"
                  style={{ width: "70%" }}
                />
              </Col>
              <Col md={20} sm={20} xs={16}>
                A suitable combination and strength of medicine is prescribed
                for each patient only after a full and complete medical report
                history is taken (this includes most recent doctor reports and
                tests) and assessed by our physicians.
              </Col>
            </Row>

            <Row className="suitablecomb">
              <Col md={4} sm={4} xs={8}>
                <img
                  src={About_Us_icon_2}
                  alt="About_Us_icon_2"
                  style={{ width: "70%" }}
                />
              </Col>
              <Col md={20} sm={20} xs={16}>
                1ayurveda Kidney Care Centre is committed to Ayurvedic medical
                principles in partnership with modern medical care. We provide
                an herbal system of treatment uniquely tailored to a patient’s
                level of kidney disease.
              </Col>
            </Row>
            <Row className="suitablecomb">
              <Col md={4} sm={4} xs={8}>
                <img
                  src={About_Us_icon_3}
                  alt="About_Us_icon_3"
                  style={{ width: "55%" }}
                />
              </Col>
              <Col md={20} sm={20} xs={16}>
                Based on the idea that disease is due to an imbalance or stress
                in a person's consciousness, 1Ayurveda encourages certain
                lifestyle interventions and natural therapies to regain a
                balance between the body, mind, spirit, and the environment.
              </Col>
            </Row>
            <Button appearance="ghost" className="knowmorebtn">
              KNOW MORE
            </Button>
          </Col>
          <Col xs={24} sm={24} md={12} className="aboutusimg">
            <img
              src={About_Us_image}
              style={{ width: "100%" }}
              alt="About_Us_image"
            />
          </Col>
        </Row>
        <h3 className="homeaboutus" id="science">
          SCIENCE OF AYURVEDA
        </h3>
        <Row>
          <Col md={4}></Col>
          <Col md={16}>
            <p>
              <i>
                “The term Āyurveda (Sanskrit: आयुर्वेद) is composed of āyus,
                आयुस्, “life” or “longevity”, and veda, र्वेद, “knowledge”,
                translated as “knowledge of longevity” or “knowledge of life and
                longevity”.
              </i>
              .
            </p>

            <p>
              The science behind yoga and Ayurveda is more nuanced than the
              science behind medicine because the latter is frequently the
              target of statistical manipulation. We must acquire a few
              abilities to assist in purging our tissues, organs, and minds
              because we are unable to scrub our inner bodies. The art of
              Ayurveda is this
            </p>
            <p>
              <i>
                The wonderful thing about Ayurveda is that its treatments always
                yield side benefits, not side effects
              </i>
              .
            </p>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row className="show-grid">
          <Col md={24} sm={24}>
            <img
              src={Science_of_Ayurveda}
              style={{ width: "100%" }}
              className="science_ayurveda_img"
            />
            <img
              src={Science_of_Ayurveda_mobimg}
              style={{ width: "100%" }}
              className="science_ayurveda_imgmob"
              alt="Science_of_Ayurveda_mobimg"
            />
          </Col>
        </Row>
        <h3 className="homeaboutus" id="choose">
          WHY CHOOSE US?
        </h3>
        <Row>
          <Col md={4}></Col>
          <Col md={16}>
            <p>
              Over the years, through our innovations, we have developed unique
              products for complete wellbeing which led to enormous happiness
              and satisfaction for our valued customers.
            </p>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row className="show-grid bodytreatment">
          <Col md={7} sm={12}>
            <img
              src={Why_choose_us_1}
              className="bodytreatmentimg"
              alt="Why_choose_us_1"
            />
            <h6>AYURVEDA</h6>
          </Col>
          <Col md={1} sm={0}></Col>
          <Col md={7} sm={12}>
            <img
              src={Why_choose_us_2}
              className="bodytreatmentimg"
              alt="Why_choose_us_2"
            />
            <h6>YOGA AS PER PATIENT</h6>
          </Col>
          <Col md={1} sm={0}></Col>
          <Col md={7} sm={12}>
            <img
              src={Why_choose_us_3}
              className="bodytreatmentimg"
              alt="Why_choose_us_3"
            />
            <h6>AYURVEDIC DIET TREATMENT</h6>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={2} xs={0} sm={0} style={{ padding: 0 }}></Col>
          <Col xs={12} sm={12} md={5}>
            <div className="Gaugefirstdiv">
              <CountDown CountDownnum={80} />%
            </div>
          </Col>
          <Col xs={12} sm={12} md={5}>
            <div className="Gaugefirstdiv">
              <CountDown CountDownnum={90} />%
            </div>
          </Col>
          <Col xs={12} sm={12} md={5}>
            <div className="Gaugefirstdiv">
              <CountDown CountDownnum={75} />%
            </div>
          </Col>
          <Col xs={12} sm={12} md={5}>
            <div className="Gaugefirstdiv">
              <CountDown CountDownnum={95} />%
            </div>
          </Col>
          <Col md={2} xs={0} sm={0} style={{ padding: 0 }}></Col>
        </Row>
        <h3 className="homeaboutus" id="diagnostic">
          MAJOR DIAGNOSTIC TEST
        </h3>
        <p>
          The tests required to determine if your kidneys are healthy and
          functioning normally or whether they require therapy are provided.
          Before contacting us, kindly have these needed reports ready.
        </p>
        <Row className="show-grid">
          <Col md={8} sm={12} xs={24}>
            <div className="mdt">
              <img src={MDT_1} style={{ width: "25%" }} alt="MDT_1" />
              <div className="diagnostic_test">Urine Output Measurements</div>
              <div className="mdt_para">
                The amount of urine produced is a crucial component of
                kidney-related diseases being detected by key diagnostic tests.
                The UO can assess kidney health without analysing blood results.
                Urine production that is too high or low is an indication of
                kidney disease. Healthy individuals typically produce 1-2
                ml/kg/hr of urine every hour.
              </div>
              <div className="Read-more">
                <Link to="/aboutus/urineoutputmeasurements">
                  Read more
                  <PageEndIcon />
                </Link>
              </div>
            </div>
          </Col>

          <Col md={8} sm={12} xs={24}>
            <div className="mdt">
              <img src={MDT_2} style={{ width: "25%" }} alt="MDT_2" />
              <div className="diagnostic_test">A kidney Biopsy</div>
              <div className="mdt_para">
                A sample of kidney tissue is removed in order to perform a
                kidney biopsy. With specialised microscopes, one or more kidney
                tissues are examined to detect any changes in the kidneys.
              </div>
              <div className="Read-more">
                <Link to="/aboutus/kidneybiopsy">
                  Read more
                  <PageEndIcon />
                </Link>
              </div>
            </div>
          </Col>

          <Col md={8} sm={12} xs={24}>
            <div className="mdt">
              <img src={MDT_3} style={{ width: "25%" }} alt="MDT_3" />
              <div className="diagnostic_test">Urine Tests</div>
              <div className="mdt_para">
                Your kidneys begin to leak protein from the blood when they are
                damaged. Patients whose kidneys are malfunctioning and leaking
                critical nutrients through the urine are typically advised to do
                a urine test. Patients whose kidneys are malfunctioning and
                leaking critical nutrients through the urine are typically
                advised to do a urine test.
              </div>
              <div className="Read-more">
                <Link to="/aboutus/urinetests">
                  Read more
                  <PageEndIcon />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={8} sm={12} xs={24}>
            <div className="mdt">
              <img src={MDT_4} style={{ width: "25%" }} alt="MDT_4" />
              <div className="diagnostic_test">Blood Tests</div>
              <div className="mdt_para">
                Eliminating wastes and toxic compounds from the blood is the
                function of a healthy kidney. A healthy kidney can be measured
                for performance using blood and urine tests. The presence of
                excessive amounts of some waste products in the blood indicates
                that the kidneys are not functioning properly.
              </div>
              <div className="Read-more">
                <Link to="/aboutus/bloodtests">
                  Read more
                  <PageEndIcon />
                </Link>
              </div>
            </div>
          </Col>

          <Col md={8} sm={12} xs={24}>
            <div className="mdt">
              <img src={MDT_5} style={{ width: "24%" }} alt="MDT_5" />
              <div className="diagnostic_test">Imaging Tests</div>
              <div className="mdt_para">
                Imaging tests like Computed tomography, Magnetic resonance
                imaging, Renal scintigraphy are required to know if there is any
                physical damage in your kidney’s structure.
              </div>
              <div className="Read-more">
                <Link to="/aboutus/imagingtests">
                  Read more
                  <PageEndIcon />
                </Link>
              </div>
            </div>
          </Col>

          <Col md={8} sm={12} xs={24}>
            <div className="mdt">
              <img src={MDT_6} style={{ width: "25%" }} alt="MDT_6" />
              <div className="diagnostic_test">Ayurvedic Helthcare Center</div>
              <div className="mdt_para">
                Eliminating wastes and toxic compounds from the blood is the
                function of a healthy kidney. A healthy kidney can be measured
                for performance using blood and urine tests. The presence of
                excessive amounts of some waste products in the blood indicates
                that the kidneys are not functioning properly.
              </div>
              <div className="Read-more">
                <Link to="/aboutus/healthcare">
                  Read more
                  <PageEndIcon />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <h3 className="homeaboutus" id="kidney-disease">
          TYPES OF KIDNEY DISEASE
        </h3>
        <Row>
          <Col md={4}></Col>
          <Col md={16}>
            <p>
              1Ayurveda is aiming to harness the medical value of Ayurvedic
              herbs to treating acute or chronic renal disorders. The core
              tenets of ayurvedic kidney care include a combination of herbal
              remedies, dietary regimens, and yoga techniques. We have a
              remarkable track record of helping thousands of kidney patients
              with our medications.
            </p>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row className="show-grid">
          <Col sm={24} md={7} lg={7} className="typsofkidenycol">
            <img
              src={Types_of_Kideny_diseases_1}
              className="kidenydiseasesimg"
              alt="Acute Kidney Disease"
            />
            <h6>Acute Kidney Disease</h6>
            <p className="Kidney_Disease">
              Acute renal failure is the medical term for when your kidneys
              rapidly lose the ability to filter waste and toxins. It is also
              known as an abrupt loss of kidney function. Those who require
              acute care and are already under medical observation frequently
              develop AKD.
            </p>
          </Col>
          <Col sm={0} md={1} lg={1}></Col>
          <Col sm={24} md={7} lg={7} className="typsofkidenycol">
            <img
              src={Types_of_Kideny_diseases_2}
              className="kidenydiseasesimg"
              alt="Chronic Kidney Disease"
            />
            <h6>Chronic Kidney Disease</h6>
            <p className="Kidney_Disease">
              Chronic kidney disease, in contrast to AKD, involves a steady
              decline in kidney function. Because the symptoms are not
              immediately obvious, many patients do not realise they have CKD.
              On the rare chance that it is discovered, over half of them are
              unable to receive a workable course of treatment.
            </p>
          </Col>
          <Col sm={0} md={1} lg={1}></Col>
          <Col sm={24} md={7} lg={7} className="typsofkidenycol">
            <img
              src={Types_of_Kideny_diseases_3}
              className="kidenydiseasesimg"
              alt="Polycystic Kidney Disease"
            />
            <h6>Polycystic Kidney Disease</h6>
            <p className="Kidney_Disease">
              Although somewhat inherited, it is a different kind of kidney
              illness. Comprehend that PKD accounts for roughly 2% of kidney
              failure. Although it is a prevalent misconception that PKD is
              entirely genetic, the disorder can occasionally be non-hereditary.
            </p>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={24} md={7} lg={7} className="typsofkidenycol">
            <img
              src={Types_of_Kideny_diseases_4}
              className="kidenydiseasesimg"
              alt="Nephrotic Syndrome"
            />
            <h6>Nephrotic Syndrome</h6>
            <p className="Kidney_Disease">
              Similar to proteinuria, nephrotic syndrome causes protein to leak
              from the blood. Men are more likely than women to get Nephrotic
              Syndrome, which is characterised by renal dysfunction. This kidney
              condition most frequently affects youngsters between the ages of 2
              and 6.
            </p>
          </Col>
          <Col sm={0} md={1} lg={1}></Col>
          <Col sm={24} md={7} lg={7} className="typsofkidenycol">
            <img
              src={Types_of_Kideny_diseases_5}
              className="kidenydiseasesimg"
              alt="Creatinine"
            />
            <h6>Creatinine</h6>
            <p className="Kidney_Disease">
              Our kidneys are required to remove waste from the body, therefore
              if your doctor has found excessive amounts of creatinine in your
              blood, it is a sure sign that your kidneys are not in good shape.
              Due to poor kidney clearance of creatinine, the level of
              creatinine in your blood rises as your kidney function
              deteriorates.
            </p>
          </Col>
          <Col sm={0} md={1} lg={1}></Col>
          <Col sm={24} md={7} lg={7} className="typsofkidenycol">
            <img
              src={Types_of_Kideny_diseases_6}
              className="kidenydiseasesimg"
              alt="Proteinuria"
            />
            <h6>Proteinuria</h6>
            <p className="Kidney_Disease">
              Your kidneys should eliminate excess fluid and leftovers from your
              blood after digestion, but if they are damaged, they may let some
              proteins pass through their filters. Proteinuria is the medical
              word for having protein in the urine, which causes it to be foamy
              or sparkling.
            </p>
          </Col>
        </Row>
        <h3 className="homeaboutus" id="reviews">
          REVIEWS
        </h3>
        <Row>
          <Col md={4}></Col>
          <Col md={16}>
            <p>
              Over the years, through our innovations, we have developed unique
              products for complete wellbeing which led to enormous happiness
              and satisfaction for our valued customers.
            </p>
          </Col>
          <Col md={4}></Col>
        </Row>

        <Row className="reviewscarsol">
          <Col xs={0} sm={0} md={3}></Col>
          {/* <Col md={1}></Col> */}
          <Col sm={24} md={18} className="MobileSlider">
            <div className="cascade-slider_container">
              <div className="cascade-slider_slides">
                {reviews.map((val, i) => (
                  <div
                    className={`cascade-slider_item 
                    ${
                      currentIndex === reviews.length - 1 && i === 0
                        ? "next"
                        : ""
                    }

                     ${
                       currentIndex === 0 && reviews.length - 1 === i
                         ? "prev"
                         : ""
                     }
                    ${i === currentIndex ? "now" : ""} 
                     ${i === currentIndex + 1 ? "next" : ""} 
                     ${i === currentIndex - 1 ? "prev" : ""} 
                    `}
                  >
                    <div className="card align">
                      <div className="Rectangle-212"></div>
                      <div className="photo ">
                        <div>
                          <Rate value={val.rating} size="xs" />
                        </div>
                        <p className="for-limited-line">
                          <small className="font-size-variation">
                            {val.text}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ol class="cascade-slider_nav">
                <li
                  className={`cascade-slider_dot ${
                    currentIndex === 0 ? "current" : ""
                  }`}
                  onClick={() => dotControlNav("0")}
                ></li>
                <li
                  className={`cascade-slider_dot ${
                    currentIndex === 1 ? "current" : ""
                  }`}
                  onClick={() => dotControlNav("1")}
                ></li>
                <li
                  className={`cascade-slider_dot ${
                    currentIndex === 2 ? "current" : ""
                  }`}
                  onClick={() => dotControlNav("2")}
                ></li>
              </ol>

              <span
                className="cascade-slider_arrow cascade-slider_arrow-left"
                data-action="prev"
                onClick={nextSlide}
              >
                <ArrowLeftLineIcon style={{ fontSize: 30 }} />
              </span>
              <span
                className="cascade-slider_arrow cascade-slider_arrow-right"
                data-action="next"
                onClick={prevSlide}
              >
                <ArrowRightLineIcon style={{ fontSize: 30 }} />
              </span>
            </div>
          </Col>
          <Col xs={0} sm={0} md={3}></Col>
        </Row>
      </Container>
    </div>
  );
}
