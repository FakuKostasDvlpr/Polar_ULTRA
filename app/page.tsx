import { Hero } from "./components/Heros/Hero";
import { Header } from "./components/navbar/Header";
import { LampDemo } from "./components/ui/lamp";

export default function Home() {
  return (
    <>
      <Header/>
      <LampDemo/>
      <Hero/>
    </>
  );
}
