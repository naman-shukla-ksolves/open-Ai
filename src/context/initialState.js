const initialState = {
  isCaptchaValidated: false,
  generationMode: localStorage.getItem("mode") || "image",
  imageViewState: {
    loading: false,
    promptText: "",
    imageSrcs: [],
    width: 512,
    height: 512,
    cfgScale: 7.0,
    numberOfImages: 1,
  },
  textViewState: {
    loading: false,
    promptText: "",
    text: "",
    maxToken: 200,
    temperature: 0.5,
    topP: 1.0,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
  },
};

export default initialState;
