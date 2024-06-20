import React, { useEffect, useState , useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeTheme } from "../themeSlice";
import { closeMenu } from "../sidebarslice";

import APIcontext from "../APIcontext";


const Watch = (props) => {
  const [searchparam] = useSearchParams();
  const dispatch = useDispatch();
  const [videos, setVideos] = useState(null);
    const [channelData, setchannelData] = useState(null);
  const APIdata =useContext(APIcontext);
  console.log(props.location,"props.location\n", props)
  const { videoData} = props.location.state;

  console.log(videoData);

  // const fetchChannelInfo = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  //          videos  +
  //         "&key=AIzaSyAD0U_Y56eKSds1fgGNpE3Nanp4N7ptAi8"
  //     );
  //     const json = await data.json();
  //     console.log("id got for channel info", json);
  //     setchannelData(json);
  //     console.log("setchannelData updated")
  //   } catch (error) {
  //     console.error("Error fetching videos:", error);
  //   }
  // };
  // // useEffect(() => {
  // //   fetchChannelInfo();
  // //   console.log(channelData)
  // // }, []);

  

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  
 {APIdata.Channelname="achu STUDIOS"}
  return (
    <div>
      <div className="m-10 rounded-lg">
        <iframe
          width="862"
          height="485"
          src={"https://www.youtube.com/embed/" + searchparam.get("v")}
          title="Debouncing vs Throttling | Walmart UI Interview Question"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    <p>{APIdata.Channelname}{APIdata.SubscriberCount}</p>
    <p></p>
      {/* {console.log(channelData) } */}
      {/* <div className="flex ml-12">
      <img className="h-14 w-14 rounded-full mt-3 " src={channelData.items[0].snippet.thumbnails.default.url}/>
      <div>
      <p className="font-bold text-base mt-3 ">{channelData.items[0].snippet.title}</p>
      <p>{channelData.items[0].statistics.subscriberCount} subscribers</p>
      </div>
      <button className="rounded-lg bg-red-200 ml-9 w-24 mt-4 h-11">Subscribe</button>
      <button className="rounded-l-lg bg-red-200 ml-9 w-24 mt-4 h-11 border border-black">LIKE</button>
      <button className="rounded-r-lg bg-red-200  w-24 mt-4 h-11 border border-black">DISLIKE</button>
      <button className="rounded-lg bg-red-200 ml-9 w-24 mt-4 h-11">Download</button>   
      <button className="rounded-full bg-red-200 ml-9 w-12 mt-4 h-11">...</button>  
      </div> */}
    </div>
  );
};

export default Watch;
