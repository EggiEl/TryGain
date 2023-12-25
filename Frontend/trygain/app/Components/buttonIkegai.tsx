


import { useState, useEffect } from "react";

interface IkegaiButtonProps {
  name: string;
  lifting_up: (buttonName: string) => void;
}

export default function IkegaiButton({ name, lifting_up } : IkegaiButtonProps)
 {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      console.log("Css Blau");
    } else {
      console.log("Css keine Farbe");
    }
  }, [clicked]);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
    lifting_up(name);
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: clicked ? "blue" : "transparent" }}>
      {name}
    </button>
  );
};


