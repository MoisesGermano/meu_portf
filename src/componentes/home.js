import styles from "./home.css";
import cv from "./img/meu_cv.pdf";
function Home() {
    return (
        <div>
            
            <section class="header-container">
                

                <h1 class="pisc anima">Moisés Germano</h1>
                <h2 class="pisc anima">Ds Mobile Android</h2>
                <h2 class="pisc anima">Ds Front-end</h2>
                <div class="social-media">
                    <a class="lk" href="https://www.linkedin.com/in/mois%C3%A9s-n-germano-2a1b34270">Linkedin</a>
                    <a class="cv" href={cv}>Curriculo</a>
                    <a class="wh" href="https://WA.me/5511937211267">Whatsapp</a>
                    <a class="gh" href="https://github.com/MoisesGermano">GitHub</a>
                </div>

            </section>


        </div>
    );
}

export default Home;