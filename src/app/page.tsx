import { getAllCars } from "./services/carsService";

export default async function HomePage() {
    const cars = await getAllCars();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Cars List</h1>
            <ul className="space-y-2">
                {cars.map((car) => (
                    <li key={car.id} className="border p-2 rounded">
                        {car.brand} — ${car.price} ({car.year})
                    </li>
                ))}
            </ul>
        </div>
    );
}

