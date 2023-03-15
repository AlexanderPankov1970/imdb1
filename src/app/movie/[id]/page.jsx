import Image from "next/image";
import React from "react";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full">
      <div
        className="p-4 md:pt-8 flex flex-col md:flex-row
      items-center content-center max-w-6xl mx-auto
      md:space-x-6"
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="Movie poster"
          className="rounded-lg"
          //сохраняем ширину и высоту изображения :gg11 24min
          style={{ maxWidth: "100%", height: "100%" }}
          // как показать спиннер при загрузке картинки:
          placeholder="blur"
          blurDataURL="/spinner.svg"
        ></Image>
        <div className="p-2">
          <h1 className="text-lg m-3 font-bold">{movie.title || movie.name}</h1>
          <p className="m-3  font-normal text-md text-gray-600">
            {movie.overview}
          </p>
          <p className="m-3">
            <span className="font-semibold pr-2">Date Released: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="m-3">
            <span className="font-semibold pr-2">Rating: </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

// export default function MoviePage(props) {
//   console.log(55, props);
//   const movieId = props.params.id;
//   console.log(777, movieId);
//   return <div>page1</div>;
// }

// export default function MoviePage({ params }) {
//   console.log(55, params);
//   const movieId = params.id;
//   console.log(777, movieId);
//   return <div>page1</div>;
// }
