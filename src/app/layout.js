import { Bricolage_Grotesque, Playfair_Display } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "700", "800"],
});

export const metadata = {
  title: "ChorronquisAniversario",
  description: "4 años de aniversario.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${bricolage.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
