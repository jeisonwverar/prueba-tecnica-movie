import Commercial from "./components/Commercial";
import Navbar from './components/Navbar';
import Slider from "./components/Slider";
import Interesting from "./components/Interesting";
function App() {
  
  const MockImagenes=[
    'https://picsum.photos/id/1020/400',
    'https://picsum.photos/id/1025/400',
    'https://picsum.photos/id/1024/400',
  ]

  return (
    <div>
      <Commercial/>
      <Navbar/>
      <h2>slider</h2>
      <Slider imagenes={MockImagenes}/>
      <section className="interesting">
        <h2 className='interesting__title' >También te puede <b>INTERESAR</b> </h2>
        <Interesting />
      </section>
      <section className="foryou">
      <h2 className="foryou__title">Seleccionados para <b>TI</b></h2>

      </section>
      
      <section className="form">

      </section>
      <section className="chat">

      </section>
      <footer>


      </footer>
    </div>

    
  )
}

export default App
