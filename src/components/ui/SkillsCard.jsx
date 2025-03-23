const SkillCard = ({ title, skills, colorClass, index, isVisible }) => {
    return (
      <div 
        className={`glass-card rounded-xl p-6 transition-all duration-500 bg-blue-950/40 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
      >
        <h3 className={`text-xl font-semibold mb-4 font-Golos ${colorClass}`}>{title}</h3>
        <ul className="space-y-3">
          {skills.map((skill, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${colorClass}`}></span>
              <span className="text-foreground/80 font-Golos">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SkillCard;
  