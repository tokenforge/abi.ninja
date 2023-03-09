import { GithubFilled, HeartFilled } from "@ant-design/icons";

export const AbiFooter = () => {
  return (
    <div className="footer-items">
      <p>
        <GithubFilled />{" "}
        <a href="https://github.com/tokenforge/abi.ninja" target="_blank" rel="noreferrer">
          Fork me
        </a>
      </p>
      
      <p>
        Built with <HeartFilled style={{ color: "red" }} /> at 🏰{" "}
        <a href="https://buidlguidl.com/" target="_blank" rel="noreferrer">
          BuidlGuidl
        </a> and <a href="https://token-forge.io" target="_blank" >TokenForge</a>
      </p>
    </div>
  );
};
