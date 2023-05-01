import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

const Header = (props) => {
    const history = useNavigate();
    const DisplayLogin = useSelector(state=>state.DisplayLogin.displaylogin)
    const loggedin = useSelector(state=>state.Loggedin.loggedin)
    const RegisterPage = useSelector(state=>state.DisplayRegisterPage.DisplayRegisterPage)
    //{username?<Link onClick={handleUsernameClick}>{username}</Link>:null}
    //<Link className = {'logout'}onClick={handleLogout}>Logout</Link>
    //when username is clicked
    const handleUsernameClick=()=>{

    }
    //when the logout button is clicked
    const handleLogout = ()=>{
        localStorage.clear()


        history('/')
    }
    return(
        <div className='header'>
            <img className='icon' src="https://static-cdn.jtvnw.net/jtv_user_pictures/d23af2cd-5e49-4794-bb05-ff2b7589760c-profile_image-300x300.png" height={'60px'} width={'auto'}></img>
            <Link className={'Home'} to='/' height={'60px'}>Home</Link>
            {loggedin?<Link className = {'logout'} onClick={handleLogout}>Logout</Link>:null}
            {DisplayLogin ? <Link className={'Login'} to='/login'>Login</Link>:null}
            {RegisterPage ? <Link className={'Register'} to='/register'>Register</Link>:null}
        </div>
    );
};

export default Header;