import s from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <section className={s.boxFooter}>
                <article className={s.cardFooter}>
                    <div className={s.cardHeader}>
                        <img src="src/assets/logo.png" alt="imagem logo" />
                        <h4>Médicos & Dentistas</h4>
                    </div>
                    <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
                </article>
                <article className={s.cardFooter}>
                    <h4>Contato</h4>
                    <div className={s.cardHeader}>
                        <img src="src/assets/footer/email.png" alt="imagem carta" />
                        <p>contato@medico-dentista.org</p>
                    </div>
                    <div className={s.cardHeader}>
                        <img src="src/assets/footer/phone.png" alt="imagem telefone" />
                        <p>(11) 3000-0000</p>
                    </div>
                    <div className={s.cardHeader}>
                        <img src="src/assets/footer/pino.png" alt="imagem pino localizacao"/>
                        <p>São Paulo, Brasil</p>
                    </div>
                </article>
                <article className={s.cardFooter}>
                    <h4>Redes Sociais</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </article>
            </section>
            <section className={s.footerRow}>
                <hr />
                <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
            </section>
        </footer>
    )
}