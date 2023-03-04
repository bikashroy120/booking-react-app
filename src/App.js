import {Routes,Route} from "react-router-dom"
import Layout from "./component/Layout";
import Login from "./component/Login";
import Register from "./component/Register";
import IndexPage from "./page/IndexPage";
import PlacesFormPage from "./page/PlacesFormPage";
import Profile from "./page/Profile";

function App() {
  return (
    <div className="">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<IndexPage/>}/>
                <Route path="/signup" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile/:subpage?" element={<Profile/>}/>
                <Route path="/profile/creact" element={<PlacesFormPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
