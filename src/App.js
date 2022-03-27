import DataDisplay from './components/DataPage';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';



const App = () => {
    return(
        <Router>
            <Routes>
                <Route path='/data/:name' element={<DataDisplay />}/>
                <Route path='/' element={<LandingPage/>}/>
            </Routes>

        </Router>
    );};

export default App;