import { useEffect } from "react";

const UnMounting = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return <div>I am a Mouse Move Page</div>;
};

export default UnMounting;
