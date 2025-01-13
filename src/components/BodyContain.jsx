import style from "./BodyContain.module.css";
import img1 from '../images/backgrd.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const BodyContain = () => {

    const redirct = useNavigate()
    const onClickHandlerbutton =() =>{
        

        if ( !valid('email' , email)) {
            setEmailChecker(valid('email' , email));          
        } 
        else{
            redirct('/register')
        }       
    }
    

    const [email , setEmail] = useState('');

    const onChangeemailHandler = (event) =>{
        setEmail(event.target.value)
    }

    //email validation

    const [emailchecker, setEmailChecker] = useState(true)
    const valid = (name, value) => {
        switch (name) {
            case 'email':
                return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
            default:
                break;
        }
    }

    return <> <div className={style.bodycontain}>

        <div className={style.bodycontainrow}>
            <h1 id={style.unlimited}>Virtual Chemistry Lab.</h1>
            <p>Perform anywhere anytime.</p>
            <h3>Join the fun today! Enter your email to create account.</h3>
            <div className={style.bodycontainform}>
                <input type="text" placeholder="abc@xyz.com" value={email} onChange={onChangeemailHandler} required />
                <button className={`${style.bottn} btn btn-outline-info`} onClick={onClickHandlerbutton}>Get Started {">"}</button>
                { !emailchecker && <p className={style.invalidemail} >Invalid email address</p>}
            </div>

        </div>
        <div className="shadow"></div>
        <img src={img1} alt="backgrd-image" />
    </div>
    </>
}

export default BodyContain;