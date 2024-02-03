import React from 'react';
import { Header } from "./components/Header";
import { Main } from "./components/MainArt";
import { NewContainer } from "./components/NewContainer";
import { ArticuloContainer } from "./components/ArticuloContainer";
import { Footer } from "./components/footer";
import { NunuNosotros } from "./components/nunuNosotros";

function Nosotros() {
  return (
    <main className="px-4 pt-6">
      <Header />
      <NunuNosotros/>
      <Footer />

    </main>
  );
}

export default Nosotros;