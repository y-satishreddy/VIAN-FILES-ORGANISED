import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const RouteWithSEO = ({ title, description, keywords }) => {
  const location = useLocation();
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let descTag = document.querySelector("meta[name='description']");
      if (!descTag) {
        descTag = document.createElement("meta");
        descTag.name = "description";
        document.head.appendChild(descTag);
      }
      descTag.content = description;
    }
    if (keywords) {
      let keywordsTag = document.querySelector("meta[name='keywords']");

      if (!keywordsTag) {
        keywordsTag = document.createElement("meta");
        keywordsTag.name = "keywords";
        document.head.appendChild(keywordsTag);
      }

      keywordsTag.content = keywords;
    }
  }, [location.pathname, title, description, keywords]);
  return null;
};
export default RouteWithSEO;
