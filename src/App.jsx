import './style/App.css'
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import Firstpage from "./components/FirstPage.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Firstpage />
        </Router>
    );
}
export default App;
