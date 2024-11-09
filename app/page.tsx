import { Anc } from "./components/anchor";
import { Footer } from "./components/footer";
import { Heading1, Heading2, Heading3 } from "./components/headings";
import { Images } from "./components/images";
import { Navbar } from "./components/navbar";
import { Para, SubPara } from "./components/para";



export default function Home() {
    return (
      <div>
        <div className="row">
        <div className="col">
            <Heading1 name="Welcome To our Website"/>
            <Para name="I am a dedicated software engineer with a passion for creating efficient, 
            scalable solutions that drive impactful results. With expertise in languages like JavaScript, 
            Python, and frameworks such as React and Node.js, I build high-quality applications tailored to
             meet user needs and exceed industry standards. My approach combines technical skill with a 
             problem-solving mindset, allowing me to adapt to complex challenges and deliver innovative products.
             I am committed to continuous learning, staying current with emerging technologies, and refining my 
             Skills to deliver optimal solutions. Let’s collaborate to turn your vision into a high-performing, reliable software solution." />
        </div>
        <div className="col">
            <Images image="images/icon1.png"/>
        </div>
        </div>

        <section className="about_sec">
          <div className="sub_div">
              <Heading2 name="About Us"/>
              <SubPara name="I have a lot of Experience in WordPress, Asp .Net MVC, PHP development, NextJs, Html, CSS, JavaScript, TypeScript,
              Tailwind CSS, Android applications, and Desktop Application Developer. I can make a magnificent and 
              Professional site and applications within an exceptionally brief timeframe. 
              I love to work with customers from everywhere throughout the world."/>
          </div>
        </section>
        <section className="portfolio_sec">
          <div className="sub_div" style={{padding:'0% 3% 7% 3%'}}>
              <Heading2 name="Portfolio"/>
              <div>
              <div className="col-4">
                <div className="card">
               <Heading3 name="Jamiah Islamiah" />
               <Anc link="https://jamiahislamiah.com/" />            
                </div>
              </div>

              <div className="col-4">
              <div className="card">
               <Heading3 name="Infuse Fashion"/>
               <Anc link="https://infusefashion.com/"  />            
              </div>
              </div>
              <div className="col-4">
              <div className="card">
               <Heading3 name="Magic Trade Pro"/>
               <Anc link="https://magictradepro.com"  />            
              </div>
              </div>
              <div className="col-4">
              <div className="card">
               <Heading3 name="kz Supplements"/>
               <Anc link="https://kzsupplements.com/"  />            
              </div>
              </div>
          </div>
          </div>
        </section>

       
      </div>
    );
}
