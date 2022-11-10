import { useEffect } from "react";

const UseSetTile = (title) => {
  useEffect(() => {
    document.title = `${title}-pizza House`;
  }, [title]);
};

export default UseSetTile;
