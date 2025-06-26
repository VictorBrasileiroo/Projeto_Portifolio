import ProjectCard from '../components/ui/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: "UrlDux - Encurtador de URL",
      description: "O UrlDux é um encurtador de URLs completo, desenvolvido para transformar links longos e complexos em URLs curtas, memoráveis e fáceis de compartilhar.",
      image: "https://raw.githubusercontent.com/VictorBrasileiroo/EncurtadorURL/master/banner.png",
    technologies: ["ASP.NET Core", "Base62", "Validação", "SQL Server"],
      liveLink: false,
      repoLink: "https://github.com/VictorBrasileiroo/Projeto_API_EncurtadorURL"
    },
    {
      title: "API CodeNet",
      description: "A API do CodeNet é uma plataforma de comunicação para desenvolvedores, oferecendo funcionalidades de criação de grupos, envio de mensagens, controle de membros e usuários.",
      image: "https://raw.githubusercontent.com/VictorBrasileiroo/Projeto_API_CodeNet/refs/heads/master/banner.svg",
    technologies: ["ASP.NET Core", "JWT", "SQL Server" , "Validation"],
      liveLink: false,
      repoLink: "https://github.com/VictorBrasileiroo/Projeto_API_CodeNet"
    },
    {
      title: "API Betterboxd",
      description: "A API do BetterBoxd é um sistema voltado para avaliação de filmes, oferecendo funcionalidades para registrar usuários, avaliar filmes, e interagir com a comunidade.",
      image: "https://raw.githubusercontent.com/VictorBrasileiroo/Projeto_API_Betterboxd/refs/heads/master/bannerBetterBoxd.svg",
    technologies: ["ASP.NET Core", "C#", "EFC", "SQL Server" , "SOLID"],
      liveLink: false,
      repoLink: "https://github.com/VictorBrasileiroo/Projeto_API_Betterboxd"
    },
    {
    title: "API Store Manager",
    description: "API feita em ASP.NET Core para e-commerce com gestão completa de clientes, produtos e pedidos. Oferece operações CRUD em uma arquitetura moderna e escalável.",
    image: "https://github.com/VictorBrasileiroo/StoreManager-API/raw/main/banner.png",
  technologies: ["ASP.NET Core",  ".NET", "C#", "Entity Framework"],
    liveLink: false,
    repoLink: "https://github.com/VictorBrasileiroo/StoreManager-API"
  },
  {
    title: "Blue Bank",
    description: "BlueBank é um projeto de site para um banco digital fictício. O site oferece informações sobre os serviços do banco, como conta digital, cartões, transferências, e suporte ao cliente.",
    image: "https://github.com/VictorBrasileiroo/BlueBank/blob/main/img/captura%20blue.png?raw=true",
    technologies: ["HTML", "CSS", "Javascript", "Sass"],
    liveLink: "https://victorbrasileiroo.github.io/BlueBank/",
    repoLink: "https://github.com/VictorBrasileiroo/BlueBank"
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
    title: "Weather Watch",
    description: "Esta aplicação web permite a verificação das condições climáticas atuais. O projeto é um estudo focado em diversos conceitos e tecnologias, incluindo APIs, HTTP, requisições e promises.",
    image: "https://github.com/VictorBrasileiroo/WeatherWatch/raw/main/src/img/image.png",
  technologies: ["HTML", "CSS", "Javascript", "Sass"],
    liveLink: "https://victorbrasileiroo.github.io/WeatherWatch/",
    repoLink: "https://github.com/VictorBrasileiroo/WeatherWatch"
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
