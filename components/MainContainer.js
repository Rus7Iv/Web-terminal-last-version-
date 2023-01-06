import React from "react";
import Head from "next/head";
import Link from "next/link";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
       <Head>
        <meta keywords={"js, react.js, next.js" + keywords}></meta>
        <title>Web-терминал</title>
      </Head>
      <div className="navbar">
        <Link legacyBehavior href={"/"}>
          <a className="link">Главная</a>
        </Link>
        <Link legacyBehavior href={"/payment"}>
          <a className="link">Оплата</a>
        </Link>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
          {`
            .navbar {
              background: orange;
              padding: 15px;
            }
            .link {
              text-decoration: none;
              color: white;
              font-size: 20px;
              margin: 10px;
            }
          `}
        </style>
    </>
  );
};

export default MainContainer;