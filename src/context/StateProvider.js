import { createContext, useState, useEffect } from 'react';
// import parse from 'date-fns/parse'
import { getAbonamente } from '../api/API';

const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const [abonamente, setAbonamente] = useState(null);
  // alert
  const [alert, setAlert] = useState(null);
  if (alert) {
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }


  const fetchAbonamente = async () => {
    try {
      const response = await getAbonamente();
      if (response.status === 200) {
        setAbonamente(response.data);
      }

    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchAbonamente();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return <StateContext.Provider
    value={{
      alert,
      setAlert,
      abonamente,
      setAbonamente,

    }}
  >{children}</StateContext.Provider>;
};

export default StateContext;
