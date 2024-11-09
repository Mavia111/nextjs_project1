import { Heading1 } from "../components/headings";
import { Images } from "../components/images";
import { Para } from "../components/para";

export default function Contact(){
    return(
        <div className="p-5 mb-5">
        <div className="row">
        <div className="col">
            <Heading1 name="Contact Us"/>
            <ul className="contact_li">
                <li>Contact : 0322-5312580</li>
                <li>Email : Mavia21701@gmail.com</li>
                <li>LinkedIn : linkedin.com/in/mavia-jiva-baa3aa183</li>
            </ul>
        </div>
        <div className="col">
        <form>       
        <input type="text" className="input_field" id="name" name="name" placeholder="Name"required/>
    
        <input type="email" className="input_field" id="email" name="email" placeholder="Email" required/>
        
        <input type="tel" className="input_field" id="phone" name="phone" placeholder="Phone"/>
       
        <textarea id="message" className="input_field"  name="message" required placeholder="Message" rows={4} cols={50}></textarea>
       
        <button className="btn" type="submit">Submit</button>
        </form>

        </div>
        </div>
        </div>
    );
}