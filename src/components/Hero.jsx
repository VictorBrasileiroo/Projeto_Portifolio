import React from 'react'
import imageHero from '../assets/imageHero.svg'
import Categories from './ui/Categories';
import { SiDotnet } from 'react-icons/si';
import { FaCalendarDay, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdComputer } from 'react-icons/md';
import { GrLanguage } from 'react-icons/gr';
import { TbFileCv } from 'react-icons/tb';
import Button from '../components/ui/Button'
import { TiArrowForwardOutline } from 'react-icons/ti';

export default function Hero() {
  return (
    <section className=' w-full min-h-[600px] px-5 pyt-8 flex flex-col gap-12 lg:px-20 lg:flex-row 2xl:max-h-screenn' id='hero'>

      {/* Infos */}
      <div className='w-full flex lg:w-1/2 lg:items-center '>
        <div className='flex flex-col items-start justify-start gap-6  lg:px-10'>

          {/* CONTAINER DE STATUS DE ONLINE */}
        <div className='min-w-20 flex items-center gap-3'>
          <div className='w-3 h-3 bg-green-400 rounded-full'></div>
          <h5 className='font-Golos font-bold text-green-400 2xl:text-[18px]'>Online</h5>
        </div>

        {/* Name e Stack */}
        <div className='w-full'>
          <h1 className='font-Golos font-extrabold text-4xl text-white lg:text-6xl'>Victor Brasileiro</h1>
          <h3 className='font-Golos text-gray-400 font-medium lg:text-xl'>Desenvolvedor .NET & Django</h3>
          <p className='mt-3 font-Golos text-gray-300 font-medium max-w-[92%] 2xl:text-[18px]'>Desenvolvo backends robustos e escaláveis, criando APIs eficientes e sistemas seguros com <span className='font-extrabold'>.NET e C#.</span> Minha missão é transformar dados em soluções ágeis e confiáveis para seu projeto.</p>
        </div>

        {/* categories */}
        <div className='w-full flex flex-col gap-3'>
          <div className='flex gap-2'>
            <Categories icon={FaCalendarDay}>20 anos</Categories>
            <Categories icon={MdComputer}>Ciência da Computação</Categories>
          </div>
          <div className='flex gap-2'>
            <Categories icon={GrLanguage}>Português e Inglês</Categories>
            <Categories icon={SiDotnet}>ASP.NET Core</Categories>
          </div>
        </div>

        {/* Buttons */} 
        <div className='flex gap-4 items-center'>
          <Button className=' h-12 bg-green-600 hover:scale-105 transition-all rounded-xl'>
            <Button.Label className='font-medium'><a href="#projects">Ver projetos</a></Button.Label>
            <TiArrowForwardOutline className='w-6 h-6 text-white'/>
          </Button>
          <a className='p-5 bg-blue-950/40 rounded-full hover:-translate-y-2 hover:bg-blue-900 transition-all' href="https://github.com/VictorBrasileiroo"><FaGithub className='text-white w-6 h-6' /></a>
          <a className='p-5 bg-blue-950/40 rounded-full hover:-translate-y-2 hover:bg-blue-900 transition-all' href='https://drive.google.com/file/d/1V3zbdiQ_zKp0Rj9Hax05e2aTj59BPUAM/view?usp=sharing'><TbFileCv className='text-white w-6 h-6' /></a>
        </div>
        </div>
      </div>

      {/* Image */}
      <div className='w-full flex justify-center items-center  lg:w-1/2'>
         <img className=' w-[85%] h-[85%] ' src={imageHero} alt="" />
      </div>
    </section>
  )
}
