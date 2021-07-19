import "./FooterStyle.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerDiv">
        <span>Miguel Lucas @ 2021</span>

        <a href="mailto:miguellucas@pm.me">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="email"
          >
            <path
              d="M27 0H3C1.35 0 0.015 1.125 0.015 2.5L0 17.5C0 18.875 1.35 20 3 20H27C28.65 20 30 18.875 30 17.5V2.5C30 1.125 28.65 0 27 0ZM27 5L15 11.25L3 5V2.5L15 8.75L27 2.5V5Z"
              fill="black"
            />
          </svg>
        </a>

        <a
          href="https://github.com/LaranGod"
          target="_blank"
          rel="noopener"
          rel="noreferrer"
        >
          <img src="/images/25231.png" alt="github" width="30" height="30" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
