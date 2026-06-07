import { oppoCards } from "./utils";
import React from "react";

function App() {
  return (
    <section className="bg-zinc-200/60 min-h-screen p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-4 auto-rows-[220px]">

          {/* Card 1 - Hero */}
          <div className="col-span-4 row-span-2 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)]
          p-6 flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-2xl">
                {oppoCards.hero.title}
              </h1>
              <h3 className="text-gray-500">
                {oppoCards.hero.subtitle}
              </h3>
            </div>

            <img
              src={oppoCards.hero.image}
              alt="hero"
              className="object-contain h-full "
            />
          </div>

          {/* Card 2 - Performance */}
          <div className="col-span-8 row-span-1 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 
          shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 flex justify-between items-center overflow-hidden">
            <div>
              <h1 className="font-bold text-xl">
                {oppoCards.performance.title}
              </h1>

              <h3 className="text-green-600 font-semibold">
                {oppoCards.performance.highlight}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                {oppoCards.performance.description}
              </p>
            </div>

            <img
              src={oppoCards.performance.image}
              alt="performance"
              className="h-60 object-cover"
            />
          </div>

          {/* Card 3 - ColorOS */}
          <div className="col-span-4 rounded-2xl white/40 backdrop-blur-xl border
           border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 flex flex-col justify-center">
          
            <div>
              <h1 className="font-bold text-xl">
                {oppoCards.coloros.title}
              </h1>

              <h3 className="text-green-600 font-semibold">
                {oppoCards.coloros.highlight}
              </h3>

              <p className="text-sm text-gray-600 mt">
                {oppoCards.coloros.description}
              </p>

              <div className="overflow-hidden rounded-xl">
                <img src={oppoCards.coloros.image} alt="" />
              </div>
            </div>
          </div>

          {/* Card 4 - Batery & VCC */}
          <div className="col-span-4 row-span-2 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 
          shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 flex flex-col justify-between">
            <h1 className="font-bold text-xl">
              {oppoCards.battery.title}
            </h1>

            <h3 className="text-green-600 font-semibold">
              {oppoCards.battery.highlight}
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              {oppoCards.battery.description}
            </p>

              <div className="rounded-xl overflow-hidden mt-6">

                <img
                  src={oppoCards.battery.image}
                  alt="battery"
                  className="h-60  w-full object-cover"
                  />
              </div>
          </div>

          {/* Card 5 - Display */}
          <div className="col-span-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
          p-6 flex flex-col justify-center">
            <h1 className="font-bold text-2xl">
              {oppoCards.display.title}
            </h1>

            <h3 className="text-green-600 font-semibold">
              {oppoCards.display.highlight}
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              {oppoCards.display.description}
            </p>
          </div>

          {/* Card 6 - QR */}
          <div className="col-span-2 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
          p-6 flex flex-col items-center justify-center">
            <h1 className="font-bold text-sm mb-2">QR CODE</h1>

            <div className="rounded-xl overflow-hidden">
              <img src={oppoCards.qr.image} alt="QR Code" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default App;