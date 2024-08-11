import { FaExternalLinkAlt } from "react-icons/fa";

export const Rundown = () => {
  return (
    <div className="p-6 md:p-8 lg:p-12 bg-accent">
      <div className="mx-auto">
        <h1 className="text-3xl md:text-4xl text-center">Details</h1>

        <div className="mt-4 max-w-3xl grid md:grid-cols-2 gap-2 mx-auto">
          <div className="">
            <div className=" px-6 py-4  border-black border text-black" style={{backgroundColor: "#faf4e8"}}>
              <p className="font-black underline text-lg">Date & Time</p>
              <p>
              Join us from 9 AM - 9 PM on May XX, 2024!              </p>
            </div>
            <div className="mt-2 px-6 py-4 border-black border text-black" style={{backgroundColor: "#faf4e8"}}>
              <p className="font-black underline text-lg">Eligibility</p>
              <p>
              All high-schoolers, middle-schoolers, and undergrads are welcome to attend and have an amazing time at E-Med!
              </p>
            </div>
          </div>
          <img
            src="https://cloud-92szndnmb-hack-club-bot.vercel.app/0image.png"
            className="object-cover h-full border border-black hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.77)]   transition hover:-translate-x-1 hover:-translate-y-1"
          />
        </div>

        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <div className="flex items-center max-w-3xl mx-auto mt-4 space-x-2 justify-center px-4 py-2 text-accent border border-black hover:bg-transparent hover:text-black transition rounded-md w-full text-lg underline" style={{backgroundColor: "#faf4e8"}}>
            <p>Register</p>

            <FaExternalLinkAlt size={15} />
          </div>
        </a>
      </div>
    </div>
  );
};
