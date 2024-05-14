import React from "react";
import image from "../../assets/pictures/about-banner.png";
import Gallery from "../../components/Banner.js";
import "../../styles/About.scss";
import Dropdown from "../../components/Vector.js";
import { AProposData } from "../../datas/AProposData.js"

function About() {
    return (
      <main>
        <Gallery pictures={[image]} banner={true} />
        <section className="a-propos">
          <Dropdown
            dropdownLabel={AProposData[0].label}
            content={<p>{AProposData[0].content}</p>}
          />
  
          <Dropdown
            dropdownLabel={AProposData[1].label}
            content={<p>{AProposData[1].content}</p>}
          />
  
          <Dropdown
            dropdownLabel={AProposData[2].label}
            content={<p>{AProposData[2].content}</p>}
            
          />
  
          <Dropdown
            dropdownLabel={AProposData[3].label}
            content={<p>{AProposData[3].content}</p>}
          />
        </section>
      </main>
    )
  }
  
  export default About