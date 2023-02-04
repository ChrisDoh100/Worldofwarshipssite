import DataDisplay from './components/DataPage';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/login';



const App = () => {
    return(
        <Router>
            <Routes>
                <Route path='/data/:name' element={<DataDisplay/>}/>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
        </Router>
    );};

export default App;