const InputPrompt = ({ value, handler, isLoading, error }) => {
  return (
    <>
      <div className="col-lg-10">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a prompt for the AI to generate content"
          value={value}
          onChange={handler}
          disabled={isLoading ? true : false}
        />
      </div>
      <div className="col-lg-2">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={
            (value === "" ? true : false) ||
            (error ? true : false) ||
            (isLoading ? true : false)
          }
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default InputPrompt;
