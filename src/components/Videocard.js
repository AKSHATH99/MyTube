import React from "react";

const Videocard = ({ data }) => {

function formatYouTubeViews(views) {
  const abbreviations = ["", "k", "M", "B", "T"]; // Add more abbreviations as needed

  for (let i = abbreviations.length - 1; i >= 0; i--) {
    const decimal = Math.pow(10, i * 3);

    if (views >= decimal) {
      return (views / decimal).toFixed(1).replace(/\.0$/, '') + abbreviations[i];
    }
  }

  return views.toString();
}

// Example usage:
// const viewCount = 1603170;
// const formattedViews = formatYouTubeViews(viewCount);
// console.log(formattedViews); // Output: "1.6M"


  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="w-96 h-72 m-8  bg-slate-50 rounded-md">
        <p>
          <img
            className="w-full  rounded-lg"
            src={data.snippet.thumbnails.medium.url}
          />
          <p className="font-bold">{data.snippet.title}</p>
          <p className=" m-1">{data.snippet.channelTitle} .  {formatYouTubeViews(data.statistics.viewCount)} views</p>
          {/* <p className="m-1">
           
          </p> */}
        </p>
      </div>
    );
  }
};

export default Videocard;
