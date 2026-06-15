import React from "react";


const MapStyle = {
  width: "100%",
  height: 500
};

export function Map() {
  return (
    <div className="Map">
        <iframe 
          src="https://www.google.com/maps?q=Cemalpa%C5%9Fa+Mahallesi+1655+Sokak+No:2+Kadirli+Osmaniye&output=embed" 
          width= "100%"
          height="500" 
          style={{"border":0}} 
          
          loading="lazy" 
        ></iframe>
    </div>
  );
}

