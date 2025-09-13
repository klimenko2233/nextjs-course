import {getAllCars} from "@/app/services/carsService";
import {editCar} from "@/app/actions/carActions";

interface Props {
    params: { id: string };
}

export default async function EditCarPage({ params }: Props) {
    const {id} = await params;
    const cars = await getAllCars();
    const car = cars.find(c => c.id === Number(id));

    if (!car) return <p>Car not found</p>;

    return (
        <form action={editCar} className="flex flex-col gap-4 max-w-md bg-gray-800 p-6 rounded shadow-md text-white">
            <input type="hidden" name="id" value={car.id} />
            <input
                name="brand"
                defaultValue={car.brand}
                className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Brand"
            />
            <input
                name="price"
                type="number"
                defaultValue={car.price}
                className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Price"
            />
            <input
                name="year"
                type="number"
                defaultValue={car.year}
                className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Year"
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
            >
                Update
            </button>
        </form>
    );
}
