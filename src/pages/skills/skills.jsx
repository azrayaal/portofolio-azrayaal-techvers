import React, { useState } from 'react';
import Futer from '../../components/footer/footer';
import Navbaar from '../../components/navbar/navbar';
import { Link } from 'react-router-dom';
import './skills.css';

export default function About() {
  const [fadeIntxt, setFadeInText] = useState(false);

  const changeBackgroundNavbar = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 400) {
      setFadeInText(true);
    } else {
      setFadeInText(false);
    }
  };

  window.addEventListener('scroll', changeBackgroundNavbar);

  return (
    <>
      <div className="App">
        <Navbaar />
        {/* <div className="dashboarBio"> */}
        <section class="about-us pt-5" id="about-us">
          <div class="container">
            {/* //////////////// */}
            <div class="row align-items-center">
              <div class="dashboarBio">
                <p class="glitch">skills </p>
                <p class="fs-5">
                  bio
                  <span style={{ color: '#13fbe2' }}> & </span>
                  stacks
                </p>
              </div>
              <a class="buttonkebawah" href="#skill">
                <i class="bx bx-chevrons-down fs-1" />
              </a>
            </div>
            {/* //////////////// */}
            <div id="skill" className={fadeIntxt ? 'row align-items-center fadeInAbout visible' : 'row align-items-center fadeInAbout'}>
              <div class="dashboardSkill ">
                <h2>I Have learning to use Javascript language for latest one year and using it, I have used its library to create website more powerful and responsive...</h2>
                <a class="buttonkebawahskills" href="#skill2">
                  <i class="bx bx-chevrons-down fs-1" />
                </a>
              </div>
            </div>
            {/* //////////////// */}
            <div className={fadeIntxt ? 'row align-items-center fadeInAbout visible' : 'row align-items-center fadeInAbout'}>
              <div class="dashboardSkill2 " id="skill2">
                <h2>I am currently working as aFull Stack Developerat public appraiser company in Jakarta. I enjoy building and enhance the web apps using Laravel and Vue JS . I also have a good taste inUI/UX Design</h2>
                <button className="btn btn-success mt-3">download CV</button>
                <div className="row">
                  <Link class="tombolSkills " to="/skills">
                    <span className="textskill">projects</span>
                    <i class="bx bx-right-arrow-alt "></i>
                  </Link>
                </div>
              </div>
              {/* <div class="buttonhidden " to="#">
                <i class="bx bx-chevrons-down" />
              </div> */}
            </div>
            {/* //////////////// */}
          </div>
        </section>
        <Futer />
      </div>
    </>
  );
}
