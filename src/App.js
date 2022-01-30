import DataDisplay from './components/data';
import Header from './components/header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Autocomplete from './components/autocomplete';



const App = ()=>{
    
    
    return(
        <Router>
            <Routes>
                <Route path='/data/:name' element={<DataDisplay />}/>
                <Route path="/" element={<Autocomplete/>}/>
            </Routes>

        </Router>
    )}

export default App