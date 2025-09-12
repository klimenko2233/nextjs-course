import { createCar } from "../actions/carActions";

export default function CreateCarPage() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Create Car</h1>
                <form action={createCar} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="brand"
                        placeholder="Brand"
                        required
                        className="p-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        required
                        className="p-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="number"
                        name="year"
                        placeholder="Year"
                        required
                        className="p-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

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


