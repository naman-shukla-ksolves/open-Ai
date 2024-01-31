import { useContext } from "react";
import AppContext from "../../context/AppContext";
import TextGenerationView from "../TextModel/TextGenerationView";
import InputPromptForm from "../shared/InputPromptForm";

const GenerationView = () => {
  const { state } = useContext(AppContext);
  const { generationMode } = state;
  return (
    <div className="image-section">
      <div className={`row ${generationMode === "image" ? "gy-4" : "".trim()}`}>
        <div className="col-12">
          <h3 className="text-center my-4">
            {generationMode === "text" && "Text Generation AI"}
          </h3>
        </div>
        {generationMode === "text" && <TextGenerationView />}
        <div className="col-12">
          <div className="form-section rounded-1">
            <InputPromptForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerationView;
