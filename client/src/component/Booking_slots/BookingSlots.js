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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { axiosPrivate } from "../api/axios";
import "./assets/css/booking.css";
import logo from "./assets/image/Logo.png";
const Message = React.forwardRef(({ type, ...rest }, ref) => {
  return (
    <Notification ref={ref} {...rest} type={type} header={type}>
      <Placeholder.Paragraph style={{ width: 220 }} rows={0} />
    </Notification>
  );
});

const nameRule = Schema.Types.StringType().isRequired(
  "This field is required."
);
const emailRule = Schema.Types.StringType().isEmail(
  "Please enter a valid email address."
);

export default function BookingSlots() {
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

  // const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

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

  const openDatePicker = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  let checkForm = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.description === "" ||
      // formData.paymentStatus === "pending" ||
      // formData.orderId === "" ||
      // formData.paymentId === "" ||
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
    let isError = checkForm();
    if (isError) {
      alert("not ok");
    } else {
      let response = await axiosPrivate.post(`/book-appointment`, { formData });
      // console.log(response.data._id);
      console.log(response);
      let { data } = response.data;
      console.log(data);
      setResponseData(data);
      console.log(responseData);
      console.log(responseData._id);
      if (response.status === 201) {
        const appointmentId = response.data._id;
        console.log("ID:", appointmentId);
        // toast.success(
        //   "Appointment has been booked, Moving to Payment Page...."
        // );
        // setIsAppointmentBooked(true);
        // console.log(isAppointmentBooked);
        // Perform additional actions with the ID if needed
      } else if (response.status === 409) {
        alert("Appointment is already booked..");
      }
    }
  };

  console.log(responseData);

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

  // Manage the stage using Useffects.

  useEffect(() => {
    if (responseData) {
      // <Message type="success" />;
      //   toast.success("Appointment has been booked, Moving to Payment Page....");
      alert("Appointment has been booked, Moving to Payment Page....");

      const bookingId = responseData._id;
      console.log(bookingId);

      const fetchPaymentKey = async () => {
        try {
          const response = await axiosPrivate.get("/getkey");
          const { key } = response.data;
          console.log(key);
          const amount = 500;
          const createOrderResponse = await axiosPrivate.post("/create-order", {
            bookingId,
            amount,
          });
          console.log(createOrderResponse.data);
          console.log(createOrderResponse.data.order.id);

          const queryParams = new URLSearchParams();
          queryParams.append("bookingId", responseData._id);
          queryParams.append("amount", amount);

          const options = {
            key,
            amount: createOrderResponse.data.order.amount,
            currency: "INR",
            name: "1Ayurveda",
            description: "Appointment Booking Payment",
            image: logo,
            order_id: createOrderResponse.data.order.id,
            callback_url: `http://34.227.27.46:7000/api/v1/payment-verify?${queryParams.toString()}`,
            prefill: {
              name: responseData.name,
              email: responseData.email,
              phone: responseData.phone,
            },
            theme: {
              color: "#046a38",
            },
          };

          const razorpayPayment = new window.Razorpay(options);
          razorpayPayment.open();
        } catch (error) {
          console.log("Error:", error.message);
        }
      };

      fetchPaymentKey();
    }
  }, [responseData]);

  const openCalendar = () => {
    const dateInput = document.getElementById("dateInput");

    dateInput.showPicker();
  };

  return (
    <div>
      <div className="openighour">
        <h5>OPENING HOURS</h5>
        <p>MONDAY - SATURDAY 9:00 AM - 6:00 PM</p>
        <form onSubmit={handleSubmit}>
          {/* <input
            id="session-date"
            className="input-style"
            type="date"
            name="selectedDate"
            placeholder="Date"
            min={new Date().toISOString().split("T")[0]}
            onChange={inputHandler}
          ></input> */}
          {/* <DatePicker
            className="input-style"
            // value={selectedDate}
            format="dd/MM/YYY"
            type="date"
            name="selectedDate"
            placeholder="Date"
            min={new Date().toISOString().split("T")[0]}
            onChange={inputHandler}
          /> */}

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
