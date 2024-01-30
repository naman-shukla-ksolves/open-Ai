import placeholderImage from '../../assets/images/placeholder.png'
import ImageCard from '../ImageModel/ImageCard'

const PlaceholderImage = ({ placeholderToRender }) => {
  return Array(placeholderToRender)
    .fill(null)
    .map((_, idx) => <ImageCard imageSrc={placeholderImage} key={idx} />)
}

export default PlaceholderImage
