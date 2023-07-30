import React, { useState, useEffect ,useContext} from 'react';

import "../styles/global.scss";
import "../styles/Secao_2.scss";
import { useDataContext } from '../components/context/DataContext';

const Secao_2 = ({ maioresNotas }) => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [media3, setMedia3] = useState('');
  const [mensagem, setMensagem] = useState('Calcule a média das notas na seção anterior ou, se você já realizou a prova substitutiva, insira suas duas maiores notas, juntamente com a nota da avaliação substitutiva, para determinar o seu resultado');
  const [mostrar, setmostrar] = useState(false)
  const {media, setMedia} =  useDataContext();;

  // useEffect para atualizar as notas quando maioresNotas for alterado
  useEffect(() => {
    // Calcula a menor nota com base nas duas maiores notas

    if (maioresNotas.nota1 > 0 && maioresNotas.nota2 > 0 && maioresNotas.nota3 > 0) {
      const findTwoHighestNotes = () => {
        const notas = [maioresNotas.nota1, maioresNotas.nota2, maioresNotas.nota3]; // Use as variáveis aqui
        notas.sort((a, b) => b - a);
        return notas.slice(0, 2); // Retorna um array com as duas maiores notas
      };
      let maiores = findTwoHighestNotes()
      console.log('ett', maiores)
      setNota1(maiores[0]);
      setNota2(maiores[1]);
      let resultado = 21 - (maiores[0] + maiores[1])
      const calcularMenorNota = (nota1, nota2, nota3) => {
        const maioresNotas = [nota1, nota2, nota3].sort((a, b) => b - a).slice(0, 2);
        const somaDasTresNotas = nota1 + nota2 + nota3;
        const somaDasMaioresNotas = maioresNotas.reduce((acc, nota) => acc + nota, 0);
        const menorNota = somaDasTresNotas - somaDasMaioresNotas;
        return menorNota;
      };

      // Uso de exemplo:
      const nota1 = maioresNotas.nota1;
      const nota2 = maioresNotas.nota2;
      const nota3 = maioresNotas.nota3;
      const menorNota = calcularMenorNota(nota1, nota2, nota3);

      console.log('Menor nota:', menorNota);


      setMensagem(
        <div id='continuacao'>
          <p id='nota_necessaria'>Nota necessaria:</p>
          <p>{resultado}</p>
          <p id='menor_nota'>Sua menor nota:</p>
          <p>{menorNota}</p>

        </div>
      );

    }
    setmostrar(true)
  }, [maioresNotas]);

  const handleCalculate = () => {
    setmostrar(false);
    const nota1Value = typeof nota1 === 'string' ? parseFloat(nota1.replace(',', '.')) : 0;
  const nota2Value = typeof nota2 === 'string' ? parseFloat(nota2.replace(',', '.')) : 0;
  const nota3Value = typeof nota3 === 'string' ? parseFloat(nota3.replace(',', '.')) : 0;
  
    // Função para encontrar as duas maiores notas
    const findTwoHighestNotes = () => {
      const notas = [nota1Value, nota2Value, nota3Value]; // Use as variáveis aqui
      notas.sort((a, b) => b - a);
      return notas.slice(0, 2); // Retorna um array com as duas maiores notas
    };
  
    const media = ((Number(nota1) + Number(nota2) + Number(nota3)) / 3);
    const mediaFormatada = media % 1 === 0 ? media.toFixed(0) : media.toFixed(1);
    console.log(mediaFormatada)
    setMedia3(mediaFormatada);
  
    if (media >= 7) {
      setMensagem('Aprovado');
    } else {
      setMedia({media:mediaFormatada, substituta:false}); // Atualize a variável de estado 'mediaState'

      
      setMensagem(
        <div id="aviso">
          <p id='centralizar'>Deve fazer exame final</p>
        </div>);
    
    }
  
    const [maiorNota1, maiorNota2, menorNota] = findTwoHighestNotes();
  };
  


  return (
    <div id="formulario">
      <h2 className='titulo'>Cálculo da avaliação substitutiva</h2>
      <form name="form_media" id="form_media" action="index.php" method="POST">
        <div className=''></div>
        <div id="conteudo">
          <div id="esquerda">
            <div className="media-input">
              <p id="p_style">
                1° maior nota:
              </p>
              <input value={nota1} name="nota1" id="nota1" className="check" type="number" onChange={(e) => setNota1(e.target.value)} />
            </div>
            <div className="media-input">
              <p id="p_style">
                2° maior nota:
              </p>
              <input value={nota2} name="nota2" id="nota2" className="check" type="number" onChange={(e) => setNota2(e.target.value)} />
            </div>
            <div className="media-input">
              <p id="p_style">
                Nota da avaliação substitutiva:
              </p>
              <input value={nota3} name="nota3" id="nota3" className="check" type="number" onChange={(e) => setNota3(e.target.value)} />
            </div>
          </div>
            <div id="aviso">
              {/* Exibe a mensagem pronta */}
              {media3 == '' && (
                <p>{mensagem}</p>
              )}
              {media3 !== '' && mostrar == true && (
                <p>{mensagem}</p>
              )}
              {/* Exibe a média e o status após clicar no botão de calcular */}
              {media3 !== '' && mostrar == false && (
                <>
                  <p id="media3">Media:</p>

                  <p>
                    <label id="mostra_media2" style={{ color: media3 >= 7 ? 'green' : 'red' }}>{media3}</label>
                  </p>
                  <p id='status' >Status:</p>
                  {mensagem && <p style={{ color: mensagem === 'Aprovado' ? 'green' : 'red' }}>{mensagem}</p>}
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
export default Secao_2;
