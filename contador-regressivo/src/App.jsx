import './App.css'
import Title from './components/Title';
import Counter from './components/Counter';
//  pegar uma imagem  // import YOURBIRTHDAY from "./assets/yourbirthday.jpg"


function App() {
  return (
    <div className="App" style={{ backgroundImage: 'url(${YOURBIRTHDAY})' }}>
      <div className="container">
        <Title title="Contagem regressiva para 2025" />
        <div className="countdown-container">
          <Counter title="Dias" number={2} />
          <Counter title="Horas" number={2} />
          <Counter title="Minutos" number={2} />
          <Counter title="Segundos" number={2} />
        </div>
      </div>
    </div>
  );
}

export default App
