"use client";

const HeroInfo = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      <div>
        <h1 className="w-80 text-3xl font-bold text-center">
          The best music store in Bataan
        </h1>
      </div>
      <div className="md:w-200 w-100 text-center">
        <span className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </span>
      </div>
    </div>
  );
};

export default HeroInfo;
