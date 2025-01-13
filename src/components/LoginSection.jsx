import style from  "./LoginSection.module.css";
import imag from '../images/backgrd.png'
import { useNavigate , Link} from "react-router-dom";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from './FirebaseCon.jsx'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { useEffect, useState } from "react";


const LoginSection = ({page}) => {
    const app = initializeApp(firebaseConfig);
    const redirect = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userexist, setUserexist] = useState(false)
    const [emailused, setEmailused] = useState(false);

    const auth = getAuth();
    
    const onSignClickHandler = (event) =>{
        event.preventDefault();

        // validation check for email and password
        if ( !validation('email' , email) || !validation('password', password)) {
            setEmailValid(validation('email' , email));
            setPasswordValid(validation('password', password));            
        }
        if(page){
            // redirect('/dashboard');
        signInWithEmailAndPassword(auth, email, password)
        .then(auth =>{
            if(auth){
                redirect('/dashboard');
            }
        })
        .catch(error => setUserexist(true));
        // user-not-found
        }
        else{
            createUserWithEmailAndPassword(auth, email, password)
            .then(
                auth => {
                    if(auth){
                        redirect('/dashboard')
                    }
                }
            )
            .catch(error => setEmailused(true))
            // email-already-in-use
        }
        
    }

    const emailOnChangeHandler =(event) => {
        setEmail(event.target.value)
    }
    const passwordOnChangeHandler = (event) =>{
        setPassword(event.target.value)
    }

    useEffect(() => {
        setUserexist(false)
        setEmailused(false)
    },[useNavigate])

    // for email and password validation below code redirect in onSignClickHandler

    const [emailValid, setEmailValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)

    const validation = (name, value) => {
        switch (name) {
            case 'email':
                return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
            case 'password':
                return value.length >=6 ;
        
            default:
                break;
        }
    }

    return <>


    <div className={style.Login}>
        <div className={style.holder} >
            <h1 className={style.deki}>{ page ? 'Sign In' : 'Register'}</h1> <br />
            <form >
              { page ? <input className={style.inpt} value={email} onChange={emailOnChangeHandler} type="email" placeholder="Email" required/> : <input className={style.inpt} value={email} onChange={emailOnChangeHandler} type="email" placeholder="Re-enter Email " required/> }

              { !emailValid && <p className="text-danger">Invalid email address</p>}
              
                { page ? <input className={style.inpt}  value={password} onChange={passwordOnChangeHandler} type="password" placeholder="Password" required/> : <input className={style.inpt}  value={password} onChange={passwordOnChangeHandler} type="password" placeholder="Create Password" required/>}

                { !passwordValid && <p className="text-danger">Invalid password </p>}

                <button type="button" className={`${style.bttn} btn btn-danger`} onClick={onSignClickHandler}>{ page ? 'Sign In' : 'Register'}</button>
                <br />

                { page && <div>
                    <input className={style.bonn} type="checkbox" value="" />
                    <label htmlFor="">Remember Me</label>
                </div>
                }
                </form>


                <br />
                {page ? (userexist && <p className="text-danger">User does not exist</p>) : ( emailused && <p className="text-danger">Email already exist</p>) }
                
                
                <br />

                <div className={style.loginup}>
                
                    <div className={style.singup}>{ page ? 'New to Chemistry Lab?' : 'Existing User'} &nbsp;
                    <Link className="" target="_self" to={ page ? '/' : '/login'}>{ page ? 'Sign up now' : 'Sign In'}</Link></div>
                </div>     
        </div>

            <div className={style.shadow}></div>
        <img className={style.lgn} src={imag} alt="backgrund-image" />


    </div>
    
    </>
    
}



export default LoginSection ;