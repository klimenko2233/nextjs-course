import type { Metadata } from "next";
import "./globals.css";
import Menu from "../components/Menu";

export const metadata: Metadata = {
    title: "Cars App",
    description: "Cars CRUD with Next.js",
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <Menu />
        <main className="p-6">{children}</main>
        </body>
        </html>
    );
}

