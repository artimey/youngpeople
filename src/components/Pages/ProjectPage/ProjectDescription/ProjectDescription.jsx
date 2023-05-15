import { Link } from "react-router-dom";
import { BASE_URL } from "../../../../utils/constants";
import { parseHTML } from "../../../../utils/parseHTML";
import styles from "./styles.module.scss";

export const ProjectDescription = ({
  description,
  logo,
  title,
  linkSite,
  projectId,
}) => {
  return (
    <div className="">
      <div className={styles.descWrapper}>
        <div className={styles.leftSideWrapper}>
          {logo && (
            <img
              className={styles.logo}
              src={BASE_URL + logo}
              alt={title + " логотип"}
            />
          )}

          {linkSite ? (
            <a
              href={linkSite}
              target="_blank"
              className={styles.projectsEventsButton}
              rel="noreferrer"
            >
              На сайт проекта
            </a>
          ) : (
            <Link
              to={`/events?LINK_PROJECT=${projectId || null}`}
              className={styles.projectsEventsButton}
            >
              Мероприятия <br /> проекта
            </Link>
          )}
        </div>

        <div>
          {description && (
            <div
              className="text-normal text-white mb-[5rem]"
              dangerouslySetInnerHTML={{ __html: parseHTML(description) }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
