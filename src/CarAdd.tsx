import React from "react";
import { Car } from "./Car";

type CarAddProps = {
  newCar: Car;
  handleChangeAdd: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const CarAdd: React.FC<CarAddProps> = ({ newCar, handleChangeAdd }) => {
  return (
    <div className="car-add-form">
      {/* Rząd 1: marka / model / typ nadwozia */}
      <div className="form-row">
        <div className="form-field">
          <label>Marka:</label>
          <input
            type="text"
            name="brand"
            value={newCar.brand}
            onChange={handleChangeAdd}
          />
        </div>

        <div className="form-field">
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={newCar.model}
            onChange={handleChangeAdd}
          />
        </div>

        <div className="form-field">
          <label>Typ nadwozia:</label>
          <select
            name="bodyType"
            value={newCar.bodyType}
            onChange={handleChangeAdd}
          >
            <option value={0}>Hatchback</option>
            <option value={1}>Sedan</option>
            <option value={2}>Kombi</option>
            <option value={3}>SUV</option>
          </select>
        </div>
      </div>

      {/* Rząd 2: spalanie / drzwi / paliwo */}
      <div className="form-row">
        <div className="form-field">
          <label>Spalanie [l/100km]:</label>
          <input
            type="number"
            name="carFuelConsumption"
            value={newCar.carFuelConsumption}
            onChange={handleChangeAdd}
          />
        </div>

        <div className="form-field">
          <label>Ilość drzwi:</label>
          <input
            type="number"
            name="doorsNumber"
            value={newCar.doorsNumber}
            onChange={handleChangeAdd}
          />
        </div>

        <div className="form-field">
          <label>Rodzaj paliwa:</label>
          <select
            name="fuelType"
            value={newCar.fuelType}
            onChange={handleChangeAdd}
          >
            <option value={0}>Benzyna</option>
            <option value={1}>Diesel</option>
            <option value={2}>LPG</option>
            <option value={3}>Hybryda</option>
          </select>
        </div>
      </div>

      {/* Rząd 3: bagażnik / silnik / data */}
      <div className="form-row">
        <div className="form-field">
          <label>Pojemność bagażnika [l]:</label>
          <input
            type="number"
            name="luggageCapacity"
            value={newCar.luggageCapacity}
            onChange={handleChangeAdd}
          />
        </div>

        <div className="form-field">
          <label>Pojemność silnika [cm³]:</label>
          <input
            type="number"
            name="engineCapacity"
            value={newCar.engineCapacity}
            onChange={handleChangeAdd}
          />
        </div>

        <div className="form-field">
          <label>Data produkcji:</label>
          <input
            type="text"
            name="productionDate"
            value={newCar.productionDate}
            onChange={handleChangeAdd}
          />
        </div>
      </div>
    </div>
  );
};

export default CarAdd;
