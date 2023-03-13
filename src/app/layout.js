import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDB1 project",
  description: "This is IMDB clobe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {/* NavBar */}
        {/* SearchBox */}
        {children}
      </body>
    </html>
  );
}
