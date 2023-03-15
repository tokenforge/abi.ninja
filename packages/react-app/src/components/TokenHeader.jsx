import React from "react";
import { Link } from "react-router-dom";

export default function TokenHeader() {
  return (
    <header className="token-header">
      <div className="header-logo">
        <Link to="/" className="logo-link">
          <div>
            <img id="tokenforge-logo" src="/token-logo-invert.png" alt="TokenForge logo" />
          </div>
        </Link>
      </div>
    </header>
  );
}
