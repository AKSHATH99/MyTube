import { createContext } from "react";

//  const fetchVideos = async () => {
//     try {
//       const data = await fetch(
//         "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=In&key=" +
//           "AIzaSyAD0U_Y56eKSds1fgGNpE3Nanp4N7ptAi8"
//       );
//       const json = await data.json();
//       console.log("id got at fetchvideos", json.items[0].snippet.channelId);
//       setVideos(json.items[0].snippet.channelId);
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };

const APIcontext = createContext({
  user: {
    Channelname: "Marvel studios",
    SubscriberCount: "1M",
  },
});

export default APIcontext;
