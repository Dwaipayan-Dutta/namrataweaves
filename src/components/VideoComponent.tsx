import { useRef, useEffect } from "react";
import videoSrc from "../assets/videoplayback.mp4"; // Import your local video file

const VideoComponent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.currentTime = 1.5; // Start from 1.5 seconds

      const handleTimeUpdate = () => {
        if (video.duration - video.currentTime <= 7) {
          video.currentTime = 1.5; // Restart from 1.5 seconds
          video.play();
        }
      };

      // Prevent Picture-in-Picture via JavaScript
      video.disablePictureInPicture = true;

      // Remove right-click context menu (prevents PiP trigger)
      video.addEventListener("contextmenu", (e) => e.preventDefault());

      video.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default VideoComponent;
