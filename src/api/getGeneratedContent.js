async function getGeneratedContent(mode, paramObj) {
  const query = mode === "text" ? "text/generate-text" : query;
  let data;
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${query}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(paramObj),
  });

  if (!res.ok || !res.status) {
    const errMessage = "There was an error. Please try again.";
    throw new Error(errMessage);
  } else {
    data = await res.json();
  }
  return data;
}

export default getGeneratedContent;
