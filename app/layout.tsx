import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from "./GlobalRedux/provider";

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
    <html>
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
