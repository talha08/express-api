import express from "express"
import carController from "../controllers/CarController"
const router = express.Router()

router.get("/cars", (req, res) => {
  carController.getAll(req, res)
})

router.post("/car", (req, res) => {
  carController.addCar(req, res)
})

router.put("/car/:id", (req, res) => {
  carController.updareCar(req, res)
})
router.delete("/car/:id", (req, res) => {
  carController.deleteCar(req, res)
})

export default router
