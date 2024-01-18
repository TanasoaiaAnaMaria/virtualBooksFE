import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers = {
  // 'Content-Type': 'multipart/form-data',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
};

// access control axios
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// ---------------------------- Calls ----------------------------------

// login  authenticate
export const login = async (email, password) => {
  try {
    const response = await axios.get(
      "/utilizator/login?email=" + email + "&parola=" + password
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const register = async (data) => {
  try {
    const response = await axios.post('/utilizator',data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (data) => {
  try {
    const response = await axios.put(
     '/utilizator/'+data.id, data //! ???
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete("/utilizator/" + id);
    return response;
  } catch (error) {
    console.log(error);
  }
};


// get user by id
export const getUserById = async (id) => {
  try {
    const response = await axios.get("/utilizator/getUserByID?id=" + id);
    return response;
  } catch (error) {
    console.log(error);
  }
};



export const getAbonamente = async () => {
  try {
    const response = await axios.get("/abonament");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAbonamentByID = async (id) => {
  try {
    const response = await axios.get("/abonament/id?id="+id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addAbonamentToUser = async (idUser, idAb) => {
  try {
    const response = await axios.post("/utilizator/adauga-abonament?idUtilizator="+idUser+"&idAbonament="+idAb);
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const renewAbonament = async (idUser, idAb) => {
  try {
    const response = await axios.post("/utilizator/reinoieste-abonament?idUtilizator="+idUser+"&idAbonament="+idAb);
    return response;
  } catch (error) {
    console.log(error);
  }
};
