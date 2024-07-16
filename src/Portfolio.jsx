import React, { useState , useRef} from 'react'
import './App.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



export const Portfolio = () => {
  const [text] = useTypewriter({
    words : ['Vikram', 'Web Developer', 'Full Stack Developer', 'MERN Stack Developer'],
    loop : true,
    typeSpeed : 60,
    deleteSpeed : 60,
    delaySpeed : 1000
  });

  const [Mobile,setMobile] = useState(false);

  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form?.name || !form?.email || !form?.message) {
      alert('Please provide information for all required fields!');
      return;
    }

    emailjs
      .sendForm('service_0trhvoh', 'template_z79yf2f', formRef.current, {
        publicKey: '4Vn-m7XxSQYe-fJMM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Thanks for reaching out. I'll be in touch soon.");

          setForm({
            name: '',
            email: '',
            message: '',
          });
          // e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Ahh, something went wrong. Please try again.');
        },
      );
  };
  
  return (
    <div>
        <header className='header'>
          <nav className='navs'>

          <a href="/"><img className='logo' src={require("./images/v logo.png")} alt="" /></a>

          <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={()=>setMobile(false)}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className='mobileicon' onClick={()=>setMobile(!Mobile)}>
            {Mobile ? <RxCross1 /> : <FaBars />}
          </button>
          </nav>
        </header>

        <section className='herosec' id='home'>
        <div className='container-fluid'>
          <div className='row justify-content-between'>
            <div className='col-lg-8' data-aos="zoom-in" data-aos-duration="1000">
            <div className='herosec-content'>
           <div className='hello text-lg-start text-center'>
             <h1 className='text-white fw-bold'><span>Hello, I'm</span></h1>
            </div>
            <div className='name text-lg-start text-center'>
            <h1 className='text-white fw-bold'>
              <span>{text}</span>
              <Cursor 
                cursorBlinking = 'false'
                cursorStyle = '|'
                cursorColor='#ffffff'
              />
             </h1>
            </div>

              <div className='summary text-lg-start text-center'>
            <p className='col-lg-11'>Eager and skilled MERN stack developer with a passion for creating innovative web solutions, Proficient in both front-end and back-end development technologies.</p>
          </div>
          
          <div className='herosec-button pt-4 text-lg-start text-center'>
          <div className='hireme'>
            <a href="#contact">Hire Me</a>
          </div>
          <div className='download'>
            <a href="">
              <span>Download CV</span>
            </a>
          </div>
          </div> 
          </div>
            </div>

            <div className='col-lg-4' data-aos="zoom-in" data-aos-duration="1000">
            <div className='herosec-img'>
           <div className='photobg'></div>
           <div className='photo'>
            <img src={require('./images/cropped_image (8).png')} alt="" />
           </div>
          </div>
            </div>
          </div>

        
        </div>
        </section>

        <section className='aboutmesec' id='about'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6' data-aos="fade-up" data-aos-duration="1000">
               <div className='aboutmeimg'>
                <img src={require('./images/daniel-korpai-n0mabeJj6_s-unsplash.jpg')} alt="" />
               </div>
              </div>

              <div className='col-lg-6'>
              <div className='aboutme-content'>
               <div className='aboutme' data-aos="fade-up">
                <h2 className='fw-bold text-white'>About Me</h2>
               </div>
               <div className='aboutme-p' data-aos="fade-up" data-aos-duration="1000">
                <p className='text-white'>I'm an Electrical and Electronics Engineering student at Sastra Deemed To Be University. I have a strong foundation in HTML, CSS, JavaScript, Bootstrap, MongoDB, Node.js, Express.js, ReactJS, Figma and Git.  I am very passionate about improving my coding skills & developing applications & websites. I am a team player and I am excited to work with others to create amazing applications. </p>
               </div>
               <div className='aboutme-bottom' data-aos="fade-up" data-aos-duration="1000">
                <div>
                <div className='about-name'>
               <h5 className='text-white'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                NAME
               </h5>
               <p className='text-white'>Vikram</p>
               </div>
               <div className='about-email'>
                <h5 className='text-white'>
                 <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                EMAIL
                </h5>
                <a href="mailto:vikrambharathy@gmail.com" className='text-white'>vikrambharathy@gmail.com</a>
               </div>
                </div>

                <div>
                <div className='about-location'>
                <h5 className='text-white'>
                 <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg></span>
                LOCATION
                </h5>
                <p className='text-white'>Chennai</p>
               </div>
               <div className='about-number'>
                <h5 className='text-white'>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                PHONE
                </h5>
                <p className='text-white'>+91 9442483443</p>
               </div>
                </div>
               </div>
             </div>
              </div>
            </div>
          </div>
        </section>

        <section className='skillssec' id='skills'>
          <div className='container'>
            <div className='skills text-center' data-aos="fade-up">
              <h2 className='fw-bold text-white'>My Skills</h2>
            </div>
            <div className='skills-icon'  data-aos="fade-up" data-aos-duration="1000">
            <div className='html'>
              <img src={require('./images/html pic.png')} alt="" width="50px" className='mx-4 my-1' />
              <p className='text-white'>HTML</p>
            </div>
            <div className='css'>
              <img src={require('./images/css pic.png')} alt="" width="45px" className='mx-4 my-1' />
              <p className='text-white'>CSS</p>
            </div>
            <div className='javascript'>
              <img src={require('./images/js pic.png')} alt="" width="48px" className='mx-4 my-1' />
              <p className='text-white'>JavaScript</p>
            </div>
            <div className='bootstrap'>
              <img src={require('./images/bootstrap pic.png')} alt="" width="70px" className='mx-4'/>
              <p className='text-white'>Bootstrap</p>
            </div>
            <div className='reactjs'>
              <img src={require('./images/react pic.png')} alt="" width="55px" className='mx-4 my-1' />
              <p className='text-white pt-3'>React.js</p>
            </div>
            <div className='mongodb'>
              <img src={require('./images/mongodb pic.png')} alt="" width="55px" className='mx-4 my-1' />
              <p className='text-white'>MongoDB</p>
            </div>
            <div className='nodejs'>
              <img src={require('./images/nodejs pic.png')} alt="" width="46px" className='mx-4 my-2' />
              <p className='text-white'>Node.js</p>
            </div>
            <div className='expressjs'>
              <img src={require('./images/expressjs pic.png')} alt="" width="52px" className='mx-4 my-2' />
              <p className='text-white'>Express.js</p>
            </div>
            <div className='figma'>
              <img src={require('./images/figma pic.png')} alt="" width="35px" className='mx-4 my-2'/>
              <p className='text-white'>Figma</p>
            </div>
            <div className='git'>
              <img src={require('./images/git pic.png')} alt="" width="50px" className='mx-4' />
              <p className='text-white'>Git</p>
            </div>
            <div className='choromeDev'>
              <img src={require('./images/choromeDev pic.png')} alt="" width="50px" className='mx-4' />
              <p className='text-white'>Chorome Dev Tools</p>
            </div>
            <div className='firebase'>
              <img src={require('./images/firebase pic.png')} alt="" width="38px" className='mx-4' />
              <p className='text-white'>Firebase</p>
            </div>
            <div className='mongoose'>
              <img src={require('./images/mongoose pic.png')} alt="" width="55px" className='mx-4' />
              <p className='text-white'>Mongoose</p>
            </div>
            <div className='npm'>
              <img src={require('./images/npm pic.png')} alt="" width="59px" className='mx-4 my-3'/>
              <p className='text-white'>NPM</p>
            </div>
            <div className='socket'>
              <img src={require('./images/socket.io pic.png')} alt="" width="52px" className='mx-4 my-1' />
              <p className='text-white'>Socket.IO</p>
            </div>
            <div className='vs-code'>
              <img src={require('./images/vs-code pic.png')} alt="" width="45px" className='mx-4 my-2' />
              <p className='text-white'>VS Code</p>
            </div>
            <div className='wordpress'>
              <img src={require('./images/wordpress pic.png')} alt="" width="60px" className='mx-4 my-1' />
              <p className='text-white'>Wordpress</p>
            </div>
            </div>
          </div>
        </section>

        <section className='projectsec' id='projects'>
          <div className='container'>
          <div className='project text-center' data-aos="fade-up">
              <h2 className='fw-bold text-white'>My Projects</h2>
          </div>
          <div className='projects'>

            <div className='project-1' data-aos="fade-up" data-aos-duration="1000">
              <a href="https://amul-frontend-work.onrender.com" target='blank'><img src={require('./images/project-9 img.png')} alt="" /></a>
              <div className='project-1-details'>
                <a href="https://amul-frontend-work.onrender.com" target='blank' className='text-white fw-semibold'>Online Icecream store</a>
                <p>Developed an engaging user interface with React, NodeJS and Stripe  leveraging its component-based architecture to create dynamic and responsive UI.</p>
                <div className='skillsname'>
                  <p className='text-white'>ReactJS</p>
                  <p className='text-white'>React Router</p>
                  <p className='text-white'>NodeJS</p>
                  <p className='text-white'>ExpressJS</p>
                  <p className='text-white'>Firebase</p>
                  <p className='text-white'>Stripe</p>
                </div>
              </div>
              <div className='codeandlive'>
                <a href="https://github.com/vikram-b04/amul-frontend-work" target='blank'>
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                <span className='text-white'>Code</span>
                </a>
                <a href="https://amul-frontend-work.onrender.com" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                <span className='text-white'>Live Demo</span>
                </a>
              </div>
            </div>

            <div className='project-1' data-aos="fade-up" data-aos-duration="1000">
              <a href="https://vikram-b04.github.io/timer-and-crudform/" target='blank'><img src={require('./images/project-3 img.png')} alt="" /></a>
              <div className='project-1-details'>
                <a href="https://vikram-b04.github.io/timer-and-crudform/" target='blank' className='text-white fw-semibold'>Hotel Booking Website</a>
                <p>Designed an intuitive user interface, allowing efficient task management with features for (CRUD) Create, Retrieve, Update and Delete task seamlessly.</p>
                <div className='skillsname'>
                  <p className='text-white'>Javascript</p>
                  <p className='text-white'>API</p>
                  <p className='text-white'>Bootstrap</p>
                  <p className='text-white'>AOS Animation</p>
                  <p className='text-white'>EmailJS</p>
                </div>
              </div>
              <div className='codeandlive'>
                <a href="https://github.com/vikram-b04/timer-and-crudform" target='blank'>
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                <span className='text-white'>Code</span>
                </a>
                <a href="https://vikram-b04.github.io/timer-and-crudform/" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                <span className='text-white'>Live Demo</span>
                </a>
              </div>
            </div>  

            <div className='project-1' data-aos="fade-up" data-aos-duration="1000">
              <a href="https://videocallchat-1.onrender.com" target='blank'><img src={require('./images/project-4 img.png')} alt="" /></a>
              <div className='project-1-details'>
                <a href="https://videocallchat-1.onrender.com" target='blank' className='text-white fw-semibold'>Google Meet Clone</a>
                <p>Crafted a visually stunning Google Meet Clone website using React, ensuring seamless responsiveness and engaging user interactions.</p>
                <div className='skillsname'>
                  <p className='text-white'>HTML</p>
                  <p className='text-white'>Bootstrap</p>
                  <p className='text-white'>ReactJS</p>
                  <p className='text-white'>API</p>
                </div>
              </div>
              <div className='codeandlive'>
                <a href="https://github.com/vikram-b04/videocallchat" target='blank'>
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                <span className='text-white'>Code</span>
                </a>
                <a href="https://videocallchat-1.onrender.com" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                <span className='text-white'>Live Demo</span>
                </a>
              </div>
            </div>

            <div className='project-1' data-aos="fade-up" data-aos-duration="1000">
              <a href="https://book-backend-2.onrender.com" target='blank'><img src={require('./images/project-6 img.png')} alt="" /></a>
              <div className='project-1-details'>
                <a href="https://book-backend-2.onrender.com" target='blank' className='text-white fw-semibold'>Online Bookstore</a>
                <p>Created the Online Bookstore Website, a responsive and user-friendly Frontend and Backend application.</p>
                <div className='skillsname'>
                  <p className='text-white'>HTML</p>
                  <p className='text-white'>Bootstrap</p>
                  <p className='text-white'>EJS</p>
                  <p className='text-white'>NodeJS</p>
                  <p className='text-white'>ExpressJS</p>
                  <p className='text-white'>MongoDB</p>
                </div>
              </div>
              <div className='codeandlive'>
                <a href="https://github.com/vikram-b04/book-backend" target='blank'>
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                <span className='text-white'>Code</span>
                </a>
                <a href="https://book-backend-2.onrender.com" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                <span className='text-white'>Live Demo</span>
                </a>
              </div>
            </div>

            <div className='project-1' data-aos="fade-up" data-aos-duration="1000">
              <a href="https://music-backend-3.onrender.com" target='blank'><img src={require('./images/project-7 img.png')} alt="" /></a>
              <div className='project-1-details'>
                <a href="https://music-backend-3.onrender.com" target='blank' className='text-white fw-semibold'>Music School</a>
                <p>Integrated Node.js with MongoDB for efficient data handling, enabling real-time content rendering and seamless data management.</p>
                <div className='skillsname'>
                  <p className='text-white'>HTML</p>
                  <p className='text-white'>Bootstrap</p>
                  <p className='text-white'>EJS</p>
                  <p className='text-white'>NodeJS</p>
                  <p className='text-white'>ExpressJS</p>
                  <p className='text-white'>MongoDB</p>
                </div>
              </div>
              <div className='codeandlive'>
                <a href="https://github.com/vikram-b04/music-backend" target='blank'>
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                <span className='text-white'>Code</span>
                </a>
                <a href="https://music-backend-3.onrender.com" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                <span className='text-white'>Live Demo</span>
                </a>
              </div>
            </div>

            <div className='project-1' data-aos="fade-up" data-aos-duration="1000">
              <a href="https://whatsapp-chatapp.onrender.com" target='blank'><img src={require('./images/project-8 img.png')} alt="" /></a>
              <div className='project-1-details'>
                <a href="https://whatsapp-chatapp.onrender.com" target='blank' className='text-white fw-semibold'>Whatsapp Clone</a>
                <p>This is a Whatsapp Clone website and allowing efficient task management with features for Create, Read and Delete.
                </p>
                <div className='skillsname'>
                  <p className='text-white'>HTML</p>
                  <p className='text-white'>Bootstrap</p>
                  <p className='text-white'>ReactJS</p>
                </div>
              </div>
              <div className='codeandlive'>
                <a href="https://github.com/vikram-b04/whatsapp-chatapp" target='blank'>
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                <span className='text-white'>Code</span>
                </a>
                <a href="https://whatsapp-chatapp.onrender.com" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                <span className='text-white'>Live Demo</span>
                </a>
              </div>
            </div>

            <div className='project-1' data-aos="fade-up" data-aos-duration="1000">
              <a href="https://qr-code-sdom.onrender.com" target='blank'><img src={require('./images/project-5 img.png')} alt="" /></a>
              <div className='project-1-details'>
                <a href="https://qr-code-sdom.onrender.com" target='blank' className='text-white fw-semibold'>QR Generator</a>
                <p>Developed a QR Code Generator app, ensuring seamless responsiveness and showcasing proficiency in back-end technologies. </p>
                <div className='skillsname'>
                  <p className='text-white'>HTML</p>
                  <p className='text-white'>CSS</p>
                  <p className='text-white'>EJS</p>
                  <p className='text-white'>ExpressJS</p>
                  <p className='text-white'>NodeJS</p>
                </div>
              </div>
              <div className='codeandlive'>
                <a href="https://github.com/vikram-b04/qr-code" target='blank'>
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                <span className='text-white'>Code</span>
                </a>
                <a href="https://qr-code-sdom.onrender.com" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                <span className='text-white'>Live Demo</span>
                </a>
              </div>
            </div>

            <div className='project-1' data-aos="fade-up" data-aos-duration="1000">
              <a href="https://vikram-b04.github.io/CRICKET---Single-page-Bootstrap/" target='blank'><img src={require('./images/project-2 img.png')} alt="" /></a>
              <div className='project-1-details'>
                <a href="https://vikram-b04.github.io/CRICKET---Single-page-Bootstrap/" target='blank' className='text-white fw-semibold'>Cricket Equipment</a>
                <p>This is a Cricket Equipment buying website. This is a static website made with responsive layouts with HTML, CSS and Bootstrap.</p>
                <div className='skillsname'>
                  <p className='text-white'>HTML</p>
                  <p className='text-white'>CSS</p>
                  <p className='text-white'>Bootstrap</p>
                </div>
              </div>
              <div className='codeandlive'>
                <a href="https://github.com/vikram-b04/CRICKET---Single-page-Bootstrap" target='blank'>
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                <span className='text-white'>Code</span>
                </a>
                <a href="https://vikram-b04.github.io/CRICKET---Single-page-Bootstrap/" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                <span className='text-white'>Live Demo</span>
                </a>
              </div>
            </div>

            <div className='project-1' data-aos="fade-up" data-aos-duration="1000">
              <a href="https://vikram-b04.github.io/Fitness/" target='blank' className='bbb'><img src={require('./images/project-1 img.png')} alt="" /></a>
              <div className='project-1-details'>
                <a href="https://vikram-b04.github.io/Fitness/" target='blank' className='text-white fw-semibold'>Super Weight Fitness</a>
                <p>This is a Fitness course website. This is a Multipage website made with responsive layouts with HTML and CSS.</p>
                <div className='skillsname'>
                  <p className='text-white'>HTML</p>
                  <p className='text-white'>CSS</p>
                </div>
              </div>
              <div className='codeandlive'>
                <a href="https://github.com/vikram-b04/Fitness" target='blank'>
                <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                <span className='text-white'>Code</span>
                </a>
                <a href="https://vikram-b04.github.io/Fitness/" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                <span className='text-white'>Live Demo</span>
                </a>
              </div>
            </div>

          </div>
          </div>
        </section>

        <section id='contact'>
          <div className='container-fluid'>
            <div className='contactform'>
            <div className='connect text-start'>
              <h5 className='text-white fw-bold my-2' data-aos="fade-up">Let's Connect</h5>
              <p className='col-lg-8' data-aos="fade-up" data-aos-duration="1000">Excited to connect and discuss how my skills can contribute to your team. Your message is valued and I look forward to the opportunity!</p>
              <div className='social-icon' data-aos="fade-up" data-aos-duration="1000">
               <a href="https://github.com/vikram-b04" target='blank'><img width={48} height={48} src={require("./images/github-icon.png")} alt="" /></a>
               <a href="https://www.linkedin.com/in/vikram-b-b39617287/" target='blank'><img width={48} height={48} src={require("./images/linkedin-icon.png")} alt="" /></a>
              </div>
            </div>

            <div className='f' data-aos="fade-up" data-aos-duration="1000" >
              <form className='form' ref={formRef} onSubmit={sendEmail}>
              <div className='name1'>
                  <label htmlFor="name" className='text-white yourname fw-medium'>Your Name</label>
                  <input type="text" className='nameinputbox text-white' placeholder='Jacob' name="name" value={form?.name}
                onChange={handleChange}/>
                </div>

                <div className='email'>
                  <label htmlFor="email" className='text-white youremail fw-medium'>Your Email</label>
                  <input type="email" className='emailinputbox text-white' placeholder='jacob@gmail.com' name="email" value={form?.email}
                onChange={handleChange}/>
                </div>

                <div className='message'>
                  <label htmlFor="message" className='text-white yourmessage fw-medium'>Message</label>
                  <textarea className='messageinputbox text-white' placeholder="Let's talk about...." name="message" value={form?.message}
                onChange={handleChange}></textarea>
                </div>

                <button type="submit" value="Send" className='submitbtn text-white fw-medium'>Send Message</button>
              </form>
            </div>
            </div>
          </div>
        </section>

        <footer>
          <div className='footer'>
            <img src={require("./images/v logo.png")} alt="" />
            <p className='rights'>All rights reserved.</p>
          </div>
        </footer>

    </div>
  )
}
