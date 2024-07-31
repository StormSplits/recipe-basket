
import './ImageAndBackLayer.css';

const ImageAndBackLayer = (props) => {

  return (
    <div className="imageAndBackLayer">
          <div className="imageBackLayer">
            <div className="rectangle5" />
            <div className="pexelsShvetsProduction" />
          </div>
          <div className="image">
            <div className="imageRect" />
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
