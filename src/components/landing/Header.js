const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#timeline", label: "Nuestra historia" },
  { href: "#suenos", label: "Sueños juntas" },
  { href: "#cupones", label: "Cupones" },
  { href: "#playlist", label: "Playlist" },
  { href: "#galeria", label: "Galeria" },
  { href: "#final", label: "Para siempre" },
];

export default function Header() {
  return (
    <header className="corp-header">
      <div className="corp-header__topline" aria-hidden="true" />

      <div className="corp-header__bar">
        <a
          href="#inicio"
          className="corp-brand"
          aria-label="Aniversario de V y A"
        >
          <span className="corp-logo" aria-hidden="true">
            <span>V&A</span>
          </span>

          <span className="corp-brand__copy">
            <strong>Nuestro aniversario</strong>
            <small>Chorroncas</small>
          </span>
        </a>

        <nav className="corp-nav" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="corp-nav__link">
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
