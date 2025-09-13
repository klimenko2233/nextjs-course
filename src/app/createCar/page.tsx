'use client';
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { createCar } from "@/app/actions/carActions";
import {carSchema} from "@/app/validation /carValidation";

interface ICarForm {
    brand: string;
    price: number;
    year: number;
}

export default function CreateCarPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<ICarForm>({
        resolver: joiResolver(carSchema)
    });

    const onSubmit = async (data: ICarForm) => {
        const formData = new FormData();
        formData.append("brand", data.brand);
        formData.append("price", data.price.toString());
        formData.append("year", data.year.toString());

        await createCar(formData);
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Create Car</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Brand"
                            {...register("brand")}
                            className="p-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                        />
                        {errors.brand && (
                            <p className="text-red-500 text-sm">{errors.brand.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="number"
                            placeholder="Price"
                            {...register("price")}
                            className="p-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                        />
                        {errors.price && (
                            <p className="text-red-500 text-sm">{errors.price.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="number"
                            placeholder="Year"
                            {...register("year")}
                            className="p-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                        />
                        {errors.year && (
                            <p className="text-red-500 text-sm">{errors.year.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 rounded-lg shadow-md"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
}





