const ImageCard = ({ imageSrc, altText }) => {
  return (
    <div className="image-card">
      <div className="image-card-img rounded-1">
        <img className="img-fluid" src={imageSrc} alt={altText} />
      </div>
    </div>
  );
};

export default ImageCard;
