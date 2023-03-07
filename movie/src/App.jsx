import Commercial from "./components/Commercial";
import Navbar from './components/Navbar';
import FormSuscription from "./components/FormSscription";
import Interesting from "./components/Interesting";
import Foryou from "./components/Foryou";
import Galery from "./components/Galery";
import Buy from "./components/Buy";
function App() {
  
  

  return (
    <div>
      <Commercial/>
      <Navbar/>
      <section className="main__card">   
          <Galery/>
          <Buy/>
         {/*  <Acordion/> */}


      </section>
      <section className="interesting">
        <h2 className='interesting__title' >También te puede <b>INTERESAR</b> </h2>
        <Interesting />
      </section>
      <section className="interesting">
      <h2 className="interesting__title">Seleccionados para <b>TI</b></h2>
      <Foryou/>
      </section>

      <section className="form">
        <FormSuscription/>
      </section>
      <section className="chat">

      </section>
      <footer>


      </footer>
    </div>

    
  )
}

export default App
