import { useContext, } from "react";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import SignUp from "./pages/sign-up/Sign-Up";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {Outlet, Route, Routes} from 'react-router-dom';
import { Context } from "./context/Context";

const Layout = () => {
  return(
    <>
      <Topbar/>
      <Outlet/>
    </>
  );
};



function App() {

  const { user } = useContext(Context);
  
  return (
    <div className="App">
      <>
      
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={ <Home/>} />
        <Route path="/Login" element={user ? <Home/> :  <Login />} />
        <Route path="/settings" element={user ? <Settings/> :  <Login/>} />
        <Route path="/signUp" element={user ? <Home/> : <SignUp />} />
        <Route path="/post/:postId" element={ <Single/>} />
        <Route path="/Write" element={user ? <Write/> :  <SignUp/>} />
        </Route>
      </Routes>
      </>
     
    </div>
  );
}

export default App;
