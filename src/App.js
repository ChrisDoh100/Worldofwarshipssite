import DataDisplay from './components/data';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import Autocomplete from './components/autocomplete';



const App = ()=>{
    
    return(
        <Router>
            <Routes>
                <Route path='/data/:name' element={<DataDisplay />}/>
                <Route path='/' element={<Autocomplete/>}/>
            </Routes>

        </Router>
    )}

export default App