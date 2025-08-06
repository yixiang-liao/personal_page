import React from "react";
import profile from "../data/profile.json";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  // 工具函式：依年份分組
  const groupByYear = (items, getYear) => {
    const grouped = {};
    items.forEach((item) => {
      let year = getYear(item);
      if (year === "Now") year = new Date().getFullYear();
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(item);
    });

    // 排序年份（大到小）
    return Object.keys(grouped)
      .sort((a, b) => b - a)
      .map((year) => ({ year, items: grouped[year] }));
  };

  const AchievementSection = ({ data }) => {
    const grouped = groupByYear(data, (item) => item.year); // 假設有 year 欄位
    return (
      <div className="achievement">
        <h2>Achievement</h2>
        {grouped.map((group) => (
          <div key={group.year}>
            <h3 className="year-h3">{group.year}</h3>
            <ul>
              {group.items.map((achieve, idx) => (
                <li key={idx}>
                  <strong>{achieve.title}</strong> - {achieve.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const ExperienceSection = ({ data }) => {
    // 改成以 startYear 為依據
    const grouped = groupByYear(data, (item) => item.startYear);

    return (
      <div className="experience">
        <h2>Experience</h2>
        {grouped.map((group) => (
          <div key={group.year}>
            <h3 className="year-h3">{group.year}</h3>
            <ul>
              {group.items.map((exp, idx) => (
                <li key={idx}>
                  <strong>{exp.position}</strong> at {exp.company} （
                  {/* <br /> */}
                  {exp.startYear} -{" "}
                  {exp.endYear === "Now" ? (
                    <strong>{exp.endYear}</strong>
                  ) : (
                    exp.endYear
                  )}
                  ）
                  {/* <br /> */}
                  <div className="experience-description">{exp.description}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const CertificatesSection = ({ data }) => {
    const grouped = groupByYear(data, (item) => item.year);
    return (
      <div className="certificates">
        <h2>Certificates</h2>
        {grouped.map((group) => (
          <div key={group.year}>
            <h3 className="year-h3">{group.year}</h3>
            <ul>
              {group.items.map((cert, idx) => (
                <li key={idx}>
                  <strong>{cert.title}</strong> - {cert.issuer} <br />{" "}
                  {/* {cert.year} */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-contentA">
          <div className="about-img">
            <img src="https://i.pinimg.com/736x/3b/5d/93/3b5d935e4e52bfe8098e231e30a52586.jpg" />
          </div>
          <div className="about-info">
            <div className="name">
              {profile.nameZh} ({profile.nickname})
            </div>
            <div className="name">{profile.nameEn}</div>
            <hr />
            <div className="contact">
              <div className="cell">Cell: {profile.cell}</div>
              <div className="email">Email: {profile.email}</div>
              <div className="link">
                <a href={profile.linkedin} target="_blank">
                  <AiFillLinkedin className="icon" />
                </a>
                <a href={profile.github} target="_blank">
                  <AiOutlineGithub className="icon" />
                </a>
                <a href={profile.leetcode} target="_blank">
                  <SiLeetcode className="icon" />
                </a>
                <a href={profile.instagram} target="_blank">
                  <AiFillInstagram className="icon" />
                </a>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="about-contentB">
          <h2>Introduction</h2>
          <div className="introduction">
            <p>{profile.introduction}</p>
          </div>
          <h2>Skills</h2>
          <div className="skills">
            <ul>
              {profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <AchievementSection data={profile.achievement} />
          <ExperienceSection data={profile.experience} />
          <CertificatesSection data={profile.Certificates} />
          {/* <h2>Achievement</h2> */}
          {/* <div className="achievement">
            <ul>
              {profile.achievement.map((achieve, index) => (
                <li key={index}>
                  <strong>{achieve.title}</strong> - {achieve.description}
                </li>
              ))}
            </ul>
          </div>
          <h2>Experience</h2>
          <div className="experience">
            <ul>
              {profile.experience.map((exp, index) => (
                <li key={index}>
                  <strong>{exp.position}</strong> at {exp.company}
                  <br />
                  {exp.startYear} - {exp.endYear}
                  <br />
                  {exp.description}
                </li>
              ))}
            </ul>
          </div>
          <h2>Certificates</h2>
          <div className="certificates">
            <ul>
              {profile.Certificates.map((cert, index) => (
                <li key={index}>
                  <strong>{cert.title}</strong> - {cert.issuer} <br />{" "}
                  {cert.year}
                </li>
              ))}
            </ul>
          </div> */}
          <h2>Education</h2>
          <div className="education">
            {/* <ul> */}
            {profile.education.map((education, index) => (
              <div>
                <h3 className="year-h3">
                  {education.startYear} - {education.endYear}
                </h3>
                <ul>
                  <li key={index}>
                    <strong>
                      {education.degree} /{" "}
                      {education.university || education.highSchool}
                    </strong>{" "}
                    {education.department}
                    {/* <br /> */}
                    {/* {education.startYear} - {education.endYear} */}
                  </li>
                </ul>
              </div>
            ))}
            {/* </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
