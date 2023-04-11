import PropertyImage from '../property-image/property-image';

type PropertyGalleryProps = {
  images: string[];
}

function PropertyGallery({images}:PropertyGalleryProps):JSX.Element {
  const PropertyGalleryItem = images.slice(0, 6).map((img) => (
    <PropertyImage key={img} img={img} />
  ));

  return (
    <div className="property__gallery">
      {PropertyGalleryItem}
    </div>
  );
}

export default PropertyGallery;
