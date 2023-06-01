import logo from './logo.svg';
import './App.css';
import Home from './componentes/home'
import Qualific from './componentes/qualif'
import Projet from './componentes/proj'

function App() {
  return (
    <div class="App">
      <section>
      <nav class="mn">
                <ul >

                <p><a href="#Pj" >Projetos</a></p>
                <p><a href="#Qf" >Qualificações</a></p>
                <p><a href="#Hm" >Home</a></p>
                
                
                
                
                    
                </ul>
            </nav>
      </section>
      <section id="Hm">
      <Home />
      </section>
      
      <section id="Qf">
      <Qualific />
      </section>

      <section id="Pj">
      <Projet />
      </section>     

    </div>
  );
}

export default App;
