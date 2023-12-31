import React from "react";

import { StaticRoute } from "const/routes"
import { Link } from "react-router-dom";

// eslint-disable-next-line
import s from "./NotFoundPage.module.scss";

export const NotFoundPage = () => (
    <main className={s.notFound}>
      <div className={s.notFoundContent}>
        <h1>Page not found</h1>
        <p className={s.noticeText}>
          The page you’re looking for was moved, renamed, removed or might never exist.
        </p>
        <Link to={`${StaticRoute.ROOT}/`} className={s.link}>
          <p className={s.linkToHomeText}>go to homepage</p>
        </Link>
      </div>
    </main>
  );
