"use client";
import ReactPlayer from "react-player";




const Video = (props: any) => {
  const { projecTitle } = props;
  let video = null;
  let videoUrl = "";
  if (projecTitle === "Cassandra") {
    videoUrl = "https://youtu.be/AnPb2CaUXgU";
  } else if (projecTitle === "Cassandra AR") {
    videoUrl = "https://youtube.com/shorts/CsCDkSvwxQo?feature=share";
  } else if (projecTitle === "495 days of Covid in Greece") {
    videoUrl = "https://youtu.be/aOYoCL-3PQI";
  }

  if (
    projecTitle === "Cassandra" ||
    projecTitle === "Cassandra AR" ||
    projecTitle === "495 days of Covid in Greece"
  ) {
    video = (
      <ReactPlayer
        width={""}
        height={"60vh"}
        className="inset-0"
        url={videoUrl}
        volume={1}
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
              controls: 0,
            },
          },
        }}
      />
    );
  }

  return (
    <div className="mt-20">{video}</div>
  );
};

export default Video;
