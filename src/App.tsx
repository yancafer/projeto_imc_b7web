import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';

const App = () => {

  const [heighField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if(heighField && weightField){
      const imc = weightField / (heighField * heighField);
      alert(`Seu IMC é: ${imc.toFixed(2)}`);
    }else {
      alert('Preencha os campos!');
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado
            pela Organização Mundial de Saúde para calcular o peso ideal de
            cada pessoa.
          </p>

          <input
            type='number'
            placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
            value={heighField > 0 ? heighField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input
            type='number'
            placeholder='Digite o seu peso. Ex: 75 (em quilos)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>

        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App;