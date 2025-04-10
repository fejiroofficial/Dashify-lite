import Header from "./section/header";
import HowItStarted from "./section/howitStarted";
import Benefit from "./section/benefit";
import Hero from "./section/hero";
import WaitList from "./section/waitlist";
import Footer from "./section/footer";

export default function Home() {
return(
  <div>
  <Header />
  <main className="flex flex-col gap-8 lg:row-start-2 justify-center items-center" >
  <Hero />
  <HowItStarted />
  <Benefit />
  <WaitList />
  <Footer />
  </main>

</div>
)
}
