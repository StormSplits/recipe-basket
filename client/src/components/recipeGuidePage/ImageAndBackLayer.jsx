
import './ImageAndBackLayer.css';

const ImageAndBackLayer = (props) => {

  return (
    <div className="imageAndBackLayer">
            <div className="rectangle5"> 
            <img
              className="imagePlaceholder" // <img src={recipe.imageUrl} alt={recipe.name} /> Maybe we can fetch image through this. Replace it when needed.
              src={`${props.imgUrl}`}
              alt="Placeholder"
            /> 
          </div>
    </div>
  );
};

export default ImageAndBackLayer;
