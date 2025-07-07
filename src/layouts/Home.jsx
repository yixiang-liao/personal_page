import React from "react";
import profile from "../data/profile.json";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="profile">
        <h1>Hi, I'm {profile.nameZh} {profile.nameEn}</h1>
        <p>
          {profile.department}, <br/>{profile.university}
        </p>
      </div>
    </div>
  );
};

export default Home;
