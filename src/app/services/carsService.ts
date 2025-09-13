import {ICar} from "@/models/ICar";

const API_URL = "http://owu.linkpc.net/carsAPI/v1";


export type CarInput = Omit<ICar, "id">;

export async function getAllCars(): Promise<ICar[]> {
    const res = await fetch(`${API_URL}/cars`, { cache: "no-store" });
    if (!res.ok) throw new Error("Error fetching cars");
    return res.json();
}

export async function createCarApi(input: CarInput): Promise<ICar> {
    const res = await fetch(`${API_URL}/cars`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
    });
    if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Error creating car: ${errText}`);
    }
    return res.json();
}

export async function deleteCarApi(id:number):Promise<void>{
    const res = await fetch(`${API_URL}/cars/${id}`,{
        method: "DELETE",
        cache: "no-store"
    });
    if (!res.ok) throw new Error("Error deleting car");
}

export async function editCarApi(id:number, input:CarInput):Promise<ICar>{
    const res = await fetch(`${API_URL}/cars/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
    });
    if (!res.ok) throw new Error("Error editing car");
    return res.json();
}