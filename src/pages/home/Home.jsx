import { useNavigate } from 'react-router-dom';
import s from './Home.module.scss';
import { Card } from '../../components/card/Card';

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
      <section className={s.mainContentTwo}>
        <section className={s.boxContent}>
          <h2>Nossa Missão</h2>
          <p>Transformar vidas através do acesso universal a saúde de qualidade</p>
          <section className={s.boxCards}>
            <Card 
              title="Acesso Equitativo" 
              description="Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira."/>
            <Card 
              title="Comunidade Forte"
              description="Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo."
            />
            <Card
              title="Bem-estar Total"
              description="Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida."
            />
          </section>
        </section>
      </section>
    </main>
  );
};
