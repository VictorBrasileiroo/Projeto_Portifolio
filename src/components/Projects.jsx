import ProjectCard from '../components/ui/ProjectCard'

const Projects = () => {
  const projects = [
    {
    title: "API Store Manager",
    description: "API feita em ASP.NET Core para e-commerce com gestão completa de clientes, produtos e pedidos. Oferece operações CRUD em uma arquitetura moderna e escalável.",
    image: "https://github.com/VictorBrasileiroo/WeatherWatch/raw/main/src/img/image.png",
  technologies: ["ASP.NET Core 3.1", ".NET 8", "C#", "Entity Framework Core"],
    liveLink: false,
    repoLink: "https://github.com/VictorBrasileiroo/StoreManager-API"
  }
  ,{
    title: "Weather Watch",
    description: "Esta aplicação web permite a verificação das condições climáticas atuais. O projeto é um estudo focado em diversos conceitos e tecnologias, incluindo APIs, HTTP, requisições e promises.",
    image: "https://github.com/VictorBrasileiroo/WeatherWatch/raw/main/src/img/image.png",
  technologies: ["HTML", "CSS", "Javascript", "Sass"],
    liveLink: "https://victorbrasileiroo.github.io/WeatherWatch/",
    repoLink: "https://github.com/VictorBrasileiroo/WeatherWatch"
  },
  {
    title: "Store Registration",
    description: "StoreRegistration é um projeto React voltado para pequenas empresas, oferecendo uma solução prática para registrar, visualizar e editar informações de clientes.",
    image: "https://raw.githubusercontent.com/VictorBrasileiroo/ProjectRegistration/daccb93d216af0b4e5b5a5da88839c024af501c2/src/assets/img/Group%203.svg",
    technologies: ["React.js", "Node.js", "Express", "Tailwind", "Figma"],
    liveLink: "https://projectregistrationstore.netlify.app/",
    repoLink: "https://github.com/VictorBrasileiroo/ProjectRegistration"
  },
  {
    title: "Blue Bank",
    description: "BlueBank é um projeto de site para um banco digital fictício. O site oferece informações sobre os serviços do banco, como conta digital, cartões, transferências, e suporte ao cliente.",
    image: "https://github.com/VictorBrasileiroo/BlueBank/blob/main/img/captura%20blue.png?raw=true",
    technologies: ["HTML", "CSS", "Javascript", "Sass"],
    liveLink: "https://victorbrasileiroo.github.io/BlueBank/",
    repoLink: "https://github.com/VictorBrasileiroo/BlueBank"
  },
  ];

  return (
    <section id="projects" className="pb-20 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-Golos font-bold text-center mb-12 text-white">Projetos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
