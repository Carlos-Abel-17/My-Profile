import React from 'react';
import './App.css';
import photoPrefil from './perfiles.jpg';
import ola from './img/waves.svg'
import olass from './img/wavess.svg'

import github from './img/github.svg'
import linkedin from './img/linkedin.svg'
import wsp from './img/wsp.svg'
import fb from './img/fb.svg'
import descarga from './img/descarga.svg'

import cvPDF from './CV/Aguado_Ramos_Abel_CV.pdf'

function App() {
  const Nback=['Mysql','Node.js','Postgresql','Prisma','Sequelize','sql','mongoDB','mongoo']
  const NFront=['Bootstap','Material-UI','React','Vite','Tailwindcss','Nextjs','chakra-UI','chart.js','apex chart.js']
  
  const descargarCV = () => {
    // Lógica para descargar el archivo CV
    const link = document.createElement('a');
    link.href = cvPDF; // Reemplaza con la ruta correcta a tu archivo CV
    link.download = 'Mi_CV_Abel_Aguado.pdf'; // Puedes establecer el nombre de descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
 

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <div style={{ borderRadius:'2em',position: 'fixed', zIndex: '1', width: '100%', padding: '0.5em' }}>
      <nav className={`nav`}>
        <div className='navInter'>
          <div className='enlaces'>
            <a href="#about"  id='link'>ABOUT</a>
            <a href="#skills" id='link'>SKILLS</a>
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
          <p className='midescripcion'>Hi👋! I'm Carlos Abel Aguado Ramos , a passionate full stack web developer and graduate of the I'm Henry bootcamp. I'm currently in the middle of my Systems Engineering degree, a journey that has provided me with a solid academic foundation.
  <br/>
  My main focus is programming, especially with frameworks(React,next,angular) , and I love bringing web pages to life with style libraries . My time at bootcamp has given me solid skills and a project-oriented mindset.
<br/>
In my portfolio, you'll find examples of my work, from individual to collaborative projects. I'm excited about web development and am always looking for opportunities to learn and grow in this exciting field.
<br/>
Welcome to my digital space! Here you can explore my journey as a developer and discover the creative solutions I've implemented in various projects. </p>
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
        <h2 className='titleSkill'>SKILLS</h2>
          </div>
          <div >
              <h3 className='frontend' >My Front end skills</h3>
            </div>
            <p style={{fontFamily:'sans-serif',color:'#9c9c9c',padding:'2em'}}> <span style={{color:'white',fontFamily:'sans-serif'}}>
              Frameworks:
            </span>
            <br/>
React: I developed dynamic and efficient applications using React, leveraging its focus on reusable components and efficient state management.

React + Vite: I experimented with combining React and Vite to create modern applications with fast compile time and efficient development.

Angular: My Angular experience includes building robust and scalable applications, leveraging its modular framework and powerful features.
 <br/><br/>
<span style={{color:'white',fontFamily:'sans-serif'}}>Styles:</span>
<br/>
Bootstrap: I've designed attractive and responsive interfaces using Bootstrap, leveraging its set of pre-built components and customizability.

Material-UI: I've immersed myself in designing visually appealing applications with Material-UI, following the design principles of Material Design.

Tailwind CSS: I experimented with Tailwind CSS to create highly customizable styles and optimize CSS file sizes, providing a faster loading experience.

Next.js and UI: I used Next.js and its server-side rendering capabilities, along with UI libraries such as Chakra UI, to create modern and efficient web applications.</p>
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
Node.js y Express: He desarrollado servidores robustos y eficientes utilizando Node.js como entorno de ejecución y Express como framework para construir aplicaciones web y APIs.

Sequelize: Mi experiencia con Sequelize abarca la interacción con bases de datos relacionales, proporcionando un modelado eficiente y facilitando operaciones CRUD.

MongoDB y Mongoose: He trabajado con bases de datos NoSQL, especialmente MongoDB, aprovechando Mongoose para modelar y gestionar datos de manera eficiente.

PostgreSQL y MySQL: Tengo experiencia sólida en el diseño y la administración de bases de datos relacionales utilizando PostgreSQL y MySQL.</p> 
<div className='skillFront'> 
          {Nback?.map((u) => (
    <div  className='imagenConNombre'>
      <p className='nombreImagen'>{u}</p>
    </div>
  ))}
          </div>     
        </div>
        <div id='contact' className='sectionContact' >
          <img src={olass} alt="" />
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
