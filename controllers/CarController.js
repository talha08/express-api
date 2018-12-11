import Car from "../models/Car"
import logger from "../core/logger/app-logger"

const controller = {}

controller.getAll = async (req, res) => {
  try {
    const cars = await Car.getAll()
    logger.info("sending all cars...")
    res.send(cars)
  } catch (err) {
    logger.error("Error in getting cars- " + err)
    res.send("Got error in getAll")
  }
}

controller.addCar = async (req, res) => {
  let carToAdd = Car({
    name: req.body.name,
    brand: req.body.brand,
    year: req.body.year
  })
  try {
    const savedCar = await Car.addCar(carToAdd)
    logger.info("Adding car...")
    res.send("added: " + savedCar)
  } catch (err) {
    logger.error("Error in getting cars- " + err)
    res.send("Got error in getAll")
  }
}

controller.updareCar = async (req, res) => {
  try {
    let carID = req.params.id
    const updateCar = await Car.updateCar(carID, req.query)
    logger.info("Updated Car- " + updateCar)
    res.send("Car successfully Updated")
  } catch (err) {
    logger.error("Failed to Update car- " + err)
    res.send("Update failed..!")
  }
}

controller.deleteCar = async (req, res) => {
  try {
    let carID = req.params.id
    const removedCar = await Car.removeCar(carID)
    logger.info("Deleted Car- " + removedCar)
    res.send("Car successfully deleted")
  } catch (err) {
    logger.error("Failed to delete car- " + err)
    res.send("Delete failed..!")
  }
}

export default controller
