import { Barlow_Semi_Condensed, Cormorant } from "next/font/google";

export const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const serif = Cormorant({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});
