import { FileText, Phone, Mail, Github, Linkedin } from 'lucide-react';

const About = () => {
    const contactOptions = [
        {
            icon: <Github className="h-6 w-6 text-white" />,
            title: 'GitHub',
            description: 'Veja meus projetos aqui',
            action: '@VictorBrasileiroo',
            href: 'https://github.com/VictorBrasileiroo'
        },
        {
            icon: <Linkedin className="h-6 w-6 text-white" />,
            title: 'Linkedin',
            description: 'Perfil do Linkedin',
            action: 'Visitar perfil',
            href: 'https://www.linkedin.com/in/victorbrasileirooo'
        }, 
        {
            icon: <FileText className="h-6 w-6 text-white" />,
            title: 'Currículo',
            description: 'Baixe meu CV completo',
            action: 'Baixar PDF',
            href: 'https://drive.google.com/file/d/10s5tNRUjryxFfqOrnpBwXcY0_Lzo9XIc/view?usp=sharing'
        },
        {
            icon: <Mail className="h-6 w-6 text-white" />,
            title: 'Email',
            description: 'Entre em contato por email',
            action: 'valb1@ic.ufal.br',
            href: 'mailto:valb1@ic.ufal.br?subject=Assunto%20do%20email&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Conte%C3%BAdo%20do%20email%20que%20ser%C3%A1%20preenchido%20automaticamente'
        }
    ];

    return (
        <section id="about" className="pb-20 px-6 font-[Golos]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold font-Golos text-white text-center mb-12">Sobre Mim</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-blue-950/40 shadow-md p-6 rounded-xl">
                        <p className="font-Golos text-gray-200 mb-4 text-justify">
                            Olá, meu nome é Victor André Lopes Brasileiro, tenho 20 anos e sou estudante de <span className='text-white font-extrabold'>Ciência da Computação na Universidade Federal de Alagoas (UFAL - IC)</span>. Desde pequeno, sempre fui apaixonado pela computação, e hoje tenho a oportunidade de trabalhar com o que sempre sonhei. Sou <span className='text-white font-extrabold'>desenvolvedor Backend</span> com ênfase em <span className='text-white font-extrabold'>.NET/C#</span> e também tenho experiência em <span className='text-white font-extrabold'>desenvolvimento Frontend usando React.js</span>.
                        </p>
                        <p className="font-Golos text-gray-200 mb-4 text-justify">
                            Busco constantemente novos desafios que me permitam aplicar e expandir meus conhecimentos. Sou <span className='text-white font-extrabold'>comunicativo</span>, <span className='text-white font-extrabold'>colaborativo</span> e valorizo o <span className='text-white font-extrabold'>trabalho em equipe</span>, pois acredito que a diversidade de ideias enriquece o resultado final. Estou sempre atualizado sobre novas tecnologias e técnicas, focando em aprimorar minha <span className='text-white font-extrabold'>criatividade</span>, <span className='text-white font-extrabold'>resolução de problemas</span> e <span className='text-white font-extrabold'>pensamento crítico</span>, fundamentais para o desenvolvimento de soluções inovadoras
                        </p>
                        <p className="font-Golos text-gray-200 text-justify">
                            Estou animado para contribuir em projetos significativos e crescer profissionalmente, sempre com a meta de entregar resultados de qualidade e impactar positivamente as equipes com as quais trabalho.
                        </p>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 gap-4 ">
                            {contactOptions.map((option, index) => (
                                <a
                                    key={index}
                                    href={option.href}
                                    className="bg-blue-950/40 shadow-md p-4 rounded-xl hover:bg-blue-900 transition-colors duration-300 flex items-center gap-4"
                                >
                                    <div className="bg-blue-900 rounded-full p-3">
                                        {option.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-Golos font-medium text-white">{option.title}</h3>
                                        <p className=" font-Golos text-sm text-gray-300">{option.description}</p>
                                        <p className="font-Golos text-sm text-blue-400 mt-1">{option.action}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
