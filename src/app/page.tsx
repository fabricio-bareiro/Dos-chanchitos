
import { About } from "./components/navbar/about";
import { Discount } from "./components/navbar/Discount";
import { Features } from "./components/navbar/Features";
import { Navbar } from "./components/navbar/Navbar";
import { Overview } from "./components/navbar/Overview/Overview";
import Practice from "./components/navbar/Practice/Practice";
import { Properties } from "./components/Properties/Propierties";

export default function Home() {
  return (
<main className="px-3 lg:px-10">
   <Navbar />
   <Overview />
   <Features />
   <div className="max-w-6xl mx-auto">
    <About/>
   </div>
   <Practice/>
   <Properties/>
   <Discount />
</main>
  );
}
