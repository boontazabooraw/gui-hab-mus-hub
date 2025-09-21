"use client";

import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      <div>
        <h1 className="font-heading w-full text-2xl text-center px-9 tracking-wider">
          Professional Services for Every Musician
        </h1>
      </div>
      <div className="flex justify-center md:w-200 w-100 px-7">
        <span className="text-justify text-gray-300">
          At Guitar Habit, we don’t just sell instruments — we help you take
          care of them. Our experienced luthiers and techs provide:
        </span>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-wrap justify-center gap-5 border-none">
        <div>
          <ServiceCard
            imgPath="/images/serviceImages/01_GuitarSetupServices.jpg"
            title="Guitar Setup Services"
            description="Truss Rod Adjustment, Action Setup, Intonation Setup, etc..."
          />
        </div>
        <div>
          <ServiceCard
            imgPath="/images/serviceImages/Fretwork.jpg"
            title="Fretwork & Fingerboard Care"
            description="Fret Leveling, Fret Recrowning, Fret Polishing, etc..."
          />
        </div>
        <div>
          <ServiceCard
            imgPath="/images/serviceImages/Electronics.jpg"
            title="Electronics & Wiring"
            description="Pickup Installation, Rewiring, Replacement of Electronic Parts, etc..."
          />
        </div>
        <div>
          <ServiceCard
            imgPath="/images/serviceImages/Restoration.jpg"
            title="Restoration & Custom Mods"
            description="Restoration work, Custom modifications, Out-of-phase wiring, etc..."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

/*

Guitar Habit Music Hub - Major Service Categories

1. Guitar Setup Services
Focus: Playability and comfort
Includes:
- Truss Rod Adjustment
- Action Setup
- Intonation Setup
- Fretboard Reconditioning
- General Cleaning

2. Fretwork & Fingerboard Care
Focus: Precision and smooth fretting
Includes:
- Fret Leveling
- Fret Recrowning
- Fret Polishing
- Refret (if offered)

3. Electronics & Wiring
Focus: Tone customization and upgrades
Includes:
- Pickup Installation
- Rewiring
- Replacement of Electronic Parts
- Shielding
- Coil Splitting / Series-Parallel / Kill Switch Mods

4. Restoration & Custom Mods
Focus: Bringing guitars back to life or making them unique
Includes:
- Restoration work
- Custom modifications
- Out-of-phase wiring
- Cosmetic upgrades

*/
