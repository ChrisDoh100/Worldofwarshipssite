import react from 'react';
import './header.css'





const Header = ()=>{


    return(
        <div className='header'>
                <img className='icon' src="https://static-cdn.jtvnw.net/jtv_user_pictures/d23af2cd-5e49-4794-bb05-ff2b7589760c-profile_image-300x300.png" height={"60px"} width={"auto"}></img>
                <a className="Home" href='/' height={"60px"}>Home</a>
        </div>
    )
}

export default Header;