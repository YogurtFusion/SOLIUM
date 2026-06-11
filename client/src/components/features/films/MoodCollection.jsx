import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Posters from "../../../data/posters";
import { filmsData } from "../../../data/films";

const MoodCollection = () => {
  const { moodid } = useParams();
  const [isLoad, SetIsLoad] = useState(false);
  const [mergedFilms, setMergedFilms] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [loadedImages, setLoadedImages]  = useState({})

  const currentMood = Posters.find((item) => {
    const formattedTitle = item.title.toLowerCase().replace(/\s+/g, "-");

    return formattedTitle === moodid;
  });
  useEffect(() => {
    const fetchMoodData = async () => {
      if (!currentMood) return;
      setIsFetching(true);

      const localMoodFilms = filmsData.filter((film) =>
        film.moods.includes(moodid),
      );
      const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const fetchPromise = localMoodFilms.map(async (localFilm) => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${localFilm.tmdb_id}?language=en-US`,
            options,
          );
          const tmdbData = await response.json();

          return { ...localFilm, tmdb: tmdbData };
        } catch (error) {
          console.log(
            `Failed to fetch TMDB data for ${localFilm.tmdb_id}`,
            error,
          );
          return null;
        }
      });
      const resolvedFilms = await Promise.all(fetchPromise);

      setMergedFilms(resolvedFilms.filter((film) => film !== null));
      setIsFetching(false);
    };
    fetchMoodData();
  }, [moodid, currentMood]);
  if (!currentMood) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
        <h2>No films found for this mood.</h2>
      </div>
    );
  }

  const moodFilms = filmsData.filter((film) => {
    return film.moods.includes(moodid);
  });

  return (
    <main className="bg-neutral-950 text-foreground min-h-screen pb-32 font-body">
      <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-24">
        <header className="flex flex-col justify-center border-b border-white/10 pb-12 mb-12 text-center md:text-left ">
          <h1 className="text-5xl md:text-7xl font-heading uppercase tracking-wider">
            {currentMood.title}
          </h1>
          <p className="text-xs md:text-sm text-muted tracking-widest uppercase mt-6">
            {" "}
            {currentMood.subtitle}{" "}
          </p>
        </header>
        {isFetching ? (
          <div className="text-neutral-500 font-poppins tracking-widest uppercase animate-pulse">
            Pulling archives...
          </div>
        ) : mergedFilms.length > 0 ? (
          <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
            {mergedFilms.map((film) => (
              <div
                className={`relative break-inside-avoid group  overflow-hidden  bg-stone-900 mb-6 cursor-pointer aspect-2/3`}
                key={film.id}
              >
                <img
               
                    src={`https://image.tmdb.org/t/p/w780${film.tmdb.poster_path}`}
                  alt={film.tmdb.title}
                  className={`w-full h-full rounded-sm border border-white/5 shadow-xl object-cover transition-all duration-700 ease-out   ${loadedImages[film.id] ? "opacity-100" : "opacity-0"} `}
                  decoding="async"
                  onLoad={() => setLoadedImages(prev=>({...prev,[film.id]:true}))}
                />
                {!loadedImages[film.id] && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center  w-full h-full bg-stone-950/50">
                    <h3 className="text-center text-sm md:text-base   font-poppins  capitalize text-neutral-500 animate-pulse tracking-widest   ">
                      Image Loading...
                    </h3>
                    <div className="w-1/2 h-px bg-neutral-700 mt-2 overflow-hidden relative">
                      <div className="absolute inset-0 bg-neutral-400 -translate-x-full animate-[shimmer_2s_infinite] w-full"></div>
                    </div>
                  </div>
                )}
                {loadedImages[film.id] && (
                  <div
                    className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent    transition-all duration-500 flex flex-col justify-end p-4 lg:p-6 z-10 opacity-100 `}
                  >
                    <h3 className=" text-base md:text-xl   font-Playfair capitalize text-white mb-1 ">
                      {film.tmdb.title}
                    </h3>
                    <span className=" text-muted text-xs lg:text-sm leading-relaxed tracking-widest mb-2 ">
                      {" "}
                      {film.tmdb.release_date?.substring(0,4)}
                    </span>
                    {/* <span className="text-faint">•</span> */}
                    {/* <span className="uppercase text-muted">{film.runtime} </span> */}
                    {/* <span className="text-faint">•</span> */}
                    {/* <span className="uppercase text-foreground"> </span> */}

                    <Link
                      className=" group/btn relative  border border-white/20 hover:border-white active:border-white w-fit py-1 px-3 md:px-4 md:py-2 text-[10px] md:text-xs uppercase tracking-widest text-white transition-colors duration-300 "
                      to={`/film/${film.id}`}
                    >
                      {/* <span className="relative z-10">
                  
                  <span className="hidden md:block">Explore</span> more
                  </span> */}
                      <p className="relative z-10">know more</p>
                      <div className="absolute inset-0 bg-white scale-x-0  group-active/btn:scale-x-100 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 opacity-10"></div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-neutral-600 font-poppins text-xs tracking-widest col-span-full">
              No films available in this mood yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default MoodCollection;
