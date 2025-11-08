import "./hightLightFeatures.css"
function HightLightFeatures({ hightLight ,className}) {
  return (
    <div className={`${className} hightLightFeatures`}>

  
      <div className="headingSetion">
        <h2>{hightLight.heading} <span>{hightLight.subtext}</span></h2>
        <p>{hightLight.text} </p>
      </div>
      <div className="pointersSetion">
        {hightLight.pointers.map((item,index) => {
          return (
            <div className="pointersBox" key={index}>
              <div className="pointerimg">
                <img src={item.logo} alt="" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      </div>
  );
}

export default HightLightFeatures;
