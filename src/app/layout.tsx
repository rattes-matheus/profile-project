
import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Profile",
  description: "A personal profile page",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
