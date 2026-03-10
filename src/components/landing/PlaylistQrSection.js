const SPOTIFY_PLAYLIST_URL =
  "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M";

const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=900x900&data=${encodeURIComponent(SPOTIFY_PLAYLIST_URL)}`;

export default function PlaylistQrSection() {
  return (
    <section
      id="playlist"
      className="playlist-qr"
      aria-label="Playlist en Spotify"
    >
      <header className="playlist-qr__header">
        <p className="playlist-qr__eyebrow">Nuestro soundtrack</p>
        <h2>Escanea y escucha nuestra playlist</h2>
        <p>
          Aqui puedes poner el QR de su playlist favorita y abrirla en un toque.
          Si quieres otra, solo cambia la URL de Spotify.
        </p>
      </header>

      <div className="playlist-qr__layout">
        <figure className="playlist-qr__frame">
          <img
            src={qrImageUrl}
            alt="QR para abrir playlist de Spotify"
            loading="lazy"
          />
          <figcaption>Escaneame</figcaption>
        </figure>

        <div className="playlist-qr__content">
          <p className="playlist-qr__label">Playlist activa</p>
          <p className="playlist-qr__url">{SPOTIFY_PLAYLIST_URL}</p>

          <a
            className="playlist-qr__cta"
            href={SPOTIFY_PLAYLIST_URL}
            target="_blank"
            rel="noreferrer"
          >
            Abrir en Spotify
          </a>

          <ul
            className="playlist-qr__tips"
            aria-label="Sugerencias de personalizacion"
          >
            <li>Puedes reemplazar esta URL por su playlist real.</li>
            <li>Si ya tienes un QR propio, cambia la variable qrImageUrl.</li>
            <li>Tambien puedes imprimirlo para darselo como detalle.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
