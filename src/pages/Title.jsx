import React, { useState, useEffect } from "react";
import { autocompleteSearch } from "../services/api";
import "../css/Title.css";

export const Title = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [initialItems, setInitialItems] = useState([]);
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }

      setLoading(true);
      autocompleteSearch(query)
        .then((data) => setResults(data))
        .catch(() => setError("خطا در جستجو"))
        .finally(() => setLoading(false));
    }, 500); // 500ms تاخیر برای debounce

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const loadInitial = async () => {
    setLoading(true);
    try {
      const data = await autocompleteSearch("game"); // یا هر کلمه‌ای که چندتا آیتم برگردونه
      setInitialItems(data.slice(0, 40)); // فرضاً ۵ آیتم اول
    } catch (e) {
      setError("خطا در دریافت داده‌های اولیه");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadInitial();
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        initialItems.length === 0 ? 0 : (prev + 1) % initialItems.length
      );
    }, 3000); // هر ۳ ثانیه یکبار حرکت کند

    return () => clearInterval(interval); // Cleanup هنگام خروج از کامپوننت
  }, [initialItems]);

  return (
    <div className="external-container">
      <div className="carousel-wrapper">
        {initialItems.map((item, index) => {
          const position =
            index === currentIndex
              ? "center"
              : index ===
                (currentIndex - 1 + initialItems.length) % initialItems.length
              ? "left"
              : index === (currentIndex + 1) % initialItems.length
              ? "right"
              : "hidden";

          return (
            <div key={item.id} className={`carousel-item ${position}`}>
              <div className="carousel-image-container">
                <img src={item.image_url} alt={item.name} />
                <div className="carousel-item-name">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search movies, series ,actors ,..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setError(null);
          }}
        />
      </div>

      {loading && <p>در حال جستجو...</p>}
      {error && <p className="error-message">{error}</p>}

      <ul className="results-list">
        {results.map((item) => (
          <li key={item.id}>
            <img
              src={item.image_url}
              alt={item.name}
              style={{ width: "50px", marginRight: "10px" }}
            />
            {item.name} ({item.year}) - {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
};
