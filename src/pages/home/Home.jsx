import { useNavigate } from 'react-router-dom';
import s from './Home.module.scss';
import { Card } from '../../components/card/Card';

export const Home = () => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate("/voluntario");
  };

  const contentCardsOne = [
    {
      title:"Acesso Equitativo",
      description:"Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira."
    },
    {
      title:"Comunidade Forte",
      description:"Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo."
    },
    {
      title:"Bem-estar Total",
      description:"Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida."
    }
  ];

  const contentCardsTwo = [
    {
      title:"2,500+",
      description:"Pessoas Atendidas",
      variant:"white"
    },
    {
      title:"150+",
      description:"Profissionais Voluntários",
      variant:"white"
    },
    {
      title:"98%",
      description:"Satisfação dos Pacientes",
      variant:"white"
    },
    {
      title:"5+",
      description:"Anos de Dedicação",
      variant:"white"
    }
  ];

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
            {contentCardsOne.map(c=>{
              return (
                <Card
                  title={c.title}
                  description={c.description}
                />
              )
            })}
          </section>
        </section>
      </section>
      <section className={s.mainContentThree}>
        <section className={s.boxContent}>
          <h2>Nosso Impacto</h2>
          <p>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>
          <section className={s.boxCards}>
           {contentCardsTwo.map(c => {
            return (
              <Card
                title={c.title}
                description={c.description}
                variant={c.variant}
              />
            )
           })}
          </section>
        </section>
      </section>
    </main>
  );
};
