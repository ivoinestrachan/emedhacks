import { FaBrain, FaHammer, FaSmileBeam } from "react-icons/fa";

export const WhatIsHackathon = () => {
  return (
    <div>
      <div className="text-center mt-[6vh] md:mt-32 max-w-6xl mx-auto md:px-12 lg:px-32 lg:pr-[5%]">
        <h1
          className="text-4xl md:text-5xl lg:text-7xl
				"
        >
          Hackathon?
        </h1>
        <p className="text-xl md:text-2xl  md:p-0 text-gray-400">
        &#40;Don't worry, there&#39;s no actual hacking involved!&#41;
        </p>
        <div className="text-xl md:text-2xl mt-4">
  A <span style={{ color: "#90E0EF", fontWeight: 'bold' }}>hackathon</span> is a
  social event where people get together to code{" "}
  <span style={{ color: "#ADE8F4", fontWeight: 'bold' }}>awesome</span> projects in
  a <span style={{ color: "#CAF0F8", fontWeight: 'bold' }}>limited time</span>. E-Med Hacks will welcome beginners, experts, and everybody in between!



</div>
        

        <div className="mt-5 px-4 md:px-0 md:mt-[5vh] space-y-6 mx-auto max-w-[800px]">
          <div className="grid grid-cols-1 gap-6">
            <div className="border-2 border-accent p-4 md:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <FaBrain size={30} className="text-accent" />
                <p className="text-xl font-black">Learn Something New</p>
              </div>
              <p>
              We want to make sure that everyone leaves with something new on their toolbelt! You'll have the change to participate in a variety of workshops among peers (or host your own!), learn new skills, explore your potential, and build lasting connections with amazing people. The E-Med team will be cheering you on every step of the way!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="border-2 border-accent p-4 md:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <FaHammer size={30} className="text-accent" />
                <p className="text-xl font-black">Build Amazing Projects</p>
              </div>
              <p>
              Are you going to assemble the perfect team, or work by yourself? Will you be building software or hardware? From robot arms, to cancer detection models, to goofy simulations, there's no limitations on what you can make at a hackathon; just your creativity vs the twelve hours! We can't wait to see what you got.              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="border-2 border-accent p-4 md:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <FaSmileBeam size={30} className="text-accent" />
                <p className="text-xl font-black">Create Amazing Memories</p>
              </div>
              <p>
              Whether it's your first or your fifteenth, hackathons are always wildly fun! It's all about bonding over coding, brainstorming, and free-food-fueled teamwork. From new knowledge to new friendships, the memories you make in these twelve hours will be as awesome as the projects you create!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
