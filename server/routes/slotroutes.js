import express from "express"
import {BookingController} from "../controller/slotControllers.js" 
import { getAvailability} from "../controller/CheckAvailability.js"


const router = express.Router()

router.post("/book-appointment", BookingController)
router.get("/check-availability", getAvailability)
 
export default router 