import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

export const metadata = {
  title: "IMDB1 project",
  description: "This is IMDB clobe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* NavBar */}
          <NavBar />
          {/* SearchBox */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
