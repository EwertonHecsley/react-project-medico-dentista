import { useNavigate } from 'react-router-dom';
import s from './Home.module.scss';

export const Home = () => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate("/voluntario");
  };

  return (
    <main className={s.main}>
      <section className={s.mainContentOne}>
        <section className={s.boxLeft}>
          <img src="src/assets/imagem.png" alt="imagem do nome da logo" />
          <h2>Saúde e cuidado sem barreiras</h2>
          <p>
            Um projeto dedicado a oferecer atendimento médico e odontológico gratuito
            para pessoas que mais precisam na nossa comunidade.
          </p>
          <div className={s.boxButton}>
            <button onClick={handlerClick} className={s.buttonVoluntario}>
              Seja Voluntário
            </button>
            <button className={s.buttonAjudar}>Como Ajudar</button>
          </div>
        </section>

        <section className={s.boxRigth}>
          <div className={s.boxImage}></div>
        </section>
      </section>
      <section className={s.mainContentTwo}></section>
    </main>
  );
};
