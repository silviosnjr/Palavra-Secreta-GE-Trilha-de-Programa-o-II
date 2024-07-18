import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
      <h1>Roda Roda Start</h1>
      <p>Clique no botão abaixo para começar a jogar!</p>
      <button onClick={startGame}>Começar o Jogo</button>
    </div>
  )
}

export default StartScreen