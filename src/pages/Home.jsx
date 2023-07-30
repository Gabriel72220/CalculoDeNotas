import React, { useEffect,useState } from 'react';
import "../styles/global.scss";
import "../styles/home.scss"
import { Trash } from "@phosphor-icons/react";
import Navbar from '../components/Navbar';
import AsideItems from '../components/AsideItems';
import DependentInfo from '../components/DependentInfo';
import Secao_1 from './Secao_1';
import Secao_2 from './Secao_2';
import Secao_3 from './Secao_3';
import { useDataContext } from '../components/context/DataContext'; // Importe o useDataContext

const Home = () => {
  const [media3, setMedia3] = useState('');

  // Obtenha as maiores notas e a média do contexto
  let { maioresNotas, media, setMaioresNotas, setMedia } = useDataContext();
  let media_status;
  useEffect(() => {
    // Aqui você pode fazer alguma lógica para atualizar as maiores notas e a média
    // por exemplo, ao receber algum valor externo, etc.
    // Por enquanto, vamos apenas exibir no console para fins de demonstração.
    
    if(!maioresNotas.substituta){
    if (maioresNotas.media > 0) {
      const mediaFormatada = maioresNotas.media % 1 === 0 ? maioresNotas.media.toFixed(0) : maioresNotas.media.toFixed(1)
      media_status = maioresNotas.media;
      setMedia3(mediaFormatada)
      console.log(media_status)
    }
  }
    else{
      setMedia3(0)
    }
    
      if (media.media > 0) {
        media_status = media.media;
        console.log(media_status)
        setMedia3(media_status)
      }
    

  }, [maioresNotas, media]); // O useEffect será executado sempre que as maiores notas ou a média mudarem.
  


  return (
    <>
      <main id="main">
        <Secao_1 />
        <Secao_2 maioresNotas={maioresNotas} />
        <Secao_3 media={media3} />
      </main>
      {/* Aqui você pode exibir as notas ou utilizá-las conforme necessário */}
    </>
  );
};

export default Home;
