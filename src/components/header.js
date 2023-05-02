import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggingout } from '../reducers/displayusername';
import { displayloggedinfalsey, displayloggedintruey } from '../reducers/loggedinReducer';
import { displayregistertruey } from '../reducers/displayregisterpagereducer';
import { displayloginfalsey, displaylogintruey } from '../reducers/displayloginreducer';

const Header = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    
    let DisplayLogin = useSelector(state=>state.DisplayLogin.displaylogin)
    let logged = useSelector(state=>state.LoggedIn.loggedIn)
    let RegisterPage = useSelector(state=>state.DisplayRegisterPage.DisplayRegisterPage)
    let user = useSelector(state=>state.DisplayUsername.name)
    //when username is clicked
    //<p className = {'logout'}onClick={handleLogout}>Logout</p>
    const handleUsernameClick=()=>{

    }
    //when the logout button is clicked
    const handleLogout = ()=>{
        localStorage.clear()
        dispatch(loggingout())
        dispatch(displayloggedinfalsey())
        dispatch(displayregistertruey())
        dispatch(displaylogintruey())
    }
    return(
        <div className='header'>
            <img className='icon' src="https://static-cdn.jtvnw.net/jtv_user_pictures/d23af2cd-5e49-4794-bb05-ff2b7589760c-profile_image-300x300.png" height={'60px'} width={'auto'}></img>
            <Link className={'Home'} to='/' height={'60px'}>Home</Link>
            {user!=""?<Link to ='/' className={'Username'} onClick={handleUsernameClick}>{user}</Link>:null}
            {logged?<Link to ='/' className = {'Logout'} onClick={handleLogout}>Logout</Link>:null}
            {DisplayLogin ? <Link className={'Login'} to='/login'>Login</Link>:null}
            {RegisterPage ? <Link className={'Register'} to='/register'>Register</Link>:null}
        </div>
    );
};

export default Header;