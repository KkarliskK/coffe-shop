import './style/App.css'
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import Firstpage from "./components/FirstPage.jsx";
import Secondpage from "./components/SecondPage.jsx";
import Thirdpage from "./components/ThirdPage.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Firstpage />
            <Secondpage />
            <Thirdpage />
        </Router>
    );
}
export default App;
