import './App.css';
import {useState, useEffect} from 'react'
import PageHeader from './components/PageHeader';

function App() {

  const url = 	"https://api.adviceslip.com/advice"

  //STATES
  const [advice, setAdvice] = useState("Conselho")
  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)
  const [result, setResult] = useState("Resultado")

  useEffect(() => {
    const getAdvice = async () => {

      const res = await fetch(url);
      const data = await res.json()
  
      setAdvice(data.slip.advice)
    }
    getAdvice()
  }, )

  const sortear = () => {
    const randamNumberOne = Math.floor(Math.random() * 10)
    const randamNumberTwo = Math.floor(Math.random() * 10)

    setNumberOne((previousNumber) => (previousNumber + randamNumberOne))
    setNumberTwo((previousNumber) => (previousNumber + randamNumberTwo))

    if (numberOne === 50) {
      setResult("Número um venceu!")
      setNumberOne(0)
      setNumberTwo(0)
    } else if (numberTwo === 50) {
      setResult("Número dois venceu!")
      setNumberOne(0)
      setNumberTwo(0)
    } else {
      setResult("Empate")
      setNumberOne(0)
      setNumberTwo(0)
    }
  }
  


  return (
    <div className="App">
     <PageHeader advice={advice}/>
     <div className='games'>
        <div className='cart-game game'>
          <h1>Cart game</h1>
        </div>
        <div className='hangman-game game'>
          <h1>Hangman game</h1>
        </div>
        <div className='jockey game'>
          <h1>Jockey game</h1>
        </div>
     </div>

      <h3>Teste Cart Game</h3>
     <div className='teste'>
      <span>Número um = {numberOne}</span>
      <span>Número dois = {numberTwo}</span>
      <p>{result}</p>
      <button onClick={sortear}>Jogar</button>
     </div>
      
    </div>
  );
}

export default App;
