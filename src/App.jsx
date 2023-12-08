import React,{useState} from 'react';
import './App.css';
import photoPrefil from './perfiles.jpg';

import ola from './img/waves.svg'
import olass from './img/wavess.svg'
import github from './img/github.svg'
import linkedin from './img/linkedin.svg'
import wsp from './img/wsp.svg'
import fb from './img/fb.svg'
import video from './img/video.svg'
import iconImage from './img/iconImage.svg'
import descarga from './img/descarga.svg'
import githubcard from './img/githubs.svg'
import linkss from './img/enlacess.svg'

import cvPDF from './CV/Aguado_Ramos_Abel_CV.pdf'
import arcedeusers from './imgProyect/arcadeusers.jpeg'

import Modal from './modal';

function App() {
  const Nback=['Mysql','Node.js','Postgresql','Prisma','Sequelize','SQL','mongoDB','mongoose','Eloquent']
  const NFront=['Laravel','Bootstap','Material-UI','React','Vite','Tailwindcss','Nextjs','chakra-UI','chart.js','apex chart.js']
  const Lenjuages=['Javascript','Typescript','PHP']
  
  const descargarCV = () => {
    // Lógica para descargar el archivo CV
    const link = document.createElement('a');
    link.href = cvPDF; // Reemplaza con la ruta correcta a tu archivo CV
    link.download = 'Mi_CV_Abel_Aguado.pdf'; // Puedes establecer el nombre de descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
 
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <div style={{ borderRadius:'2em',position: 'fixed', zIndex: '1', width: '100%', padding: '0.5em' }}>
      <nav className={`nav`}>
        <div className='navInter'>
          <div className='enlaces'>
            <a href="#about"  id='link'>ABOUT</a>
            <a href="#skills" id='link'>SKILLS</a>
            <a href="#Proyects" id='link'>PROYECTS</a>
            <a href="#contact"  id='link'>CONTACT</a>
          </div>
        </div>
      </nav>
    </div>

      <div id='imagenDeFondo'>
        <div className='overlay'>
          <h2 className='tituloPresentacion'>Hello. i'm Abel
          <br/>
            <span className='DEv'>Developers Full Stack</span> </h2>
          <p className='textoPresen'>Hello, I am a full stack developer I have knowledge in frontend and backend. </p>
        </div>
      </div>

      <div id='about' className='sectionAbout'>
        <div><h2 className='titleAbout'>ABOUT ME</h2></div>
        <div className='t'>
        <img src={photoPrefil} alt="" className='yo'/>
        <div className='descripcion'>
          <p className='midescripcion'>
Etiqueta traducida al español:
¡Hola ! Soy Carlos Abel Aguado Ramos, un apasionado desarrollador web full stack y graduado del bootcamp de I'm Henry. Actualmente estoy cursando la carrera de Ingeniería de Sistemas, un camino que me ha proporcionado una sólida base académica.
<br />
Mi principal enfoque es la programación, especialmente con frameworks (React, Next, Angular), y me encanta dar vida a las páginas web con librerías de estilos. Mi tiempo en el bootcamp me ha dado sólidos conocimientos y una mentalidad orientada a proyectos.
<br />
En mi portafolio, encontrarás ejemplos de mi trabajo, desde proyectos individuales hasta colaborativos. Me apasiona el desarrollo web y siempre estoy buscando oportunidades para aprender y crecer en este campo tan apasionante.
<br />
¡Bienvenido a mi espacio digital! Aquí puedes explorar mi trayectoria como desarrollador y descubrir las soluciones creativas que he implementado en diversos proyectos. </p>
        </div>
      </div>
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
              <h3 className='frontend' >My Front end skills</h3>
            </div>
            <p style={{fontFamily:'sans-serif',color:'#9c9c9c',padding:'2em'}}>

<span style={{color:'white',fontFamily:'sans-serif'}}>
Frameworks:
</span>
<br/>

React: Desarrollé aplicaciones dinámicas y eficientes utilizando React, aprovechando su enfoque en componentes reutilizables y una gestión eficiente del estado.

React + Vite: Experimenté con la combinación de React y Vite para crear aplicaciones modernas con tiempos de compilación rápidos y un desarrollo eficiente.

Angular: Mi experiencia con Angular incluye la construcción de aplicaciones robustas y escalables, aprovechando su marco modular y sus poderosas funciones.

<br/><br/>

<span style={{color:'white',fontFamily:'sans-serif'}}>
Estilos:
</span>
<br/>

Bootstrap: He diseñado interfaces atractivas y responsivas utilizando Bootstrap, aprovechando su conjunto de componentes preconstruidos y su capacidad de personalización.

Material-UI: Me he sumergido en el diseño de aplicaciones visualmente atractivas con Material-UI, siguiendo los principios de diseño de Material Design.

Tailwind CSS: Experimenté con Tailwind CSS para crear estilos altamente personalizables y optimizar el tamaño de los archivos CSS, proporcionando una experiencia de carga más rápida.

Next.js y UI: Utilicé Next.js y sus capacidades de renderizado del lado del servidor, junto con bibliotecas de UI como Chakra UI, para crear aplicaciones web modernas y eficientes.

</p>
          <div className='skillFront'> 
          {NFront?.map((u) => (
    <div  className='imagenConNombre'>
      <p className='nombreImagen'>{u}</p>
    </div>
  ))}
          </div>
   <div>
    <h3 className='frontend'>My Back skills</h3>
   </div>
    
<p style={{fontFamily:'sans-serif',color:'#9c9c9c',padding:'2em'}}>
<span style={{color:'white',fontFamily:'sans-serif'}}>
Tecnologías y Frameworks:
</span>
Node.js y Express: He desarrollado servidores robustos y eficientes utilizando Node.js como entorno de ejecución y Express como framework para construir aplicaciones web y APIs. Sequelize: Mi experiencia con Sequelize abarca la interacción con bases de datos relacionales, proporcionando un modelado eficiente y facilitando las operaciones CRUD. MongoDB y Mongoose: He trabajado con bases de datos NoSQL, especialmente MongoDB, aprovechando Mongoose para modelar y administrar datos de manera eficiente. PostgreSQL y MySQL: Tengo una sólida experiencia en el diseño y administración de bases de datos relacionales utilizando PostgreSQL y MySQL.</p> 
<div className='skillFront'> 
          {Nback?.map((u) => (
    <div  className='imagenConNombre'>
      <p className='nombreImagen'>{u}</p>
    </div>
  ))}
          </div>     
  <div>
    <h3 className='frontend'>PROGRAMMING LANGUAGES</h3>
  </div>
  <p  style={{fontFamily:'sans-serif',color:'#9c9c9c',padding:'2em'}}>I have advanced knowledge in javascript, intermediate in typescript, currently I am learning C# and PHP.</p>
  <div className='skillFront'>
    {
      Lenjuages?.map((u)=>(
        <div className='imagenConNombre'>
        <p className='nombreImagen'>{u}</p>
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
                  <div className='Themodal' >
      <button onClick={openModal} style={{border:'none',background:'none',display:'flex',alignItems:'center',padding:'0px',margin:'5px'}}> <img src={iconImage}  alt="" className='gr' /></button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='conteiner_img'>
      <img src={arcedeusers} alt="" className='imgmodal'/>
        </div>
      </Modal>
    </div>
              </div>
             <h3 style={{margin:'0.5em'}}>ARCADE WORLD</h3>
             <p>Arcade world is a video game ecommerce, this project lasted 3 weeks.   </p>
             <br />
             <p>React+Vite, Javascript, PostgreSQL</p>
            </div>
            <div className='proyectt'>
              <div className='icons'>
                  {/* <a className='Theicons' href='https://main--monumental-dragon-891db4.netlify.app/' target="_blank" >
                <img src={linkss} alt="" className='gr' />
                  </a> */}
                  <a className='Theicons' href='https://github.com/Angelaguado96/ECOOMER-LEALEY' target="_blank">
                 <img src={githubcard} className='gr' alt=""  />
                  </a>
              </div>
             <h3 style={{margin:'0.5em'}}>QHAPAQ P'ACHA</h3>
             <p>qhapaq p'acha in an ecommerce of Peruvian Andean Clothing that is still in production. </p>
             <br />
             <p>Next.js, Javascript, PostgreSQL </p>
            </div>
            <div className='proyectt'>
              <div className='icons'>
                  {/* <a className='Theicons' href='https://main--monumental-dragon-891db4.netlify.app/' target="_blank" >
                <img src={linkss} alt="" className='gr' />
                  </a> */}
                  <a className='Theicons' href='https://github.com/Carlos-Abel-17/Back-end-typescript' target="_blank">
                 <img src={githubcard} className='gr' alt=""  />
                  </a>
              </div>
             <h3 style={{margin:'0.5em'}}>BACKEND WITH TYPESCRIPT</h3>
             <p>this is a backend using with main typescript language, this backend has all the CRUD.</p>
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
             <p>Is a small application with all the backend CRUD, an html structure and tailwind css styles. </p>
             <br />
             <p>Laravel-9, eloquent, laragon,PHP,Tailwind</p>
            </div>
          </div>  
        </div>
        <div id='contact' className='sectionContact' >
          <div>
          <h2 className='titlecontact'>CONTACT</h2>
          </div>
          <div>
          <div className="card">
  <a className="social-link1" href='https://github.com/Carlos-Abel-17' target="_blank">
  <img src={github} alt="" className="bi bi-instagram"/>
  </a>
  <a className="social-link2" href='www.linkedin.com/in/abel-aguado-ramos-37377027b' target="_blank">
  <img src={linkedin} alt="" />
    </a>
  <a className="social-link3"  href="https://wa.me/983446294" target="_blank">
   <img src={wsp} alt="" />
  </a>
   <a className="social-link2"  href="https://www.facebook.com/profile.php?id=100023392873071" target="_blank">
   <img src={fb} alt="" />
  </a>
</div>
          </div>
        </div>
    
    </div>
  );
}

export default App;
