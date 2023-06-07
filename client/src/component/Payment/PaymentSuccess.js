import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Button, Loader } from "rsuite";
import { axiosPrivate } from "../api/axios";
import logo from "../home/asset/images/Logo.png";
import axios from "axios";
import { Alert } from "../Notification";

// const handlePrint = () => {
//   const sectionToPrint = document.getElementById("sectionId").innerHTML;
//   const printWindow = window.open("", "", "width=600,height=600");
//   printWindow.document.open();
//   printWindow.document.write(`
//     <html>
//       <head>
//         <title>Print</title>
//         <style>
//           @media print {
//             .no-print {
//               display: none;
//             }
//           }
//         </style>
//       </head>
//       <body>
//         ${sectionToPrint}
//       </body>
//     </html>
//   `);
//   printWindow.document.close();
//   printWindow.print();
// };

const handlePrint = () => {
  const sectionToPrint = document.getElementById("sectionId").cloneNode(true);
  const printButton = sectionToPrint.querySelector("#printButton");
  const downloadButton = sectionToPrint.querySelector("#downloadButton");
  if (printButton && downloadButton) {
    printButton.parentNode.removeChild(printButton);
    downloadButton.parentNode.removeChild(downloadButton);
  }

  const printWindow = window.open("", "", "width=600,height=600");
  printWindow.document.open();
  printWindow.document.write(`
    <html>
      <head>
        <title>Print</title>
       <style> ${sectionToPrint.style}</style>
      </head>
      <body>
        ${sectionToPrint.outerHTML}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
};

const PaymentSuccess = () => {
  const [userId, setUserId] = useState();
  const [UserAllDetails, setUserAllDetails] = useState();
  const alertRef = useRef();

  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");
    setUserId(id);
  }, [location.search]);

  useEffect(() => {
    const getdata = async () => {
      try {
        if (userId) {
          let response = await axiosPrivate.get(
            `/check-appointment?id=${userId}`
          );
          let { data } = response;
          if (data.response) {
            setUserAllDetails(data.response);
          }

          alertRef.current.showToaster({
            message:
              "Please download the PDF file below and make sure to carry it with you on your appointment date.",
            status: 1,
          });
        }
      } catch (err) {
        console.log(`${err} Error while fetching booked user details data`);
      }
    };
    getdata();
  }, [userId]);
  return (
    <>
      <div
        className="thankyoudiv"
        id="sectionId"
        style={{
          backgroundImage: `url(${logo}), `,

          background: "contain",
          backgroundRepeat: "no-repeat",
          padding: 20,
          backgroundSize: "500px",
          backgroundPosition: "center",
        }}
      >
        <Row>
          <Alert ref={alertRef} />
          <Col md={3} sm={8} xs={8}>
            <img src={logo} style={{ width: "100%" }} />
          </Col>
          <Col md={21} sm={8} xs={16} style={{ textAlign: "right" }}>
            <p>
              <b>Contact Us</b>
              <br /> 506, Spectrum Commercial Centr,
              <br /> Salapose Road,
              <br /> Ahmedabad, Gujarat
              <br /> 380001
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={4}></Col>

          <Col
            md={16}
            style={{ textAlign: "left", backdropFilter: "blur(1px)" }}
          >
            <h3 style={{ color: "#046a38" }}>
              Your Appointment has been successfully Booked..
            </h3>
            <Row>
              <Col md={24} sm={12} xs={12}>
                <p style={{ marginTop: "5%" }}>
                  <b>Name</b>- {UserAllDetails && UserAllDetails.name}
                </p>
                <p>
                  <b>Phone Number</b>- {UserAllDetails && UserAllDetails.phone}
                </p>
                <p>
                  <b>Email</b>- {UserAllDetails && UserAllDetails.email}
                </p>
                <p>
                  <b>Date</b>-
                  {UserAllDetails &&
                    new Date(UserAllDetails.date).toLocaleDateString()}
                </p>
                <p>
                  <b>Slot</b>- {UserAllDetails && UserAllDetails.slot}
                </p>
                <p>
                  <b>Payment Reference Id</b>-
                  {UserAllDetails && UserAllDetails.paymentId}
                </p>
                <p>
                  <b>Payment Status</b>-
                  {UserAllDetails && UserAllDetails.paymentStatus}
                </p>
                <p>
                  <b>Total Payment</b>-{" "}
                  {UserAllDetails && UserAllDetails.amount}
                </p>
                <Button
                  color="green"
                  appearance="primary"
                  onClick={handlePrint}
                  style={{ marginTop: "3%", marginRight: "5%" }}
                  id="printButton"
                >
                  Print
                </Button>
                <Button
                  color="green"
                  appearance="primary"
                  onClick={handlePrint}
                  style={{ marginTop: "3%" }}
                  id="downloadButton"
                >
                  Download
                </Button>
              </Col>
              {/* <Col md={12} sm={12} xs={12}>
              <img
                src={logo}
                alt="logo"
                style={{ width: "30%", marginTop: "5%" }}
              />
            </Col> */}
            </Row>
          </Col>
          <Col md={4}></Col>
        </Row>

        <style>
          {`
         @media print {
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page {
          margin-top: 0;
        }
      
            body::after {
           content: " ";
            white-space: pre; 
           }
          #sectionId {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
        
        `}
        </style>
      </div>
    </>
  );
};

export default PaymentSuccess;
