import type { Metadata } from "next";
import "./globals.css";
import Topbar from "./components/common/topbar";

export const metadata: Metadata = {
  title: "Ctlst Screenwriter",
  description: "The only companion a screenwriter needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Topbar />
        {children}
      </body>
    </html>
  );
}
