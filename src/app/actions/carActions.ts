"use server";

import { redirect } from "next/navigation";
import {createCarApi, deleteCarApi, editCarApi} from "@/app/services/carsService";

export async function createCar(formData: FormData): Promise<void> {
    const brand = formData.get("brand") as string;
    const price = Number(formData.get("price"));
    const year = Number(formData.get("year"));

    await createCarApi({ brand, price, year });

    redirect("/");
}

export async function deleteCar(formData:FormData): Promise<void>{
    const id = Number(formData.get("id"));
    await deleteCarApi(id);
    redirect("/");
}

export async function editCar(formData:FormData): Promise<void>{
    const id = Number(formData.get("id"));
    const brand = formData.get("brand") as string;
    const price = Number(formData.get("price"));
    const year = Number(formData.get("year"));
    await editCarApi(id,{brand,price,year});
    redirect("/");
}
