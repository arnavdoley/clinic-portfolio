import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "AuraHair Clinic | Advanced Hair Restoration & Micro-FUE Surgery",
  description: "Doctor-led hair restoration and natural hairline reconstruction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}