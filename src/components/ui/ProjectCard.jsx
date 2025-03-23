import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  repoLink,
  index
}) => {
  return (
    <div className="bg-blue-950/40 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300">
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-100"
        />
        <div className="absolute inset-0 gap-4 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-2 bg-green-600 rounded-full hover:bg-green-900 transition-colors"
              aria-label="Ver projeto online"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Ver repositório no GitHub"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col gap-5 items-center">
        <div>
          <h3 className="text-lg font-semibold text-white font-Golos">{title}</h3>
          <p className="text-gray-100 font-Golos mt-2 text-sm">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-950/40 text-xs text-white font-Golos font-semibold px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href={repoLink}
            className="px-10 py-2 font-Golos font-semibold bg-green-600 hover:bg-green-900 transition-all text-white text-center rounded-[10px]"
          >
            GitHub
          </a>
          {liveLink && (
            <a
              href={liveLink}
              className="px-10 py-1.5 font-Golos font-semibold bg-green-600 hover:bg-green-900 transition-all text-white text-center rounded-[10px]"
            >
              Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
