"use server";

import { redirect } from "next/navigation";
import {createCarApi} from "@/app/services/carsService";

export async function createCar(formData: FormData): Promise<void> {
    const brand = formData.get("brand") as string;
    const price = Number(formData.get("price"));
    const year = Number(formData.get("year"));

    await createCarApi({ brand, price, year });

    redirect("/");
}

