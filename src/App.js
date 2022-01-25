import Playerlookup from './playerlookup'
import DataDisplay from './components/data';
import Header from './components/header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';



const App = ()=>{
    
    
    return(
    <div>
        <Router>
            <Header/>
            <Routes>
                <Route path='/data/:name' element={<DataDisplay/>}/>
                <Route path="/" element={<Playerlookup/>}/>
            </Routes>

        </Router>
    </div>
    )}

export default App