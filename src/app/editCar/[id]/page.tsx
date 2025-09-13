import { getAllCars } from "@/app/services/carsService";
import EditCarClientForm from "@/components/edit-form/EditCarClientForm";

interface Props {
    params: { id: string };
}

export default async function EditCarPage({ params }: Props) {
    const { id } = params;
    const cars = await getAllCars();
    const car = cars.find(c => c.id === Number(id));

    if (!car) return <p>Car not found</p>;

    return <EditCarClientForm car={car} />;
}

