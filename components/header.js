import Image from "next/image";
import Link from "next/link";

import style from "../styles/header.module.css";

export default function Header({ className }) {
  return (
    <header className={ className }>
      <Link href="/">
        <a>
          <Image
            src="/LOGO_negative.svg"
            alt="Gregory Vicent Logo"
            width="100"
            height="100"
            className={style.logo}
          />
        </a>
      </Link>
      <div className={style.box_icons}>
        <a
          href="https://twitter.com/VicentGregory"
          className={style.icons}
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gregory-vicent-401883202/?originalSubdomain=ve"
          className={style.icons}
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Gregory142000"
          className={style.icons}
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </header>
  );
}
