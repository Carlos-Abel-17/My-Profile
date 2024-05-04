import React from 'react';
import './App.css';
import photoPrefil from './img/perfiles.jpg';

import ola from './img/waves.svg'
import olass from './img/wavess.svg'
import github from './img/github.svg'
import linkedin from './img/linkedin.svg'
import wsp from './img/wsp.svg'
import fb from './img/fb.svg'
import video from './img/video.svg'
import descarga from './img/descarga.svg'
import githubcard from './img/githubs.svg'
import linkss from './img/enlacess.svg'
import arcadeDash from './imgProyect/arcadeDash.jpeg'
import lealey from './imgProyect/lealey.jpeg'
import laravelAbout from './imgProyect/laravelAbout.jpeg'
import laravelBolg from './imgProyect/laravelBolg.jpeg'
import lealeyT from './imgProyect/lealeyT.jpeg'

import cvPDF from './CV/Aguado_Ramos_Abel_CV.pdf'
import arcedeusers from './imgProyect/arcadeusers.jpeg'
import AutoWrite from './AutoWrite';





function App() {
  const Nback=['Mysql','Node.js','Postgresql','Prisma','Sequelize','SQL','mongoDB','mongoose','Eloquent','Entity Framework']
  const NFrontStyle=['Bootstap','Material-UI','Tailwindcss','chakra-UI','chart.js','apex chart.js']
  const NFrontFramework=['Laravel','React','Vite',"Preact",'Nextjs','Angular']
  const Lenguajes=['Javascript','Typescript','PHP','C#']
  
  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = cvPDF; 
    link.download = 'Mi_CV_Abel_Aguado.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <div style={{  width: '100%' }}>
      <nav className={`nav`}>
        <div className='navInter'>
          <div className='enlaces'>
            <a href="#about"  id='link'>About</a>
            <a href="#skills" id='link'>Skill</a>
            <a href="#Proyects" id='link'>Project</a>
            <a href="#contact"  id='link'>Contact</a>
          </div>
        </div>
      </nav>
    </div>

      <div id='imagenDeFondo'>
        <div className='overlay'>
          <h2 className='tituloPresentacion'>Hola, Soy Abel
          <br />
          </h2>
          {/* //? El auto escrito  */}
           <AutoWrite/>
        </div>
      </div>

      <div id='about' className='sectionAbout'>
        <br />
        <br />
        <div><h2 className='titleAbout'>About </h2></div>
        <br />
        <div className='t'>
        {/* <img src={photoPrefil} alt="" className='yo'/> */}
        <div className='descripcion'>
          
        </div>
      </div>
      <br />
      <div >
      <button className="button" onClick={descargarCV} type="button">
  <span className="button__text">CV.pdf</span>
  <span className="button__icon">
    <img src={descarga} alt="" className='svg'/>
  </span>
</button>
      </div>
        </div>
         
        <div id='skills' className='sectionSkill'>
          <img src={ola} alt="" className='olas' />
          <div>
        <h2 className='titleSkill'>SKILLS </h2>
          </div>
          <br />
          <div >
              <h3 className='frontend' >Front end skills</h3>
            </div>

<div className='Skills'> 
          {NFrontFramework?.map((u) => (
    <div  className='Botones'>
      <p className='BFrontendF' >{u}</p>
    </div>
  ))}
 </div>

          <div className='Skills'> 
          <h3>Frontend Style</h3>
          <br />
          {NFrontStyle?.map((u) => (
    <div  className='Botones'>
      <p className='BFrontendStyle'>{u}</p>
    </div>
  ))}
          </div>
   <div>
    <h3 className='frontend'>My Back skills</h3>
   </div>
    
<p style={{fontFamily:'sans-serif',color:'#9c9c9c',padding:'2em'}}>

</p> 
<div className='Skills'> 
          {Nback?.map((u) => (
    <div  className='Botones'>
      <p className='BBackend'>{u}</p>
    </div>
  ))}
          </div>     
  <div>
    <h3 className='frontend'>PROGRAMMING LANGUAGES</h3>
  </div>
  <div className='Skills'>
    {
      Lenguajes?.map((u)=>(
        <div className='Botones'>
        <p className='BLenguaje'>{u}</p>
        </div>
      ))
    }

  </div>
        </div>
        <div id='Proyects' className='sectionProyect'>
          <img src={olass} alt=""  className='olas'/>
          <div>
          <h2 className='titlecontact'>PROYECTS</h2>
          </div>
          <br />
          <div className='cajaProyectos'>
            <div className='proyectt'>
              <div className='icons'>
                  <a className='Theicons' href="https://www.youtube.com/watch?v=WCt5ddr2Uac&t=118s" target="_blank">
                    <img src={video} alt="" className='gr' />
                  </a>
                  <a className='Theicons' href='https://main--monumental-dragon-891db4.netlify.app/' target="_blank" >
                <img src={linkss} alt="" className='gr' />
                  </a>
                  <a className='Theicons' href='https://github.com/Carlos-Abel-17/Front-end-Arcade-World-Henry' target="_blank">
                 <img src={githubcard} className='gr' alt=""  />
                  </a>
              </div>
             <h3 style={{margin:'0.5em'}}>ARCADE WORLD</h3>
             <p>Arcade world es un ecommerce de videojuegos, este proyecto duró 3 semanas.  </p>
             <br />
             <p>React+Vite, Javascript, PostgreSQL</p>
             <br />
             <div className='conteiner_img'>
             <img src={arcedeusers} className='imgmodal' alt="" />
             <img src={arcadeDash} alt="" className='imgmodal' />
             </div>
            </div>
            <div className='proyectt'>
              <div className='icons'>
                  <a className='Theicons' href='https://github.com/Angelaguado96/ECOOMER-LEALEY' target="_blank">
                 <img src={githubcard} className='gr' alt=""  />
                  </a>
              </div>
             <h3 style={{margin:'0.5em'}}>QHAPAQ P'ACHA</h3>
             <p>qhapaq p'acha en un ecommerce de ropa andina peruana que sigue en producción </p>
             <br />
             <p>Next.js, Javascript, PostgreSQL </p>
             <br />
             <div className='conteiner_img'>
             <img src={lealey} className='imgmodal' alt="" />
             <img src={lealeyT} className='imgmodal' alt="" />
             </div>
            </div>
            <div className='proyectt'>
              <div className='icons'>
                  <a className='Theicons' href='https://github.com/Carlos-Abel-17/Back-end-typescript' target="_blank">
                 <img src={githubcard} className='gr' alt=""  />
                  </a>
              </div>
             <h3 style={{margin:'0.5em'}}>BACKEND WITH TYPESCRIPT</h3>
             <p>Este es un backend usando con lenguaje principal typescript, este backend tiene todo el CRUD.</p>
             <br />
             <p>Node.js, Sequelize, Express, typescript,Eslint</p>
            </div>
            <div className='proyectt'>
              <div className='icons'>
                  <a className='Theicons' href='https://github.com/Carlos-Abel-17/Proyecto-laravel9' target="_blank">
                 <img src={githubcard} className='gr' alt=""  />
                  </a> 
              </div>
             <h3 style={{margin:'0.5em'}}> PROYECT LARAVEL-9</h3>
             <p>Es una pequeña aplicación con todo el backend CRUD, una estructura html y estilos css tailwind. </p>
             <br />
             <p>Laravel-9, eloquent, laragon,PHP,Tailwind</p>
             <br />
             <div className='conteiner_img'>
             <img src={laravelAbout} className='imgmodal' alt="" />
             <img src={laravelBolg} className='imgmodal' alt="" />
             </div>
            </div>
          </div>  
        </div>
       
    </div>
  );
}

export default App;
