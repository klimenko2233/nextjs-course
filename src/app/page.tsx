import { getAllCars } from "./services/carsService";
import {deleteCar} from "@/app/actions/carActions";
import Link from "next/link";

export default async function HomePage() {
    const cars = await getAllCars();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Cars List</h1>
            <ul className="space-y-2">
                {cars.map((car) => (
                    <li key={car.id} className="border p-2 rounded">
                        <span>{car.brand} — ${car.price} ({car.year})</span>
                        <div className="flex gap-2">
                            <Link
                                href={`/editCar/${car.id}`}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded inline-block"
                            >
                                Edit
                            </Link>
                            <form action={deleteCar}>
                                <input type="hidden" name="id" value={car.id} />
                                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

