import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../styles/global.scss";
import "../styles/Secao_1.scss";
import { useDataContext } from '../components/context/DataContext';

const Secao_1 = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [media3, setMedia3] = useState('');
  const [mensagem, setMensagem] = useState('Digite suas 3 notas para saber sua Média e seu resultado');
  const [fazerSubstitutiva, setFazerSubstitutiva] = useState(true);

  // Use o useContext para obter os valores e funções do contexto
  const { maioresNotas, setMaioresNotas } = useDataContext();

  const handleCalculate = () => {
    const nota1Value = parseFloat(nota1.replace(',', '.'));
    const nota2Value = parseFloat(nota2.replace(',', '.'));
    const nota3Value = parseFloat(nota3.replace(',', '.'));

    // Função para encontrar as duas maiores notas
    const findTwoHighestNotes = () => {
      const notas = [nota1Value, nota2Value, nota3Value]; // Use as variáveis aqui
      notas.sort((a, b) => b - a);
      return notas.slice(0, 2); // Retorna um array com as duas maiores notas
    };

    const media = ((nota1Value + nota2Value + nota3Value) / 3);
    const mediaFormatada = media % 1 === 0 ? media.toFixed(0) : media.toFixed(1);
    setMedia3(mediaFormatada);
    if (media >= 7) {
      setMensagem(
        <div id="aviso">
          <p id='centralizar' style={{ color:  'green' }}>Parabéns! Você alcançou a aprovação na disciplina!</p>
        </div>);
    } else if (3>media) {
      setMensagem(
        <div id="aviso">
          <p id='centralizar' style={{ color:  'red' }}>Você reprovou na disciplina por não alcançar a Média Final!</p>
        </div>);

    }
      else if (fazerSubstitutiva) {
        setMaioresNotas({ nota1: Number(nota1), nota2: Number(nota2), nota3: Number(nota3), media: mediaFormatada, substituta: true }); // Envia as três notas
        setMensagem(
          <div id="aviso">
            <p id='centralizar' style={{ color:  'red' }}>Você deverá fazer a Avaliação Substitutiva.</p>
          </div>);
      } else {
        setMaioresNotas({ media: media, substituta: false })
        setMensagem(
          <div id="aviso">
            <p id='centralizar' style={{ color:  'red' }}>Você deverá fazer o Exame Final.</p>
          </div>);
      }
    

    const [maiorNota1, maiorNota2, menorNota] = findTwoHighestNotes();
  };
  return (
    
    <div id="formulario">
      
      <h2 className='titulo'>Cálculo da média</h2>
      <form name="form_media" id="form_media" action="index.php" method="POST">
        <div className=''></div>
        <div id="conteudo">
          <div id="esquerda">
            <div className="media-input">
              <p id="p_style">
                1° nota:
              </p>
              <input value={nota1} name="nota1" id="nota1" className="check" type="number" onChange={(e) => setNota1(e.target.value)} />
            </div>
            <div className="media-input">
              <p id="p_style">
                2° nota:
              </p>
              <input value={nota2} name="nota2" id="nota2" className="check" type="number" onChange={(e) => setNota2(e.target.value)} />
            </div>
            <div className="media-input">
              <p id="p_style">
                3° nota:
              </p>
              <input value={nota3} name="nota3" id="nota3" className="check" type="number" onChange={(e) => setNota3(e.target.value)} />
            </div>
            <div className="media-input">
              <input
                type="checkbox"
                checked={fazerSubstitutiva}
                onChange={(e) => setFazerSubstitutiva(e.target.checked)}
              />
              <label htmlFor="fazerSubstitutiva"> Deseja fazer avaliação substitutiva?</label>
            </div>
          </div>
          <div id="aviso">
            {/* Exibe a mensagem pronta */}
            {media3 == '' && (
              <p>{mensagem}</p>
            )}
            {/* Exibe a média e o status após clicar no botão de calcular */}
            {media3 !== '' && (
              <>
                <p id="media3">Media:</p>
                <p>
                  <label id="mostra_media" style={{ color: media3 >= 7 ? 'green' : 'red' }}>{media3}</label>
                </p>
                <p id='status' >Status:</p>
                {mensagem && <p>{mensagem}</p>}
              </>
            )}
          </div>
          
        </div>

      </form>
      <p id="p_btn">
            <button type="button" name="btn1" id="btn1" onClick={handleCalculate}>Calcular média</button>
          </p>
    </div>
  );
};

export default Secao_1;
