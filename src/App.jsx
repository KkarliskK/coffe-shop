import './style/App.css'
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
        </Router>
    );
}

export default App;
