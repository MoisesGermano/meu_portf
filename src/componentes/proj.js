import styles from "./proj.css";
import process from "./img/projeto.png"
import apiphp from "./img/api.png"

function Projet() {
    return (
        <div class = "crpproj">
            <section class = "pag01">
                <img class = "imgpj" src = {apiphp}></img>
                <p class = "txt1">Esse foi um projeto em que consumi uma api usando PHP. O projeto foi feito em sala de aula
                no periodo em que estudei na Etec de Cotia. O projeto estara disponivel em meu git hub caso queira testar seus componentes </p>
            </section>
            <section class = "pag02">
                <img class = "imgpj" src = {process}></img>
                <p class = "txt1">Estudando para fazer mais projetos</p>
            </section>
        </div>
    );
}

export default Projet;