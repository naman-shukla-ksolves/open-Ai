import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import dispatchHandler from "../../context/dispatchHandler";

const TextFilters = () => {
  const { state, dispatch } = useContext(AppContext);
  const { textViewState } = state;
  const { maxToken, temperature, topP, frequencyPenalty, presencePenalty } =
    textViewState;
  const [textInputState, setTextInputState] = useState({
    maxToken: maxToken,
    temperature: temperature,
    topP: topP,
    frequencyPenalty: frequencyPenalty,
    presencePenalty: presencePenalty,
  });

  const handleChange = (e) => {
    const { id, dataset, value } = e.target;
    setTextInputState({
      ...textInputState,
      [id]: Number(value),
    });
    dispatchHandler(dispatch, dataset.action, Number(value));
  };

  return (
    <>
      <div className="form-group d-grid">
        <label htmlFor="maxToken">Max Token</label>
        <input
          type="range"
          className="form-control-range"
          id="maxToken"
          data-action="SET_MAX_TOKEN"
          min={1}
          max={1000}
          step={1}
          value={textInputState.maxToken}
          onChange={handleChange}
        />
        <span>{textInputState.maxToken}</span>
      </div>
      <div className="form-group d-grid">
        <label htmlFor="temperature">Temperature</label>
        <input
          type="range"
          className="form-control-range"
          id="temperature"
          data-action="SET_TEMPERATURE"
          min={0}
          max={1}
          step={0.1}
          value={textInputState.temperature}
          onChange={handleChange}
        />
        <span>{textInputState.temperature}</span>
      </div>
      <div className="form-group d-grid">
        <label htmlFor="topP">Top P</label>
        <input
          type="range"
          className="form-control-range"
          id="topP"
          data-action="SET_TOP_P"
          min={0}
          max={1}
          step={0.1}
          value={textInputState.topP}
          onChange={handleChange}
        />
        <span>{textInputState.topP}</span>
      </div>
      <div className="form-group d-grid">
        <label htmlFor="frequencyPenalty">Frequency Penalty</label>
        <input
          type="range"
          className="form-control-range"
          id="frequencyPenalty"
          data-action="SET_FREQUENCY_PENALTY"
          min={0}
          max={1}
          step={0.1}
          value={textInputState.frequencyPenalty}
          onChange={handleChange}
        />
        <span>{textInputState.frequencyPenalty}</span>
      </div>
      <div className="form-group d-grid">
        <label htmlFor="presencePenalty">Presence Penalty</label>
        <input
          type="range"
          className="form-control-range"
          id="presencePenalty"
          data-action="SET_PRESENCE_PENALTY"
          min={0}
          max={1}
          step={0.1}
          value={textInputState.presencePenalty}
          onChange={handleChange}
        />
        <span>{textInputState.presencePenalty}</span>
      </div>
    </>
  );
};

export default TextFilters;
