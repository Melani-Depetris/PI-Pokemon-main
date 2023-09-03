import imgAbout from '../../assets/about1.jpg'
//import deploy del integrador para el boton de ir
import styles from './About.module.css'


const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutText}>
                <h1>Hi! Bienvenido a "Mi Pokédex"                <hr />
                </h1>
                <br />
                <h3> Espero estes disfrutando tu paso por mi pagina web.</h3>

                <br />

                <h3>Descripción</h3>
                <br />
                <p>Soy una entusiasta entrenadora Pokémon y una aprendiz en desarrollo fullstack. Este proyecto es mi oportunidad de demostrar el aprendizaje que estoy adquiriendo durante mi formación en el Bootcamp Henry. Acompáñame en esta emocionante travesía mientras exploramos juntos el vasto universo de Pokémon. Mi objetivo es compartir conocimientos y experiencias a medida que crezco como desarrolladora.
                </p>

                <br />

                <h3>Mi último proyecto</h3>
                <br />

                <button>Ir</button>

                <br />

                <div>
                    <h3>Contacto</h3>
                    <br />
                    <button>Git-Hub</button>
                    <button>Linkedin</button>
                </div>

            </div>
            <div>
                <img src={imgAbout} className={styles.aboutImage} />
            </div>
        </div>
    )
}

export default About;