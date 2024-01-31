import {
  SET_FREQUENCY_PENALTY,
  SET_GENERATED_TEXT,
  SET_GENERATION_MODE,
  SET_MAX_TOKEN,
  SET_PRESENCE_PENALTY,
  SET_TEMPERATURE,
  SET_TEXT_LOADING,
  SET_TEXT_PROMPT,
  SET_TOP_P,
} from "./action.types";

export default (state, action) => {
  switch (action.type) {
    case SET_GENERATION_MODE:
      return {
        ...state,
        generationMode: action.payload,
      };
    case SET_TEXT_LOADING:
      return {
        ...state,
        textViewState: {
          ...state.textViewState,
          loading: action.payload,
        },
      };

    case SET_GENERATED_TEXT:
      return {
        ...state,
        textViewState: {
          ...state.textViewState,
          text: action.payload,
        },
      };

    case SET_TEXT_PROMPT:
      return {
        ...state,
        textViewState: {
          ...state.textViewState,
          promptText: action.payload,
        },
      };

    case SET_MAX_TOKEN:
      return {
        ...state,
        textViewState: {
          ...state.textViewState,
          maxToken: action.payload,
        },
      };

    case SET_TEMPERATURE:
      return {
        ...state,
        textViewState: {
          ...state.textViewState,
          temperature: action.payload,
        },
      };

    case SET_TOP_P:
      return {
        ...state,
        textViewState: {
          ...state.textViewState,
          topP: action.payload,
        },
      };

    case SET_FREQUENCY_PENALTY:
      return {
        ...state,
        textViewState: {
          ...state.textViewState,
          frequencyPenalty: action.payload,
        },
      };

    case SET_PRESENCE_PENALTY:
      return {
        ...state,
        textViewState: {
          ...state.textViewState,
          presencePenalty: action.payload,
        },
      };
    default:
      return state;
  }
};
