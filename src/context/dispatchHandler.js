function dispatchHandler(handler, actionType, payload) {
  handler({
    type: actionType,
    payload: typeof payload === "string" ? payload.trim() : payload,
  });
}

export default dispatchHandler;
