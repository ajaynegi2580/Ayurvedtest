import React, { useState } from "react";
import { Row, Col, Button, Panel, PanelGroup, Placeholder } from "rsuite";
import Nephrotic_syndrome from "../aboutus/asset/images/Nephrotic_syndrome.png";
import Ayurvedaimg from "../aboutus/asset/images/Ayurveda.png";
import BookingSlots from "../Booking_slots/BookingSlots";
export default function Ayurveda() {
  return (
    <div>
      <div className="">
        <Row className="">
          <Col md={2}></Col>
          <Col md={20} className="">
            <h5 className="ayurvedahfive">AYURVEDA</h5>

            <p className="ayurvedapara">
              Balance Your Body, Mind, And Spirit With Ayurveda
            </p>

            <img
              src={Ayurvedaimg}
              style={{ width: "60%" }}
              alt="ayurveda img"
            />
          </Col>
        </Row>
        <h5 className="ayurvedahfive">
          AYURVEDA IS A TRUE ENCYCLOPAEDIA OF CHRONIC ILLNESSES.
        </h5>
        <Row className="show-grid">
          <Col md={1}></Col>
          <Col md={11} className="measurement">
            <p>
              Ayurveda is the best course of treatment to pursue if one wants
              relief from a chronic or protracted illness because it includes
              several elements that support our overall health.
            </p>
            <p>
              <b>
                The Ayurvedic cure is based on naturally processed components
              </b>
            </p>
            <p>
              Allopathic treatments are created using herbal methods, but the
              most of them are still created artificially, which could be
              harmful to human health. In contrast, all Ayurveda medications are
              created using natural methods without the use of chemicals.
            </p>
            <p>
              <b>Ayurvedic Medicines are cost effective</b>
            </p>
            <p>
              In contrast to allopathy, which is slightly more expensive since
              its processing necessitates a high level of manufacturing expense,
              ayurvedic medicines are reasonably priced even when purchased from
              ayurvedic medical stores and are simple to obtain.
            </p>
            <p>
              <b>Ayurveda also strengthens the immune system.</b>
            </p>
            <p>
              While allopathic medications only provide transient relief from
              sickness symptoms, ayurvedic medicines are helpful in cleansing
              and purification.
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={10}>
            <BookingSlots />
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={22} className="measurement">
            <p className="allopthypara">
              <b>Allopathy is motivated by money</b>
            </p>
            <p>
              In contrast to Ayurveda, which may be slow to act but is very
              effective at providing us with complete relief from dangerous
              diseases, there has always been a claim that the primary goal of
              allopathy is to increase the income of those pharmaceutical
              companies that produced a significant volume of products rather
              than to provide a comprehensive solution to the problem.
            </p>
            <p>
              <b>Ayurveda: A natural treatment</b>
            </p>
            <p>
              Ayurvedic medicines are environmentally friendly by nature because
              they are created using natural methods. Allopathic medicines, on
              the other hand, are created in enormous factories that were built
              after countless trees were cut down. Moreover, various chemicals
              that significantly pollute the environment are emitted from these
              factories.
            </p>

            <p>
              Ayurvedic remedies may be quite slow at first and may no longer be
              able to provide us with immediate relief, but they can be used to
              cure chronic illnesses properly and effectively. Ayurvedic
              medications are excellent, environmentally friendly, economical,
              and entirely based on natural methods.
            </p>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row className="show-grid ">
          <Col md={3}></Col>
          <Col md={18} className="measurement">
            <h4 className="whyayurvedic">
              WHY AYURVEDIC TREATMENT IS SIGNIFICANTLY SUPERIOR THAN ALLOPATHIC
              TREATMENT FOR RENAL FAILURE
            </h4>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row className="ayurvedatreatmenttable">
          <Col md={2}></Col>
          <Col md={20} className="ayurvedatable">
            <div className="forweb">
              <Row>
                <Col md={1}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablehead">
                  ANALOGY
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablehead">
                  AYURVEDA
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablehead">
                  ALLOPATHY
                </Col>
                <Col md={1}></Col>
              </Row>
              <Row className="ayurvedameaning">
                <Col md={1}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  Meaning
                </Col>
                <Col md={2}></Col>
                <Col md={6} className="ayurvedatablebody">
                  Ayur + Veda = Medical science of Ancient India
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  Allos + pathos = Drug therapy
                </Col>
              </Row>
              <Row className="ayurvedameaning">
                <Col md={1}></Col>
                <Col md={6} className="ayurvedatablebody">
                  Meaning
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  Ayurvedic medicine is made up of only all-natural herbs,
                  aoshidis, and a balanced diet.
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  Drugs are employed with the medication in allopathic
                  treatment.
                </Col>
              </Row>
              <Row className="ayurvedameaning">
                <Col md={1}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  Side effects
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  The drug is entirely natural and organic. They receive
                  treatment without any negative effects.
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  In a small number of cases, people who are allergic to the
                  medications are more prone to experience negative effects.
                </Col>
              </Row>
              <Row className="ayurvedameaning">
                <Col md={1}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  Approach
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  When Ayurveda treats the underlying problem, the cure is
                  long-lasting.
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  The main cause of the sickness is never addressed. The patient
                  never receives lasting treatment from it.
                </Col>
              </Row>
              <Row className="ayurvedameaning">
                <Col md={1}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  Treatment
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  It's permanent
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  It's temporary
                </Col>
              </Row>
              <Row className="ayurvedameaning">
                <Col md={1}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  Treatment time
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  Since the treatment targets the underlying cause and results
                  in a patient's permanent healing, it takes some time for the
                  treatment to produce results.
                </Col>
                <Col md={2}></Col>
                <Col md={6} sm={22} xs={22} className="ayurvedatablebody">
                  Because the condition is just temporary, very little time is
                  needed to take the drug.
                </Col>
              </Row>
            </div>
            <PanelGroup
              accordion
              defaultActiveKey={1}
              bordered
              className="formobile"
            >
              <Panel header="ANALOGY" eventKey={1} id="panel1">
                <p className="ayurvedatablebody">Meaning</p>
                <p className="ayurvedatablebody">Meaning</p>
                <p className="ayurvedatablebody">Side effects</p>
                <p className="ayurvedatablebody">Approach</p>
                <p className="ayurvedatablebody">Treatment</p>
                <p className="ayurvedatablebody">Treatment time</p>
              </Panel>
              <Panel header="AYURVEDA" eventKey={2} id="panel2">
                <p className="ayurvedatablebody">
                  Ayur + Veda = Medical science of Ancient India
                </p>
                <p className="ayurvedatablebody">
                  Ayurvedic medicine is made up of only all-natural herbs,
                  aoshidis, and a balanced diet.
                </p>
                <p className="ayurvedatablebody">
                  The drug is entirely natural and organic. They receive
                  treatment without any negative effects.
                </p>
                <p className="ayurvedatablebody">
                  When Ayurveda treats the underlying problem, the cure is
                  long-lasting.
                </p>
                <p className="ayurvedatablebody">It's permanent</p>
                <p className="ayurvedatablebody">
                  Since the treatment targets the underlying cause and results
                  in a patient's permanent healing, it takes some time for the
                  treatment to produce results.
                </p>
              </Panel>
              <Panel header="ALLOPATHY" eventKey={3} id="panel3">
                <p className="ayurvedatablebody">
                  Allos + pathos = Drug therapy
                </p>
                <p className="ayurvedatablebody">
                  Drugs are employed with the medication in allopathic
                  treatment.
                </p>
                <p className="ayurvedatablebody">
                  In a small number of cases, people who are allergic to the
                  medications are more prone to experience negative effects.
                </p>
                <p className="ayurvedatablebody">
                  The main cause of the sickness is never addressed. The patient
                  never receives lasting treatment from it.
                </p>
                <p className="ayurvedatablebody">It's temporary</p>
                <p className="ayurvedatablebody">
                  Because the condition is just temporary, very little time is
                  needed to take the drug.
                </p>
              </Panel>
            </PanelGroup>
          </Col>

          <Col md={2}></Col>
        </Row>
      </div>
    </div>
  );
}
