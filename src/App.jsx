import React from 'react';
import { Header } from "./components/Header";
import { Main } from "./components/MainArt";
import { NewContainer } from "./components/NewContainer";
import { ArticuloContainer } from "./components/ArticuloContainer";
import { Footer } from "./components/footer";


function App() {
  return (
      <main className="px-4 pt-6">         
            <Header />
            <div className='lg:flex lg:gap-8'>
              <Main />
              <NewContainer />
            </div>
            <ArticuloContainer />
         <Footer />
       
      </main>
   
  );
}

export default App;