import React, { useEffect, useState } from "react";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";
import Shimer from "./Shimer";

const Videocontainer = () => {
  const [videos, setVideos] = useState(null);

  const fetchVideos = async () => {
    try {
      const data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=In&key=" +
          "AIzaSyAD0U_Y56eKSds1fgGNpE3Nanp4N7ptAi8"
      );
      const json = await data.json();
      console.log(json.items);
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  // Link to={"/watch?v=" + video.id}
  return (
    <div className="flex flex-wrap justify-around">
      {videos ? (
        videos.map((video) => (
          // <Link to={"/watch?v=" + video.id}>
          //   {" "}
          //   <Videocard key={video.id} data={video} />
          // </Link>
          <Link
            key={video.id}
            to={{
              pathname: "/watch",
              search: `?v=${video.id}`,
              state: { videoData: video },
            }}
          > 
            <Videocard key={video.id} data={video} />
          </Link>
        ))
      ) : (
        // <p>Loading...</p>
        <Shimer />
      )}
    </div>
  );
};

export default Videocontainer;
