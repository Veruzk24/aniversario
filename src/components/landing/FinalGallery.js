const galleryPhotos = [
  {
    src: 'https://picsum.photos/id/1003/1000/1300',
    alt: 'Recuerdo juntos al atardecer',
    caption: 'Nuestro cielo favorito',
    shape: 'tall',
  },
  {
    src: 'https://picsum.photos/id/1018/1200/760',
    alt: 'Escapada en pareja frente al mar',
    caption: 'Viajes que quiero repetir contigo',
    shape: 'wide',
  },
  {
    src: 'https://picsum.photos/id/1027/900/900',
    alt: 'Foto espontanea y sonrisa',
    caption: 'Risas que me curan todo',
    shape: 'square',
  },
  {
    src: 'https://picsum.photos/id/1035/1000/760',
    alt: 'Caminar de la mano',
    caption: 'Siempre de tu mano',
    shape: 'wide',
  },
  {
    src: 'https://picsum.photos/id/1041/900/1200',
    alt: 'Mirada complice en pareja',
    caption: 'Tu mirada es mi lugar seguro',
    shape: 'tall',
  },
  {
    src: 'https://picsum.photos/id/1060/900/900',
    alt: 'Celebracion especial',
    caption: 'Momentos que se quedan para siempre',
    shape: 'square',
  },
];

export default function FinalGallery() {
  return (
    <section
      id="galeria"
      className="final-gallery"
      aria-label="Galeria final de fotos"
    >
      <header className="final-gallery__header">
        <p className="final-gallery__eyebrow">Nuestro album</p>
        <h2>Galeria final de recuerdos</h2>
        <p>
          Esta seccion es para guardar sus fotos favoritas. Puedes reemplazar
          cada imagen por sus momentos reales.
        </p>
      </header>

      <div className="final-gallery__grid">
        {galleryPhotos.map((photo) => (
          <figure
            className={`gallery-photo gallery-photo--${photo.shape}`}
            key={photo.src}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div
        className="final-gallery__mobile"
        aria-label="Galeria movil deslizable"
      >
        {galleryPhotos.map((photo) => (
          <figure className="gallery-mobile-photo" key={`${photo.src}-mobile`}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
