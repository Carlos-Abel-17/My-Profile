import React from 'react';
import './App.css';
import photoPrefil from './perfiles.jpg';
import front from './front.png'
import back from './back.png'
import Bootstap from './img/Bootstrap.png'
import JScrip from './img/JavaScript.png'
import material from './img/material.svg'
import react from './img/react.png'
import tailwind from './img/Tailwind.png'
import vites from './img/vite.png'
import sql from './img/mysql.png'
import node from './img/nodelogo.png'
import postgres from './img/Postgresql.png'
import prisma from './img/prisma.webp'
import seque from './img/sequelize.png'
import typescript from './img/typescript.png'
import ola from './img/waves.svg'

import github from './img/github.svg'
import linkedin from './img/linkedin.svg'
import wsp from './img/wsp.svg'
import fb from './img/fb.svg'
function App() {
  const fotoback={
    imagenes:[JScrip,sql,node,postgres,prisma,seque,typescript],
    nombres:['JavaScript','Mysql','Node.js','Postgresql','Prisma','Sequelize','Typescript']}
  const fotoFront={
    imagenes:[Bootstap,JScrip,material,react,vites,tailwind],nombres:['Bootstap','JavaScript','Material ui','React','Vite','Tailwindcss']
  }
 

  return (
    <div>
       <div style={{ position: 'fixed', zIndex: '1', width: '100%', padding: '0.5em', backdropFilter: 'blur(12px)' }}>
      <nav className={`nav`}>
        <div className='navInter'>
          <div>
            <h3 className={`title`}>My Profile</h3>
          </div>
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
          <h2 className='tituloPresentacion'>Developers Full Stack</h2>
          <p className='textoPresen'>Hello, I am a full stack developer I have knowledge in frontend and backend. </p>
        </div>
      </div>

      <div id='about' className='sectionAbout'>
        <div><h2 className='titleAbout'>ABOUT</h2></div>
        <div style={{display:'flex',alignItems:'center'}}>
        <img src={photoPrefil} alt="" className='yo'/>
        <div className='descripcion'>
          <p className='midescripcion'>Hello! 👋 I'm Carlos Abel Aguado Ramos, a passionate coder and web development lover. Currently, I'm focused on learning new technologies to improve my work in programming and learn new programming languages such as typeScript that significantly reduces errors in the back end. </p>
        </div>
      </div>
        </div>

        <div id='skills' className='sectionSkill'>
          <img src={ola} alt="" className='olas' />
          <div>
        <h2 className='titleSkill'>SKILLS</h2>
          </div>
          <div> 
            <div>
            <h3 className='frontend'>My Front end skills</h3>
            <div className='skillFront'>
              <img src={front} alt="" className='frontImagen' />
             
            <div  className='containerimgF'>
            {fotoFront?.imagenes.map((imagen, index) => (
    <div key={index} className='imagenConNombre'>
      <img src={imagen} alt="" className='imagenesFront' />
      <p className='nombreImagen'>{fotoFront?.nombres[index]}</p>
    </div>
  ))}
            </div>
            </div>
            </div>
            <div>
              <h3 className='Backend' >My Back end skills</h3>
            </div>
           <div className='skillBack'>
            <div className='containerimgB'>
            {fotoback?.imagenes.map((imagen, index) => (
    <div key={index} className='imagenConNombre'>
      <img src={imagen} alt="" className='imagenesFront' />
      <p className='nombreImagen'>{fotoback?.nombres[index]}</p>
    </div>
  ))}
            </div>
           <img src={back} alt=""   className='backImagen'/>
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
