import { useState } from "react";
import s from "./Voluntario.module.scss";
import { Card } from "../../components/card/Card";

export const Voluntario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const isValid =
    nome.trim() !== "" && email.trim() !== "" && telefone.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setEnviado(true);
    setNome("");
    setEmail("");
    setTelefone("");
    setMensagem("");
  };

  const contentCards = [
    {
      title: "Impacto Direto",
      description: "Sua dedicação salva vidas e transforma comunidades",
      variant: "white",
    },
    {
      title: "Crescimento Pessoal",
      description: "Desenvolva habilidades e cresça profissionalmente",
      variant: "white",
    },
    {
      title: "Comunidade",
      description: "Faça parte de uma rede de profissionais comprometidos",
      variant: "white",
    },
  ];

  return (
    <main className={s.main}>
      <section className={s.boxContent}>
        <h2>Seja Voluntário</h2>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
        <section className={s.boxCards}>
          {contentCards.map((c) => (
            <Card
              key={c.title}
              title={c.title}
              description={c.description}
              variant={c.variant}
            />
          ))}
        </section>
      </section>

      <section className={s.boxForm}>
        <div className={`${s.formWrapper} ${enviado ? s.flipped : ""}`}>
          <form className={s.formVoluntario} onSubmit={handleSubmit}>
            <h3>Inscrição para Voluntários</h3>

            <div className={s.groupTitle}>
              <label>Dados Pessoais</label>
            </div>

            <div className={s.row}>
              <div className={s.field}>
                <input
                  id="nome"
                  type="text"
                  placeholder="Seu Nome *"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className={s.field}>
                <input
                  id="email"
                  type="email"
                  placeholder="Seu Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={s.row}>
              <div className={s.fieldFull}>
                <input
                  id="telefone"
                  type="text"
                  placeholder="Seu Telefone *"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={s.groupTitle}>
              <label>Mensagem Adicional</label>
            </div>

            <div className={s.row}>
              <div className={s.fieldFull}>
                <textarea
                  id="mensagem"
                  placeholder="Conte-nos porque você quer ser voluntário..."
                  rows={5}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                />
              </div>
            </div>

            <p className={s.infoText}>
              Entraremos em contato para mais informações!
            </p>

            <button
              type="submit"
              className={s.buttonSubmit}
              disabled={!isValid}
            >
              Enviar Inscrição
            </button>
          </form>

          <div className={s.successCard}>
            <div className={s.successIcon}>✓</div>
            <p>Cadastro realizado com sucesso.</p>
            <p>Entraremos em contato para mais informações.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
