import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Note Hub",
  description:
    "Fast, clean, and open to all — Note Hub is your go-to app for quick note-taking.",
  openGraph: {
    title: "Note Hub",
    description:
      "Fast, clean, and open to all — Note Hub is your go-to app for quick note-taking.",
    url: "https://08-zustand-seven.vercel.app/",
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Note Hub App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Note Hub",
    description:
      "Fast, clean, and open to all — Note Hub is your go-to app for quick note-taking.",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          {modal}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </TanStackProvider>
      </body>
    </html>
  );
}
