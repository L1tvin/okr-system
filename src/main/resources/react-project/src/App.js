import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListOKRComponent from "./components/ListOKRComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateOKRComponent from "./components/CreateOKRComponent";
import UpdateOKRComponent from "./components/UpdateOKRComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path="/" exact element={<ListOKRComponent/>}></Route>
                        <Route path="/okrs" element={<ListOKRComponent/>}></Route>
                        <Route path="/add-okr" element={<CreateOKRComponent/>}></Route>
                        <Route path="/update-okr/:id" element={<UpdateOKRComponent/>}></Route>
                    </Routes>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
