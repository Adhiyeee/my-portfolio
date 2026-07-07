import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <a href="#hero" onClick={() => setOpen(false)}>Home</a>
      <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
      <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
      <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
    </>
  );

  return (
    <nav className="navbar">
      <h2>Adithyan</h2>

      <div className="nav-links">{links}</div>

      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && <div className="nav-mobile-menu">{links}</div>}
    </nav>
  );
}
