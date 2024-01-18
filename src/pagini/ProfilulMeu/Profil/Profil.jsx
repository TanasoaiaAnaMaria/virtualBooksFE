import React from "react";
import RowItem from "../RowItem/RowItem";
import styles from "./Profil.module.scss";

import useAuth from "../../../hooks/useAuth";


const Profile = () => {
  // global states
  const { user } = useAuth();

  return (
    <div>
      <h4 className={styles.title}>Profil</h4>
      {/* full name */}
      <RowItem
        title="Utilizator"
        info={ user?.nume + " " + user?.prenume}
      />

      {/* email */}
      <RowItem
        title="Adresa de email"
        info={user?.email}
      />

      {/* categorii */}
      <RowItem
        title="Categorii adăugate / Categorii maxim admise"
        info={user?.nrCategoriiAdaugate + " / " + user?.nrMaxCategorii}
      />

      {/* carti */}
      <RowItem
        title="Cărți adăugate / Cărți maxim admise"
        info={user?.nrCartiAdaugate + " / " + user?.nrMaxCarti}
      />
    </div>
  );
};

export default Profile;
