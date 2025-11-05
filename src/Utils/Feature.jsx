import "./feature.css"
function Feature({feature,heading,subtextone,subtextTwo,btnText}){
    return(
         <div className="featureSection">
                <div className="featureHeading">
                  <h2>{heading}</h2>
                <p className="approach">{subtextone}</p>
                <p className="featuresubtest">{subtextTwo}</p>
                <button className="featureCta">{btnText}</button>
                </div>

                <div className="featureslist">
                    {feature.map((item,index)=>{

                    return(<div className="features">
                        <div className="featurebox">
                        <div className="number">0{index+1}</div>
                        <p>{item.headin}</p>
                        <div className="subText">{item.subText}</div>
                        </div>
                        <div className="img">
                            <img src={item.image} alt="" />
                        </div>

                  </div>)
                    
                    })}
                  
                </div>
              </div>
    )
}
export default Feature