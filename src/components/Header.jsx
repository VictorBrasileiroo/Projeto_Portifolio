import React, { useState, useEffect } from 'react'
import logoMobile from '../assets/logo.svg'
import Button from './ui/Button'

export default function Header() {
  const [bgOpaque, setBgOpaque] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setBgOpaque(true)
      } else {
        setBgOpaque(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full h-20 flex items-center justify-center p-12 lg:justify-between lg:px-30 fixed top-0 z-50 transition-colors ${bgOpaque ? 'bg-gray-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      
      {/* Logo */}
      <div className='flex gap-2 items-center'>
        <img className='lg:w-15 h-15' src={logoMobile} alt="" />
        <div className='hidden lg:block'>
          <h5 className='font-Golos font-bold text-white leading-5 text-[18px]'>Victor Brasileiro</h5>
          <h5 className='font-Golos font-medium text-green-500 leading-5 text-[14px]'>Desenvolvedor Backend</h5>
        </div>
      </div>

      {/* Navigation */}
      <div className='hidden lg:block'>
        <nav className='flex gap-8 items-center'>
          <ul className='flex gap-5 font-Golos text-gray-300'>
            <li><a className='hover:text-green-500 transition' href="#hero">Home</a></li>
            <li><a className='hover:text-green-500 transition' href="#about">Sobre Mim</a></li>
            <li><a className='hover:text-green-500 transition' href="#projects">Projetos</a></li>
            <li><a className='hover:text-green-500 transition' href="#skills">Habilidades</a></li>
          </ul>
          <Button className='p-2.5 bg-green-600 hover:bg-gray-900 hover:border hover:border-green-400 transition'>
            <Button.Label><a href='https://wa.me/5582996172566?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20projetos!'>Fale comigo</a></Button.Label>
          </Button>
        </nav>
      </div>
    </header>
  )
}