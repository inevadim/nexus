import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SideBar } from "./widgets/sidebar";
import { Providers } from "./providers";

// Fonts
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

// SEO
export const metadata: Metadata = {
  title: "Nexus App",
  description: "Widgets are great!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div className="app">
          {/* Будет отображаться на вообще всех страницах приложения */}
          <SideBar />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
