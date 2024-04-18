import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { LanguageContext } from "../../context";

const Videos = ({ videosId }) => {
  const [videos, setVideos] = useState([]);
  const [more, setMore] = useState(3);
  const {language} = useContext(LanguageContext)
  const getVideos = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${videosId}/videos?api_key=${key}&language=${language}`
    ).then((res) => {
      setVideos(res.data.results);
      // console.log(res.data.results);
    });
  };
  useEffect(() => {
    getVideos(API_KEY);
  }, [language]);

  return (
    <div id="videos">
      <div className="container">
        <div className="videos">
          <div className="videos--card">
            {videos.slice(0, more)?.map((el, idx) => (
              <iframe
                key={idx}
                width="355"
                height="230"
                src={`https://www.youtube.com/embed/${el.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ))}
          </div>
          {videos.length <= 3 ? null : (
            <button
              onClick={() => setMore(videos.length > more ? more + 3 : 3)}
            >
              {videos.length > more ? "more" : "short"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videos;
