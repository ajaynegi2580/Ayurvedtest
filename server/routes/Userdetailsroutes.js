import express from "express";

import { checkAppointment } from "../controller/CheckAppointmentDetails.js";

const router = express.Router();

// Routes for ChcekAppointment Details

router.get("/check-appointment", checkAppointment);

export default router;
