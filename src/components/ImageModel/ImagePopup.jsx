import { saveAs } from "file-saver";
import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import ModalBox from "../shared/ModalBox";
import PlaceholderImage from "../shared/PlaceholderImage";

const ImagePopup = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { state } = useContext(AppContext);
  const { imageViewState } = state;
  const { imageSrcs, numberOfImages, promptText } = imageViewState;
  let placeholderToRender =
    imageSrcs.length > numberOfImages
      ? 0
      : Math.ceil(numberOfImages - imageSrcs.length);

  const images = imageSrcs.map((image, idx) => ({
    id: idx,
    src: image,
    alt: promptText,
  }));

  const handleDownload = (src, alt) => saveAs(src, alt);
  const handleClose = () => setShowModal(false);
  const handleShowModal = (e) => {
    setSelectedImage(e.target.src);
    setShowModal(true);
  };

  return (
    <div className="container">
      <div className="row gallery-image">
        {images.map((image) => (
          <React.Fragment key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              onClick={handleShowModal}
            />
          </React.Fragment>
        ))}
        <ModalBox
          title={promptText}
          handleAction={() => handleDownload(selectedImage, promptText)}
          showModal={showModal}
          handleClose={handleClose}
        >
          <img className="mx-auto" src={selectedImage} alt={promptText} />
        </ModalBox>
        {Boolean(placeholderToRender) && (
          <PlaceholderImage placeholderToRender={placeholderToRender} />
        )}
      </div>
    </div>
  );
};

export default ImagePopup;
