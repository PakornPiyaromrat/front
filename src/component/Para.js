import React from "react";
import { Parallax } from "react-parallax";
import { Button } from "@material-ui/core";


const styles = {
  fontFamily: "roboto",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};


const image1 =
  "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/441870/72cd26e14b7fcba028206a06f10548c0d5174cfc.jpg";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const Para = () => (
    <div style={styles}>
        <Parallax bgImage={image1} strength={500}>
            <div style={{ height: 500 }}>
              
                <Button style={insideStyles}>HTML inside the parallax</Button>
            </div>
        </Parallax>
        <div style={{ height: 100 }} />
      
        <Parallax bgImage={image3} blur={{ min: -1, max: 5 }}>
          <div style={{ height: 500 }}>
            <Button style={insideStyles}>Dynamic Blur</Button>
          </div>
        </Parallax>
        <div style={{ height: 100 }} />
     
        <Parallax bgImage={image2} strength={-100}>
          <div style={{ height: 500 }}>
            <Button style={insideStyles}>Reverse direction</Button>
          </div>
        </Parallax>
        <div style={{ height: 100 }} />
      
        <Parallax
          bgImage={image4}
          strength={200}
          renderLayer={percentage => (
            <div
        
                style={{
                  position: "absolute",
                  background: `rgba(0, 0, 0, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 2000,
                  height: percentage * 2000
                }}
            />
            
          )}
        >
        <div style={{ height: 500 }}>
          <Button style={insideStyles} >renderProp</Button>
        </div>
      </Parallax>
      <div style={{ height: 100 }} />
      
    </div>
)

export default Para