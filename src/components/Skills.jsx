import { useState, useEffect } from 'react';
import SkillCard from '../components/ui/SkillsCard';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica na carga inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: "Desenvolvimento Frontend",
      skills: ["HTML5 & CSS3", "JavaScript", "React.js", "Tailwind CSS", "Sass"],
      colorClass: "text-green-400"
    },
    {
      title: "Desenvolvimento Backend",
      skills: ["C#", "ASP.NET Core", ".NET Core", "REST APIs", "Django", "Entity Framework Core", "Dependency Injection", "xUnit (Testes)", "JWT (Autenticação)", "Middleware"],
      colorClass: "text-blue-400"
    },
    {
      title: "Banco de Dados",
      skills: ["SQL Server","MongoDB", "PostgreSQL","Oracle SQL", "Entity Framework Core (ORM)", "Migrations", "LINQ"],
      colorClass: "text-yellow-400"
    },
    {
      title: "DevOps & Ferramentas",
      skills: ["Git/GitHub", "Docker", "AWS", "CI/CD", "Swagger (OpenAPI)", "Visual Studio 2022", "Vite"],
      colorClass: "text-purple-400"
    },
    {
      title: "Design & UI/UX",
      skills: ["Figma", "Responsive Design", "UI Design Principles", "Canva"],
      colorClass: "text-pink-400"
    },
    {
      title: "Metodologias & Outros",
      skills: ["Scrum", "Clean Code", "Clean Architecture","Repository Pattern ", "Microservices"],
      colorClass: "text-orange-400"
    }
  ];

  return (
    <section id="skills" className="pb-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Habilidades e Tecnologias</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              colorClass={category.colorClass}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
