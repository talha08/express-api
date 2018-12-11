import mongoose from "mongoose"

const CarSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      index: true,
      default: "BMW"
    },
    brand: {
      type: String,
      required: true,
      unique: false,
      index: true,
      default: "AU"
    },
    year: {
      type: Number,
      required: true,
      unique: false,
      index: true,
      default: 2017
    }
  },
  { collection: "Car" }
)

let CarsModel = mongoose.model("Car", CarSchema)
//helper methods
CarsModel.getAll = () => {
  return CarsModel.find({})
}

CarsModel.addCar = carObject => {
  return carObject.save()
}

CarsModel.updateCar = (carId, carObject) => {
  let car = CarsModel.findById(carId)
  return car.update(carObject)
}

CarsModel.removeCar = carID => {
  return CarsModel.remove({ _id: carID })
}

export default CarsModel
