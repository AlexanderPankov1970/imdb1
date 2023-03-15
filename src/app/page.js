// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "./page.module.css";
// const inter = Inter({ subsets: ["latin"] });
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
// console.log(3, API_KEY);
//const API_KEY = "dbafdc4f1cbf331c36974abc1fd9c6ce";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;
  //console.log(2, results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}

// const res = await fetch(
//   `https://api.themoviedb.org/3/movie/550?api_key=dbafdc4f1cbf331c36974abc1fd9c6ce`
// );
// const res = await fetch(
//   `https://api.themoviedb.org/3/movie/${genre}?api_key=${API_KEY}&language=en-US&page=1`
// );
