import "./Form.css";
import countrycode from "../countryCode.json";

function Form({ Heading, subtext,className }) {
  return (
    <div className={`form ${className}`}>
      <h2>{Heading}</h2>
      <p>{subtext}</p>
      <form action="">
        <div className="mainform">

        
        <div className="nameInput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            autoComplete="on"
          />
        </div>
        <div className="EmailInput">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="on"
          />
        </div>
        <div className="numperInput">
          <label htmlFor="number">Contact Number</label>
          <div className="CountryCode">
            <select name="countryCode" id="" className="countryCode">
              {countrycode.code.map((code, index) => {
                return (
                  <option
                    value={code.name}
                    selected={code.dial_code == "+91" ? true : false}
                  >
                    {code.dial_code}
                  </option>
                );
              })}
            </select>
            <input
              id="number"
              type="number"
              placeholder="Your phone number"
              autoComplete="on"
            />
          </div>
        </div>

       { className && <div className="ProfessionSelect">
          <label htmlFor="Profession">Profession</label>
          
            <select name="countryCode" id="Profession" className="ProfessionSelectOption">
              <option value="">Select your profession</option>
              {countrycode.code.map((code, index) => {
                return (
                  <option
                    value={code.name}
                    
                  >
                    {code.dial_code}
                  </option>
                );
              })}
            </select>
        </div>}
        {className && <div className="lookingForSelect">
          <label htmlFor="lookingFor">I’m looking for</label>
          
            <select name="countryCode" id="lookingFor" className="lookingForSelectOption">
              <option value="" selected>Select engagement type </option>
              {countrycode.code.map((code, index) => {
                return (
                  <option
                    value={code.name}

                  >
                    {code.dial_code}
                  </option>
                );
              })}
            </select>
           
         
        </div>}
        </div>
        <div className="submitformButton">
          <button type="submit" className="featureCta">
            {!className?"Schedule Consultation":"Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
