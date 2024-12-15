import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

const sfProDisplay = localFont({
  src: [
    { path: "./fonts/SF-Pro-Display-Thin.woff", weight: "100" },
    { path: "./fonts/SF-Pro-Display-Light.woff", weight: "300" },
    { path: "./fonts/SF-Pro-Display-Regular.woff", weight: "400" },
    { path: "./fonts/SF-Pro-Display-Medium.woff", weight: "500" },
    { path: "./fonts/SF-Pro-Display-Semibold.woff", weight: "600" },
    { path: "./fonts/SF-Pro-Display-Bold.woff", weight: "700" },
    { path: "./fonts/SF-Pro-Display-Heavy.woff", weight: "800" },
    { path: "./fonts/SF-Pro-Display-Black.woff", weight: "900" },
  ],
  variable: "--font-sf-pro-display",
});

export const metadata: Metadata = {
  title: "Xapisoft",
  description: "We create everything from scratch exactly how you need it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={sfProDisplay.variable}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
