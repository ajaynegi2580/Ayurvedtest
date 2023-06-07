import React from "react";
import { Row, Col, Icon } from "rsuite";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../home/asset/images/Logofot.png";

import "./asset/css/Footer.css";
export default function Footer() {
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
                    <p>About us</p>
                    <p>Science of ayurveda</p>
                    <p>Why choose us</p>
                    <p>Major diagnostic tests</p>
                    <p>Types of kidney diseases</p>
                    <p>Reviews</p>
                  </Col>
                  <Col md={7} sm={12} xs={12}>
                    <p className="footerheadpara">
                      <b>KIDNEY DISEASE</b>
                    </p>
                    <p>Acute Kidney Disease</p>
                    <p>Chronic Kidney Disease</p>
                    <p>Polycystic Kidney Disease</p>
                    <p>Nephrotic Syndrome</p>
                    <p>Creatinine</p>
                    <p>Proteinuria</p>
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
                <p className="footercompanyname">1Ayurveda</p>

                <Row>
                  <Col md={8} sm={8} xs={8}>
                    <p>
                      <u>Privacy Policy</u>
                    </p>
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <p>
                      <u>Terms of Use</u>
                    </p>
                  </Col>
                  <Col md={8} sm={8} xs={8}>
                    <Link to="/contact">
                      <p>
                        <u>Contact Us</u>
                      </p>
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
