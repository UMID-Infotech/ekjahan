import type { Metadata } from "next";
import "./globals.css";

import Navigation from "@/components/navigation/navigation";
// import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Ekjahan Enterprises",
  description: "Powering Homes. Nourishing Lives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
