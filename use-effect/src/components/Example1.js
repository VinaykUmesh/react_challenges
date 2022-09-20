import React, { useEffect, useState } from "react";

const Example1 = () => {
  const [resize, setResize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () =>
    setResize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [resize]);

  return (
    <div>
      <h3>{resize.height}x{resize.width}</h3>
    </div>
  );
};

export default Example1;
