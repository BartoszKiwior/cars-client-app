import {BodyType, Car, FuelType} from './Car';
import {Button, EditableText, HTMLTable} from "@blueprintjs/core"

interface Props {  
  // typ właściwości komponentu przekazywanych z komponentu nadrzędnego
    updateCar: Car;
    handleUpdateCar: () => void;
    handleUpdateChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): any;
    handleCancelUpdateCar: () => void;
}

export default function CarUpdate({updateCar, handleUpdateCar, handleUpdateChange, handleCancelUpdateCar} : Props){
    return (
        <div>
            <HTMLTable>
                <thead>
                <tr>
                    <th>Marka</th>
                    <th>Model</th>
                    <th>Typ nadwozia</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input 
                            name='brand'
                            type='text'
                            value={updateCar.brand}
                            onChange={handleUpdateChange}
                        />
                    </td>
                    <td>
                        <input 
                            name='model'
                            type='text'
                            value={updateCar.model}
                            onChange={handleUpdateChange}
                        />
                    </td>
                    <td>
                    <select name='bodyType' onChange={handleUpdateChange} value={updateCar.bodyType}>
                        <option value={BodyType.Hatchback}> Hatchback </option>
                        <option value={BodyType.Sedan}> Sedan </option>
                        <option value={BodyType.Kombi}> Kombi </option>
                        <option value={BodyType.SUV}> SUV </option>
                        <option value={BodyType.Roadster}> Roadster </option>
                    </select>
                    </td>
                </tr>
                </tbody>    
            </HTMLTable>
            <HTMLTable>
                <thead>
                    <tr>
                        <th>Spalanie</th>
                        <th>Drzwi</th>
                        <th>Rodzaj paliwa</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>
                        <input 
                            name='carFuelConsumption'
                            type='number'
                            value={updateCar.carFuelConsumption}
                            onChange={handleUpdateChange}
                        />
                    </td>
                    <td>
                        <input 
                            name='doorsNumber'
                            type='number'
                            value={updateCar.doorsNumber}
                            onChange={handleUpdateChange}
                        />
                    </td>
                    <td>
                        <select name='fuelType' onChange={handleUpdateChange} value={updateCar.fuelType}>
                        <option value={FuelType.Petrol}> Petrol </option>
                        <option value={FuelType.Diesel}> Diesel </option>
                        <option value={FuelType.Hybrid}> Hybrid </option>
                        <option value={FuelType.LPG}> LPG </option>
                        </select>
                    </td>
                    </tr>
                </tbody>    
            </HTMLTable>
            <HTMLTable>
                <thead>
                    <tr>    
                        <th>Pojemność bagażnika</th>
                        <th>Pojemność silnika</th>
                        <th>Data produkcji</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>
                        <input 
                            name='luggageCapacity'
                            type='number'
                            value={updateCar.luggageCapacity}
                            onChange={handleUpdateChange}
                        />
                    </td>
                    <td>
                        <input 
                            name='engineCapacity'
                            type='number'
                            value={updateCar.engineCapacity}
                            onChange={handleUpdateChange}
                        />
                    </td>
                    <td>
                        <input 
                            name='productionDate'
                            type='text'
                            value={updateCar.productionDate}
                            onChange={handleUpdateChange}
                        />
                    </td>
                </tr>
                </tbody>    
            </HTMLTable>

            <div>
                <br></br>
                <Button onClick={() => handleCancelUpdateCar()} intent='primary'>Zamknij</Button>
                &nbsp;
                <Button onClick={() => handleUpdateCar()} intent='success'>Zapisz</Button>
            </div>
        </div>
    )
}
