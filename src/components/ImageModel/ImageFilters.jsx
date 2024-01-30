/* 
  ImageFilters component is used to render the image filters
  for the image model. It is used in the ImageModel component.
*/

import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import dispatchHandler from "../../context/dispatchHandler";

const ImageFilters = () => {
  const { state, dispatch } = useContext(AppContext);
  const { imageViewState } = state;
  const { width, height, cfgScale, numberOfImages } = imageViewState;
  const [imageInputState, setImageInputState] = useState({
    width: width,
    height: height,
    cfgScale: cfgScale,
    numberOfImages: numberOfImages,
  });

  /* 
  @desc - handleChange function is used to handle the change in the
  image filters. It is used to update the imageInputState and 
  dispatch the action to update the state in imageViewState.
  */
  const handleChange = (e) => {
    const { id, dataset, value } = e.target;
    setImageInputState({
      ...imageInputState,
      [id]: value,
    });
    dispatchHandler(dispatch, dataset.action, Number(value));
  };

  return (
    <>
      <div className="form-group d-grid">
        <label htmlFor="width">Width</label>
        <input
          type="range"
          className="form-control-range"
          id="width"
          data-action="SET_WIDTH"
          min={512}
          max={1024}
          step={512}
          value={imageInputState.width}
          onChange={handleChange}
        />
        <span id="widthrangeval">{imageInputState.width}</span>
      </div>
      <div className="form-group d-grid">
        <label htmlFor="height">Height</label>
        <input
          type="range"
          className="form-control-range"
          id="height"
          data-action="SET_HEIGHT"
          min={512}
          max={1024}
          step={512}
          value={imageInputState.height}
          onChange={handleChange}
        />
        <span id="heightrangeval">{imageInputState.height}</span>
      </div>
      <div className="form-group d-grid">
        <label htmlFor="cfgScale">CFG Scale</label>
        <input
          type="range"
          className="form-control-range"
          id="cfgScale"
          data-action="SET_CFG_SCALE"
          min={0}
          max={14}
          step={0.1}
          value={imageInputState.cfgScale}
          onChange={handleChange}
        />
        <span id="cfgscalerangeval">{imageInputState.cfgScale}</span>
      </div>
      {/* TODO : For steps */}
      {/* <div className="form-group">
        <label htmlFor="step">Step</label>
        <input type="range" className="form-control-range" id="step" value={} />
        <span id="steprangeval">{steps}</span>
      </div> */}
      <div className="form-group d-grid">
        <label htmlFor="numberOfImage">Number of Images</label>
        <input
          type="range"
          className="form-control-range"
          data-action="SET_NUMBER_OF_IMAGES"
          id="numberOfImages"
          min={1}
          max={5}
          step={1}
          value={imageInputState.numberOfImages}
          onChange={handleChange}
        />
        <span id="imagerangeval">{imageInputState.numberOfImages}</span>
      </div>
    </>
  );
};

export default ImageFilters;
