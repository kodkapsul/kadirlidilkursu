import React from "react";


const MapStyle = {
  width: "100%",
  height: 500
};

export function Map() {
  return (
    <div className="Map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8967.869470251171!2d36.067308186980306!3d37.37515188004666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ecf472aa63a25%3A0x632088119e807579!2sKAD%C4%B0RL%C4%B0%20YABANCI%20D%C4%B0L%20KURSU%20(%20Kimberly%20Ann)!5e0!3m2!1str!2str!4v1751375053327!5m2!1str!2str" 
          width= "100%"
          height="500" 
          style={{"border":0}} 
          
          loading="lazy" 
        ></iframe>
    </div>
  );
}

