import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <>
    <section className='min-h-screen text-foreground bg-gray-900'>
      <Header/>
      {/* Divisor */}
      <div className='bg-gray-900 w-full h-24 p-4'></div>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
    </section>
    </>
  )
}
