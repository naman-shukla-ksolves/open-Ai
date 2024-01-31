const initialState = {
  isCaptchaValidated: false,
  generationMode: localStorage.getItem("mode") || "text",
  textViewState: {
    loading: false,
    promptText: "",
    text: "",
    maxToken: 1000,
    temperature: 0.5,
    topP: 1.0,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
  },
};

export default initialState;
