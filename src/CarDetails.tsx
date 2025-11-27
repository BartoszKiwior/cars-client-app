import { Button, EditableText, HTMLTable, InputGroup } from '@blueprintjs/core';
import {BodyType, Car, FuelType} from './Car';

interface Props {  
  // typ właściwości komponentu przekazywanych z komponentu nadrzędnego
  car: Car;
  cancelSelectedCar: () => void;
  setUpdateCar: (car: Car | undefined) => void;
}

export default function CarDetails({car, setUpdateCar, cancelSelectedCar} : Props){
    return (
        <div>
            <div>ID: {car.id}</div>

            <div>Marka: {car.brand}</div>

            <div>Model: {car.model}</div>

            <div>Ilość drzwie: {car.doorsNumber}</div>

            <div>Pojemność bagażnika: {car.luggageCapacity}</div>

            <div>Pojemność silnika: {car.engineCapacity}</div>

            <div>Paliwo: {FuelType[car.fuelType]}</div>

            <div>Spalanie: {car.carFuelConsumption}</div>

            <div>Data produkcyji: {car.productionDate}</div>

            <div>Typ nadwozia: {BodyType[car.bodyType]}
            </div>

            <div>
                <br></br>
                <Button onClick={() => cancelSelectedCar()} intent='primary'>Zamknij</Button>
                &nbsp;
                <Button onClick={() => setUpdateCar(car)} intent='primary'>Edytuj</Button>
            </div>

            <div>
            {/* <img src={require("./baza/" + car.id + ".png")} width="150" /> */}
            </div>

        </div>
    )
}
