import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_inv-svg.png";
export default function Header({ link, title, setOpenMenu, openMenu, subTitle, ...props }) {
  return (
    <header className={"header"}>
      {!openMenu ? (
        <MenuOutlined className="menu-button" onClick={() => setOpenMenu(true)} />
      ) : (
        <CloseOutlined className="menu-button" onClick={() => setOpenMenu(false)} />
      )}

      <div className="header-logo">
        <Link to="/" className="logo-link">
          <div>
            <img id="abi-nina-logo" width={50} src={Logo} alt="ABI-Ninja logo" style={{ width: 25 }} />
            <img id="tokenforge-logo" src="/Tokenforge-blue-claim.png" alt="TokenForge logo" style={{ width: 125 }} />
          </div>
          <span className="logo-abi">
            ABI <span className="logo-ninja">Ninja</span>
          </span>
        </Link>
      </div>
      {props.children}
    </header>
  );
}
