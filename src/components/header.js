import './header.css';
import { Link } from 'react-router-dom';



const Header = (props) => {

    let currentPage=false;
    if(props.onLoginPage){
        currentPage=true;
    }
    return(
        <div className='header'>
            <img className='icon' src="https://static-cdn.jtvnw.net/jtv_user_pictures/d23af2cd-5e49-4794-bb05-ff2b7589760c-profile_image-300x300.png" height={'60px'} width={'auto'}></img>
            <Link className={'Home'} to='/' height={'60px'}>Home</Link>
            {!currentPage && <Link className={'Login'} to='/login'>Login</Link>}
        </div>
    );
};

export default Header;