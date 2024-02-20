import css from '../style/Branches.module.css';
import newYork from '../assets/images/newYork.png';
import jakarta from '../assets/images/jakarta.png';
import paris from '../assets/images/paris.png';
import wave4 from '../assets/waves/wave4.png';


function Branches() {
    return (
        <>
            <div className={css.branchesPage}>
                <img src={wave4} className={css.wave4}/>
                <div className={css.textBox}>
                    <h1 className={css.bigText}>Our Branches</h1>
                </div>
                <div className={css.imageBox}>
                    <div className={css.splitBox}>
                        <img src={newYork}/>
                        <button>New York</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis doloremque, esse
                            excepturi explicabo fugit illum ipsum iure, iusto labore nisi optio placeat qui quibusdam
                            quis quisquam reprehenderit similique, ullam!</p>
                    </div>
                    <div className={css.splitBox}>
                        <img src={jakarta}/>
                        <button>Jakarta</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis doloremque, esse
                            excepturi explicabo fugit illum ipsum iure, iusto labore nisi optio placeat qui quibusdam
                            quis quisquam reprehenderit similique, ullam!</p>
                    </div>
                    <div className={css.splitBox}>
                        <img src={paris}/>
                        <button>Paris</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis doloremque, esse
                            excepturi explicabo fugit illum ipsum iure, iusto labore nisi optio placeat qui quibusdam
                            quis quisquam reprehenderit similique, ullam!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Branches