import React, { useState, useEffect, useRef } from "react";
import {
  Row,
  Col,
  Button,
  Schema,
  Notification,
  Placeholder,
  Loader,
  DatePicker,
} from "rsuite";

import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { axiosPrivate } from "../api/axios";
import "./assets/css/booking.css";
import logo from "./assets/image/Logo.png";
import { Alert } from "../Notification";

const nameRule = Schema.Types.StringType().isRequired(
  "This field is required."
);
const emailRule = Schema.Types.StringType().isEmail(
  "Please enter a valid email address."
);

export default function BookingSlots(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    selectedDate: undefined,
    slot: undefined,
    // paymentStatus: "pending",
    // orderId: "",
    // paymentId: "",
  });

  const inputRef = useRef(null);
  const [available, setAvailable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [defaultSlot, setdefaultSlot] = useState([]);
  const [responseData, setResponseData] = useState();
  const [errormsg, seterrormsg] = useState(null);

  // const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);
  const alertRef = useRef();

  let inputHandler = async (e) => {
    let { name, value } = !e.target.dataset.name ? e.target : e.target.dataset;
    setFormData({ ...formData, [name]: value });
    if (name === "selectedDate") {
      setLoading(true);
      let response = await axiosPrivate.get(
        `/check-availability?date=${value}`
      );

      let { data, defaultSlot } = response.data;
      setAvailable(data);
      setdefaultSlot(defaultSlot);
      setLoading(false);
    }
  };

  let checkForm = () => {
    if (
      formData.name.trim().length === 0 ||
      formData.email.trim().length === 0 ||
      formData.phone.trim().length === 0 ||
      formData.description.trim().length === 0 ||
      !formData.selectedDate ||
      !formData.slot
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let isError = checkForm();
      if (isError) {
        alertRef.current.showToaster({
          message: "All fields are required",
          status: 0,
        });
      } else {
        let response = await axiosPrivate.post(`/book-appointment`, {
          formData,
        });
        let { data } = response.data;

        if (response.status === 201) {
          const appointmentId = response.data._id;
          alertRef.current.showToaster({
            message: "Appointment has been initiated, Moving to Payment Page.",

            status: 1,
          });
          const bookingId = data._id;

          const fetchPaymentKey = async () => {
            try {
              const response = await axiosPrivate.get("/getkey");
              const { key } = response.data;
              const amount = 100;
              const createOrderResponse = await axiosPrivate.post(
                "/create-order",
                {
                  bookingId,
                  amount,
                }
              );

              const queryParams = new URLSearchParams();
              queryParams.append("bookingId", data._id);
              queryParams.append("amount", amount);
              const options = {
                key,
                amount: createOrderResponse.data.order.amount,
                currency: "INR",
                name: "1Ayurveda",
                description: "Appointment Booking Payment",
                image: logo,
                order_id: createOrderResponse.data.order.id,
                // for localuse
                callback_url: `http://localhost:7000/api/v1/payment-verify?${queryParams.toString()}`,
                // callback_url: `http://34.227.27.46:7000/api/v1/payment-verify?${queryParams.toString()}`,
                prefill: {
                  name: data.name,
                },
                theme: {
                  color: "#046a38",
                },
                modal: {
                  ondismiss: async function () {
                    setLoading(true);
                    let response = await axiosPrivate.get(
                      `/check-availability?date=${formData.selectedDate}`
                    );
                    let { data, defaultSlot } = response.data;
                    setAvailable(data);
                    setdefaultSlot(defaultSlot);
                    setLoading(false);
                  },
                },
              };

              const razorpayPayment = new window.Razorpay(options);
              razorpayPayment.open();
            } catch (error) {
              response.status("Errortets:", error.message);
            }
          };

          fetchPaymentKey();
        } else if (response.status === 409) {
          alert("Appointment is already booked..");
        }
      }
    } catch (e) {
      alertRef.current.showToaster({
        message: e.response.data.message,
        status: 0,
      });
    }
  };

  // For Availability management
  useEffect(() => {
    if (formData.selectedDate) {
      inputHandler({
        target: {
          dataset: { name: "selectedDate", value: formData.selectedDate },
        },
      });
    }
  }, [formData.selectedDate]);

  useEffect(() => {
    if (responseData) {
      // <Message type="success" />;
      //   toast.success("Appointment has been booked, Moving to Payment Page....");
    }
  }, [responseData]);

  const openCalendar = () => {
    const dateInput = document.getElementById("dateInput");

    dateInput.showPicker();
  };
  return (
    <div>
      <div className="openighour">
        <Alert ref={alertRef} />
        <h5>OPENING HOURS</h5>
        <p>MONDAY - SATURDAY 9:00 AM - 6:00 PM</p>
        <form onSubmit={handleSubmit}>
          <input
            className="input-style"
            type="date"
            name="selectedDate"
            placeholder="Select Date"
            id="dateInput"
            min={new Date().toISOString().split("T")[0]}
            onClick={() => openCalendar()}
            onChange={inputHandler}
          />
          {formData.selectedDate && (
            <div className="timescheduled">
              <Row className="">
                <Col md={2} xs={0}></Col>
                <Col md={10} xs={10} className="timescheduledmob">
                  <p style={{ textAlign: "left" }}>
                    <b>Date:{formData.selectedDate}</b>
                  </p>
                </Col>
                <Col md={10} xs={10} className="timescheduledmob">
                  <p style={{ textAlign: "right" }}>
                    <b>{available.length} available slots </b>
                  </p>
                </Col>

                <Col md={2} xs={0}></Col>
              </Row>
              <hr />
              {!loading ? (
                <Row className="timescheduledrow" style={{ padding: "0 3%" }}>
                  {defaultSlot.map((val, idx) => (
                    <div
                      onClick={(e) => inputHandler(e)}
                      data-name="slot"
                      data-value={val}
                      className={`${
                        val === formData.slot ? "selected-slot" : ""
                      }`}
                      style={{
                        display: "inline-block",
                        marginRight: 10,
                        marginBottom: 10,
                        padding: "2%",
                        borderRadius: 10,
                        backgroundColor: available.includes(val)
                          ? "#339933"
                          : "gray",
                        color: "#ffff",
                        cursor: "pointer",
                        // button: available.includes(val) ? "disabled" : null,
                        pointerEvents: available.includes(val) ? null : "none",
                      }}
                    >
                      {val.length === 7 ? val : "0" + val}
                    </div>
                  ))}
                </Row>
              ) : (
                <>
                  <Loader />
                </>
              )}
              <div style={{ display: "flex", gap: "1rem", padding: "20px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "20px",

                    backgroundColor: "gray",
                  }}
                ></div>
                <span>* (i.e Slot is already booked)</span>
              </div>

              <p style={{ textAlign: "left", marginLeft: "5%" }}>
                Lunch break From 1PM to 2PM
              </p>
            </div>
          )}
          <input
            className="input-style"
            type="text"
            name="name"
            onChange={inputHandler}
            placeholder="Name"
            required
          />
          <input
            type="tel"
            className="input-style"
            name="phone"
            onChange={inputHandler}
            placeholder="Contact"
            pattern="[0-9]{10}"
            required
          />
          <input
            type="email"
            className="input-style"
            name="email"
            onChange={inputHandler}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="description"
            className="input-style"
            onChange={inputHandler}
            placeholder="Description"
            required
          />

          {/* appointment schedule */}

          <p className="bookapoin">
            <Button
              color="green"
              appearance="primary"
              type="submit"
              className="openighourbtn"
            >
              BOOK AN APPOINTMENT
            </Button>
          </p>
        </form>
      </div>
    </div>
  );
}
