import React from "react";

const Note = () => {
  return (
    <section className="px-[6%] py-4 mt-4 bg-gray-300">
      <h6 className="text-tiny md:text-sm fotn-bold">Materiał marketingowy</h6>

      <p className="text-[9px] md:text-tiny py-3">
        * Składka za pakiet OC i AC z Assistance Złoty+ wysokości 764 zł rocznie
        została wyliczona dla Klienta w wieku 39 lat, mieszkańca Węgrzc, powiat
        krakowski, właściciela Hondy Jazz.
      </p>
      <p className="text-[9px] md:text-tiny">
        * Składka za pakiet OC i AC z Assistance Standard w wysokości 676 zł
        rocznie została wyliczona dla Klienta w wieku 33 lat, mieszkańca
        Bobrowników, posiadacza Forda Focusa.
      </p>
      <p className="text-[9px] md:text-tiny py-3">
        * Składka OC z Assistance Standard w wysokości 375 zł rocznie została
        wyliczona dla Klienta w wieku 51 lat, mieszkańca Rybarzowic, powiat
        bielski, właściciela Toyoty Auris.
      </p>
    </section>
  );
};

export default Note;
