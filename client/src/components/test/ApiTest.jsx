import { colgroup, div } from "framer-motion/client";
import { WatchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const ApiTest = () => {
  const [filmData, SetFilmData] = useState(null);

  useEffect(() => {
    const fetchTestFilm = async () => {
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
          "https://api.themoviedb.org/3/movie/11?language=en-US",
          options,
        );
        const data = await response.json();

        SetFilmData(data);
        console.log(`TDMB DATA: ${data}`);
      } catch (error) {
        console.error(`API FETCH Failed ${error}`);
      }
    };
    fetchTestFilm();
  }, []);

  return (
    <div className="p-12 text-white bg-black min-h-screen mt-24 lg:mt-20">
      <h1 className="text-3xl text-neutral-500 mb-4">API Connection Test</h1>
      {filmData ? (
        <div>
          <h2 className="text-5xl font-heading uppercase">{filmData.title}</h2>
          <p className="tracking-widest mt-2">{filmData.overview}</p>
        </div>
      ) : (
        <p>Contacting TMDB...</p>
      )}
    </div>
  );
};

export default ApiTest;
