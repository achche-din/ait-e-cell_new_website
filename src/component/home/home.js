import React from "react";
import "./home.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/icofont/icofont.min.css";
import "../../assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/vendor/remixicon/remixicon.css";
import "../../assets/vendor/venobox/venobox.css";
import "../../assets/vendor/owl.carousel/assets/owl.carousel.min.css";

export const Home = () => {
  return (
    <div>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">
          <a href="index.html" class="logo mr-auto">
            <img src="../../assets/img/logo.png" alt="" class="img-fluid" />
          </a>

          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li class="active">
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="mentor_connect.html">Mentor Connects</a>
              </li>
              <li>
                <a href="#start-ups">Startup Initiatives</a>
              </li>
              <li>
                <a href="our_team.html">Our Team</a>
              </li>
              <li>
                <a href="internship.html">Internships</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero">
        <div class="hero-container text-white">
          <img
            class="mb-2"
            src="../../assets/img/portfolio/logo-ait.jpg"
            alt="AIT E-CELL"
          />
          <h3>
            Welcome to <strong>Army Institute of Technology</strong>
          </h3>
          <h1>
            <img
              src="../../assets/img/logo.png"
              style={{ width: "70px", height: "70px" }}
            />{" "}
            <span>AIT E-Cell</span>
          </h1>
          <h2>“ Driving the Innovations”</h2>
        </div>
      </section>
      {/* <!-- End Hero --> */}
      <main id="main">
        <div class="container">
          <div class="alert alert-info" role="alert">
            <div class="container">
              <div class="row d-flex flex-column flex-sm-column flex-md-row">
                <div class="col-12 col-sm-12 col-md-3 col-lg-2 noti-top">
                  Latest Updates
                </div>
                <div class="col-12 col-sm-12 col-md-9 col-lg-10 ">
                  <marquee behavior="scroll" direction="left">
                    <a
                      class="noti-con "
                      href="https://aim.gov.in/iace-hackathon.php#:~:text=India%20Australia%20Circular%20Economy%20Hackathon,nations%20in%20fostering%20innovative%20solutions"
                    >
                      India Australia Circular Economy Hackathon for
                      students/startups{" "}
                      <span class="badge badge-success  badg">NEW</span>
                    </a>
                    <a
                      class="noti-con"
                      href="https://taxguru.in/corporate-low/startup-india-scheme-registration-benefits.html?amp"
                    >
                      Startup India Scheme - Registration & Benefits
                    </a>
                    <span class="badge badge-success badg">NEW</span>
                    <a
                      class="noti-con"
                      href="https://aitpune.com/Internships.aspx"
                    >
                      AICTE and Pupilfirst Internship
                    </a>
                    <span class="badge badge-success badg">NEW</span>
                    <a
                      class="noti-con"
                      href="https://digest.myhq.in/active-angel-investors-india/"
                    >
                      19 Most Active Angel Investors In India For Startups
                    </a>
                    <span class="badge badge-success badg">NEW</span>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--------------------- important tabs ------------> */}
        <section id="about" class="about">
          <div class="container">
            <div class="section-title">
              <div class="row content">
                <div class="col-lg-4 pt-4 pt-lg-0">
                  <a
                    href="../../assets/documents/AICTE_InnovStartupPolicyNISP_2019.pdf"
                    class="btn-learn-more"
                  >
                    National Innovation Startup policy
                  </a>
                </div>
                <div class="col-lg-4 pt-4 pt-lg-0">
                  <a
                    href="../../assets/documents/101_solving_problems.pdf"
                    class="btn-learn-more"
                  >
                    101 Creative Problem Solving Techniques pdf
                  </a>
                </div>
                <div class="col-lg-4 pt-4 pt-lg-0">
                  <a
                    href="https://www.startupindia.gov.in"
                    class="btn-learn-more"
                  >
                    Visit startupindia.gov.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
        <!-- section for solutions event 
          <section class="services " id="solution">
            <div class="container solution-event d-flex   ">
              <div class="row">
              
                <div class="col-lg-7 bg-white py-2 col-md-12 ">
                  <hr class="hr-warning" />
                  <div class="container-heading">
                  
                    <h2>“No idea is so outlandish that it should not be considered” <br/>
                      – Winston Churchill.</h2>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-6 col-md-6">
                      <h5 class="text-warning">
                        Innovation challenge: A day in start-up
                      </h5>
                      <p class="text-dark">
                        Innovation Challenge - A day in a start-up as a platform to help all budding entrepreneurs to show their innovative solutions to create their own business. This platform also allows these enthusiasts to converse with the owners of some new startups that are creating their hallmarks in their respective fields.
                      </p>
                      <p class="text-dark">
                          <strong>Event date: </strong>24th May, 2021, 6:00 PM to 8:00 PM. 
                          <br/>
                          SUBMISSION PHASE HAS STARTED
                          <br/>
                          Last date for submission is <strong>23rd May, 2021 before 12:00PM  (Noon)</strong>
                      </p>
                      <button type="button" class="btn btn-outline-warning">
                        <a href="https://forms.gle/h2VXkcaChVCecPwd9" style="text-decoration: none;">Register Here</a>
                        </button>
                          <button type="button" class="btn btn-outline-warning my-2">
                        <a href="https://docs.google.com/document/d/1e9aUmtmOjWaT5122LvKDwZN7Zo29uDry09F9Yztz8A0/edit?usp=sharing" style="text-decoration: none;">Rulebook</a>
                        </button>
                    </div>

                    <div class="col-12 col-lg-6 col-md-6">
                      <h5 class="text-warning">
                        Startup challenge: A bug in start-up
                      </h5>
                      <p class="text-dark">
                        Startup Challenge - A bug in a start-up in which we will provide you a specific range of problem statements faced by startups and decide the better innovation towards it.
                      </p>
                      <p class="text-dark">
                          <strong>Event date: </strong>25th May, 2021, 6:00 PM to 8:00 PM. 
                          <br/>
                          SUBMISSION PHASE HAS STARTED
                          <br/>
                          Last date for submission is <strong>24th May, 2021 before 12:00PM  (Noon)</strong> 
                      </p>
                      <button type="button" class="btn btn-outline-warning">  <a href="https://forms.gle/LMhnMKZ4tsepKhADA" style="text-decoration: none;">Register Here</a></button>
                      <button type="button" class="btn btn-outline-warning my-2">
                        <a href="https://drive.google.com/file/d/1-ZJU4K9PEASuVFWJKwuqfaRJPleEFynd/view?usp=sharing" style="text-decoration: none;">Brochure</a>
                        </button>
                          <button type="button" class="btn btn-outline-warning my-2">
                        <a href="https://docs.google.com/document/d/1wluGukXdaYOkA_Qal3nlv8J56U8By7vlpzvI3bjwU24/edit" style="text-decoration: none;">Problem Statement</a>
                        </button>
                    </div>
                
                  </div>
                    
                  </div>
                
                  <div class="col-lg-5 col-md-6 py-md-3 mx-md-auto">
                    <div class="img-container ">
                      <img src="./../../assets/img/event.jpg" alt="solutions" class=" img-thumbnail image_event">
                    </div>
                  </div>
                </div>
              </div>   
          </section>
          end of solutions event --> 
        */}

        {/* <!-- section for solutions event --> */}
        <section class="services newletter" id="solution">
          <div class="container solution-event d-flex   ">
            <div class="row">
              {/* <!-- first column --> */}
              <div class="col-lg-7 bg-white py-2 col-md-12 ">
                <hr class="hr-warning" />
                <div class="container-heading py-4">
                  <h2>Udyamita</h2>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-12 col-md-12">
                    <p class="text-dark">
                      We the Innovation and entrepreneurship cell of Army
                      Institute Of Technology are delighted to present our very
                      first newsletter "Udyamita"
                      <br />
                      <br />
                      The E-Cell (Entrepreneurship Cell) aims to promote the
                      entrepreneurship culture in and around the campus by
                      providing multiple platforms to budding entrepreneurs
                      where they can improve upon their business models, get
                      mentorship by successful entrepreneurs, interact with
                      investors and groom their entrepreneurship skills.
                      <br />
                      <br />
                      This newsletter includes all event details occurred in
                      e-cell this year (session 2020-2021) .<br />
                      It's a record of the wonderful things the E-Cell has been
                      able to achieve with the cooperation of the esteemed
                      faculty and students of our college. We hope that this
                      record may serve to inspire a flame of entrepreneurship
                      that becomes a blazing crescendo of innovation, out of the
                      box thinking and entrepreneurship
                    </p>
                    <button type="button" class="btn btn-outline-warning my-2">
                      <a
                        href="../../assets/documents/ECell newsletter.pdf"
                        style={{ textDecoration: "none" }}
                      >
                        Download Newsletter
                      </a>
                    </button>
                  </div>
                  {/* <!-- end of second inner column --> */}
                </div>
              </div>
              {/* <!-- end of first column --> */}
              <div class="col-lg-5 col-md-6 py-md-3 mx-md-auto">
                <div class="img-container ">
                  <img
                    src="./../../assets/img/newletter_image.png"
                    alt="solutions"
                    class=" img-thumbnail image_event"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- end of solutions event -->
       <!-- ======= About Section ======= --> */}
        <section id="about" class="about">
          <div class="container">
            <div class="section-title">
              <h3>
                Learn More <span>About Us</span>
              </h3>
            </div>
            <div class="row content">
              <div class="col-lg-6">
                <h1>VISION</h1>
                <ul>
                  To be an important part of Government 's dream of 5 trillion
                  economy, by contributing through startups of AIT students
                </ul>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <h1>MISSION</h1>
                <ul>
                  To build an ecosystem to identify, nurture innovation and
                  entrepreneurship skills amongst students and to generate
                  successful commercial enterprise contributing towards
                  significant job creations.
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}
        <section class="text-center " style={{ backgroundColor: "#fdfd96" }}>
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-6 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <iframe
                  width="514"
                  height="289"
                  src="https://www.youtube.com/embed/pDYsFS3a6eA"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col-md-6 col-lg-6 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <iframe
                  width="514"
                  height="289"
                  src="https://www.youtube.com/embed/ny_piQ3jgSI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col-md-6 col-lg-6 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <iframe
                  width="514"
                  height="289"
                  src="https://www.youtube.com/embed/vf0EG3_EGLo?t=747"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- =======  upcoming Events Section ======= --> */}
        <section id="events" class="services">
          <div class="container">
            <div class="section-title">
              <h2 class="display-5">Upcoming Events</h2>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/kaagaz event.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">Vired Conquer - The Tech Challenge</h4>
                  <p>
                    <a
                      style={{ color: "red" }}
                      href="https://timestream.in/timesofindia/herovired/"
                    >
                      {" "}
                      click here
                    </a>{" "}
                    for more information
                  </p>
                </div>
              </div>

              {/* <!--   <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto" >
            <div class="icon-box">
              <img class="img-fluid" src="../../assets/img/AIT_Mod (1).png" style={{height:"250px"}} class="mb-2 mb-lg-2" alt=" Session on market research and company analysis" />
              <h3 class="title">Hi Entrepreneurs!
Are you having a potential startup / idea capable enough to make an impact on people's lives? If so then it’s a last call for you!!! Lemon Ideas is looking for potential startups / ideas. Are you the one?
 Do you have an idea, an MVP / POC or a running startup? Then apply to Innopreneurs International Startup Contest - 6th Edition (India’s most happening startup contest now in South Asia).
Participate & Get a Chance to Win. 
<ul style="list-style-type:none">
    <li>Prizes worth Rs. 7.5 Lacs</li>
        <li>Funding support up to 1 Cr</li>
            <li>Mentorship Opportunities</li>
                <li>Incubation Support</li>
                    <li>Networking Opportunities</li>
</ul>
               <p>Very few time left.<a style={{color: "red"}} href=" https://www.innopreneurs.in/startup-contest"> click here</a>  to enroll now</p>
               </h3>
            </div>
          </div> --> */}
            </div>
          </div>
        </section>
        {/* <!-- End upcoming Events Section --> */}

        {/* <!-- =======  Past Events Section ======= --> */}
        <section id="events" class="services">
          <div class="container">
            <div class="section-title">
              <h2 class="display-5">Past Events</h2>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/Youtube Live Poster.jpeg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">
                    Toycathon 2021 <br />{" "}
                    <a href="https://toycathon.mic.gov.in/index.php">
                      For more information
                    </a>
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/0001.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">
                    The innovation and entrepreneurship cell of Army Institute
                    of Technology, Pune is proud to present our first major
                    event of the year, an interactive interview session with two
                    prominent alumni entrepreneurs of AIT from the 2000 batch
                    <br />
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/bullet.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">
                    Advance Composites and Its Military Applications
                    <br />
                    Flexible BulletProof Vest
                    <br />{" "}
                    <a href="../../assets/documents/event.pdf">
                      For more information
                    </a>
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/web banner final (3).png"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">
                    National Startup Awards 2021 <br />{" "}
                    <a href="../../assets/documents/NSA 2021 Emailer (2).html">
                      For more information
                    </a>
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/event_1.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">
                    A Path Towards Successful entrepreneurship
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/event_2.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">
                    A seminar on <br /> "Innovation, Entrepreneurship and IPR"
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/IMG-20201222-WA0002.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">Innovators with Bright Product Ideas</h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/3_module_1_SESSION_MARKET RESEARCH - dO YOUR HOMEWORK _-page-001.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">
                    Entrepreneurship Development Programme by Mr Pawan Yadav,
                    Founder, Director, Thought Power and Digital Persistent
                  </h4>
                  <p>
                    <a
                      style={{ color: "blue" }}
                      href="../../assets/documents/edp_pdf.pdf"
                    >
                      Download Schedule
                    </a>
                    <br />
                    {/* <!-- <a href="https://docs.google.com/forms/d/e/1FAIpQLScQ7fWluWQlbeEMF62jk6VttaaTonpcYPu9-4b11hx6dhQi6w/viewform">register here now</a> --> */}
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/IIC Template National Innovation Startup Policy-page-001.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">
                    Orientation Session on
                    <br /> National Innovation Startup Policy
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/idea.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">3 Days startup bootcamp</h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/guest.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">
                    India's most happening startup contest
                    <br />
                    South Asia 6th edition
                    <br />
                    Guest speaker- Brig. Abhay A Bhat (Director AIT,Pune)
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/pt_session.jpg"
                    style={{ height: "250px" }}
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">
                    Session on Market research, Company analysis and marketing
                    Pitch{" "}
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/web1.jpg"
                    alt="A webinar on “Science-Tech Entrepreneurship &amp; funding opportunities for Science &amp; Technology products”"
                  />
                  <h4 class="title">Incubation program offered by AIC-ADT </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/IMG-20201222-WA0000.jpg"
                    style={{ height: "250px" }}
                    class="mb-2 mb-lg-2"
                    alt=" Session on market research and company analysis"
                  />
                  <h4 class="title">Fellowship for Young Entrepreneurs</h4>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/idea-present.jpg"
                    alt="Idea Pitching Session with Mr Gireendra Kasmalkar Founder Director and CEO of Ideas to Impacts Innovations Pvt. Ltd. He is actively supporting the student groups to identify mentor connect"
                  />
                  <h4 class="title">
                    Idea Pitching Session with Mr Gireendra Kasmalkar, Founder
                    Director and CEO of Ideas to Impacts Innovations Pvt. Ltd.
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/AIT_alumni_meet.png"
                    alt="AIT Alumni Connect drive at Entrepreneurship Cell"
                  />
                  <h4 class="title">
                    AIT Alumni Connect drive at Entrepreneurship Cell
                  </h4>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/ecell-e1.jpg"
                    alt="AIT TALKS"
                  />
                  <h4 class="title">Click to know more </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Past Events Section --> */}

        {/* <!-- ======= visits Section ======= --> */}
        <section id="services" class="services">
          <div class="container">
            <div class="section-title">
              <h2 class="display-5">VISITS</h2>
              <h3>
                Some awesome <span>visits </span>by us
              </h3>
              <p>
                “Success is not the key to happiness. Happiness is the key to
                success.
                <br /> If you love what you are doing, you will be successful.”
                <br /> -- Albert Schweitzer.
              </p>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/iitb.png"
                    alt="Exploring IIT Bombay "
                  />
                  <h4 class="title">Visits IIT Bombay</h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/udmeet.png"
                    alt="Exploring Udchalo "
                  />
                  <h4 class="title">Exploring Udchalo</h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/va.png"
                    alt="Vigyan Ashram "
                  />
                  <h4 class="title">Vigyan Ashram</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End visits Section --> */}

        {/* <!-- ======= Entrepreneurship Section ======= --> */}
        <section id="Entrepreneurship" class="services">
          <div class="container">
            <div class="section-title">
              <h2 class="display-5">Entrepreneurship Training</h2>

              <p>
                “Build your own dreams, or someone else will hire you to build
                theirs.”
                <br /> -- Farrah Gray
              </p>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/abhisir.png"
                    alt="Session on Entrepreneurship by Mr. Abhijeet Deogirikar  "
                  />
                  <h4 class="title">
                    Session on Entrepreneurship by Mr. Abhijeet Deogirikar{" "}
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/pawan.png"
                    alt="Session on Entrepreneurship by  Mr. Pawan Yadav"
                  />
                  <h4 class="title">
                    Session on Entrepreneurship by Mr. Pawan Yadav
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/webinar by lemon ideas.png"
                    alt="Webinar on “Entrepreneurship” "
                  />
                  <h4 class="title">Webinar on “Entrepreneurship”</h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/mobi.png"
                    alt="Session on Entrepreneurship by Mr. Ankush Tiwari "
                  />
                  <h4 class="title">
                    Session on Entrepreneurship by Mr. Ankush Tiwari
                  </h4>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-3 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid"
                    src="../../assets/img/portfolio/manik.png"
                    alt="Entrepreneurship Cell Orientation to students"
                  />
                  <h4 class="title">
                    Entrepreneurship Cell Orientation to students
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Entrepreneurship Section --> */}

        {/* <!-- =======  Internship Section ======= --> */}
        <section id="intership" class="services">
          <div class="container">
            <div class="section-title">
              <h2 class="display-5">Internship Programs and Mentor Support</h2>
              <p>
                “The best way to predict the future is to create it.”
                <br />- Peter Drucker
              </p>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch mb-5 mb-lg-0 mx-auto">
                <div class="icon-box">
                  <img
                    class="img-fluid mb-3"
                    src="../../assets/img/portfolio/dp.png"
                    alt="Digital Persistent"
                  />
                  <h4 class="title">
                    Digital Persistent, a company by an AITian, for the AITians
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Internship Section --> */}

        {/* <!-- ======= Startup Initiatives Section ======= --> */}
        <section id="start-ups" class="portfolio">
          <div class="container">
            <div class="section-title">
              <h2>Startup Initiatives</h2>
              <h3>
                Check our <span>Startup Initiatives</span>
              </h3>
              <p>
                “The price of success is hard work, dedication to the job at
                hand, and the determination that whether we win or lose, we have
                applied the best of ourselves to the task at hand.” - Vince
                Lombardi
              </p>
            </div>

            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" class="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-recent">Recent Initiatives</li>
                  <li data-filter=".filter-under">
                    Prototypes under development
                  </li>
                </ul>
              </div>
            </div>

            <div class="row portfolio-container">
              <div class="col-lg-4 col-md-6 portfolio-item mx-auto filter-recent">
                <img
                  class="img-fluid"
                  src="../../assets/img/tiltedbooks.png"
                  alt=" IIC-National Innovation Contest (2020)"
                />
                <div class="portfolio-info">
                  <h4>Tiltedbooks</h4>
                  <p>
                    <a href="https://www.tiltedbooks.in/">visit our website</a>
                  </p>
                  <a
                    href="../../assets/img/tiltedbooks.png"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Tiltedbooks"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item mx-auto filter-recent">
                <img
                  class="img-fluid"
                  src="../../assets/img/audiobooks.png"
                  alt=" IIC-National Innovation Contest (2020)"
                />
                <div class="portfolio-info">
                  <h4>Audiobooks</h4>
                  <p>
                    {" "}
                    <a href="https://www.youtube.com/channel/UCuZWB1Rx0nYh7xYnftsVKag">
                      visit Channel
                    </a>
                  </p>
                  <a
                    href="../../assets/img/audiobooks.png"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Audiobooks"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item mx-auto filter-recent">
                <img
                  class="img-fluid"
                  src="../../assets/img/engineertrends_logo.png"
                  alt=" Engineer trends"
                />
                <div class="portfolio-info">
                  <h4>Learn from Experiences, grow by Sharing</h4>
                  <p>
                    {" "}
                    <a href="https://engineertrends.com/home/">
                      visit our website
                    </a>
                  </p>
                  <a
                    href="../../assets/img/engineertrends_logo.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Engineer Trends"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item mx-auto filter-under">
                <img
                  class="img-fluid"
                  src="../../assets/img/portfolio/AI.png"
                  alt=" Artificial Intelligence"
                />
                <div class="portfolio-info">
                  <h4>Artificial Intelligence</h4>
                  <a
                    href="../../assets/img/portfolio/AI.png"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title=" Artificial Intelligence"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item mx-auto filter-recent">
                <img
                  class="img-fluid"
                  src="../../assets/img/portfolio/2020-07-27 (3).png"
                  alt="AIT TALKS"
                />
                <div class="portfolio-info">
                  <h4>AIT TALKS - Interviewing Alumni entrepreneurs</h4>
                  <a
                    href="../../assets/img/portfolio/2020-07-27 (3).png"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="AIT TALKS"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item mx-auto filter-under">
                <img
                  class="img-fluid"
                  src="../../assets/img/portfolio/counterfit.jpg"
                  alt=" IIC-National Innovation Contest (2020)"
                />
                <div class="portfolio-info">
                  <h4>Anti - Counterfeiting</h4>
                  <a
                    href="../../assets/img/portfolio/counterfit.jpg"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Anti - Counterfeiting"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item mx-auto filter-under">
                <img
                  class="img-fluid"
                  src="../../assets/img/portfolio/automation.png"
                  alt=" Automation"
                />
                <div class="portfolio-info">
                  <h4>Automation in Warehousing and material handling</h4>
                  <a
                    href="../../assets/img/portfolio/automation.png"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title=" Automation"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item mx-auto filter-under">
                <img
                  class="img-fluid"
                  src="../../assets/img/portfolio/exnos.png"
                  alt="Vertical Axis Wind Turbine"
                />
                <div class="portfolio-info">
                  <h4>Vertical Axis Wind Turbine</h4>
                  <a
                    href="../../assets/img/portfolio/exnos.png"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Vertical Axis Wind Turbine"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item mx-auto filter-under">
                <img
                  class="img-fluid"
                  src="../../assets/img/portfolio/ev.png"
                  alt="Electric Vehicle"
                />
                <div class="portfolio-info">
                  <h4>Electric Vehicle</h4>
                  <a
                    href="../../assets/img/portfolio/ev.png"
                    data-gall="portfolioGallery"
                    class="venobox preview-link"
                    title="Electric Vehicle"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Incubation Section ======= --> */}
        <section id="Incubation" class="pricing">
          <div class="container">
            <div class="section-title">
              <h2>Incubation center Connect</h2>
              <p>
                All these centers provide active support to aspiring students of
                AIT
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 mt-4 mt-lg-3 mx-auto ">
                <div class="box">
                  <h3> AICADT Baramati foundation</h3>
                  <p style={{ lineHeight: "1.8rem" }}>
                    Atal Incubation Centre (AIC) set up at AIC-ADT BARAMATI
                    FOUNDATION with the support of Atal Innovation Mission NITI
                    Aayog with the aim of serving as an active catalyst for the
                    development of promising entrepreneurs.
                  </p>
                  <div class="btn-wrap">
                    <a
                      href="https://www.aicadtbaramatifoundation.org"
                      class="btn-buy"
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mt-4 mt-lg-3 mx-auto">
                <div class="box">
                  <h3>Vigyan Ashram</h3>
                  <p style={{ lineHeight: "1.8rem" }}>
                    Vigyan Ashram welcomes you to the world of rural technology
                    where individuals express their interest to become
                    entrepreneur. We incubate them to provide hands on skills
                    with technical expertise. They are presenting all their
                    actvities,projects,departmental tours,course information
                    virtually . To participate go through following link and
                    register yourself on vigyan ashram exhibition.
                  </p>
                  <div class="btn-wrap">
                    <a href="http://vigyanashram.com/" class="btn-buy">
                      Visit website
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mt-4 mt-lg-3 mx-auto">
                <div class="box">
                  <h3>COEP's Bhau Institute Pune</h3>
                  <p style={{ lineHeight: "1.8rem" }}>
                    They aim to provide a growth oriented yet sustainable
                    environment to the start-ups they incubate and realize their
                    mission by providing the companies access to innovation lab,
                    co-working space, shared services, training programs,
                    events, mentors, co-founders, investors, and other services
                    that will move them onto the fast track to success.
                  </p>
                  <div class="btn-wrap">
                    <a href="https://bhau.org/" class="btn-buy">
                      Visit website
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mt-4 mt-lg-3 mx-auto">
                <div class="box">
                  <h3>T- Hub </h3>
                  <p style={{ lineHeight: "1.8rem" }}>
                    T hub is a very big brand with a very rich eco system for
                    start ups. It is one of the prime “Atal incubation Center”
                    funded by Govt. of India. Networking Opportunities, T-Hub in
                    partnership with academia, investors, mentors, service
                    providers and the government has over 500 startups.{" "}
                  </p>
                  <div class="btn-wrap">
                    <a href="https://www.t-hub.co" class="btn-buy">
                      Visit website
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mt-4 mt-lg-3 mx-auto">
                <div class="box">
                  <h3> MIT TBI</h3>
                  <p style={{ lineHeight: "1.8rem" }}>
                    MIT Pune TBI is a registered Sec-8/ Not-for-Profit
                    organization. Supported by Department of Science and
                    Technology, Govt of India. Visioning to empower Young
                    Generations by creating future entrepreneurs and innovative
                    products for substantial contribution to economical,
                    technological and social development of the society.
                  </p>
                  <div class="btn-wrap">
                    <a href="https://www.mittbi.org/" class="btn-buy">
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Incubation Section --> */}

        {/* <!-- =======  Alumni Section ======= --> */}
        <section id="alumni" class="services">
          <div class="container">
            <div class="section-title">
              <h2 class="display-5">Alumni Entrepreneurs</h2>
            </div>
            <div class="row d-flex flex-row">
              <div class="col-xl-3 col-md-4">
                <div
                  class="card"
                  style={{
                    width: "250px",
                    height: "430px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    class="card-img-top "
                    src="../../assets/img/1.jpg"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title"> Karan Rai</h4>
                    <p class="card-text">
                      {" "}
                      Red Panda Innovation Labs
                      <br />
                      building software products.{" "}
                    </p>
                    <a
                      href="https://www.linkedin.com/in/karanrai/"
                      class="btn btn-primary"
                    >
                      See Profile
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-4">
                <div
                  class="card"
                  style={{
                    width: "250px",
                    height: "430px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    class="card-img-top "
                    src="../../assets/img/0.jpg"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title"> Vikram Sareen</h4>
                    <p class="card-text">
                      {" "}
                      Co-Founder, Chief Architect <br />
                      Blue Bricks Pvt Ltd{" "}
                    </p>
                    <a
                      href="https://www.linkedin.com/in/vikramsareen/"
                      class="btn btn-primary"
                    >
                      See Profile
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div class="col-xl-3 col-md-4">
                <div
                  class="card"
                  style={{
                    width: "250px",
                    height: "430px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    class="card-img-top "
                    src="../../assets/img/2.jpg"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title"> Baljeet Singh</h4>
                    <p class="card-text">Co-Founder at mTatva & Simbo.ai </p>
                    <a
                      href="https://www.linkedin.com/in/blusingh/"
                      class="btn btn-primary"
                    >
                      See Profile
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-4">
                <div
                  class="card"
                  style={{
                    width: "250px",
                    height: "430px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    class="card-img-top "
                    src="../../assets/img/4.jpg"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">Ravi Kumar</h4>
                    <p class="card-text"> Founder and Director at udChalo </p>
                    <a
                      href="https://www.linkedin.com/in/rkay/"
                      class="btn btn-primary"
                    >
                      See Profile
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-4">
                <div
                  class="card"
                  style={{
                    width: "250px",
                    height: "430px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    class="card-img-top "
                    src="../../assets/img/3.jpg"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">Abhijeet Deogirikar</h4>
                    <p class="card-text"> CopperCloud IOTech Pvt Ltd </p>
                    <a
                      href="https://www.linkedin.com/in/abhijeet-deogirikar-ab5732a/"
                      class="btn btn-primary"
                    >
                      See Profile
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-4">
                <div
                  class="card"
                  style={{
                    width: "250px",
                    height: "430px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    class="card-img-top "
                    src="../../assets/img/Rohan Datta.jpg"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">Rohan Datta</h4>
                    <p class="card-text"> CEO and Founder at Deep Info Lab </p>
                    <a
                      href="https://www.linkedin.com/in/rohan-datta-ab930b150/"
                      class="btn btn-primary"
                    >
                      See Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-12">
                <h5>
                  <a
                    style={{ color: "red" }}
                    href="../../assets/documents/alumni_entrepreneurs.xlsx"
                  >
                    And many more
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Alumni Section --> */}

        <section
          class="page-section"
          id="mentor connect"
          style={{
            backgroundImage:
              "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
          }}
        >
          <br />

          <div class="section-title">
            <h2 class="display-5">Our Mentors</h2>
          </div>
          <div class="container m-t-110">
            <div class="row">
              <div class="col-xl-6 col-md-6 mb-4">
                <div class="card border-0 shadow ">
                  <h3 class="text-center" style={{ fontStyle: "Serif" }}>
                    Advisors
                  </h3>
                  <div class="card-body ">
                    <ul class="list-group">
                      <li class="list-group-item">Brig Abhay Bhat, Director</li>
                      <li class="list-group-item">
                        Dr. B. P. Patil, Principal
                      </li>
                      <li class="list-group-item">
                        Dr Mrs. Sangeeta Jadhav, President IIC
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card border-0 shadow ">
                  <h3 class="text-center" style={{ fontStyle: "Serif" }}>
                    Faculty in charge
                  </h3>
                  <div class="card-body ">
                    <ul class="list-group">
                      <li class="list-group-item">Dr. Shraddha Oza </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Team Member 1 --> */}
              <div class="col-xl-6 col-md-6 mb-4">
                <div class="card border-0 shadow ">
                  <h3 class="text-center" style={{ fontStyle: "Serif" }}>
                    MENTORS
                  </h3>
                  <div class="card-body ">
                    <ul class="list-group">
                      <li class="list-group-item">
                        Mr Pawan Yadav, Founder, Digital Persistent
                      </li>
                      <li class="list-group-item">
                        Mr Abhijeet Deogirikar, Founder,Director CopperCloud
                        Technologies
                      </li>
                      <br />
                    </ul>
                  </div>
                </div>

                <div class="card border-0 shadow ">
                  <h3 class="text-center" style={{ fontStyle: "Serif" }}>
                    Faculty Coordinator
                  </h3>
                  <div class="card-body ">
                    <ul class="list-group">
                      <li class="list-group-item">Prof. Geeta Patil</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Team Member 2 -->
            <!-- /.row --> */}
            </div>
          </div>
        </section>

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact">
          <div class="container">
            <div class="section-title">
              <h2>Contact</h2>
            </div>
            <div class="row justify-content-center">
              {/* <!--   <div class="col-lg-4">
          <div class="d-flex flex-column align-items-center">
          <div class="icon-contact mb-3"><i class="fas fa-mobile-alt"></i></div>
          <div class="text-muted">Phone</div>
          <div class="lead font-weight-bold">+91 9881204415<br/>+91 9682836577</div>
          </div>
          </div> --> */}
              <div class="col-lg-6 col-6">
                <div class="d-flex flex-column align-items-center">
                  <div class="icon-contact mb-3">
                    <i class="far fa-envelope"></i>
                  </div>
                  <div class="text-muted">Email</div>

                  <div class="lead font-weight-bold">ecell@aitpune.edu.in</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End contact Section --> */}
      </main>

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer" class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="mb-4">LOCATION</h4>
                <p class="pre-wrap lead mb-0">
                  Army Institute of Technology,Pune Dighi HIlls Pune 411015
                </p>
              </div>

              <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="mb-4">AROUND THE WEB</h4>
                <a
                  class="btn btn-outline-light btn-social mx-1"
                  href="https://www.facebook.com/groups/aitecell"
                >
                  <i class="fab fa-fw fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-social mx-1"
                  href="https://www.instagram.com/ecell_ait/"
                >
                  <i class="fab fa-fw fa-instagram"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-social mx-1"
                  href="https://www.linkedin.com/"
                >
                  <i class="fab fa-fw fa-linkedin-in"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-social mx-1"
                  href="https://www.youtube.com/channel/UCSi5zU5q37iqqlny7djRbGA"
                >
                  <i class="fab fa-fw fa-youtube"></i>
                </a>
              </div>

              <div class="col-lg-4">
                <h4 class="mb-2">Quick links</h4>
                <ul class="navbar-nav ml-auto social-links">
                  <li class="nav-item mx-0 mx-lg-1 ">
                    <a
                      class="nav-link px-1 bottom_link px-lg-3 rounded js-scroll-trigger"
                      href="#Entrepreneurship"
                    >
                      Entrepreneurship Training
                    </a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <a
                      class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                      href="#Incubation"
                    >
                      Incubation Center Connects
                    </a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <a
                      class="nav-link px-1 bottom_link px-lg-3 rounded js-scroll-trigger"
                      href="#startups"
                    >
                      Startup Initiatives
                    </a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-1">
                    <a
                      class="nav-link px-1 bottom_link px-lg-3 rounded js-scroll-trigger"
                      href="headlines.html"
                    >
                      Our Headlines
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
      <section class="copyright py-4 text-center text-white">
        <div class="container">
          <small class="pre-wrap">
            © 2020-21 All Rights Reserved.{" "}
            <a href="https://aitecell.in/">AIT Entrepreneurship Cell</a>{" "}
          </small>
        </div>
      </section>

      <a href="#home" class="back-to-top">
        <i class="ri-arrow-up-line"></i>
      </a>

      {/* <!-- Vendor JS Files --> */}
      <script src="../../assets/vendor/jquery/jquery.min.js"></script>
      <script src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../../assets/vendor/jquery.easing/jquery.easing.min.js"></script>
      <script src="../../assets/vendor/php-email-form/validate.js"></script>
      <script src="../../assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="../../assets/vendor/venobox/venobox.min.js"></script>
      <script src="../../assets/vendor/owl.carousel/owl.carousel.min.js"></script>

      {/* <!-- Template Main JS File --> */}
      <script src="./../../assets/js/main.js"></script>
    </div>
  );
};
