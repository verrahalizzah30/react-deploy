import { useState } from 'react'
import WelcomePage from './component/welcomepage'
import AboutUs from './component/about'
import ContactUs from './component/contactus'
import Footer from './component/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WelcomePage />
        <AboutUs />
        <ContactUs />
        <Footer />

      </div>
        
          
    </>
  );
}

export default App
