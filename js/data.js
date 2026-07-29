const profile = {
  name: "Julio Cesar",
  title: "Desenvolvedor Fullstack  |  UI&UX Engineer  | Cybersegurança",
  description:
    "Crio interfaces modernas, rápidas e acessíveis com foco em experiência do usuário, performance e estética premium.",
  about:
    "Desenvolvedor em constante evolução, direcionando minha carreira para Back-end e Cibersegurança. Meu objetivo é me especializar na construção da lógica por trás das aplicações, desenvolvendo APIs, gerenciando bancos de dados, projetando arquiteturas escaláveis e aplicando boas práticas de segurança. Embora possua sólidos conhecimentos em HTML, CSS e JavaScript para desenvolvimento de interfaces, meu maior interesse está na engenharia de software e na proteção de sistemas, buscando criar soluções confiáveis, eficientes e seguras.",
  photo: "assets/images/profile.png",
  banner: "assets/images/banner.svg",
  resume: "assets/curriculo.pdf",
  social: {
    github: "https://github.com/JulioCesarViana20",
    linkedin: "https://www.linkedin.com/in/julio-cesar-582632360/",
    instagram: "https://www.instagram.com/julio_3zar/",
    email: "juliotech520@gmail.com"
  }
};

const skills = [
  {
    name: "HTML",
    level: "Avançado",
    percentage: 90
  },
  {
    name: "CSS",
    level: "Avançado",
    percentage: 90
  },
  {
    name: "JavaScript",
    level: "Avançado",
    percentage: 85
  },
  {
    name: "Node.js",
    level: "Intermediário",
    percentage: 65
  },
  {
    name: "Python",
    level: "Básico",
    percentage: 20
  },
  {
    name: "Cibersegurança",
    level: "Básico",
    percentage: 20
  },
   {
    name: "MYSQL",
    level: "Básico",
    percentage: 20
  }
];

const projects = [
  {
    title: "Tuba Brasil",
    description: "Uma loja online de camisas e produtos de moda com foco em experiência do usuário e performance, feita apenas com HTML, CSS, JavaScript e Node.js.",
    image: "assets/images/tuba.png",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/JulioCesarViana20/Tuba-Brasil",
    demo: "https://tuba-brasil.onrender.com/",
    tags: ["UI", "Landing Page", "Performance"]
  },
  {
    title: "Connect Life",
    description: "ConnectLife é uma plataforma de e-commerce especializada na venda de smartphones, acessórios e dispositivos eletrônicos, e foi criada de maneira desafiadora com integração de pagamento com a API do Mercado Pago.",
    image: "assets/images/ConnectL.png",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/JulioCesarViana20/ConnectLifeEletronics",
    demo: "https://connectlifeeletronics.onrender.com/",
    tags: ["Dashboard", "DataBase", "UX"]
  },

   {
    title: "ECMAjs",
    description: "Um treinamento básico sobre os tipos de exportação e importação no JavaScript, buscando obter um código limpo e funcional para aplicações futuras.",
    image: "assets/images/ecma.png",
    technologies: ["JavaScript", "Node.js"],
    github: "https://github.com/JulioCesarViana20/ECMAjs",
    demo: "https://github.com/JulioCesarViana20/ECMAjs",
    tags: ["Node.js", "export", "import"]
  },
   {
    title: "ModulesJavascript",
    description: "Este repositório contém módulos JavaScript projetados para melhorar a organização, a reutilização e a manutenibilidade do código. Cada módulo concentra-se em uma funcionalidade específica e pode ser facilmente integrado a diferentes projetos.",
    image: "assets/images/modules.png",
    technologies: ["JavaScript", "Node.js"],
    github: "https://github.com/JulioCesarViana20/ModulesJavascript",
    demo: "https://github.com/JulioCesarViana20/ModulesJavascript",
    tags: ["Node.js", "Modules", "Modularization"]
  },
   {
    title: "Mario Kart on terminal",
    description: "Uma recriação do clássico Mario Kart no terminal usando JavaScript. O projeto simula corridas entre personagens com atributos únicos, colocando em prática lógica de programação, módulos e conceitos do Node.js.",
    image: "assets/images/mariokart.jpg",
    technologies: [ "JavaScript", "Node.js"],
    github: "https://github.com/JulioCesarViana20/mario-kart",
    demo: "https://github.com/JulioCesarViana20/mario-kart",
    tags: ["Node.js", "Basic", "Javascript"]
  },
   {
    title: "Pokedex",
    description: "Um simples projeto de pokeApi, com ajuda da DIO. no qual foi utilizado JavaScript, Html e CSS.(com API e banco de dados).",
    image: "assets/images/pokedex.webp",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/JulioCesarViana20/Pokedex",
    demo: "https://juliocesarviana20.github.io/Pokedex/",
    tags: ["Node.js", "export", "import"]
  },
 
];

const experiences = [
  {
    role: "Back-End Developer(full stack); cybersecurity enthusiast",
    company: "Freelancer",
    period: "2023 — Atual",
    details: [
      "Otimizei performance e acessibilidade em projetos de back-end, garantindo qualidade e eficiência do código para melhorar a experiência do usuário e a usabilidade do site.",
      "Colaborei com designers e times de produto para manter consistência visual."
    ]
  },
  {
    role: "Front-End Developer",
    company: "ctrlPlay",
    period: "2021 — 2023",
    details: [
      "Implantei animações e microinterações com um visual sofisticado.",
      "Aumentei a qualidade percebida das interfaces com refinamento visual contínuo."
    ]
  }
];

const certificates = [
  {
    name: "Lógica de Programação",
    institution: "DIO / Digital Innovation One",
    date: "2025",
    description: "Curso introdutório com foco em lógica, algoritmos e estruturação de soluções de programação.",
    image: "assets/images/Logica.png"
  },
  {
    name: "JavaScript",
    institution: "DIO / Digital Innovation One",
    date: "2025",
    description: "Certificação focada nos principais conceitos da linguagem, incluindo variáveis, funções, objetos, arrays, manipulação do DOM, eventos, lógica de programação, consumo de APIs e desenvolvimento de aplicações interativas utilizando boas práticas de programação.",
    image: "assets/images/js.png"
  }
];

const timeline = [
  {
    year: "2026",
    title: "Foco em API's e integração de sistemas",
    description: "Conexão com APIs de terceiros e desenvolvimento de sistemas integrados com bancos de dados."
  },
  {
    year: "2025",
    title: "Desenvolvimento de sistemas de alto impacto",
    description: "ENTENDIMENTO de desenvolvimento de interfaces de alto impacto para clientes de tecnologia e produtos SaaS."
    
  },
  {
    year: "2024",
    title: "Especialização em UX/UI",
    description: "Aprofundei estudos em pesquisa de usuários, padrões visuais e interação."
  }
];

const contacts = {
    github: "https://github.com/JulioCesarViana20",
    linkedin: "https://www.linkedin.com/in/julio-cesar-582632360/",
    instagram: "https://www.instagram.com/julio_3zar/",
    email: "juliotech520@gmail.com",
    whatsapp: "https://wa.me/5562998579540?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho!"
};
