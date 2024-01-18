import React, { useEffect, useState } from "react";
import RowItem from "../RowItem/RowItem";
import styles from "./Abonament.module.scss";
import { useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

import moment from 'moment';
import 'moment/locale/ro';
import useStateProvider from "../../../hooks/useStateProvider";
import { getAbonamentByID } from "../../../api/API";

const Abonament = () => {
  // global states
  const { user } = useAuth();

  const [abonament, setAbonament] = useState();

  const navigate = useNavigate();

  const fetchAbonamentByID = async () => {
    try {
      const response = await getAbonamentByID(user?.idAbonament);
      if (response.status === 200) {
        setAbonament(response.data);
      }

    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    fetchAbonamentByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <h4 className={styles.title}>
        Abonament
        <span>{user?.abonamentExpirat === true && ' expirat'}</span>
      </h4>


      <RowItem
        title={"Tip abonament "}
        info={abonament?.numeAbonament === 'GRATIS' ? 'Standard' : abonament?.numeAbonament}
      />

      <RowItem
        title="Suma retrasă lunar"
        info={abonament?.sumaAbonament + ' RON'}
      />

      <RowItem
        title="Categorii maxim admise"
        info={user?.nrMaxCategorii}
      />

      {/* carti */}
      <RowItem
        title="Cărți maxim admise"
        info={user?.nrMaxCarti}
      />
      <RowItem
        title={'Expiră la data de'}
        info={moment(user?.dataAbonare, 'DD-MM-YYYY').format('DD MMMM YYYY')}
        action={user?.abonamentExpirat === false ? "Schimbă abonament" : "Reinoieste"}
        onAction={() => {
          navigate('/abonamente');
        }}
      />



      {/* full name */}
      {/* <RowItem
        title={}
        info={ user?.nume + " " + user?.prenume}
      />

      <RowItem
        title="Categorii maxim admise"
        info={user?.nrMaxCategorii}
      />

      <RowItem
        title="Cărți maxim admise"
        info={user?.nrMaxCarti}
      /> */}

      {/* <RowItem
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

export default Abonament;
