function NavMenu({ mode, handler }) {
  return (
    <div className="mt-4 d-flex flex-column gap-2 flex-sm-row mt-md-0">
      <button
        title="image generation"
        className={`btn ${
          mode === "image" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={handler}
        data-mode="image"
      >
        Image Gen.
      </button>
      <button
        title="content generation"
        className={`btn ${
          mode === "text" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={handler}
        data-mode="text"
      >
        Contents Gen.
      </button>
    </div>
  );
}

export default NavMenu;
