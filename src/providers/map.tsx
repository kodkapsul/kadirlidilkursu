import React from "react";


const MapStyle = {
  width: "100%",
  height: 500
};

export function Map() {
  return (
    <div className="Map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d36.0673081!3d37.3755189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ecf472aa63a25%3A0x632088119e807579!2sKadirli%20Dil%20Kursu!5e0!3m2!1str!2str!4v1718537400000" 
          width="100%"
          height="500" 
          style={{"border":0}} 
          allowFullScreen=""
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  );
}
