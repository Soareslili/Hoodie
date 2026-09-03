
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Hero from "./components/Home/Hero";
import Footer from "./components/page/Footer";
import Contact from "./components/page/Contact";


function App() {

  return (
     <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>

        
        </main>
        <Footer />
      </div>  
  )
}

export default App
