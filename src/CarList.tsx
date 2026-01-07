import {Car} from './Car';
import {Button, EditableText} from "@blueprintjs/core"

interface Props {  
  cars: Car[];
  handleSelectCar: (id: any) => void;
  handleDeleteCar: (id: any) => void;
}

export default function CarList({cars, handleSelectCar, handleDeleteCar} : Props){
    return (
       
        <div>
        <table className="bp4-html-table .modifier">
        <thead>
          <tr>
            <th>Marka</th>
            <th>Model</th>
            <th>Modyfikuj</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>
                <Button onClick={() => handleSelectCar(car.id)} intent="primary">...</Button>
              {/* </td>
              <td>
                <Button onClick={() => handleUpdateCar(car.id)} intent="primary">Update</Button> */}
                &nbsp;
                <Button onClick={() => handleDeleteCar(car.id)} intent="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )
}
