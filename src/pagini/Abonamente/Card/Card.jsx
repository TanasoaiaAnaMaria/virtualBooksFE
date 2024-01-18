import React from 'react';
import style from './Card.module.scss';
import useAuth from '../../../hooks/useAuth';
import { MdOutlineWorkspacePremium } from "react-icons/md";


const Card = ({ abonament, onAction, action, abonamentActiv, highlight = false }) => {
    const { user } = useAuth();
    return (
        <div className={highlight === true ? style.card2 : style.card}>

            <MdOutlineWorkspacePremium size="24px" fill='red' />

            {/* <h4>ABONAMENT</h4> */}
            <h3>{abonament.numeAbonament}</h3>
            <div className={style.price}>
                {abonament.sumaAbonament} RON <span>/ lună</span>
            </div>
            <ul className={style.features}>
                <li>{abonament.beneficii[0].nrCategoriiAdaugate} categorii disponibile</li>
            </ul>
            <ul className={style.features}>
                <li>{abonament.beneficii[0].nrCartiAdaugate} cărți pentru audiție</li>
            </ul>
            <button disabled={action === 'Activ' ? true : false} className={action === 'Activeaza' ? style.abButtonActivate : style.abButtonRenew} onClick={() => onAction(abonament.idAbonament)}>{action}</button>

        </div>
    );
};

export default Card;
