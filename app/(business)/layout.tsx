import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import NavBar from "@/components/shared/NavBar";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: "ETurist - Busineess Dashboard",
    description: "Promoveaza-ti afacerea cu ETurist",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={poppins.className + "scrollbar-hide"}>
        <NavBar business={true} />
            {children}
        </body>
        </html>
    );
}
