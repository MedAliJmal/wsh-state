import React, { Component } from "react";
import Bio from "./profile/components/bio/Bio";
import FullName from "./profile/components/fullname/FullName";
import Profession from "./profile/components/profession/Profession";
import Image from "./profile/components/image/Image";
import "./Profile.css";

export class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0 ,
      memory: null
    }
  }


   componentDidMount () {
     this.setState ({ memory :setInterval (()=> {this.increment()}, 1000) 
   })};

   componentWillUnmount () {
     clearInterval(this.state.memory) 
   };


  increment = () => {
this.setState ({ count : this.state.count +1});

  };
  render() {
    const Bassem = {
      fullName: "Bassem Srarfi",
      bio: "Bassem Srarfi was born on June 25, 1997 (age 24) in Tunis, Tunisia. He is a celebrity soccer player. Tunisian professional footballer best known for his career as a midfielder with Nice in France. He is also known for his work as a midfielder on the Tunisia national team as well.",
      prof: "Professional Footballer",
    };
    const handleName = (Bassem) => {
      alert(`Hi , My name is ${Bassem}`);
    };

    return (
      <div className="Profile">
        <FullName name={Bassem} />
        <Image defau={"This photo is taken at the age of 24yo."}>
          <h1
            style={{
              fontFamily: "Arial",
              backgroundColor: "Black",
              borderRadius: "15px",
              color: "white",
              width: "250px",
              margin: "0 auto",
              padding: "25px",
            }}
          >
            {" "}
            B.Srarfi Photo
          </h1>
          <img
            style={{ height: "528px" }}
            src="https://www.proleague.be/dato/25478/1627827455-srarfi-2.png?auto=format&crop=faces&fit=crop&h=640&w=640"
            alt=""
          />
          <h2>
            <button
              style={{
                backgroundColor: "green",
                width: "100px",
                height: "50px",
                fontFamily: "Arial",
                color: "white",
                borderRadius: "30px",
              }}
              onClick={() => handleName(Bassem.fullName)}
            >
              Salute{" "}
            </button>
          </h2>
        </Image>
        <Profession pro={Bassem} />
        <Bio Biog={Bassem} />
        <p className="counter">{this.state.count}</p>
      </div>
    );
  }
}

export default Profile;
