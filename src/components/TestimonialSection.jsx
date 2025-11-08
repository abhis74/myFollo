import "./TestimonialSection.css";
import comas from "../assets/Home/invertedcomms.svg";
function TestimonialSection({ testimonials, brands }) {
  return (
    <>
      <div className="testimonialSection">
        {testimonials && testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="invertedcoma">
                <img src={comas} alt="comas" />
              </div>
              <p className="testimonialText">{testimonial.feedback}</p>
              <div className="Author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="AuthorDetails">
                  <p className="testimonialAuthor">{testimonial.name}</p>
                  <p className="testimonialPosition">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No testimonials available.</p>
        )}
      </div>
      <div className="bandSection">
        <div className="band1List">
          {brands &&
            brands.map((brand, index) => {
              return (
                <div key={index} className="bandItem">
                  <img src={brand} alt="brand" />
                </div>
              );
            })}
        </div>
       
      </div>
    </>
  );
}

export default TestimonialSection;
