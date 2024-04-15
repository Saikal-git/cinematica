import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";

const Videos = ({ videosId }) => {
  const [videos, setVideos] = useState([]);
  const [more, setMore] = useState(3);
  const getVideos = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${videosId}/videos?api_key=${key}&language=en-US`
    ).then((res) => {
      setVideos(res.data.results);
      console.log(res.data.results);
    });
  };
  useEffect(() => {
    getVideos(API_KEY);
  }, []);

  return (
    <div id="videos">
      <div className="container">
        <div className="videos">
          <div className="videos--card">
            {videos.slice(0, more).map((el) => (
              <iframe
                width="355"
                height="230"
                src={`https://www.youtube.com/embed/${el.key}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
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
