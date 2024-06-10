
import { useState } from "react";

export const LinkAComponent = ({ children, icon, color, color_hover, url }) => {

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  const normal = {
    color: color,
    textDecoration: "none",
    padding: "0 15px 0 0",
    cursor: "pointer"
  };

  const hoverStyle = {
    color: color_hover, 
    padding: "0 15px 0 0",
    cursor: "pointer"
  };

  const style = hover ? hoverStyle : normal

  return (
    <div>
      <a 
        href={url} 
        style={style}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        target="_blank" 
      >
        {children} {icon}
      </a>
    </div>
  );
};
