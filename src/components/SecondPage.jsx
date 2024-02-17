import css from '../style/Secondpage.module.css';
import background776 from '../assets/images/background776.png';

function Secondpage() {
    return (
        <>
            <div className={css.secondpage}>
                <div className={css.secondpageContents}>
                    <div className={css.splitdiv}>
                        <h1 className={css.bigText}>Black</h1>
                        <h1 className={css.bigText}>Coffes</h1>
                        <button className={css.orderButton}>Order Now</button>
                    </div>
                    <div className={css.splitdivp}>
                        <p className={css.p}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at consequatur cum debitis dolor incidunt ipsum iure molestiae odio quae, ratione saepe sequi, suscipit temporibus vitae? Blanditiis nam neque nihil.</p>
                    </div>
                </div>
                <img src={background776} className={css.background776}/>
            </div>
        </>
    );
}

export default Secondpage;