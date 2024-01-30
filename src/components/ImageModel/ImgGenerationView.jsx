import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Loader from "../shared/Loader";
import PlaceholderImage from "../shared/PlaceholderImage";
import ImagePopup from "./ImagePopup";

const ImgGenerationView = ({ imageSrcs }) => {
  const { state } = useContext(AppContext);
  const { imageViewState } = state;
  const { numberOfImages, loading, promptText } = imageViewState;
  return (
    <div>
      {loading ? (
        <Loader />
      ) : imageSrcs.length > 0 ? (
        <div>
          <h3 className="search-result-header">
            Search Results for{" "}
            <span
              style={{
                textDecoration: "underline",
                fontStyle: "italic",
                color: "#0d6efd",
              }}
            >{`"${promptText}"`}</span>
            :
          </h3>
          <ImagePopup imageSrc={imageSrcs} />
        </div>
      ) : (
        <div className="gallery-image">
          <PlaceholderImage placeholderToRender={Number(numberOfImages)} />
        </div>
      )}
    </div>
  );
};
export default ImgGenerationView;
