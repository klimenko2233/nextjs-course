import Link from "next/link";

export default function Menu() {
    return (
        <nav className="flex gap-4 p-4">
            <Link href="/">Cars</Link>
            <Link href="/createCar">Create Car</Link>
        </nav>
    );
}
