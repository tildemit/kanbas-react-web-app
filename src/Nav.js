import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();

  const linkStyle = {
    backgroundColor: "#000",
    color: "#fff",
    display: "inline-block",
    padding: "8px 16px",

    ":hover": {
      color: "#fff",
    },
  };

  return (
    <nav className="nav nav-tabs mt-2">
      <Link
        to="/Labs/a3"
        className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
        style={linkStyle}
      >
        <span>A3</span>
      </Link>
      <Link
        to="/hello"
        className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}
        style={linkStyle}
      >
        <span>Hello</span>
      </Link>
      <Link
        to="/Kanbas"
        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
        style={linkStyle}
      >
        <span>Kanbas</span>
      </Link>
    </nav>
  );
}

export default Nav;
