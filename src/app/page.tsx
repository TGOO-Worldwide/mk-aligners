import { Header } from "@/components/landing/Header";
import { Hero, Opportunity } from "@/components/landing/Hero";
import { KLine, KLinePricing, KLineContact } from "@/components/landing/KLine";
import { ChinaIntro, BestSmile, Chuhongxin, CostSimulation } from "@/components/landing/China";
import { Smartee, Yongle, Meiming, Beame } from "@/components/landing/Manufacturers";
import { Comparison } from "@/components/landing/Comparison";
import {
  Regulation,
  RfqChecklist,
  Strategy,
  Conclusion,
  FinalCta,
} from "@/components/landing/Closing";
import { Ranking } from "@/components/landing/Ranking";
import { QuoteEmail } from "@/components/landing/QuoteEmail";
import { ImplantsBonus } from "@/components/landing/Implants";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Opportunity />
        <KLine />
        <KLinePricing />
        <ChinaIntro />
        <BestSmile />
        <Chuhongxin />
        <Smartee />
        <Yongle />
        <Meiming />
        <Beame />
        <CostSimulation />
        <KLineContact />
        <Comparison />
        <Regulation />
        <RfqChecklist />
        <Strategy />
        <Conclusion />
        <Ranking />
        <FinalCta />
        <QuoteEmail />
        <ImplantsBonus />
      </main>
      <Footer />
    </>
  );
}
