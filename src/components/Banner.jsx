import style from "./Banner.module.css";
// import bgim2 from '../images/wednesday.png'
// import bgim1 from '../images/weddy.jpg'


const Banner =() => {
    return <>

    <div className={style.banner}>
    {/* <img className={style.pik1} src={bgim1} alt="" /> */}
        <div className={style.bannerchibody}>
            <img className={style.wedy}  />
            
            <h1 className={style.bannerchiheading}>Virtual Chemistry Lab</h1>
            
            <h1 className={style.bannerchabio}>
                <div className={style.par}>
            The virtual labs are based on the idea that lab experiments can be taught using the internet more efficiently in a cost-effective manner. <br />
            </div>
            <div className={style.par}>
             The Virtual labs will also benefit the student who do schools where equipments are not available owing to being scarce or costly.<br />
             The Virtual Labs can be accessed anytime and anywhere, overcoming the constraints of time as physical labs are available only during school hours.
            </div>
            </h1>
            
            <div className={style.bannerchebuttons}>
                {/* <button className={`${style.bannerbtton1} btn btn-outline-info`}>
                <p className={style.mediaforplayAndMylist}>Play</p></button> */}
                <button className={`${style.bannerbtton2} btn btn-outline-info `}>
                <p className={style.mediaforplayAndMylist}>Experiments</p></button>

            </div>
        </div>
        <div className={style.bannerfade}></div>
    
    </div>
    
    </>
}

export default Banner;