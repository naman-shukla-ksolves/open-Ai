import {
  SET_CAPTCHA_VALIDATION,
  SET_CFG_SCALE,
  SET_FREQUENCY_PENALTY,
  SET_GENERATED_TEXT,
  SET_GENERATION_MODE,
  SET_HEIGHT,
  SET_IMAGE_LOADING,
  SET_IMAGE_PROMPT,
  SET_IMAGE_SRCS,
  SET_MAX_TOKEN,
  SET_NUMBER_OF_IMAGES,
  SET_PRESENCE_PENALTY,
  SET_STEPS,
  SET_TEMPERATURE,
  SET_TEXT_LOADING,
  SET_TEXT_PROMPT,
  SET_TOP_P,
  SET_WIDTH,
} from "./action.types";

export default (state, action) => {
  switch (action.type) {
    case SET_CAPTCHA_VALIDATION:
      return {
        ...state,
        isCaptchaValidated: action.payload,
      };

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
    case SET_IMAGE_LOADING:
      return {
        ...state,
        imageViewState: {
          ...state.imageViewState,
          loading: action.payload,
        },
      };

    case SET_IMAGE_PROMPT:
      return {
        ...state,
        imageViewState: {
          ...state.imageViewState,
          promptText: action.payload,
        },
      };

    case SET_WIDTH:
      return {
        ...state,
        imageViewState: {
          ...state.imageViewState,
          width: action.payload,
        },
      };

    case SET_HEIGHT:
      return {
        ...state,
        imageViewState: {
          ...state.imageViewState,
          height: action.payload,
        },
      };

    case SET_STEPS:
      return {
        ...state,
        imageViewState: {
          ...state.imageViewState,
          steps: action.payload,
        },
      };

    case SET_CFG_SCALE:
      return {
        ...state,
        imageViewState: {
          ...state.imageViewState,
          cfgScale: action.payload,
        },
      };

    case SET_NUMBER_OF_IMAGES:
      return {
        ...state,
        imageViewState: {
          ...state.imageViewState,
          numberOfImages: action.payload,
        },
      };

    case SET_IMAGE_SRCS:
      return {
        ...state,
        imageViewState: {
          ...state.imageViewState,
          imageSrcs: action.payload,
        },
      };
    default:
      return state;
  }
};
