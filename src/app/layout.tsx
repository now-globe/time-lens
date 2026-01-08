import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProviders from "./provider";
import { cn } from "@/lib/utils";
import { METADATA } from "@/configs/metadata";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: METADATA.title,
    description: METADATA.description,
    keywords: METADATA.keywords,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn("antialiased", geistSans.variable, geistMono.variable)}
            >
                <AppProviders>
                    {children}
                </AppProviders>
            </body>
        </html>
    );
}
