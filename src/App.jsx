import Nav from './components/Nav'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Ceremonies from './components/Ceremonies'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import Stay from './components/Stay'
import Rsvp from './components/Rsvp'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Countdown />
        <Ceremonies />
        <Gallery />
        <Venue />
        <Stay />
        <Rsvp />
      </main>
      <Footer />
    </>
  )
}
