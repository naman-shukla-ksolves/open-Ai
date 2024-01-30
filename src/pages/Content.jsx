import TextGenerationView from "../components/TextModel/TextGenerationView";
import InputPromptForm from "../components/shared/InputPromptForm";

const Content = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <TextGenerationView />
        <div className="col-12">
          <div className="form-section rounded-1">
            <InputPromptForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
