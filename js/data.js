

const modelsData = [
  { 
    id: '1', 
    name: 'Angel', 
    age: 23, 
    height: '1.75m', 
    category: 'Floripa', 
    location: 'Florianópolis', 
    coverImage: 'img/angel2.jpg', 
    gallery: ['img/angel.jpg', 'img/angel3.jpg', 'img/angel4.jpg'], 
    description: 'Universitária, culta e extremamente envolvente. A companhia perfeita para jantares ou noites longas de prazer. Especialista em namoradinha (GFE).',
    services: { presencial: true, online: true },
    phoneNumber: '5548999990001'
  },
  { 
    id: '2', 
    name: 'Adri', 
    age: 21, 
    height: '1.70m', 
    category: 'Cachoeira do Sul', 
    location: 'Cahoeira do Sul', 
    coverImage: 'img/adri.jpg', 
    gallery: ['img/adri1.jpg', 'img/adri3.jpg'], 
    description: 'Doce, meiga e com um corpo escultural. Gabriela adora viagens e possui um sorriso que ilumina qualquer ambiente. Disponível para pernoites.',
    services: { presencial: true, online: false },
    phoneNumber: '5551999990002'
  },
  { 
    id: '3', 
    name: 'Maiara', 
    age: 25, 
    height: '1.78m', 
    category: 'Erechin', 
    location: 'Serra Gaúcha', 
    coverImage: 'img/maiara.jpg', 
    gallery: ['img/maiara2.jpg', 'img/maiara26erechin.jpg'], 
    description: 'Uma mulher poderosa, de traços marcantes e personalidade forte. Para homens que sabem exatamente o que querem e não aceitam menos que a excelência.',
    services: { presencial: true, online: true },
    phoneNumber: '5554999990003'
  },
  { 
    id: '4', 
    name: 'Sabrina', 
    age: 20, 
    height: '1.72m', 
    category: 'Gramado', 
    location: 'Serra Gaúcha', 
    coverImage: 'img/sabrina.jpg', 
    gallery: ['img/sabrina2.jpg', 'img/sabrina28gramado.jpg'], 
    description: 'Pequena no tamanho, gigante na intensidade. Beatriz é a mistura perfeita de inocência e devassidão. Adora festas privadas.',
    services: { presencial: true, online: false },
    phoneNumber: '5551999990004'
  },
  { 
    id: '5', 
    name: 'Thais', 
    age: 24, 
    height: '1.76m', 
    category: 'Floripa', 
    location: 'Florianópolis', 
    coverImage: 'img/thais.jpg', 
    gallery: ['img/thais2.jpg', 'img/thais3.jpg'], 
    description: 'Discreta, elegante e fluente em inglês. A acompanhante ideal para executivos em viagem que buscam uma companhia de nível internacional.',
    services: { presencial: true, online: true },
    phoneNumber: '5548999990005'
  },
  { 
    id: '6', 
    name: 'Yasmin', 
    age: 22, 
    height: '1.69m', 
    category: 'Caçapava do Sul', 
    location: 'Cachoeirinha', 
    coverImage: 'img/yasmin.jpg', 
    gallery: ['img/yasmin2.jpg','img/yasmin3.jpg','img/yasmin4.jpg' , 'img/yasmin5.jpg'], 
    description: 'Corpo definido e energia inesgotável. Larissa traz uma vibe moderna e desinibida para seus encontros. Ousada na medida certa.',
    services: { presencial: false, online: true },
    phoneNumber: '5551999990006'
  },
  { 
    id: '7', 
    name: 'Camila', 
    age: 26, 
    height: '1.65m', 
    category: 'Mignon', 
    location: 'Cachoeirinha', 
    coverImage: 'https://picsum.photos/seed/model7/500/700', 
    gallery: ['https://picsum.photos/seed/model7a/500/700'], 
    description: 'Carismática e atenciosa. Camila é conhecida por seu atendimento namoradinha e massagens relaxantes.',
    services: { presencial: true, online: true },
    phoneNumber: '5551999990007'
  },
  { 
    id: '8', 
    name: 'Renata', 
    age: 28, 
    height: '1.74m', 
    category: 'Luxo', 
    location: 'Serra Gaúcha', 
    coverImage: 'https://picsum.photos/seed/model8/500/700', 
    gallery: ['https://picsum.photos/seed/model8a/500/700'], 
    description: 'Elegância em pessoa. Perfeita para acompanhar em eventos de gala ou jantares românticos no inverno da serra.',
    services: { presencial: true, online: false },
    phoneNumber: '5554999990008'
  }
];

const boatesData = [
  { 
    id: '1', 
    name: 'Dama da Noite Night Club', 
    location: 'Cachoeira do Sul - RS', 
    image: 'img/boate.jpg', 
    description: 'O Club Noir é a definição de sofisticação noturna. Com iluminação baixa e decoração inspirada no art déco, é o refúgio perfeito para quem busca discrição.',
    offerings: 'Carta de vinhos premiada, charutaria e jazz ao vivo.',
    minCost: 'R$ 500,00 consumação',
    phoneNumber: '5511988880001'
  },
  { 
    id: '2', 
    name: 'Sky Lounge', 
    location: 'Vila Olímpia, SP', 
    image: 'https://picsum.photos/seed/club2/600/400', 
    description: 'Localizado no 30º andar, o Sky Lounge oferece uma vista panorâmica de São Paulo. Moderno, vibrante e frequentado pela elite jovem da cidade.',
    offerings: 'Drinks moleculares, DJ sets exclusivos e área VIP reservada.',
    minCost: 'R$ 800,00 entrada',
    phoneNumber: '5511988880002'
  },
  { 
    id: '3', 
    name: 'Red Room', 
    location: 'Barra Funda, SP', 
    image: 'https://picsum.photos/seed/club3/600/400', 
    description: 'Um ambiente sensual e provocante. O Red Room possui cabines privativas com isolamento acústico para momentos de total intimidade.',
    offerings: 'Serviço de quarto, shows burlescos e segurança reforçada.',
    minCost: 'R$ 1.200,00 hora/cabine',
    phoneNumber: '5511988880003'
  },
  { 
    id: '4', 
    name: 'The Mansion', 
    location: 'Morumbi, SP', 
    image: 'https://picsum.photos/seed/club4/600/400', 
    description: 'Uma mansão histórica transformada em clube privado. Apenas para membros e convidados selecionados. O auge do luxo paulistano.',
    offerings: 'Jantares harmonizados, suítes presidenciais e piscina aquecida.',
    minCost: 'Sob Consulta',
    phoneNumber: '5511988880004'
  },
  { 
    id: '5', 
    name: 'Gold Bar & Whiskey', 
    location: 'Itaim Bibi, SP', 
    image: 'https://picsum.photos/seed/club5/600/400', 
    description: 'Para os amantes de destilados raros. Um ambiente masculino, sóbrio e elegante, ideal para networking e conversas profundas.',
    offerings: 'Coleção de single malts, sommelier dedicado e poltronas de couro.',
    minCost: 'R$ 300,00 entrada',
    phoneNumber: '5511988880005'
  }
];