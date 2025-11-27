import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@blueprintjs/core";
import { BodyType, Car, FuelType } from "./Car";
import CarList from "./CarList";
import CarDetails from "./CarDetails";
import CarAdd from "./CarAdd";
import CarUpdate from "./CarUpdate";

const endpoint = axios.create({
  baseURL: "https://localhost:7188/api/Cars",
});


function createDefaultCar(): Car {
  return {
    id: crypto.randomUUID(),
    brand: "",
    model: "",
    doorsNumber: 0,
    luggageCapacity: 0,
    engineCapacity: 0,
    fuelType: FuelType.Petrol,
    productionDate: "1999-01-01",
    carFuelConsumption: 0,
    bodyType: BodyType.Hatchback,
  };
}

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [newCar, setNewCar] = useState<Car>(createDefaultCar());
  const [updateCar, setUpdateCar] = useState<Car | undefined>(undefined);
  const [selectedCar, setSelectedCar] = useState<Car | undefined>(undefined);


  useEffect(() => {
    endpoint
      .get<Car[]>("")
      .then((response) => setCars(response.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSelectCar = (id: string) => {
    setSelectedCar(cars.find((car) => car.id === id));
    setUpdateCar(undefined);
  };

  const handleCancelSelectedCar = () => {
    setSelectedCar(undefined);
    setUpdateCar(undefined);
  };

  const handleAddChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    let castValue: string | number = value;

  
    if (
      name === "doorsNumber" ||
      name === "luggageCapacity" ||
      name === "engineCapacity" ||
      name === "carFuelConsumption"
    ) {
      castValue = Number(value);
    }

    setNewCar((prev) => ({
      ...prev,
      [name]: castValue,
    }));
  };

  const handleAddCar = (
    e: React.MouseEvent<HTMLButtonElement | HTMLElement>
  ) => {
    e.preventDefault();

    if (!newCar.brand || !newCar.model) {
      alert("Marka i model nie mogą być puste");
      return;
    }

    endpoint
      .post("", newCar)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));

    setCars((prev) => [...prev, newCar]);
    setNewCar(createDefaultCar());
  };

  const handleCancelUpdateCar = () => {
    setUpdateCar(undefined);
  };


  const handleUpdateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (!updateCar) return;

    const { name, value } = e.target;
    let castValue: string | number = value;

    if (
      name === "doorsNumber" ||
      name === "luggageCapacity" ||
      name === "engineCapacity" ||
      name === "carFuelConsumption"
    ) {
      castValue = Number(value);
    }

    setUpdateCar((prev) =>
      prev
        ? {
            ...prev,
            [name]: castValue,
          }
        : prev
    );
  };

  // zapis edycji auta
  const handleUpdateCar = () => {
    if (!updateCar) return;

    setCars((prev) =>
      prev.map((car) => (car.id === updateCar.id ? updateCar : car))
    );

    endpoint
      .patch(`${updateCar.id}`, updateCar)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));

    setSelectedCar(undefined);
    setUpdateCar(undefined);
  };

  // usunięcie auta
  const handleDeleteCar = (id: string) => {
    setCars((prev) => prev.filter((car) => car.id !== id));

    endpoint
      .delete(`${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App grid-container">
      {/* LEWA KOLUMNA – lista aut */}
      <div className="item1">
        <h2>Moja flota pojazdów</h2>
        <p className="summary">W bazie: {cars.length} aut</p>

        <CarList
          cars={cars}
          handleSelectCar={handleSelectCar}
          handleDeleteCar={handleDeleteCar}
        />
      </div>

      {/* GÓRNA KARTA – dodawanie */}
      <div className="item2">
  <h2>Dodaj nowy pojazd</h2>
  <h4>ID generowane lokalnie: {newCar.id}</h4>

  <CarAdd newCar={newCar} handleChangeAdd={handleAddChange} />

  <h4>
    <Button onClick={handleAddCar} intent="success">
      Dodaj do bazy
    </Button>
  </h4>
</div>

      {/* ŚRODKOWA KARTA – szczegóły */}
      <div className="item3">
        <h2>Szczegóły wybranego auta</h2>
        {selectedCar && (
          <CarDetails
            car={selectedCar}
            setUpdateCar={setUpdateCar}
            cancelSelectedCar={handleCancelSelectedCar}
          />
        )}
      </div>

      {/* DOLNA KARTA – edycja */}
      <div className="item4">
        <h2>Edycja danych pojazdu</h2>
        {selectedCar && updateCar && (
          <CarUpdate
            updateCar={updateCar}
            handleUpdateCar={handleUpdateCar}
            handleUpdateChange={handleUpdateChange}
            handleCancelUpdateCar={handleCancelUpdateCar}
          />
        )}
      </div>
    </div>
  );
};

export default App;
