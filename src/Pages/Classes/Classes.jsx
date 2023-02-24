import React from "react";
import Classes_img from "../../assets/Images/Classes.png";
import CommonSection from "../../Components/CommonSection/CommonSection";
import Hero from "../../Components/HeroComponent/Hero";
import "./Classes.scss";
const Classes = () => {
  return (
    <main className="Classes">
      <Hero
        textdirection={"center"}
        herotext={"AGENDA TU CLASE"}
        bgimg={Classes_img}
      />
      <CommonSection />
      <div className="Classes-details">
        <h3>
          PUEDES ASISTIR AL GYM DE
          <span>6:00 AM</span>
          HASTA LAS
          <span>20:00 PM</span>
        </h3>
        <h2 className="section-heading">OTRAS CLASES</h2>
        <div className="Classes-timetable">
          <table>
            <thead cellPadding="5px">
              <tr>
                <th></th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Juves</th>
                <th>Viernes</th>
                <th>Sabado</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>01:00 PM</th>
                <td>CROSSFIT</td>
                <td></td>
                <td>CROSSFIT</td>
                <td></td>
                <td>CROSSFIT</td>
                <td></td>
              </tr>
              <tr>
                <th>03:00 PM</th>
                <td></td>
                <td>CROSSFIT</td>
                <td></td>
                <td>CROSSFIT</td>
                <td></td>
                <td>CROSSFIT</td>
              </tr>
              <tr>
                <th>06:00 PM</th>
                <td>CROSSFIT</td>
                <td></td>
                <td>CROSSFIT</td>
                <td></td>
                <td>CROSSFIT</td>
                <td></td>
              </tr>
              <tr>
                <th>07:00 PM</th>
                <td></td>
                <td>CROSSFIT</td>
                <td></td>
                <td>CROSSFIT</td>
                <td></td>
                <td>CROSSFIT</td>
              </tr>
              <tr>
                <th>08:00 PM</th>
                <td>CROSSFIT</td>
                <td></td>
                <td>CROSSFIT</td>
                <td></td>
                <td>CROSSFIT</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Classes;
