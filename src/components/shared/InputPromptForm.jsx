import { useContext, useState } from "react";
import getGeneratedContent from "../../api/getGeneratedContent";
import AppContext from "../../context/AppContext";
import {
  SET_GENERATED_TEXT,
  SET_IMAGE_LOADING,
  SET_IMAGE_PROMPT,
  SET_IMAGE_SRCS,
  SET_TEXT_LOADING,
  SET_TEXT_PROMPT,
} from "../../context/action.types";
import dispatchHandler from "../../context/dispatchHandler";
import { toastTooltip } from "../../utils/toastTooltip";
import InputPrompt from "./InputPrompt";


async function handleTextGenerationRequest(
  mode,
  handler,
  contentState,
  currentPromptState,
  setCurrentPromptState,
  setError
) {
  let data;
  dispatchHandler(handler, SET_TEXT_LOADING, true); // set text loading to true
  dispatchHandler(handler, SET_TEXT_PROMPT, currentPromptState); // set text prompt to user input
  toastTooltip("AI engine is processing your prompt, Please Wait....", "info");
  const bodyParams = {
    question: currentPromptState,
    max_token: parseFloat(contentState.maxToken),
    temperature: parseFloat(contentState.temperature),
    top_p: parseFloat(contentState.topP),
    frequency_penalty: parseFloat(contentState.frequencyPenalty),
    presence_penalty: parseFloat(contentState.presencePenalty),
  };
  await getGeneratedContent(mode, bodyParams)
    .then((res) => {
      data = res;
      dispatchHandler(handler, SET_TEXT_LOADING, false); // set content loading to false
      dispatchHandler(handler, SET_GENERATED_TEXT, data.text); // set generated text to received content
    })
    .catch(async (err) => {
      toastTooltip(err.message, "error");
      dispatchHandler(handler, SET_GENERATED_TEXT, ""); // set generated text to empty string | default
      dispatchHandler(handler, SET_TEXT_LOADING, false); // set image loading to false
    })
    .finally(() => {
      setCurrentPromptState("");
      setError(false);
    });
}

async function handleImageGenerationRequest(
  mode,
  handler,
  contentState,
  currentPromptState,
  setCurrentPromptState,
  setError
) {
  dispatchHandler(handler, SET_IMAGE_LOADING, true); // set image loading to true
  dispatchHandler(handler, SET_IMAGE_PROMPT, currentPromptState); // set input prompt to user input
  let data;
  toastTooltip(
    "AI engine is processing your prompt, Please Wait....",
    "info",
    5000
  );
  const bodyParams = {
    prompt: currentPromptState,
    width: parseFloat(contentState.width),
    height: parseFloat(contentState.height),
    cfg_scale: parseFloat(contentState.cfgScale),
    samples: parseFloat(contentState.numberOfImages),
  };
  await getGeneratedContent(mode, bodyParams)
    .then((res) => {
      data = res;
      dispatchHandler(handler, SET_IMAGE_LOADING, false);
      dispatchHandler(handler, SET_IMAGE_SRCS, JSON.parse(data['data']).imageUrls);
    })
    .catch(async (err) => {
      toastTooltip(err.message, "error");
      dispatchHandler(handler, SET_IMAGE_SRCS, []);
      dispatchHandler(handler, SET_IMAGE_LOADING, false);
    })
    .finally(() => {
      setCurrentPromptState("");
      setError(false);
    });
}

function isInputPropmtEmpty(currentPromptState, promptErrorHandler) {
  currentPromptState.trim() === "" && promptErrorHandler(true);
  return currentPromptState.trim() === "" ? true : false;
}

const InputPromptForm = () => {
  const [textInputField, setTextInputField] = useState("");
  const [imageInputField, setImageInputField] = useState("");
  const [error, setError] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const { generationMode, textViewState, imageViewState } = state;
  const { loading: imgLoading } = imageViewState;
  const { loading: textLoading } = textViewState;

  const handleChange = (e) => {
    generationMode === "text"
      ? setTextInputField(e.target.value)
      : setImageInputField(e.target.value);
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (generationMode === "text") {
      !isInputPropmtEmpty(textInputField, setError) &&
        handleTextGenerationRequest(
          generationMode,
          dispatch,
          textViewState,
          textInputField,
          setTextInputField,
          setError
        );
    } else {
      !isInputPropmtEmpty(imageInputField, setError) &&
        handleImageGenerationRequest(
          generationMode,
          dispatch,
          imageViewState,
          imageInputField,
          setImageInputField,
          setError
        );
    }
  };

  return (
    <form className="row gy-3" onSubmit={handleSubmit}>
      {generationMode === "text" ? (
        <InputPrompt
          value={textInputField}
          handler={handleChange}
          isLoading={textLoading}
          error={error}
        />
      ) : (
        <InputPrompt
          value={imageInputField}
          handler={handleChange}
          isLoading={imgLoading}
          error={error}
        />
      )}
      {error && (
        <span className="text-danger ms-2 fw-medium">
          Seacrh prompt can not be empty!
        </span>
      )}
    </form>
  );
};

export default InputPromptForm;
