import css from '../style/Thirdpage.module.css';
import wave2 from '../assets/waves/wave2.png';

function Thirdpage() {
    return (
        <>
            <div className={css.thirdpage}>
                <img className={css.wave2} src={wave2}/>
                <div className={css.thirdpageContents}>
                    <h1>Black Coffes</h1>
                </div>
            </div>
        </>
    );
}

export default Thirdpage;