import Advertissements from "../../../../assets/advertissements.json";
import Card from "./cards";

function Gallery() {
  return (
    <section className="sectionGallery">
      <ul>
        {Advertissements.map((advertissement) => (
          <Card
            location={advertissement.location}
            idtf={advertissement.id}
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
