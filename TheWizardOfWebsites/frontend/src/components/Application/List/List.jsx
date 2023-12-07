import styles from "./List.module.css";
import { useEffect, useState } from "react";
import * as siteService from "../../../services/applicationService";
import { Item } from "../Item/Item";
export const List = () => {
  const [sites, setSites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    siteService
      .getAll()
      .then((result) => setSites(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sites.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.containerListCards}>
      <div className={styles.listCards}>
        {currentItems.map((site) => (
          <Item key={site._id} {...site} />
        ))}

        
        {sites.length === 0 && (
          <h1 className={styles.noArticles}>No articles yet</h1>
        )}
      </div>
      <div className={styles.pagination}>
          {Array.from({ length: Math.ceil(sites.length / itemsPerPage) }).map(
            (item, index) => (
              <button className={styles.paginationButtons} key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            )
          )}
        </div>
    </div>
  );
};
