import React from "react";
import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="text-green-700 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-ww-6xl mx-auto py-4">
      {results.map?.((result) => (
        //<div key={result.id}>{result.original_title}</div>
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
