import axios from 'axios';
import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import Layout from "../components/Layout";
import Socialicons from "../components/Socialicons";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";

function Home({lightMode}){
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const paramConfig = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: false
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.2
      },
      size: {
        value: 3,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };

  const paramConfigLight = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: "#000000"
      },
      opacity: {
        value: 0.2
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };
  useEffect(() =>{
    axios.get('/api/information')
    .then( response => {
      setInformation(response.data);
    });
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
  }, [])
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={lightMode? paramConfigLight : paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hei, jeg heter <span className="color-theme">{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
              </div>
              <div className="mi-service-area mi-section">
                <div className="container">
                  <Sectiontitle title="Tjenester" />
                    <div className="mi-service-wrapper">
                      <div className="row mt-30-reverse">
                        {services.map((service) => (
                          <div
                            className="col-lg-4 col-md-6 col-12 mt-30"
                            key={service.title}
                          >
                            <Service content={service} />
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
              </div>
              <div className="row justify-content-center m-5">
               <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
