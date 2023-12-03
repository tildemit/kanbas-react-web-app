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
        to="/Kanbas/signup"
        className={`nav-link ${pathname.includes("Kanbas/signup") ? "active" : ""}`}
        style={linkStyle}
      >
        <span>Kanbas Signup</span>
      </Link>
      <Link
        to="/Kanbas/signin"
        className={`nav-link ${pathname.includes("Kanbas/signin") ? "active" : ""}`}
        style={linkStyle}
      >
        <span>Kanbas Signin</span>
      </Link>
    </nav>
  );
}

export default Nav;
