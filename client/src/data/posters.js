import React from "react";

import noir from "@/assets/img/mood/noir.webp";
import dusk from "@/assets/img/mood/dusk.webp";
import vivid from "@/assets/img/mood/vivid.webp";
import grain from "@/assets/img/mood/grain.webp";
import silence from "@/assets/img/mood/silence.webp";
import chaos from "@/assets/img/mood/chaos.webp";
import symmetry from "@/assets/img/mood/symmetry.webp";
import echoes from "@/assets/img/mood/echoes.webp";
import humidity from "@/assets/img/mood/humidity.webp";
import melancholy from "@/assets/img/mood/melancholy.webp";
import rhythm from "@/assets/img/mood/rhythm.webp";
import surreal from "@/assets/img/mood/surreal.webp";

const Posters = [
  // { title: "NOIR", subtitle: "Dark and moody" },
  // { title: "DUSK", subtitle: "Golden hour warmth" },
  // { title: "VIVID", subtitle: "Bright neon energy" },
  // { title: "GRAIN", subtitle: "Vintage film look" },
  // { title: "SILENCE", subtitle: "Calm minimalism" },
  // { title: "CHAOS", subtitle: "Intense and gritty" },
  // { title: "SYMMETRY", subtitle: "Perfect balance" },
  // { title: "ECHOES", subtitle: "Historic richness" },
  // { title: "HUMIDITY", subtitle: "Tropical and heavy" },
  // { title: "MELANCHOLY", subtitle: "Lonely city nights" },
  // { title: "RHYTHM", subtitle: "Dreamy cityscapes" },
  // { title: "SURREAL", subtitle: "Strange and otherworldly" },
  {
    id: 1,
    title: "NOIR",
    subtitle: "Dark & moody",
    Description:
      "Shadows, rain, and moral ambiguity. Crime films and thrillers where everyone's full of secrets.",
    visualCore: "High contrast, B&W, rain, shadows.",
    aspectRatio: "2:3",
    img: noir,
  },
  {
    id: 2,
    title: "DUSK",
    subtitle: "Bittersweet & golden",
    Description:
      "Something beautiful is ending, and you already know it. Films that sit between joy and sadness and refuse to pick a side.",
    visualCore: "Warm, hazy, purple/orange twilight, European city.",
    aspectRatio: "16:9",
    img: dusk,
  },
  {
    id: 3,
    title: "VIVID",
    subtitle: "Neon. Loud. Electric.",
    visualCore: "Intense cyan/magenta neon, motion blur, rain.",
    Description:
      "Saturated colors and sensory overload in the best way. Films that feel like a fever dream you didn't want to wake from.",
    aspectRatio: "3:2",
    img: vivid,
  },
  {
    id: 8,
    title: "ECHOES",
    subtitle: "Historic richness",
    visualCore:
      "Lavish baroque architecture, fish-eye distortion, detailed fabrics.",
    Description:
      "Baroque palaces, heavy costumes, lives lived on a grander scale. Period films where the past feels vivid.",
    aspectRatio: "3:2",
    img: echoes,
  },
  {
    id: 5,
    title: "SILENCE",
    subtitle: "Slow, quiet, meditative.",
    Description:
      "Long pauses and empty spaces. Films that trust you to sit with discomfort and find something beautiful in it.",
    visualCore: "Minimalist, brutalist, symmetry, negative space.",
    aspectRatio: "3:4",
    img: silence,
  },
  {
    id: 7,
    title: "SYMMETRY",
    subtitle: "Perfectly balance, Neat.",
    Description:
      "Every frame looks exactly balanced, like a postcard/painting. Obsessive visual control usually with a very dry sense of humor. Very precise, weirdly funny.",
    visualCore: "Precise compositions, geometric sets, pastel colors.",
    aspectRatio: "4:3",
    img: symmetry,
  },
  {
    id: 4,
    title: "GRAIN",
    subtitle: "Raw Texture",
    Description: " Real places, real faces, no polish. Films shot like a documentary. Looks like real life, not a movie.",
    visualCore: "Muted earth tones, heavy film grain, light leaks, tactile.",
    aspectRatio: "1:1",
    img: grain,
  },

  {
    id: 6,
    title: "CHAOS",
    subtitle: "Fast and scary",
    visualCore: "Gritty, handheld, shaky-cam, flashing lights, tension.",

    Description:
      "Shaky cameras and flashing lights. Films where danger is always one second away.",
    aspectRatio: "4:3",
    img: chaos,
  },
  {
    id: 9,
    title: "HUMIDITY",
    subtitle: "Hot, heavy, and Tropical.",
    Description:
      "You can feel the heat through the screen. Slow-burn films where the air itself feels like a character.",
    visualCore:
      "Intensely humid air, deep, tonal shadows, over-the-top heat haze.",
    aspectRatio: "4:3",
    img: humidity,
  },

  {
    id: 10,
    title: "MELANCHOLY",
    subtitle: "Urban Isolation",
    visualCore: "Quiet, wide-angle urban isolation, pastel neon, thoughtful.",
    Description:
      "Empty apartments, city windows. Films that understand the loneliness of being surrounded by people.",
    aspectRatio: "16:9",
    img: melancholy,
  },
  {
    id: 11,
    title: "RHYTHM",
    subtitle: "Cities feels like poetry.",
    Description:
      "Wide shots of skylines at golden hour and the feeling that life is a performance worth watching.",
    visualCore:
      "Expansive city views at magic hour, deep purple skies, long takes.",
    aspectRatio: "2:3",
    img: rhythm,
  },
  {
    id: 12,
    title: "SURREAL",
    subtitle: "Strange and otherworldly",
    Description:
      "Strange rules, weirder characters, dreamlike logic you just have to accept. Nothing makes sense, and that's the fun part.",
    visualCore:
      "Sepia tones, eccentric character detail, surreal, tactile props.",
    aspectRatio: "4:3",
    img: surreal,
  },
];

export default Posters;

