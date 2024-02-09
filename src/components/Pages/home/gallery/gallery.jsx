import Advertissements from "../../../../assets/advertissements.json";
import Card from "./cards";

console.log(Advertissements);
function Gallery() {
  return (
    <section className="sectionGallery">
      <ul>
        {Advertissements.map((advertissement) => (
          <Card
            key={advertissement.id}
            title={advertissement.title}
            cover={advertissement.cover}
          />
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
