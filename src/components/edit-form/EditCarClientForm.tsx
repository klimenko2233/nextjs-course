'use client';

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { editCar } from "@/app/actions/carActions";
import {carSchema} from "@/app/validation /carValidation";

interface ICarForm {
    id: number;
    brand: string;
    price: number;
    year: number;
}

export default function EditCarClientForm({ car }: { car: ICarForm }) {
    const { register, handleSubmit, formState: { errors } } = useForm<ICarForm>({
        resolver: joiResolver(carSchema),
        defaultValues: {
            brand: car.brand,
            price: car.price,
            year: car.year
        }
    });

    const onSubmit = async (data: ICarForm) => {
        const formData = new FormData();
        formData.append("id", car.id.toString());
        formData.append("brand", data.brand);
        formData.append("price", data.price.toString());
        formData.append("year", data.year.toString());

        await editCar(formData);
    };

    return (
        <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4  max-w-md bg-gray-800 p-6 rounded shadow-md text-white">
            <input
                type="text"
                placeholder="Brand"
                {...register("brand")}
                className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}

            <input
                type="number"
                placeholder="Price"
                {...register("price")}
                className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

            <input
                type="number"
                placeholder="Year"
                {...register("year")}
                className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
            >
                Update
            </button>
        </form>
        </div>
    );
}
