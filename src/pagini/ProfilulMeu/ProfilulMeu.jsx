import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// icons
import { ReactComponent as ProfileIcon } from "../../assets/icons/person.svg";
import { ReactComponent as SecuritateIcon } from "../../assets/icons/security.svg";
import { MdOutlineTravelExplore } from "react-icons/md";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as CheckIcon } from "../../assets/icons/check-circle.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { IoLibraryOutline } from "react-icons/io5";
// tabs
import Profil from "./Profil/Profil";
// styles
import styles from "./ProfilulMeu.module.scss";

// useauth
import useAuth from "../../hooks/useAuth";
import useStateProvider from "../../hooks/useStateProvider";

// import bootstrap spiiner
import { Spinner } from "react-bootstrap";
import Abonament from "./Abonament/Abonament";
import Biblioteca from "./Biblioteca/Biblioteca";
// import { updateUser } from "../../api/API";

const ProfilulMeu = () => {
  const { setAlert } = useStateProvider();
  const { user, logout, fetchUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = location.pathname.split("/")[2];
  const tabSelector = () => {
    switch (currentTab) {
      case "profil":
        return <Profil />;
      case "biblioteca":
        return < Biblioteca />;
      case "abonament":
        return < Abonament />;
      default:
        break;
    }
  };

  // preview image
  const [preview, setPreview] = useState(null);

  // loading image
  const [loading, setLoading] = useState(false);

  // handle image update
  const handleAvatarChange = async () => {
    setLoading(true);
    try {
      const response = ''
      /*await updateUser(user?.id, {
        photo: preview && preview,
      });*/
      if (response.status === 200) {
        setAlert({
          type: "success",
          message: "Imaginea a fost schimbata cu succes!",
        });
        setPreview(null);
        setLoading(false);
        fetchUser();
      }
    } catch (error) {
      console.log(error);
      setAlert({
        type: "danger",
        message: "Ups... probleme la server",
      });
    }
  };

  // handle logout
  const handleLogout = () => {
    logout();
    navigate("/");
    setAlert({
      type: "success",
      message: "Acces in website ca vizitator",
    });
  };

  return user ? (
    <section className={styles.container}>
      {/* navigation section */}

      <nav className={`${styles.navigation}`}>
        <button
          className={currentTab === "profil" ? styles.active : ""}
          onClick={() => navigate("/user/profil")}
        >
          <ProfileIcon />
          <span>Profil</span>
        </button>
        <button
          className={currentTab === "biblioteca" ? styles.active : ""}
          onClick={() => navigate("/user/biblioteca")}
        >
          <IoLibraryOutline  size={'25px'} fill={'black'}/>
          <span>Biblioteca</span>
        </button>
        <button
          className={currentTab === "abonament" ? styles.active : ""}
          onClick={() => navigate("/user/abonament")}
        >
          <BellIcon size={'25px'} stroke={user?.abonamentExpirat===false ? 'black' :'orange'} />
          <span>Abonament</span>
        </button>
        <button onClick={handleLogout}>
          <LogoutIcon />
          Logout
        </button>
      </nav>
      {/* main section */}
      <div className={styles.content}>{tabSelector()}</div>
    </section>
  ) : (
    <div>Loading...</div>
  );
};

export default ProfilulMeu;
