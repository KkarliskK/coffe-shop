import css from '../style/Times.module.css';

function Times() {
    return (
        <>
            <div className={css.mainContainer}>
                <h1 className={css.bigText}>We are Open</h1>
                <h3>Monday - Friday</h3>
                <p>10:00 am - 10:00 pm</p>
                <h3>Saturday and Sunday</h3>
                <p>10:00 am - 10:10 pm</p>
            </div>
        </>
    );
}

export default Times