import { Head } from '@inertiajs/react';
import { Nav, Hero, Slider,Intro, About, Services, Events, Team, Contact, Footer, } from '../v1/components';
import TicketTailorWidget from '@/Components/TicketTailorWidget';

function App() {

  return (
    <>
      <Head title="Home" />
      <Nav />
      <Hero />
      <Intro />
      <About />
      <Slider/>
      <Services />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App
