import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
// import About_us_hero_banner from "./asset/images/About_us_hero_banner.png";
import About_us_para_image from "./asset/images/About_us_para_image.png";
import logo from "../home/asset/images/Logo.png";
import Types_of_Kideny_diseases_2 from "../home/asset/images/Types_of_Kideny_diseases_2.png";
import video1 from "./asset/videos/Stage_1.mp4";
import video2 from "./asset/videos/Stage_2.mp4";
import video3 from "./asset/videos/Stage_3.mp4";
import video4 from "./asset/videos/Stage_4.mp4";
import video5 from "./asset/videos/Stage_5.mp4";
import { Row, Col, Button, Schema, Notification, Placeholder } from "rsuite";

import "./asset/css/aboutus.css";
import "react-datepicker/dist/react-datepicker.css";
import { axiosPrivate } from "../api/axios";
import BookingSlots from "../Booking_slots/BookingSlots";

export default function Aboutus(props) {
  return (
    <div className="aboutusban">
      <Row className="About_us_banner">
        <Col md={12} sm={12} xs={12} className="aboutusbancol">
          <h3>ABOUT US</h3>
          <p className="aboutlogo">
            <img src={logo} style={{ width: "30%" }} alt="about-us-logo" />
          </p>
          <p className="Transform_your_health">
            "Transform your health and wellbeing with personalized Ayurvedic
            care at our clinic, where ancient healing meets modern medicine"
          </p>
        </Col>
        <Col md={12}></Col>
      </Row>

      <Row className="show-grid holidayicayurvdic">
        <Col md={1}></Col>
        <Col md={11} className="measurement">
          <h5 className="holisticayurvdichelth">
            HOLISTIC AYURVEDIC HELTHCARE CENTER
          </h5>
          <p>
            Ayurveda was in peril at the time, and people had all but forgotten
            about it. 1Ayurveda took the initiative to change that.
          </p>

          <p>
            After considering the circumstances of kidney patients and their
            struggle to receive treatment for kidney illness, 1Ayurveda started
            providing kidney disease treatments through Ayurvedic treatment. As
            a result of its tireless efforts on behalf of renal patients,
            1Ayurveda has earned a reputation for providing superior Ayurvedic
            kidney care.
          </p>
          <p>
            This renal care institution has decades of expertise treating kidney
            patients, has established a niche for itself, and is today
            acknowledged as one of India’s best kidney care facilities.
          </p>
          <img
            src={About_us_para_image}
            style={{ width: "100%", marginTop: 20 }}
            alt="holistic ayurvedic"
          />
        </Col>
        <Col md={1}></Col>
        <Col md={10}>
          <BookingSlots />
        </Col>
        <Col md={1}></Col>
      </Row>

      <Row className="show-grid">
        <Col md={1}></Col>
        <Col md={11} className="measurement">
          <h5 className="approchtokidneyheading">
            APPROACH TO KINDEY DISEASES IN AYURVEDA
          </h5>
          <ul>
            <li>
              While they focus on removing the problems and simultaneously
              addressing the underlying causes of kidney disorders, Ayurvedic
              medicines are quite efficient at treating kidney ailments.
              Ayurveda makes use of several unusual natural medicines that are
              quite successful at treating renal issues. In addition to treating
              the difficulties, Ayurvedic medications regenerate the dead tissue
              in the kidneys.
            </li>
            <li>
              Yoga improves the body’s basic processes, including blood flow,
              the release of insulin, and the body’s capacity to break down fats
              and other undesirable chemicals. Yoga therefore relieves or guards
              against kidney disease issues by enhancing these types of health
              features. It is an essential part of Ayurvedic renal treatment.
            </li>
            <li>
              Everyone is aware that what we eat has a big influence on how we
              feel. Ayurvedic kidney care includes both nutrition and herbal
              medications. We provide you with a nutrition strategy tailored to
              your renal condition. In order for you to benefit the most from
              your Ayurvedic treatment, we adjust your diet based on how you’re
              doing.
            </li>
            <li>
              Your lifestyle has an impact on your health as well. Many daily
              habits, such as not getting enough sleep, working too much, or
              leading a stressful life, can contribute to various health
              concerns, including renal illnesses. We at 1Ayurveda want to
              identify these engrained patterns in your life and help you get
              rid of them. Ayurvedic kidney therapy can be accelerated by
              altering one’s lifestyle, which is also a crucial step in the
              procedure.
            </li>
          </ul>
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
      <h3 className="homeaboutus">REVIEWS</h3>

      <Row className="show-grid">
        <Col md={6} sm={12} xs={24} lg={6}>
          <iframe
            className="Y-Videos-Style"
            width="250"
            height="150"
            src="https://www.youtube.com/embed/9OISSje2gAo"
            title="1Ayurveda_v1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
        <Col md={6} sm={12} xs={24} lg={6}>
          <iframe
            className="Y-Videos-Style"
            width="250"
            height="150"
            src="https://www.youtube.com/embed/IO_UO8VfJJE"
            title="1Ayurveda_V2"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
        <Col md={6} sm={12} xs={24} lg={6}>
          <iframe
            className="Y-Videos-Style"
            width="250"
            height="150"
            src="https://www.youtube.com/embed/1YsecgFWkEo"
            title="1Ayurveda_V3"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
        <Col md={6} sm={12} xs={24} lg={6}>
          <iframe
            className="Y-Videos-Style"
            width="250"
            height="150"
            src="https://www.youtube.com/embed/qL2h5x5RzlY"
            title="1Ayurveda_V4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </div>
  );
}
