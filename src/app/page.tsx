import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Solutions } from "@/components/landing/Solutions";
import { BusyERP } from "@/components/landing/BusyERP";
import { Developers } from "@/components/landing/Developers";
import { Security } from "@/components/landing/Security";
import { ROI } from "@/components/landing/ROI";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <BusyERP />
        <Developers />
        <Security />
        <ROI />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
