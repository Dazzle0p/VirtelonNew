import React from "react";
import { Sparkles, Star, Users, Heart, Zap, X } from "lucide-react";
import Card from "../utils/Card";
import CountUp from "../utils/CountUp";
import cardOneImage from "../assets/image4.png";
import fireworImg from "../assets/FireworkSVG.png";

// Main Metrics Component
export default function Metrics() {
  return (
    <section className="relative w-full pt-6 pb-16 md:pt-10 md:pb-24 px-4 md:px-8 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Mobile layout: Grid with 2 columns */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:hidden">
          {/* Card 1 - Projects Delivered */}
          <Card
            className="h-48 md:h-64"
            glowColor="noglow"
            backgroundUrl={cardOneImage}
          >
            <div className="flex h-full w-full items-end justify-end text-right">
              <div>
                <p className="absolute text-xs md:text-sm -right-1 top-[35%] font-semibold tracking-widest text-gray-500 uppercase">
                  Projects Delivered
                </p>
                <h3 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
                  <CountUp from={0} to={150} duration={0.07} />+
                </h3>
              </div>
            </div>
          </Card>

          {/* Card 2 - Community Members */}
          <Card
            className="h-48 md:h-64 flex w-full justify-center"
            glowColor="noglow"
          >
            <div className="top-2 flex items-center gap-1 w-full justify-center">
              <div className="w-7 h-7 rounded-full bg-[#6d28d9] border border-white/10 flex items-center justify-center text-white">
                <X size={12} strokeWidth={2.5} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                <Zap size={12} fill="currentColor" strokeWidth={0} />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center text-white">
                <Heart size={20} fill="currentColor" strokeWidth={0} />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#eab308] flex items-center justify-center text-black">
                <X size={12} strokeWidth={2.5} />
              </div>
              <div className="w-7 h-7 rounded-full bg-[#a78bfa] flex items-center justify-center text-white">
                <Sparkles size={12} fill="currentColor" strokeWidth={0} />
              </div>
            </div>

            <div className="text-center mt-auto">
              <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 mb-2 uppercase">
                Community Members
              </p>
              <h3 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
                <CountUp from={0} to={200} duration={0.07} />
                K+
              </h3>
            </div>
          </Card>

          {/* Card 3 - Happy Clients - Full width on mobile */}
          <Card
            className=" col-span-2 items-center text-center justify-between py-8"
            glowColor="noglow"
          >
            <div className="flex h-15 w-full flex-col items-center mt-4">
              <Sparkles
                className="text-[#c5b6e8] absolute bottom-[15%] right-4 w-16 h-16"
                strokeWidth={0}
                fill="#8b5cf6"
              />
              <Sparkles
                className="absolute -bottom-2 left-4 text-[#a791dc] w-12 h-12 opacity-100"
                strokeWidth={0}
                fill="#a791dc"
              />
              <Sparkles
                className="absolute -top-2 left-4 text-[#8b5cf6] w-12 h-12 opacity-50"
                strokeWidth={0}
                fill="#8b5cf6"
              />
            </div>

            <div className="absolute bottom-5 w-full">
              <p className="text-xs md:text-sm font-semibold tracking-[0.15em] text-gray-500 mb-2 uppercase">
                Happy Clients
              </p>
              <h3 className="text-5xl sm:text-6xl font-bold text-white tracking-widest">
                <CountUp from={0} to={50} duration={0.07} />+
              </h3>
            </div>
            <div className="absolute flex w-full justify-center -bottom-15">
              <img src={fireworImg} alt="fireworks" className="w-12 h-12" />
            </div>
          </Card>

          {/* Card 4 - Years of Experience */}
          <Card
            className="h-48 md:h-64 justify-center items-center text-center relative"
            glowColor="noglow"
          >
            <div className="mt-4">
              <h3 className="text-5xl sm:text-6xl font-bold text-white mb-2 tracking-tight">
                <CountUp from={0} to={10} duration={0.07} />+
              </h3>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase">
                Years of <span className="text-[#22c55e]">Experience</span>
              </p>
            </div>
          </Card>

          {/* Card 5 - Stars Rated */}
          <Card
            className="h-48 md:h-64 justify-center items-center text-center relative"
            glowColor="noglow"
          >
            <div className="mt-4">
              <h3 className="text-5xl sm:text-6xl font-bold text-white mb-1 tracking-tight">
                <CountUp from={0} to={4.8} duration={0.07} />
              </h3>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-[#eab308] mb-1 uppercase">
                Stars Rated
              </p>
              <p className="text-[10px] font-medium text-gray-500 tracking-wider uppercase">
                By Our Clients
              </p>
              <div className="absolute bottom-0 -right-4 opacity-[0.06]">
                <Star className="w-20 h-20 text-white fill-white" />
              </div>
            </div>
          </Card>
        </div>

        {/* Desktop layout: Your original 3-column layout - hidden on mobile */}
        <div className="hidden lg:grid max-w-6xl mx-auto grid-cols-1 lg:grid-cols-3 gap-6">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6">
            {/* Card 1 - Projects Delivered */}
            <Card
              className="h-64"
              glowColor="noglow"
              backgroundUrl={cardOneImage}
            >
              <div className="flex h-full w-full items-end justify-end text-right">
                <div>
                  <p className="absolute text-[15px] -right-1 top-[40%] font-semibold tracking-widest text-gray-500 uppercase">
                    Projects Delivered
                  </p>
                  <h3 className="text-8xl font-bold text-white tracking-tight">
                    <CountUp from={0} to={150} duration={0.07} />+
                  </h3>
                </div>
              </div>
            </Card>

            {/* Card 2 - Community Members */}
            <Card
              className="h-64 flex w-full justify-center"
              glowColor="noglow"
            >
              <div className="top-4 flex items-center gap-2 w-full">
                <div className="w-12 h-12 rounded-full bg-[#6d28d9] border border-white/10 flex items-center justify-center text-white">
                  <X size={20} strokeWidth={2.5} />
                </div>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black">
                  <Zap size={20} fill="currentColor" strokeWidth={0} />
                </div>
                <div className="w-16 h-16 rounded-full bg-[#10b981] flex items-center justify-center text-white">
                  <Heart size={50} fill="currentColor" strokeWidth={0} />
                </div>
                <div className="w-14 h-14 rounded-full bg-[#eab308] flex items-center justify-center text-black">
                  <X size={20} strokeWidth={2.5} />
                </div>
                <div className="w-12 h-12 rounded-full bg-[#a78bfa] flex items-center justify-center text-white">
                  <Sparkles size={20} fill="currentColor" strokeWidth={0} />
                </div>
              </div>

              <div className="text-center mt-auto">
                <p className="text-[15px] font-semibold tracking-widest text-gray-500 mb-2 uppercase">
                  Community Members
                </p>
                <h3 className="text-8xl font-bold text-white tracking-tight">
                  <CountUp from={0} to={200} duration={0.07} />
                  K+
                </h3>
              </div>
            </Card>
          </div>

          {/* COLUMN 2 - Happy Clients */}
          <div className="flex flex-col h-full">
            <Card
              className="h-full min-h-[540px] items-center text-center justify-between py-12"
              glowColor="noglow"
            >
              {/* Top Sparkles Decoration */}
              <div className="flex h-full w-full flex-col items-center mt-10">
                <Sparkles
                  className="text-[#c5b6e8] w-32 h-32"
                  strokeWidth={0}
                  fill="#8b5cf6"
                />
                <Sparkles
                  className="absolute -top-5 right-10 text-[#a791dc] w-25 h-25 opacity-100"
                  strokeWidth={0}
                  fill="#a791dc"
                />
                <Sparkles
                  className="absolute -top-5 left-10 text-[#8b5cf6] w-25 h-25 opacity-50"
                  strokeWidth={0}
                  fill="#8b5cf6"
                />
                <Sparkles
                  className="absolute text-[#8b5cf6] -left-10 bottom-2 w-10 h-10 opacity-50"
                  strokeWidth={0}
                  fill="#8b5cf6"
                />
                <Sparkles
                  className="absolute text-[#8b5cf6] -right-10 bottom-7 w-15 h-15 opacity-50"
                  strokeWidth={0}
                  fill="#8b5cf6"
                />
              </div>

              <div className="absolute bottom-5 w-full">
                <p className="text-[15px] font-semibold tracking-[0.15em] text-gray-500 mb-3 uppercase">
                  Happy Clients
                </p>
                <h3 className="text-8xl font-bold text-white tracking-widest">
                  <CountUp from={0} to={50} duration={0.07} />+
                </h3>
              </div>
              <div className="absolute flex w-full h-full items-center justify-center ">
                <img src={fireworImg} alt="*" className=" w-20 h-20 " />
              </div>
            </Card>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6">
            {/* Card 4 - Years of Experience */}
            <Card
              className="h-64 justify-center items-center text-center relative"
              glowColor="noglow"
            >
              <div className="mt-6">
                <h3 className="text-8xl font-bold text-white mb-3 tracking-tight">
                  <CountUp from={0} to={10} duration={0.07} />+
                </h3>
                <p className="text-[15px] font-semibold tracking-widest text-gray-500 uppercase">
                  Years of <span className="text-[#22c55e]">Experience</span>
                </p>
              </div>
            </Card>

            {/* Card 5 - Stars Rated */}
            <Card
              className="h-64 justify-center items-center text-center relative"
              glowColor="noglow"
            >
              <h3 className="text-8xl font-bold text-white mb-2 tracking-tight">
                <CountUp from={0} to={4.8} duration={0.07} />
              </h3>
              <p className="text-[15px] font-semibold tracking-widest text-[#eab308] mb-1 uppercase">
                Stars Rated
              </p>
              <p className="text-[10px] font-medium text-gray-500 tracking-wider uppercase">
                By Our Clients
              </p>

              {/* Star Background */}
              <div className="absolute bottom-0 -right-10 opacity-[0.06]">
                <Star className="w-40 h-40 text-white fill-white" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
