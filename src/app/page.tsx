"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Preloader from "@/components/preloader";
import HomePage from "./home";

export default function Home() {
  const [loaded, setLoaded] = useState(true);
  return (
    <>
      <AnimatePresence>
        {!loaded && <Preloader setLoaded={setLoaded} />}
      </AnimatePresence>
      <AnimatePresence>{loaded && <HomePage />}</AnimatePresence>
    </>
  );
}
