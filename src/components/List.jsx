import style from "./List.module.css"
import ep1 from '../images/list/ex1.jpg'
import ep2 from '../images/list/ex2.jpeg'
import ep3 from '../images/list/ex3.jpeg'
import ep4 from '../images/list/ex4.jpeg'
import ep5 from '../images/list/ex5.jpeg'
import ep6 from '../images/list/ex6.jpeg'
import ep7 from '../images/list/ex7.jpeg'
import ep8 from '../images/list/ex8.jpeg'
import { MdOutlinePlayCircleFilled } from "react-icons/md";
// import {Carousel} from 'react-responsive-carousel';


const List =() => {

    return <>
    <div className={style.list}>
        <div className={style.row}>
            <div>
            <span className={style.episodes}>Experiments</span>
            <span className={style.nameofseries}>Chemistry Lab</span>
            </div>

            <div className={style.listItemrow}>
              

            <div className={`${style.cardwidht} card`}>
                <img src={ep1} className="card-img-top" alt="..."/>
                
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>1. Volumetric Analysis</h5>
                    <p className={`${style.cardParagraph}card-text`}> To determine the concentration of a solution using titration. Acid-Base Titration (HCl vs. NaOH using phenolphthalein as an indicator). Oxidation-Reduction Titration (KMnO₄ vs. oxalic acid).</p>
                    <a href="#" className={`${style.btttnforrow1} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>
           
            <div className={`${style.cardwidht} card`}>
                <img src={ep2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>2. Separation of Mixtures:</h5>
                    <p className={`${style.cardParagraph}card-text`}> Objective: To separate a mixture of solids (like sand and salt).
                    Materials: Beaker, filter paper, funnel, and water.</p>
                    <a href="#" className={`${style.btttnforrow2} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>
        
            <div className={`${style.cardwidht} card`}>
                <img src={ep3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>3. Synthesis of a Salt:</h5>
                    <p className={`${style.cardParagraph}card-text`}>Objective: To synthesize a salt through a neutralization reaction.
                    Materials: Acid (like hydrochloric acid), base (like sodium hydroxide), beaker, and pH paper.</p>
                    <a href="#" className={`${style.btttnforrow3} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>

            <div className={`${style.cardwidht} card`}>
                <img src={ep4} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>4. pH scale</h5>
                    <p className={`${style.cardParagraph}card-text`}>Objective: To measure the pH of different solutions using pH indicators or a pH meter.</p>
                    <a href="#" className={`${style.btttnforrow4} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>

            <div className={`${style.cardwidht} card`}>
                <img src={ep5} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>5. Conductivity Test Experiment</h5>
                    <p className={`${style.cardParagraph}card-text`}>Objective: The objective of this experiment is to test the conductivity of different solutions and understand which solutions conduct electricity and which do not.
</p>
                    <a href="#" className={`${style.btttnforrow5} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>

            <div className={`${style.cardwidht} card`}>
                <img src={ep6} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>6 Reaction Between Baking Soda and Vinegar</h5>
                    <p className={`${style.cardParagraph}card-text`}>Objective:
                    To observe the chemical reaction between baking soda (sodium bicarbonate) and vinegar (acetic acid) and to understand the production of gas and the resulting changes.</p>
                    <a href="#" className={`${style.btttnforrow6} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>

            <div className={`${style.cardwidht} card`}>
                <img src={ep7} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>7. Electrolysis of Water</h5>
                    <p className={`${style.cardParagraph}card-text`}>Aim:
                    To demonstrate the process of electrolysis and to produce hydrogen and oxygen gases from water using an electric current.</p>
                    <a href="#" className={`${style.btttnforrow7} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>

            <div className={`${style.cardwidht} card`}>
                <img src={ep8} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>8. Formation of acetylsalicylic acid</h5>
                    <p className={`${style.cardParagraph}card-text`}>The aim of this experiment is to synthesize acetylsalicylic acid, commonly known as aspirin, from salicylic acid and acetic anhydride.</p>
                    <a href="#" className={`${style.btttnforrow8} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>
           

            </div>
            


        </div>
    </div>
    
    </>
}

export default List ;