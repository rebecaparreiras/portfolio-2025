export type Project = {
  title: string
  description: string
  github: string
  stacks: string[]
  url: string
}

export const projects: Project[] = [
  {
    title: 'Visionary JS',
    description: 'Visionary é um site e-commerce de óculos de grau e de sol, desenvolvido inteiramente em HTML, CSS e JavaScript puro, sem o uso de frameworks ou bibliotecas externas. O objetivo foi explorar e dominar o uso de JavaScript, criar uma experiência de compra fluida e otimizada para diferentes dispositivos, demonstrando domínio completo das tecnologias base do desenvolvimento web.',
    github: 'https://github.com/rebecaparreiras/visionary',
    stacks: ['UIX','HTML','CSS','JavaScript','NodeJS','Express','JSON'],
    url: 'https://visionary-production.up.railway.app'
  },
  {
    title: 'Visionary ReactJS',
    description: 'Refatoração e otimização em ReactJS do e-commerce Visionary. O objetivo foi aprender todos os conceitos de ReactJS através da atualização de um projeto já existente em JavaScript. ReactJS + bibliotecas, essenciais para facilitar o desenvolvimento, manter o código mais limpo e garantir uma melhor experiência para o usuário (React Router, Swiper e react-helmet-async).',
    github: 'https://github.com/rebecaparreiras/visionary-react',
    stacks: ['UIX','ReactJS','JavaScript','JSON'],
    url: 'https://visionary-react-production.up.railway.app'
  },
  {
    title: 'Kern Studio',
    description: "Desenvolvimento de galeria de 60 fotos em PHP para WordPress, com grid fixo que define a quantidade de imagens por fileira e as dimensões das imagens a serem recebidas. Dessa forma, hoje o cliente possui a autonomia desejada para atualizar a galeria quando quiser e de maneira simples: precisa apenas acessar a página da galeria e alterar diretamente a imagem do field desejado.",
    github: 'https://github.com/rebecaparreiras/kern-studio',
    stacks: ['HTML','CSS','JavaScript','PHP'],
    url: 'https://kernstudio.com.br/gallery/'
  },
  {
    title: 'English Tutoring',
    description: "Site para a professora de inglês Pri Figueiredo e as turmas de seus alunos. O objetivo era criar um site do zero, atendendo aos desejos da professora: uso de fundo escuro, presença de cores e bordas arredondadas, além do acesso às páginas individuais por meio de senha e a criação de um Q&A dinâmico.",
    github: 'https://github.com/rebecaparreiras/english-tutoring',
    stacks: ['UIX','HTML','CSS','JavaScript','VueJS'],
    url: 'https://english-tutoring-production.up.railway.app'
  }
]
