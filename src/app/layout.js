import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";

const figSans = Figtree({
  variable: "--font-fig-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashify-lite - Waitlist Page",
  description: "Created by DesignOrah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
