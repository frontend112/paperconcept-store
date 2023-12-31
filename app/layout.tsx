import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from "./GlobalRedux/provider";
import { ProductsProvider } from "./ProductsProvider";
import { AuthProvider } from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PaperConcept | sklep plastyczny",
  description: "sklep internetowy | stacjonarny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <ProductsProvider>
          <AuthProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </AuthProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
