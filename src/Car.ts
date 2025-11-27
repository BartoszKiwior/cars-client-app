export enum FuelType { Petrol, Hybrid, Diesel, LPG}
    
export enum BodyType { Hatchback, Sedan, Kombi, SUV, Roadster}
export interface Car{
    id: string;
    brand: string;
    model: string;
    doorsNumber: number;
    luggageCapacity: number;
    engineCapacity: number;
    fuelType: FuelType;
    productionDate: string;
    carFuelConsumption: number;
    bodyType: BodyType; 
}