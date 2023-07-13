import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { ModalProvider } from "@/providers/modal-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin E-commerce Dashboard",
  description: "Admin E-commerce Dashboard",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
