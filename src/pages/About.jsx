// src/pages/About.jsx
import React from 'react';
import tournament1 from '../assets/tournament1.jpg'; // Ensure the image path is correct
import tournament2 from '../assets/tournament2.jpg'; // Ensure the image path is correct

const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">About the Tournaments</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tournament 1: Premier Cricket League</h2>
        <img src={tournament1} alt="Tournament 1" className="w-full h-auto mb-4 about-image" />
        <p className="text-lg mb-2">
          The Premier Cricket League is an annual cricket tournament featuring top teams from across the country. 
          This year, the league will be held from June 10th to June 20th, 2024, at the National Cricket Stadium.
        </p>
        <p className="text-lg">
          Teams will compete in a round-robin format followed by knockout stages. The winning team will be awarded the 
          prestigious Premier Trophy along with a cash prize of $50,000.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tournament 2: City Cricket Challenge</h2>
        <img src={tournament2} alt="Tournament 2" className="w-full h-auto mb-4 about-image" />
        <p className="text-lg mb-2">
          The City Cricket Challenge is a fast-paced, high-energy tournament aimed at bringing together local cricket 
          enthusiasts and players. It will take place from August 5th to August 15th, 2024, at the Downtown Cricket Grounds.
        </p>
        <p className="text-lg">
          The tournament features a single-elimination format, with the champion team receiving a City Cup and a prize 
          of $20,000. This event is designed to foster community spirit and showcase emerging cricket talent.
        </p>
      </section>
    </div>
  );
};

export default About;
