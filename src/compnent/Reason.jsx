import React from "react";
import { LuMonitorPlay } from "react-icons/lu";

const Reason = () => {
  const reasons = [
    {
      title: "Enjoy on your TV",
      detail:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icons: <LuMonitorPlay />,
    },
    {
      title: "Download your shows to watch offline",
      detail: "Save your favourites easily and always have something to watch.",
      icons: <LuMonitorPlay />,
    },
    {
      title: "Watch everywhere",
      detail:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icons: <LuMonitorPlay />,
    },
    {
      title: "Create profiles for kids",
      detail:
        "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icons: <LuMonitorPlay />,
    },
  ];
  return (
    <div className="h-120 px-32">
      <div className="font-bold text-2xl mb-5">More reasons to join</div>

      <div className="flex gap-10 items-center justify-center">
        {reasons.map((reason) => {
          return (
            <div>
              <div className="w-[320px] h-[350px] rounded-2xl p-10 bg-gradient-to-b from-blue-950 to-gray-900 relative ">
                <div className="fopnt-bold text-2xl">{reason.title}</div>
                <div className="py-5 text-gray-400">{reason.detail}</div>
                <div className="text-7xl right-0 mr-10 absolute opacity-60 bottom-0 mb-10">
                  {reason.icons}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reason;
