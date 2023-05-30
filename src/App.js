import './App.css';
import {NotFount}   from "./Component/NotFount";
import {Login}      from "./Component/Login/Login";
import {LoginNom}   from "./Component/Login/LoginNom";
import {Dashboard}  from "./Component/Dashboard/Dashboard";
import {Create}       from "./Component/Create/Create";
import {Extraction} from "./Component/Extraction/Extraction";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  
  let logo= window.location.origin + '/images/Company.png';
  let icon= window.location.origin + '/images/login.png';
  let title="EEJ";
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*"             element={<NotFount />} />
        <Route path="/"             element={<Login     logo={logo} loginIcon={icon} />} />
        <Route path="login"         element={<Login     logo={logo} loginIcon={icon} />} />
        <Route path="reinitialiser" element={<LoginNom  logo={logo} />} />
        <Route path="dashboard"     element={<Dashboard logo={logo} title={title} />} />
        <Route path="create"           element={<Create  logo={logo} title={title} />} />
        <Route path="extraction"    element={<Extraction logo={logo} title={title} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
