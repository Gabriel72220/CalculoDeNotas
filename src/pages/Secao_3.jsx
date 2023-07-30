import React, { useState, useEffect } from 'react';
import "../styles/global.scss";
import "../styles/Secao_3.scss";

const Secao_3 = ({ media }) => {
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [media3, setMedia3] = useState('');
    const [mensagem, setMensagem] = useState('Calcule a média das notas na seção anterior ou, se você já realizou a prova substitutiva, insira suas duas maiores notas, juntamente com a nota da avaliação substitutiva, para determinar o seu resultado');
    const [mostrar, setmostrar] = useState(false)
    console.log('sexxx', media)

    // useEffect para atualizar as notas quando maioresNotas for alterado
    useEffect(() => {
        // Calcula a menor nota com base nas duas maiores notas

        if (media > 0) {
            let formatado= media
            setNota1(media)
            let valor = (10 - (media))
            // Remove o zero após o valor decimal, caso exista
            setMensagem(
                <div id='continuacao'>
                    <p id='nota_necessaria'>Nota necessaria no exame final:</p>
                    <span style={{ fontSize: '20px' }}>{valor}</span>

                </div>
            );

        }
        setmostrar(true)
    }, [media]);

    const handleCalculate = () => {
        setmostrar(false);
        const nota1Value = typeof nota1 === 'string' ? parseFloat(nota1.replace(',', '.')) : 0;
        const nota2Value = typeof nota2 === 'string' ? parseFloat(nota2.replace(',', '.')) : 0;

        console.log(nota2Value, nota1Value)
        // Função para encontrar as duas maiores notas

        const media = ((10 - nota1Value));
        console.log(media)
        console.log('oi')

        if (nota2Value >=media ) {
            setMensagem('Aprovado');
        } 
        else if(nota2Value)
        {

            setMensagem('Reprovado por Média Final');
        }
        else if(!nota2Value && nota1Value){
            let valor = (10 - media).toFixed(1);
            // Remove o zero após o valor decimal, caso exista
            let valorFormatado = parseFloat(valor);
            setMensagem(
                <div id='continuacao'>
                  <p id='nota_necessaria'>Nota necessaria no exame final:</p>
                  <span>{valorFormatado }</span>
                </div>
              );
                        
        }

    };



    return (
        <div id="formulario">
            <h2 className='titulo'>Calculo do exame final</h2>
            <form name="form_media" id="form_media" action="index.php" method="POST">
                <div className=''></div>
                <div id="conteudo">
                    <div id="esquerda">
                        <div className="media-input">
                            <p id="p_style">
                                Media:
                            </p>
                            <input
                value={nota1}
                name="mediaInput"
                id="mediaInput"
                className="check"
                type="number"
                onChange={(e) => setNota1(e.target.value)}
              />
                        </div>
                        <div className="media-input">
                            <p id="p_style">
                                Nota do exame Final:
                            </p>
                            <input value={nota2} name="nota2" id="nota2" className="check" type="text" onChange={(e) => setNota2(e.target.value)} />
                        </div>

                    </div>
                    <div id='espaco'>
                        <div id="aviso">
                            {/* Exibe a mensagem pronta */}
                            {media3 == '' && !nota1  &&(
                                <p>{mensagem}</p>
                            )}
                            {nota1 >0 &&  (
                                <p>{mensagem}</p>
                            )}
                            {/* Exibe a média e o status após clicar no botão de calcular */}
                            {media3 !== '' && mostrar == false && (
                                <>
                                    <p id="media3">Media:</p>

                                    <p id='status' >Status:</p>
                                    {mensagem && <p style={{ color: mensagem === 'Aprovado' ? 'green' : 'red' }}>{mensagem}</p>}
                                </>
                            )}
                        </div>
                    </div>
                    <p id="p_btn">
                        <button type="button" name="btn1" id="btn1" onClick={handleCalculate}>Calcular média</button>
                    </p>
                </div>
            </form>
        </div>
    );
};
export default Secao_3;
