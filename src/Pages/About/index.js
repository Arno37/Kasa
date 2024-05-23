import React from "react";
import image from "../../assets/pictures/banner-a-propos-image.png";
import Gallery from "../../components/Banner.js";
import "../../styles/About.scss";
import Collapse from "../../components/Collapse.js";
import { AProposData } from "../../datas/AProposData.js"

function About() {
    return (
      <main>
        <Gallery pictures={[image]} banner={true} />
        <section className="about">
          <Collapse
            collapseLabel={AProposData[0].label}
            content={<p>{AProposData[0].content}</p>}
          />
  
          <Collapse
            collapseLabel={AProposData[1].label}
            content={<p>{AProposData[1].content}</p>}
          />
  
          <Collapse
            collapseLabel={AProposData[2].label}
            content={<p>{AProposData[2].content}</p>}
            
          />
  
          <Collapse
            collapseLabel={AProposData[3].label}
            content={<p>{AProposData[3].content}</p>}
          />
        </section>
      </main>
    )
  }
  
  export default About