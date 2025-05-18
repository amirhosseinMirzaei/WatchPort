import React from "react";
import { SourceCard } from "./SourceCard";
import "../css/SourcesList.css";
export const SourcesList = ({ sources }) => {
  return (
    <div className="sources-grid">
      {sources.map((source) => {
        return <SourceCard key={source.id} source={source}></SourceCard>;
      })}
    </div>
  );
};
export default SourcesList;
