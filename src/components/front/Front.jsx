import React, { useState, useEffect } from "react";
import "./front.css";
import { motion } from "framer-motion";
import decoration from "../../assets/decoration.png";
import frontvideo from "../../assets/childfront.mp4";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import sound from "../../assets/music4.mp3";

const Front = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.6 },
    }),
  };

  const [isPlaying, setIsPlaying] = useState(false); // Состояние для отслеживания состояния воспроизведения

  useEffect(() => {
    const audio = new Audio(sound);
    audio.loop = true;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full h-full relative">
      <img
        className="absolute top-0 left-0 right-0"
        src={decoration}
        alt="decorationImage"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8, once: true }}
        className="w-full h-full max-w-[600px] flex flex-col items-center text-center px-4 pt-28"
      >
        <h2 className="text-4xl uppercase font-rv text-rose-600">1 жас</h2>
        <p className="text-xl text-sky-500 font-semibold">тұсаукесер</p>
        <video
          autoPlay
          loop
          muted
          className="w-[200px] h-[250px] object-cover rounded-[150px] mt-8 border-solid border-4 border-sky-500"
        >
          <source src={frontvideo} type="video/mp4" />
        </video>
        <motion.h2
          custom={1}
          variants={textAnimation}
          className="text-4xl mt-8 font-rv text-rose-600"
        >
          Алмаз
        </motion.h2>
        <motion.h3
          className="font-medium text-base font-rv mt-20 max-w-xs"
          custom={2}
          variants={textAnimation}
        >
          Құрметті ағайын-туыс, құда-жекжат, дос-жарандар!
        </motion.h3>
        <motion.h3
          custom={3}
          variants={textAnimation}
          className="font-medium text-sm my-5 text-neutral-500"
        >
          Сіздерді баламыздың тұсаукесер тойына арналған салтанатты ақ
          дастарханымыздың қадірлі қонағы болуға шақырамыз
        </motion.h3>
      </motion.div>
    </div>
  );
};

export default Front;
