import { Link } from 'react-router-dom';
import s from './Header.module.scss';

export const Header = () => {
    return (
        <>
            <header className={s.header}>
                <section className={s.headerBoxLeft}>
                    <img src="src/assets/logo.png" alt="logo de coracao" />
                    <Link to="/">
                        <p>Médicos & Dentistas</p>
                    </Link>
                </section>
                <section className={s.headerBoxRigth}>
                    <nav>
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                        <Link to="/voluntario">
                            <button>Seja voluntário</button>
                        </Link>
                    </nav>
                </section>
            </header >
            <hr/>
        </>
    )
}