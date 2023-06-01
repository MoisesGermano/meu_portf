import styles from "./qualif.css";
import menin from "./img/def.gif"

function Qualific() {
    return (
        <div class="corpo">
            <div class="tab">
            <img class="img" src={menin}></img>
                <section class="qlf">

                    <div class="barra">

                        <div id="Java">Java(Android)</div>
                    </div><br />

                    <div class="barra">
                        <div id="Py">Pyton</div>
                    </div><br />

                    <div class="barra">
                        <div id="Pp">PHP</div>
                    </div><br />

                    <div class="barra">
                        <div id="Javasp">JavaScript</div>
                    </div><br />

                    <div class="barra">
                        <div id="html">HTML</div>
                    </div><br />

                    <div class="barra">
                        <div id="CSS">CSS</div>
                    </div><br />
                </section>
                
            </div>
        </div>
    );
}
export default Qualific;