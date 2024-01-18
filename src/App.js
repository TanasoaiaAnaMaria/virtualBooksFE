import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Navigare from "./componente/Navigare/Navigare";
// import Subsol from "./componente/Subsol/Subsol.jsx";

import Onboarding from "./pagini/Onboarding/Onboarding";
import ProfilulMeu from "./pagini/ProfilulMeu/ProfilulMeu"

import useWindowDimensions from "./hooks/useWindowDimensions";
import Alert from "./componente/Alert/Alert";
import useStateProvider from "./hooks/useStateProvider";
import Acasa from "./pagini/Acasa/Acasa.jsx";
import Layout from './pagini/Layout/Layout.jsx';
import ProtectedRoutes from "./rute/ProtectedRoutes";
import Abonamente from "./pagini/Abonamente/Abonamente.jsx";



function App() {
  const { width } = useWindowDimensions();
  const { alert } = useStateProvider();
  return (
    <Router>
      <Routes>
        <Route
          element={
            <>
              <Navigare expand={width >= 750 ? "md" : false} />
              <Layout>
                <ProtectedRoutes />
              </Layout>
              {/* <Subsol /> */}
            </>
          }
        >
          <Route path="/" element={<Acasa />} />
          <Route path="/abonamente" element={<Abonamente />} />
          <Route path="/bonusuri" element={<Acasa />} />
          
          {/* protected routes */}
          <Route path="/user">
            <Route path="profil" element={<ProfilulMeu />} />
            <Route path="biblioteca" element={<ProfilulMeu />} />
            <Route path="abonament" element={<ProfilulMeu />} />
          </Route>
        </Route>

        <Route
          element={
            <>
              <Navigare expand={width >= 750 ? "sm" : false} />
              <Layout>
                <Outlet />
              </Layout>
              {/* <Subsol /> */}
            </>
          }
        >
          {/* public rute */}
            
            {/* onboarding routes */}
          <Route path="/login" element={<Onboarding />} />
          <Route path="/register" element={<Onboarding />} />
          
        </Route>
      </Routes>
      {alert && <Alert message={alert.message} type={alert.type} />}
    </Router>
  );
}

export default App;
