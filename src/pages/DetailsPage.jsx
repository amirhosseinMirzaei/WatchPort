import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetDetail } from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Detail.css";

function DetailsPage() {
  const { tmdbId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await GetDetail(tmdbId);
        setDetails(data);
      } catch (error) {
        console.error("Error loading details:", error);
      }
    }

    fetchDetails();
    // console.log(details.backdrop);
  }, [tmdbId]);

  if (!details) return <div className="text-center my-5">Loading...</div>;
  console.log("Poster URL:", details.poster_medium);
  return (
    <div className="container my-4">
      {/* Banner with backdrop */}
      <div
        className="position-relative rounded-3 mb-4"
        style={{
          backgroundImage: `url(${details.backdrop})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        {/* Poster */}
        <img
          src={details.poster}
          alt={details.title}
          className="position-absolute shadow rounded-3"
          style={{
            bottom: "-40px",
            left: "30px",
            width: "180px",
            // overflow: "visible",
            height: "270px",
            objectFit: "cover",
            backgroundColor: "white",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* Content */}
      <div className="mt-5 pt-3">
        <h1>
          {details.title} ({details.year}
          {details.end_year ? ` - ${details.end_year}` : ""})
        </h1>
        <p className="fst-italic text-muted">{details.original_title}</p>

        <div className="row mb-3">
          <div className="col-md-6 col-lg-4 mb-2">
            <strong>Genre:</strong> {details.genre_names?.join(", ")}
          </div>
          <div className="col-md-6 col-lg-4 mb-2">
            <strong>Rating:</strong> {details.user_rating}/10
          </div>
          <div className="col-md-6 col-lg-4 mb-2">
            <strong>Critic Score:</strong> {details.critic_score}%
          </div>
          <div className="col-md-6 col-lg-4 mb-2">
            <strong>Runtime:</strong> {details.runtime_minutes} min
          </div>
          <div className="col-md-6 col-lg-4 mb-2">
            <strong>Language:</strong> {details.original_language}
          </div>
          <div className="col-md-6 col-lg-4 mb-2">
            <strong>Network:</strong> {details.network_names?.join(", ")}
          </div>
          <div className="col-md-6 col-lg-4 mb-2">
            <strong>US Rating:</strong> {details.us_rating}
          </div>
        </div>

        <p>{details.plot_overview}</p>

        {details.trailer && (
          <div className="mb-4">
            <h3>Trailer</h3>
            <a href={details.trailer} target="_blank" rel="noreferrer">
              <img
                src={details.trailer_thumbnail}
                alt="Trailer thumbnail"
                className="img-fluid rounded"
                style={{ maxHeight: "200px" }}
              />
            </a>
          </div>
        )}

        <div>
          <h3>Available on</h3>
          {details.sources?.length > 0 ? (
            <ul className="list-group">
              {details.sources.map((source) => (
                <li key={source.source_id} className="list-group-item">
                  <a href={source.web_url} target="_blank" rel="noreferrer">
                    {source.name} ({source.type}) - {source.format}{" "}
                    {source.price ? `- $${source.price}` : ""}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No streaming sources available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
