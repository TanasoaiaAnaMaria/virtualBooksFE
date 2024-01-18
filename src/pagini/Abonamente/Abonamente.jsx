import React, { useState } from 'react';
import Card from './Card/Card';
import style from './Abonamente.module.scss';
import useStateProvider from '../../hooks/useStateProvider';
import useAuth from '../../hooks/useAuth';
import { addAbonamentToUser, renewAbonament } from '../../api/API';

const Abonamente = () => {
    const { abonamente, setAlert } = useStateProvider();
    const { user, fetchUser, fetchAbonamente } = useAuth();

    const handleActivate = async (id) => {

        console.log(`Abonament activat: ${id}`);
        try {
            const response = await addAbonamentToUser(user?.idUtilizator, id);
            if (response.status === 200) {
                setAlert({
                    type: 'success',
                    message: 'Abonamentul a fost activat!'
                });
                fetchUser();
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const handleRenew = async (id) => {
        console.log(`Abonament reinnoit: ${id}`);
        try {
            const response = await renewAbonament(user?.idUtilizator, id);
            if (response.status === 200) {
                setAlert({
                    type: 'success',
                    message: 'Abonamentul a fost reactivat!'
                });
                fetchUser();
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <div className={style.abonamenteContainer}>
            <div className={style.abonamentTitle}>
                <h2>
                    Alege abonamentul care ti se potriveste
                </h2>
            </div>

            <div className={style.abonamente}>
                {abonamente?.map((abonament, index) => (
                    index !== 0 &&
                    <Card
                        key={abonament.idAbonament}
                        abonament={abonament}
                        highlight={((abonamente.length % 2 === 0 && abonamente.length / 2 === index) || (abonamente.length % 2 !== 0 && abonamente.length / 2 + 1 === index)) ? true : false}
                        onAction={(e) => { user.idAbonament === abonament.idAbonament ? handleRenew(abonament.idAbonament) : handleActivate(abonament.idAbonament) }}
                        abonamentActiv={user.idAbonament === abonament.idAbonament}
                        action={
                            user.idAbonament !== abonament.idAbonament ?
                                "Activeaza"
                                : user.abonamentExpirat === true ?
                                    "Reactiveaza"
                                    :
                                    "Activ"
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Abonamente;
