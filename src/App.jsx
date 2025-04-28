import { Suspense } from 'react'
import './App.css'
import Navbar from './componentes/Nab/Navbar'
import PriceOption from './componentes/PriceingOption/PriceOption'

// const pricingPromise = fetch('/package.json')

//     .then(res=>res.json())

function App() {

  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>

    <main>
    
    <PriceOption></PriceOption>
    
    
    </main>

    </>
  )
}

export default App
