import classNames from "classnames";
import { MoreContentNav } from "./navigation";

export const ArticleHeader = ({ title }) => (
  <header>
    <h1 className="h3 u-w300 u-mb2">{title}</h1>
  </header>
);

export const Article = ({ className = "", title, wrapper, children }) => {
  const cx = classNames(
    "o-container o-container--lg u-mxa u-px3 u-py4 u-mb4",
    className,
    {
      Pane: wrapper
    }
  );
  return (
    <div className="o-flex o-flex--around o-container o-container--center">
      <MoreContentNav />
      <article className={cx}>
        {title && <ArticleHeader title={title} />}
        {children}
      </article>
      <style jsx>{`
        .Pane {
          background: #fff;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.0175),
            0 4px 8px rgba(0, 0, 0, 0.035);
        }
      `}</style>
    </div>
  );
};
