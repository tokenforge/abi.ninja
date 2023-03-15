import React from "react";
import { Link } from "react-router-dom";

import labels from 'labels.json';

export default function TokenFooter() {
  return (
    <div className="token-footer" style={{ color: 'white' }}>
      <div className="header-logo">
        
        <Link to="/" className="logo-link">
          <img className="token-footer-logo" id="tokenforge-logo" src="/token-logo-invert.png" alt="TokenForge logo" />
        </Link>

          <div className="token-footer-row">
            <div className='token-footer-description'>{labels.footer.description}</div>
            <div className="token-footer-columns">
              <div className="token-footer-column">
              <div className="token-footer-columns-header">{labels.footer.company}</div>
              <Link target="_blank" to={{ pathname: "https://token-forge.io/team/" }}>{labels.footer.team}</Link>
              <Link target="_blank" to={{ pathname: "https://token-forge.io/careers/" }}>{labels.footer.careers}</Link>
              <Link target="_blank" to={{ pathname: "https://token-forge.io/press/" }}>{labels.footer.press}</Link>
              <Link target="_blank" to={{ pathname: "https://token-forge.io/contact/" }}>{labels.footer.contact}</Link>
              </div>
            <div className="token-footer-column">
                <div className="token-footer-columns-header">{labels.footer.software}</div>
              <Link target="_blank" to={{ pathname: "https://token-forge.io/nft-suite/" }}>{labels.footer.nftSuite}</Link>
              <Link target="_blank" to={{ pathname: "https://token-forge.io/sto-suite/" }}>{labels.footer.stoSuite}</Link>
              </div>
            <div className="token-footer-column">
                <div className="token-footer-columns-header">{labels.footer.services}</div>
              <Link target="_blank" to={{ pathname: "https://token-forge.io/blockchain-implementation/" }}>{labels.footer.implementations}</Link>
              </div>
            <div className="token-footer-column">
                <div className="token-footer-columns-header">{labels.footer.general}</div>
              <Link target="_blank" to={{ pathname: "https://token-forge.io/imprint/" }}>{labels.footer.imprint}</Link>
              <Link target="_blank" to={{ pathname: "https://token-forge.io/privacy-policy-2/" }}>{labels.footer.privacyPolicy}</Link>
              </div>
            </div>
          </div>
          <div className="token-footer-row">
            <div className="token-footer-icons">
              <img id="tokenforge-logo" src="/assets/achievement_1.png" alt="TokenForge logo" />
              <img id="tokenforge-logo" src="/assets/achievement_2.webp" alt="TokenForge logo" />
              <img id="tokenforge-logo" src="/assets/achievement_3.webp" alt="TokenForge logo" />
              <img id="tokenforge-logo" src="/assets/achievement_4.webp" alt="TokenForge logo" />
            </div>
            <div className="token-footer-rights">{labels.footer.allRightsReserved}</div>
          </div>
      </div>
    </div>
  );
}
