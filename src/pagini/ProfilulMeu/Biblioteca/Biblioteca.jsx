import React from "react";
import RowItem from "../RowItem/RowItem";
import styles from "./Biblioteca.module.scss";

import useAuth from "../../../hooks/useAuth";


const Biblioteca = () => {
  // global states
  const { user } = useAuth();

  return (
    <div>
      <h4 className={styles.title}>Biblioteca</h4>
      {/* full name */}
      {/* <RowItem
        title="Utilizator"
        info={ user?.nume + " " + user?.prenume}
      />

      <RowItem
        title="Adresa de email"
        info={user?.email}
      />

      <RowItem
        title="Categorii adăugate / Categorii maxim admise"
        info={user?.nrCategoriiAdaugate + " / " + user?.nrMaxCategorii}
      />
      
      <RowItem
        title="Cărți adăugate / Cărți maxim admise"
        info={user?.nrCartiAdaugate + " / " + user?.nrMaxCarti}
      /> */}
    </div>
  );
};

export default Biblioteca;
