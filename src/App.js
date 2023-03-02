import DataDisplay from './components/DataPage';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/login';
import RegisterPage from './components/register';


const App = () => {
    return(
        <Router>
            <Routes>
                <Route path='/data/:name' element={<DataDisplay/>}/>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
            </Routes>
        </Router>
    );};

export default App;