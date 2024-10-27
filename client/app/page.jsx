import Hero from "@/components/Hero/Hero";
import Categories from "@/components/sections/Categories";
import Dietetics from "@/components/sections/Dietetics";
import Chickens from "@/components/sections/Chickens";
import VegetablesAndFruits from "@/components/sections/VegetablesAndFruits";
import CheeseAndDairy from "@/components/sections/CheeseAndDairy";

export default function Home() {
  return (
      <>
      <Hero/>
      <Categories/>
      <Chickens/>
      <Dietetics/>
      <VegetablesAndFruits/>
      <CheeseAndDairy/>
      </>
  );
}
