import React, { useEffect, useState } from "react";
import MainButton from "../../UI/Button";
import { useParams } from "react-router-dom";
import { filmsData } from "../../../data/films";

const FilmDetail = () => {
  const params = useParams();
  const filmId = params.id;

  const [mergedFilm, setMergedFilm] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const currentFilm = filmsData.find((film) => {
    return film.id === filmId;
  });

  useEffect(() => {
    const fetchFilmDetails = async () => {
      if (!currentFilm) return;
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
        const [movieResponse, creditsResponse, providerResponse] = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/movie/${currentFilm.tmdb_id}?language=en-US`,
            options,
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${currentFilm.tmdb_id}/credits?language=en-US`,
            options,
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${currentFilm.tmdb_id}/watch/providers`,
            options,
          ),

        ]);

        const tmdbData = await movieResponse.json();
        const creditsData = await creditsResponse.json();
        const providersData = await providerResponse.json()

        const directorData = creditsData.crew.find(
          (person) => person.job === "Director",
        );
        const directorName = directorData
          ? directorData.name
          : "Unknown Director";

          const watchLink = providersData.results?.IN?.link ||  providerResponse.results?.US?.link || null;

        setMergedFilm({
          ...currentFilm,
          tmdb: tmdbData,
          director: directorName,
          watchLink:watchLink,
        });
      } catch (e) {
        console.error(
          `Failed to fetch TMDB data for ${currentFilm.tmdb_id}`,
          e,
        );
      } finally {
        setIsFetching(false);
      }
    };
    fetchFilmDetails();
  }, [filmId, currentFilm]);
  const formatRuntime = (min) => {
    if (!min) return "";
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${h}h ${m}m`;
  };
  if (!currentFilm) {
    return (
      <div>
        <h2>Film not found in the archives</h2>
      </div>
    );
  }
  if (isFetching || !mergedFilm) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center text-neutral-500 font-poppins tracking-widest uppercase animate-pulse">
        Accessing Film Archive...
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-bg text-foreground font-body">
      {/* wrap */}
      <div className=" max-w-7xl mx-auto pt-32 lg:pt-20 md:pt-24">
        {/* img */}
        <div className="relative aspect-2/3 md:aspect-video lg:aspect-auto w-full  lg:h-[70vh] bg-stone-900 overflow-hidden px-4 lg:p-0 ">
          <picture>
            <source
              media="(min-width:1024px)"
              srcSet={`https://image.tmdb.org/t/p/w1280${mergedFilm.tmdb.backdrop_path}`}
            />
            <img
            src={`https://image.tmdb.org/t/p/w780${mergedFilm.tmdb.poster_path}`}
              className={`object-cover object-top w-full h-full transition-opacity duration-1000 ease-out ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              alt={`${mergedFilm.tmdb.title} Cinematic Backdrop`}
              onLoad={() => setImageLoaded(true)}
            />
          </picture>

          {!imageLoaded && (
            <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full bg-stone-950/50">
              <div className="w-1/4 h-px bg-neutral-700 mt-2 overflow-hidden relative">
                <div className="absolute inset-0 bg-neutral-400 -translate-x-full animate-[shimmer_2s_infinite] w-full"></div>
              </div>
            </div>
          )}
        </div>

        {/* img body */}
        <div className="flex flex-col gap-8 p-6 md:p-12 max-w-7xl mx-auto">
          <div className="flex flex-col gap-1">
            <h1 className="capitalize text-4xl font-heading font-bold tracking-tight">
              {mergedFilm.tmdb.title}
            </h1>
            <div className="flex items-center gap-2 text-sm">
              <span className=" text-muted">
                {" "}
                {mergedFilm.tmdb.release_date?.substring(0, 4)}{" "}
              </span>
              <span className="text-faint">•</span>
              <span className="uppercase text-muted">
                {formatRuntime(mergedFilm.tmdb.runtime)}{" "}
              </span>
              <span className="text-faint">•</span>
              <span className="uppercase text-foreground">
                {mergedFilm.director}
              </span>
            </div>
          </div>
          {/* <div className=""> */}
          <div className="border-l border-border w-full h-full pl-4">
            <p className="italic text-pretty text-muted leading-relaxed ">
              {mergedFilm.one_liner}
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed max-w-3xl">
              {mergedFilm.tmdb.overview}{" "}
            </p>
          </div>

          {/* tags */}
          <div className=" max-w-2xs flex flex-col gap-6">
            <div className=" flex flex-col gap-4">
              <span className="uppercase text-sm text-faint  ">Mood</span>

              <div className="flex flex-wrap gap-2 items-center justify-start text-xs leading-relaxed tracking-widest">
                {mergedFilm.moods.map((mood, idx) => (
                  <span
                    key={idx}
                    className="uppercase border border-foreground px-1 py-0.5"
                  >
                    {mood}
                  </span>
                ))}
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <span className="uppercase text-sm text-faint  ">Genre</span>
              <div className="flex flex-wrap gap-2 items-center justify-start text-xs leading-relaxed tracking-widest">
                {mergedFilm.tmdb.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="uppercase bg-subtle border-border px-3 py-1"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="mt-4 mx-auto w-full ">
            {mergedFilm.watchLink?(
              <a href={mergedFilm.watchLink}
              target="_blank"
              rel="noopener noreferrer"
              >

              <MainButton title={"Where to watch "} px={"px-8"} py={"py-4"} />
              </a>
              
            ):(
              
              <div className="opacity-50 cursor-not-allowed">
                <MainButton title={"Unavailable to stream"} px={"px-8"} py={"py-4"} />
              </div>
            )}
          </div>
          <div />
        </div>
      </div>
    </main>
  );
};

export default FilmDetail;
