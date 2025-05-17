import React from "react";

// Achievements data
const achievements = [
  "Runner-Up – Intra-University AI Contest (Q4 2019) as ParzenWindow",
  "84th / 187 – ICPC Asia Dhaka Regional Contest 2019 as UIU One Last Time",
  "39th / 161 – SUST IUPC 2019 as UIU BrainFreeze",
  "61st / 93 – IUT 10th ICT Fest Programming Contest 2019 as UIU Mortuus",
  "Champion (Senior) – UIU Intra University Programming Contest 2018",
  "Champion (Junior) – UIU CSE Fest 2017 Intra UIU Programming Contest",
  "Participated in numerous national contests representing UIU",
];

function Achievements() {
  return (
    <section className="achievements-section">
      <h2>Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
