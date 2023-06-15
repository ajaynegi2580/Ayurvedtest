import React from "react";
import { Row, Col, Icon } from "rsuite";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../home/asset/images/Logofot.png";

import "./asset/css/Footer.css";
export default function Footer({ jump }) {
  return (
    <div>
      <div className="footer_sec">
        <Row className="joinayurvedafamily">
          <Col md={2} sm={2} xs={1} lg={2}></Col>
          <Col md={20} sm={20} xs={20} className="joinayurveda">
            <Row>
              <Col md={2} sm={0} xs={0}></Col>
              <Col md={4} sm={8} xs={6} className="getemail">
                <b>
                  Join the
                  <br /> 1Ayurveda family
                </b>
              </Col>
              <Col md={16} sm={14} xs={9} style={{ textAlign: "left" }}>
                <div style={{ paddingLeft: "20%", paddingTop: 20 }}>
                  <small>
                    Get daily update and healthy life style routines right in
                    your email
                  </small>
                </div>
              </Col>

              {/* <Col md={8} sm={6} xs={6} style={{ marginTop: "6px" }}>
                <input type="text" style={{ width: 200 }} />
                <button
                  color="green"
                  appearance="primary"
                  className="btnsubscribe"
                >
                  Subscribe
                </button>
              </Col> */}
            </Row>
          </Col>
        </Row>

        <footer>
          <div className="foot_btm">
            <Row className="footerow">
              <Col md={1}></Col>
              <Col sm={24} md={11} className="footerlogo">
                <img
                  src={logo}
                  className="handlelogo"
                  alt="logo"
                  style={{ width: "30%" }}
                />
              </Col>
              <Col sm={24} md={11} xs={24}>
                <Row>
                  <Col md={8} sm={12} xs={12}>
                    <p className="footerheadpara">
                      <b>HOME</b>
                    </p>
                    <p
                      onClick={() => jump("about", "/")}
                      style={{ cursor: "pointer" }}
                    >
                      About us
                    </p>
                    <p
                      onClick={() => jump("science", "/")}
                      style={{ cursor: "pointer" }}
                    >
                      Science of ayurveda
                    </p>
                    <p
                      onClick={() => jump("choose", "/")}
                      style={{ cursor: "pointer" }}
                    >
                      Why choose us
                    </p>
                    <p
                      onClick={() => jump("diagnostic", "/")}
                      style={{ cursor: "pointer" }}
                    >
                      Major diagnostic tests
                    </p>
                    <p
                      onClick={() => jump("kidney-disease", "/")}
                      style={{ cursor: "pointer" }}
                    >
                      Types of kidney diseases
                    </p>
                    <p
                      onClick={() => jump("reviews", "/")}
                      style={{ cursor: "pointer" }}
                    >
                      Reviews
                    </p>
                  </Col>
                  <Col md={7} sm={12} xs={12}>
                    <p className="footerheadpara">
                      <b>KIDNEY DISEASE</b>
                    </p>
                    <Link
                      to="/kidneydisease/acutekidneydisease"
                      style={{ textDecoration: "none" }}
                    >
                      <p>Acute Kidney Disease</p>
                    </Link>
                    <Link
                      to="/kidneydisease/chronickidneydisease"
                      style={{ textDecoration: "none" }}
                    >
                      <p>Chronic Kidney Disease</p>
                    </Link>
                    <Link
                      to="/kidneydisease/polycystickidneydisease"
                      style={{ textDecoration: "none" }}
                    >
                      <p>Polycystic Kidney Disease</p>
                    </Link>
                    <Link
                      to="/kidneydisease/nephroticsyndrome"
                      style={{ textDecoration: "none" }}
                    >
                      <p>Nephrotic Syndrome</p>
                    </Link>
                    <Link
                      to="/kidneydisease/creatinine"
                      style={{ textDecoration: "none" }}
                    >
                      <p>Creatinine</p>
                    </Link>
                    <Link
                      to="/kidneydisease/proteinuria"
                      style={{ textDecoration: "none" }}
                    >
                      <p>Proteinuria</p>
                    </Link>
                  </Col>
                  <Col md={8}>
                    <p className="footerheadpara">
                      <b>CONTACT US</b>
                    </p>
                    <p>+91 88888 88888</p>
                    <p>www.1ayurveda.com</p>
                    <p>
                      506, Spectrum Commercial Centr, Salapose Road, Ahmedabad,
                      Gujarat- 380001
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <p className="footerinputfield">
              <input
                type="text"
                placeholder="Your email..."
                style={{ width: "70%" }}
              />
              <button appearance="primary" className="btnsubscribe">
                Subscribe
              </button>
            </p>
            <Row className="footerow2">
              <Col sm={24} md={12} xs={24}>
                <p className="footercompanyname">1AYURVEDA SMB SOLUTIONS</p>

                <Row>
                  <Col md={6} sm={6} xs={8}>
                    <Link to="/Privacy" style={{ textDecoration: "none" }}>
                      <p>Privacy Policy</p>
                    </Link>
                  </Col>
                  <Col md={10} sm={10} xs={10}>
                    <Link to="/Cancellation" style={{ textDecoration: "none" }}>
                      <p>Cancellation and Return Policy</p>
                    </Link>
                  </Col>
                  <Col md={8} sm={8} xs={6}>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                      <p>Contact Us</p>
                    </Link>
                  </Col>
                </Row>
              </Col>

              <Col md={12} sm={12} xs={24} className="footersociallogo">
                <FaFacebook style={{ fontSize: 23 }} />
                <FaInstagram style={{ fontSize: 23, marginLeft: "15px" }} />
                <FaTwitter style={{ fontSize: 23, marginLeft: "15px" }} />
                <FaYoutube style={{ fontSize: 23, marginLeft: "15px" }} />
              </Col>
            </Row>
          </div>
        </footer>
      </div>
    </div>
  );
}
