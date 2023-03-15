import React from "react";
import { MdRestartAlt } from "react-icons/md";

export default function Results({ results }) {
  return (
    <div className="text-green-700">
      {results?.map?.((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}
