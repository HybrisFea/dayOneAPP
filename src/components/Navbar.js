import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to='/' style={{ margin: "0 10px" }}>
        Piano Alimentare
      </Link>
      <Link to='/impegni-settimanali' style={{ margin: "0 10px" }}>
        Impegni Settimanali
      </Link>
      <Link to='/scheda-palestra' style={{ margin: "0 10px" }}>
        Scheda Palestra
      </Link>
    </nav>
  );
}

export default Navbar;
