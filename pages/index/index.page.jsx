import React from 'react'
import { Counter } from './Counter'

export { Page }

function Page() {
  return (
    <section aria-label="Bienvenue" className="container">
        <h1>Bienvenue à Accueil</h1>

        <Counter />

      </section>
  )
}
