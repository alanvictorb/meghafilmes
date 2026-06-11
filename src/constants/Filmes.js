const filmes = [
{
  id: '1',
  titulo: 'Homem-Aranha: Sem Volta para Casa',
  nota: '8.4',
  genero: 'Ação, Aventura',
  ano: '2021',
  duracao: '2h 28min',
  diretor: 'Jon Watts',
   descricao: 'Após sua identidade secreta ser revelada ao mundo por Mysterio, Peter Parker vê sua vida virar um verdadeiro caos. Perseguido pela mídia, questionado pela população e com seus amigos sofrendo as consequências de suas ações, ele busca a ajuda do Doutor Estranho para fazer todos esquecerem quem ele é. No entanto, um erro durante o feitiço abre brechas entre diferentes universos, trazendo para sua realidade vilões perigosos que já enfrentaram outras versões do Homem-Aranha. Agora, Peter precisa lidar com ameaças muito além de sua experiência, enquanto aprende importantes lições sobre responsabilidade, sacrifício e amadurecimento. Em uma aventura emocionante, ele descobrirá que ser um herói exige escolhas difíceis que podem mudar sua vida para sempre.',
  imagem: 'https://www.europanet.com.br/superposter/images/vejapordentro/107067/107067.jpg',
},

{
  id: '2',
  titulo: 'Batman: O Cavaleiro das Trevas',
  nota: '9.0',
  genero: 'Ação, Crime, Drama',
  ano: '2008',
  duracao: '2h 32min',
  diretor: 'Christopher Nolan',
 descricao: 'Com Gotham City finalmente começando a experimentar um período de esperança graças aos esforços de Batman, do tenente James Gordon e do promotor Harvey Dent, uma nova ameaça surge para mergulhar a cidade novamente no caos. O Coringa, um criminoso imprevisível e extremamente perigoso, inicia uma série de ataques que desafiam não apenas a polícia, mas também os valores e princípios do próprio Batman. Enquanto a população vive sob constante medo, o herói precisa enfrentar dilemas morais cada vez mais complexos. Em meio à violência, traições e perdas dolorosas, Batman descobrirá até onde está disposto a ir para proteger Gotham e seus habitantes.',
 imagem: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/24051-cartaz.jpg',
},

{
  id: '3',
  titulo: 'Vingadores: Guerra Infinita',
  nota: '9.0',
  genero: 'Aventura, Ação, Ficção Científica',
  ano: '2018',
  duracao: '2h 29min',
  diretor: 'Anthony Russo, Joe Russo',
 descricao: 'Após anos de preparação nas sombras, Thanos finalmente inicia sua busca pelas seis Joias do Infinito, artefatos capazes de conceder poder absoluto sobre o universo. Determinado a cumprir sua visão de equilíbrio, ele acredita que eliminar metade de toda a vida existente é a única forma de salvar os recursos do cosmos. Diante dessa ameaça sem precedentes, os Vingadores, os Guardiões da Galáxia, o Doutor Estranho, o Homem-Aranha e diversos outros heróis unem forças em uma batalha épica. Enquanto lutam em diferentes partes do universo, eles precisam superar suas diferenças e trabalhar juntos para impedir que Thanos alcance seu objetivo devastador.',
  imagem: 'https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg',
},
  {
  id: '13',
  titulo: 'Taxi Driver',
  nota: '8.8',
  genero: 'Drama, Crime',
  ano: '1976',
  duracao: '1h 54min',
  diretor: 'Martin Scorsese',
 descricao: 'Travis Bickle é um veterano da Guerra do Vietnã que sofre de insônia e encontra trabalho como taxista nas ruas de Nova York durante a madrugada. Observando diariamente a violência, a criminalidade e a decadência da cidade, ele desenvolve uma visão cada vez mais pessimista da sociedade. Solitário e incapaz de criar conexões verdadeiras com outras pessoas, Travis passa a alimentar pensamentos obsessivos sobre justiça e redenção. Conforme sua saúde mental se deteriora, ele toma decisões extremas que o levam a uma trajetória perigosa e imprevisível. Considerado um dos maiores clássicos do cinema, o filme explora temas como isolamento, alienação e violência.',
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fk7UxEuK1uhJHT22DoVDO78eGI0H-WrEQA&s',
},

{
  id: '14',
  titulo: 'Furiosa: Uma Saga Mad Max',
  nota: '8.3',
  genero: 'Ação, Aventura',
  ano: '2024',
  duracao: '2h 28min',
  diretor: 'George Miller',
  descricao: 'Anos antes dos acontecimentos de Mad Max: Estrada da Fúria, Furiosa é arrancada de sua terra natal e forçada a sobreviver em um mundo brutal. Determinada a voltar para casa, ela inicia uma jornada de vingança e resistência.',
  imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/24/02/06/15/30/1566768.png',
},

{
  id: '15',
  titulo: 'Sonic: O Filme',
  nota: '7.5',
  genero: 'Aventura, Comédia, Família',
  ano: '2020',
  duracao: '1h 39min',
  diretor: 'Jeff Fowler',
  descricao: 'Sonic, um ouriço azul com velocidade extraordinária, precisa escapar do cientista Dr. Robotnik. Com a ajuda de um policial local, ele embarca em uma aventura cheia de ação e humor.',
  imagem: 'https://br.web.img2.acsta.net/pictures/20/03/18/15/48/0121118.jpg',
},

{
  id: '16',
  titulo: 'Sinners',
  nota: '8.4',
  genero: 'Terror, Suspense',
  ano: '2025',
  duracao: '2h 17min',
  diretor: 'Ryan Coogler',
  descricao: 'Dois irmãos retornam à cidade onde cresceram buscando recomeçar suas vidas. Porém, eles descobrem uma força sombria que ameaça a comunidade, obrigando-os a enfrentar segredos do passado.',
  imagem: 'https://http2.mlstatic.com/D_NQ_NP_853832-CBT111511638805_052026-O.webp',
},

{
  id: '17',
  titulo: 'Zootopia 2',
  nota: '8.5',
  genero: 'Animação, Aventura, Comédia',
  ano: '2025',
  duracao: '1h 50min',
  diretor: 'Jared Bush',
  descricao: 'Judy Hopps e Nick Wilde retornam para investigar um novo caso que ameaça a paz de Zootopia. A dupla precisará trabalhar em conjunto para desvendar um mistério que pode mudar a cidade.',
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXyqB5ORb_m370mcaG6thWIGdMHKNGva-86Q&s',
},

{
  id: '18',
  titulo: 'Hotel Transilvânia',
  nota: '7.8',
  genero: 'Animação, Comédia, Família',
  ano: '2012',
  duracao: '1h 31min',
  diretor: 'Genndy Tartakovsky',
  descricao: 'Drácula administra um hotel exclusivo para monstros e tenta proteger sua filha Mavis do mundo humano. Tudo muda quando um jovem aventureiro aparece inesperadamente no local.',
  imagem: 'https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/90/37/26/20366411.jpg',
},

{
  id: '19',
  titulo: 'ParaNorman',
  nota: '7.9',
  genero: 'Animação, Fantasia, Aventura',
  ano: '2012',
  duracao: '1h 33min',
  diretor: 'Chris Butler, Sam Fell',
  descricao: 'Norman é um garoto que consegue falar com os mortos. Quando uma antiga maldição ameaça sua cidade, ele precisa usar seu dom para salvar todos de forças sobrenaturais.',
  imagem: 'https://m.media-amazon.com/images/I/51QzNqcNtgL._AC_UF894,1000_QL80_.jpg',
},

{
  id: '20',
  titulo: 'Divertida Mente',
  nota: '8.7',
  genero: 'Animação, Família, Comédia',
  ano: '2015',
  duracao: '1h 35min',
  diretor: 'Pete Docter',
  descricao: 'Dentro da mente da jovem Riley vivem emoções que controlam sua personalidade. Quando Alegria e Tristeza se perdem, elas precisam encontrar o caminho de volta para restaurar o equilíbrio emocional da garota.',
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGr4VP1QCBy7fx77CoKKhwizpLAq1e9UoaLA&s',
},

{
  id: '21',
  titulo: 'Pica-Pau',
  nota: '6.5',
  genero: 'Comédia, Família',
  ano: '2017',
  duracao: '1h 31min',
  diretor: 'Alex Zamm',
  descricao: 'O travesso Pica-Pau entra em conflito com um advogado que deseja construir uma casa em sua floresta. A disputa gera situações divertidas e cheias de confusão.',
  imagem: 'https://br.web.img2.acsta.net/pictures/17/08/25/19/04/419991.jpg',
},

{
  id: '22',
  titulo: 'Um Cabra Bom de Bola',
  nota: '6.9',
  genero: 'Comédia, Esporte',
  ano: '2014',
  duracao: '1h 47min',
  diretor: 'Tom Brady',
  descricao: 'Um homem simples descobre possuir um talento extraordinário para o futebol. Com muito humor e determinação, ele tenta transformar sua habilidade em uma oportunidade de mudar de vida.',
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIoeffZS_2njS9YfRDClcR1VfFJlhbaO6Kw&s',
},

{
  id: '23',
  titulo: 'O Poderoso Chefão',
  nota: '9.2',
  genero: 'Crime, Drama',
  ano: '1972',
  duracao: '2h 55min',
  diretor: 'Francis Ford Coppola',
  descricao: 'A poderosa família Corleone controla uma das maiores organizações criminosas dos Estados Unidos. Quando o patriarca sofre um atentado, seu filho Michael é levado para um caminho que mudará seu destino para sempre.',
  imagem: 'https://www.quadrorama.com.br/wp-content/uploads/2017/07/36-3.png',
},

{
  id: '24',
  titulo: 'Clube da Luta',
  nota: '8.9',
  genero: 'Drama, Suspense',
  ano: '1999',
  duracao: '2h 19min',
  diretor: 'David Fincher',
  descricao: 'Um homem frustrado com sua rotina conhece o carismático Tyler Durden. Juntos, eles criam um clube secreto de lutas que rapidamente evolui para algo muito maior e mais perigoso.',
  imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg',
},
  {
  id: '25',
  titulo: 'Baby Driver',
  nota: '8.2',
  genero: 'Ação, Crime, Drama',
  ano: '2017',
  duracao: '1h 53min',
  diretor: 'Edgar Wright',
  descricao: 'Baby é um talentoso motorista de fuga que trabalha para criminosos enquanto sonha em abandonar sua vida perigosa. Quando se apaixona por uma garçonete, ele tenta deixar o crime para trás, mas acaba envolvido em um último trabalho que ameaça seu futuro.',
  imagem: 'https://m.media-amazon.com/images/I/712liMa2qdL._AC_UF894,1000_QL80_.jpg',
},

{
  id: '26',
  titulo: 'Harry Potter e a Pedra Filosofal',
  nota: '8.2',
  genero: 'Fantasia, Aventura',
  ano: '2001',
  duracao: '2h 32min',
  diretor: 'Chris Columbus',
  descricao: 'Harry Potter descobre que é um bruxo e recebe um convite para estudar em Hogwarts. Ao lado de seus novos amigos, ele mergulha em um mundo mágico repleto de aventuras e mistérios, enquanto tenta desvendar os segredos da Pedra Filosofal.',
  imagem: 'https://ingresso-a.akamaihd.net/prd/img/movie/harry-potter-e-a-pedra-filosofal/db9d9e76-866e-4725-ba3d-3a68ddd4589e.webp',
},

{
  id: '27',
  titulo: 'De Volta para o Futuro',
  nota: '8.8',
  genero: 'Ficção Científica, Aventura, Comédia',
  ano: '1985',
  duracao: '1h 56min',
  diretor: 'Robert Zemeckis',
  descricao: 'Marty McFly viaja acidentalmente para o passado usando uma máquina do tempo criada pelo cientista Doc Brown. Preso em 1955, ele precisa garantir que seus pais se apaixonem para não apagar sua própria existência.',
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPR3uoTLIuJz7Vf5zUlGefeF_Wnj1S9LzYA&s',
},

{
  id: '28',
  titulo: 'Superman',
  nota: '8.4',
  genero: 'Ação, Ficção Científica',
  ano: '2025',
  duracao: '2h 09min',
  diretor: 'James Gunn',
  descricao: 'Clark Kent tenta equilibrar sua vida como repórter e como Superman, o maior herói da Terra. Enquanto enfrenta novas ameaças, ele busca provar que esperança, bondade e compaixão ainda têm lugar em um mundo moderno.',
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwdLr92SuTePxn0Pzv2qHVzrDODpUN3K9Vg&s',
},

{
  id: '29',
  titulo: 'Caça-Fantasmas',
  nota: '8.0',
  genero: 'Comédia, Fantasia',
  ano: '1984',
  duracao: '1h 45min',
  diretor: 'Ivan Reitman',
  descricao: 'Três cientistas especializados em fenômenos paranormais criam uma empresa para capturar fantasmas em Nova York. Quando uma poderosa entidade sobrenatural ameaça a cidade, eles precisam usar toda sua experiência para impedir o desastre.',
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5Js6Ud_-oKAzcT3W7InZexMmkuf8-YcwKA&s',
},

{
  id: '30',
  titulo: 'Michael',
  nota: '8.5',
  genero: 'Biografia, Drama, Música',
  ano: '2025',
  duracao: '2h 20min',
  diretor: 'Antoine Fuqua',
  descricao: 'A cinebiografia acompanha a trajetória de Michael Jackson, desde seus primeiros passos no Jackson 5 até sua consagração como o Rei do Pop. O filme explora sua carreira, seus desafios pessoais e o impacto que deixou na música mundial.',
  imagem: 'https://ingresso-a.akamaihd.net/prd/img/movie/michael/a10e5eb8-6bef-4612-9288-5eae9dfe0377.webp',
},

{
  id: '31',
  titulo: 'Wicked',
  nota: '8.3',
  genero: 'Fantasia, Musical',
  ano: '2024',
  duracao: '2h 40min',
  diretor: 'Jon M. Chu',
  descricao: 'Antes da chegada de Dorothy a Oz, duas jovens bruxas desenvolvem uma amizade improvável. Conforme seus caminhos se separam, elas acabam se tornando a Bruxa Boa e a Bruxa Má do Oeste, mudando o destino do reino.',
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVviJSGEyWDTtq-VMozPr2r1qceKvLBHLuEA&s',
},

{
  id: '32',
  titulo: 'Super Mario Bros. O Filme',
  nota: '8.1',
  genero: 'Animação, Aventura, Comédia',
  ano: '2023',
  duracao: '1h 32min',
  diretor: 'Aaron Horvath, Michael Jelenic',
  descricao: 'Mario e Luigi são transportados para um reino mágico onde precisam enfrentar o terrível Bowser. Com a ajuda da Princesa Peach e de novos aliados, eles embarcam em uma aventura para salvar o Reino dos Cogumelos.',
  imagem: 'https://ingresso-a.akamaihd.net/prd/img/movie/super-mario-bros/b7bd9bb8-f131-44dd-8082-667078bf2b22.jpg',
},

{
  id: '33',
  titulo: 'John Wick 4',
  nota: '8.9',
  genero: 'Ação, Suspense',
  ano: '2023',
  duracao: '2h 49min',
  diretor: 'Chad Stahelski',
  descricao: 'John Wick descobre uma maneira de derrotar a Alta Cúpula e conquistar sua liberdade. Porém, antes disso, ele precisa enfrentar inimigos extremamente perigosos em uma jornada repleta de ação intensa e confrontos épicos.',
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkoFqgbtmpA1FLppJXesLxLmO5CjfwzNG_Yg&s',
},

{
  id: '34',
  titulo: 'Top Gun: Maverick',
  nota: '8.8',
  genero: 'Ação, Drama',
  ano: '2022',
  duracao: '2h 11min',
  diretor: 'Joseph Kosinski',
  descricao: 'Décadas após os eventos do primeiro filme, Pete Maverick Mitchell retorna para treinar uma nova geração de pilotos da Marinha. Durante uma missão extremamente perigosa, ele precisará enfrentar fantasmas do passado e provar seu valor mais uma vez.',
  imagem: 'https://i.ebayimg.com/images/g/fsIAAOSwAuZmcV~u/s-l1200.jpg',
},

{
  id: '35',
  titulo: 'Oppenheimer',
  nota: '9.1',
  genero: 'Drama, História, Biografia',
  ano: '2023',
  duracao: '3h 00min',
  diretor: 'Christopher Nolan',
  descricao: 'A história acompanha J. Robert Oppenheimer, o físico responsável pelo Projeto Manhattan durante a Segunda Guerra Mundial. O filme explora suas conquistas científicas, seus conflitos morais e as consequências da criação da bomba atômica.',
  imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4PyY705KaR7pdZoIWUlVfI5qMx37RHmELQ&s',
},

{
  id: '36',
  titulo: 'Deadpool & Wolverine',
  nota: '8.7',
  genero: 'Ação, Comédia, Ficção Científica',
  ano: '2024',
  duracao: '2h 08min',
  diretor: 'Shawn Levy',
  descricao: 'Deadpool é recrutado para uma missão que ameaça o equilíbrio do multiverso. Para salvar sua realidade, ele precisa unir forças com Wolverine em uma aventura repleta de ação, humor irreverente e referências ao universo Marvel.',
  imagem: 'https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-03770-ad5e9cf3e9577a330217219079506308-1024-1024.webp',
},
{
  id: '37',
  titulo: 'Interestelar',
  nota: '9.0',
  genero: 'Ficção Científica, Drama, Aventura',
  ano: '2014',
  duracao: '2h 49min',
  diretor: 'Christopher Nolan',
  descricao: 'Em um futuro onde a Terra enfrenta uma grave crise ambiental e alimentar, o ex-piloto da NASA Cooper recebe a missão de liderar uma expedição interestelar em busca de um novo lar para a humanidade. Ao atravessar um buraco de minhoca próximo a Saturno, sua equipe explora planetas desconhecidos enquanto enfrenta desafios causados pela relatividade do tempo, pela sobrevivência e pelos limites da ciência. A jornada coloca à prova os laços familiares, a esperança e o destino da espécie humana.',
  imagem: 'https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg',
},
];






export default filmes;


















