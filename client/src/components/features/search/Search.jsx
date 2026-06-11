import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "../../UI/Card";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const navigate = useNavigate();

  const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);

  const toggleMobileOverlay = (id) => {
    setActiveCardId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const fetchSearchResult = async () => {
      if (!query) return;
      setIsFetching(true);

      const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`,
          options,
        );
        const data = await response.json();
        setResults(data.results || []);
      } catch (e) {
        console.error("Failed to fetch search results", e);
      } finally {
        setIsFetching(false);
      }
    };
    fetchSearchResult();
  }, [query]);

  return (
    <main className="min-h-screen bg-bg text-foreground font-body pt-32 lg:pt-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newQuery = e.target.searchQuery.value.trim();
            if (newQuery) {
              setSearchParams({ q: newQuery });
            }
          }}
          className="flex items-center w-full max-w-xl mx-auto mb-12 border-b border-border/50 text-foreground gap-3"
        >
          <Search size={20} strokeWidth={1.5} className="text-muted" />
          <input
            name="searchQuery"
            type="text"
            defaultValue={query || ""}
            className="w-full bg-transparent outline-none py-3 text-lg font-poppins tracking-wide focus:border-foreground"
            placeholder="Search the archives..."
          />
          <button type="submit" className="hidden">
            Submit
          </button>
        </form>
        {!query ? (
          <div>
            <div className="flex flex-col items-center justify-center pt-24 text-center">
              <p className="text-muted font-poppins tracking-widest text-sm uppercase">
                Awaiting your command. Enter a search term to explore the
                archives.
              </p>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl md:text-4xl font-heading font-bold tracking-tight mb-8">
              Search results for
              <span className="text-muted italic">"{query}"</span>
            </h1>

            {isFetching ? (
              <div className="animate-pulse text-faint uppercase tracking-widest text-sm">
                Searching archives...
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {results.map((film) => (
                  <Card
                    key={film.id}
                    id={film.id}
                    title={film.title}
                    img={
                      film.poster_path
                        ? `https://image.tmdb.org/t/p/w780${film.poster_path}`
                        : null
                    }
                    subtitle={film.release_date?.substring(0, 4) || "UNKOWN"}
                    aspectRatio={"2/3"}
                    activeId={activeCardId}
                    toggleMobileOverlay={toggleMobileOverlay}
                    linkPath={`/search/${film.id}`}
                  />
                ))}
                {results.length === 0 && query && (
                  <p className="text-muted col-span-full font-poppins tracking-widest text-sm uppercase">
                    No films found in the archives.
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default SearchResults;
