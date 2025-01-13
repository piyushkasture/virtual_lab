import style from './Header.module.css';
import logo from '../images/logoCheLab.png'
import { useNavigate, Link} from "react-router-dom";
import profile from "../images/profile.png";



const Header = ({signinforloginregister}) => {
  const redirect = useNavigate()

  const clickHandler =() => {
    // e.preventDefault();
       {signinforloginregister ?  redirect('/login') : redirect('/')} 
  }
  const clickOnSubscriptionButton = () => {
    redirect('/subscription')
  }
  
  return <> <div className={style.firstheader}>
    <Link to="/">
      <img className={style.lg} src={logo} alt="Lab Logo"/>
      </Link>
      <div className="header__nav">
        <form className={`${style.headerbttn} d-flex`} role="search">

          {signinforloginregister ? <select>
            <option>English</option>
            <option>Hindi</option>
          </select> : <img className={style.profile} src={profile} alt='Profile-image'/>}
          
           <button  className={`${style.butn} btn btn-outline-info`} onClick={clickHandler}>{signinforloginregister ? <p className={style.mediaSigninAndout}>Sign In</p> : <p className={style.mediaSigninAndout}>Log out</p>}</button>

        </form>
      </div>
    </div>
  </>
};

export default Header;
