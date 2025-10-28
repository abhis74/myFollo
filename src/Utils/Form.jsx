import "./Form.css";
import countrycode from "../countryCode.json";

function Form({ Heading, subtext }) {
  console.log(countrycode);
  return (
    <div className="form">
      <h2>{Heading}</h2>
      <p>{subtext}</p>
      <form action="">
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
        <div className="submitformButton">
          <button type="submit" className="featureCta">
            Schedule Consultation
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
