type PropertyImageProps = {
  img: string;
}

function PropertyImage({img}:PropertyImageProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={img} alt="" />
    </div>
  );
}

export default PropertyImage;
