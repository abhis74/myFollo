
import "./PagesCss.css";
import { LetsTalkData } from "../../src/Pages.json";
import Form from "@/Utils/Form";
import phone from "../assets/Pages/mingcute_phone-fill.svg"
import email from "../assets/Pages/tabler_mail-filled.svg"

function LetsTalk() {
  return (
    <>
      <div className="PrefoContainer">
        <div className="pagebannerSection">
          <div className="pagebannerheadingBox">
            <h1>{LetsTalkData.banner.title}</h1>
            <p className="pagebannersubtitle"> {LetsTalkData.banner.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="LetsTalkpageHeroSection">
        <Form />
      </div>

     <div className="transacttestimonialSection LetsTalk">

              <h2 className="transacttestimonialSection_heading">Why UHNI Clients Trust Us</h2>
              <p className="transacttestimonialSection_para">Transactions with MyFollo are built on trust, discretion, and proven outcomes.</p>
           <div className="transacttestimonialSection_box">
            
        {LetsTalkData.UHNIClients && LetsTalkData.UHNIClients.length > 0 ? (
          LetsTalkData.UHNIClients.map((testimonial, index) => (
            <div key={index} className="pagetestimonial">
              
              <div className="dummyImg">

              <img src={testimonial.image} alt="" />
              </div>
              <div className="Author">
                <div className="AuthorDetails">
                 <p className="pagetestimonialText">{testimonial.heading}</p>
                  <p className="titletestimonialPosition">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))
          
        ) 
        : (
          <p>No testimonials available.</p>
        )}
         </div>  
      </div>
        <div className="contactSection">
          <p className="ourOffice">Our Offices</p>
          <div className="addressBox">
          <div className="address">
            <p className="country">India</p>
            <p className="detailedAddress">First Floor, Plot No. 44, Sector 44, Gurugram, Haryana 122003</p>
            <p className="phoneNumber"><span><img src={phone} alt="" /></span>+91 - 9821391006</p>
            <p className="ContactEmail"><span><img src={email} alt="" /></span>contact@valion.in</p>
          </div>
          <div className="openingTimeing">
             <p className="country">Business Hours</p>
            <p className="detailedAddress"><span>Monday - Friday</span> - 9:00 AM - 6:00 PM (IST)</p>
            <p className="phoneNumber"><span>Saturday</span> - By Appointment</p>
            <p className="ContactEmail"><span>Sunday</span> - Closed</p>
          </div>
          </div>
        </div>
    

    </>
  );
}
export default LetsTalk;
