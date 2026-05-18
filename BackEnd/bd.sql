create table area (
ida serial primary key,
nomea varchar (50) not null
)

insert into area (nomea) values ('Literatura'), ('Gramática')

select * from area

create table tema (
idt serial primary key,
area integer references area(ida) not null,
nomet varchar (50) not null,
incidencia varchar (50) not null
)

insert into tema (area, nomet, incidencia) values (1, 'Pré-Modernismo', 'Média'), (1, 'Romantismo', 'Alta'), (2, 'Variação Linguística', 'Alta'), (2, 'Análise Sintática', 'Média')

select * from tema

create table vestibular (
idv serial primary key,
ano integer not null,
instituicao varchar (70) not null
)

insert into vestibular (ano, instituicao) values (2016, 'Unicamp'), (2017,'Fuvest'), (2015, 'ENEM'), (2012, 'ENEM PPL'), (2003, 'Mackenzie')
select * from vestibular

create table dificuldade (
idd serial primary key,
nomed varchar (50) not null
)

insert into dificuldade (nomed) values ('Alta'), ('Média'), ('Baixa')

create table questao (
idq serial primary key,
vestibular integer references vestibular(idv) not null,
tema integer references tema(idt) not null,
dificuldade integer references dificuldade(idd),
enunciado varchar (3000) not null,
alt_a varchar (1000) not null,
alt_b varchar (1000) not null,
alt_c varchar (1000) not null,
alt_d varchar (1000) not null,
alt_e varchar (1000) not null,
resposta varchar (2000) not null,
comentario varchar (1000) not null,
material varchar (500) not null
)

insert into questao (vestibular, tema, dificuldade, enunciado, alt_a, alt_b, alt_c, alt_d, alt_e, resposta, comentario, material) values (1, 1, 2, 'Quanto ao conto Negrinha, de Monteiro Lobato, é correto afirmar que: ', 
'a) O narrador adere à perspectiva de dona Inácia, fazendo com que o leitor enxergue a história guiado pela ótica dessa personagem e se torne cúmplice dos valores éticos apresentados no conto.',
'b) O modo como o narrador caracteriza o contexto histórico no conto permite concluir que Negrinha é escrava de dona Inácia e, portanto, está fadada a uma vida de humilhações.',
'c) A maneira como o narrador comenta as características atribuídas às personagens contrasta com as falas e as ações realizadas por elas, o que caracteriza um modo irônico de apresentação.',
'd) O narrador apresenta as falas e pensamentos das personagens de modo objetivo; assim, o leitor fica dispensado de elaborar um juízo crítico sobre as relações de poder entre as personagens.',
' ',
'C) A maneira como o narrador comenta as características atribuídas às personagens contrasta com as falas e as ações realizadas por elas, o que caracteriza um modo irônico de apresentação.',
'A alternativa A está incorreta porque o narrador não reforça o moralismo da personagem; ao contrário, utiliza a ironia para denunciar sua falsa moralidade. A alternativa B está errada porque o trecho não apresenta informações suficientes para sustentar essa interpretação. A alternativa C é a correta, pois a ironia aparece em vários momentos da narrativa. Em Negrinha, por exemplo, D. Inácia é descrita como uma mulher bondosa e de boa fé, mas suas atitudes mostram o oposto, já que ela castiga cruelmente uma criança apenas para descontar seu mau humor. A alternativa D está incorreta porque o narrador não é totalmente objetivo. O uso da ironia revela subjetividade e crítica em relação às personagens e suas ações.',
'https://www.aio.com.br/questoes/unicamp/2016/pre-modernismo/quanto-ao-conto-negrinha-de-monteiro-lobato-e-correto-afirmar'),
(5, 1, 3, 'São todas características do Pré-Modernismo, exceto: ', 
'a) É considerada literatura pré-modernista tudo o que, nas primeiras décadas do século XX, problematiza a realidade social e cultural do Brasil.',
'b) A busca por uma linguagem mais simples e coloquial é uma das preocupações dos escritores pré-modernistas, especialmente do escritor Lima Barreto, um de seus principais representantes.',
'c) O período pré-modernista foi marcado pela convivência entre várias tendências artísticas, ocasionando uma espécie de sincretismo cultural.',
'd) O Pré-Modernismo sobrepôs-se ao Parnasianismo, escola literária vigente em meados do século XX, gozando de amplo prestígio entre as camadas mais cultas da sociedade.',
' ',
'D) O Pré-Modernismo sobrepôs-se ao Parnasianismo, escola literária vigente em meados do século XX, gozando de amplo prestígio entre as camadas mais cultas da sociedade. ',
'Uma das principais características do período pré-modernista foi a convivência entre diferentes estéticas literárias, ocasionando aquilo que chamamos de sincretismo cultural. Portanto, não houve qualquer tipo de sobreposição a qualquer outra escola literária em vigência naquele período, como o Parnasianismo, mas sim uma convivência entre diferentes estilos.',
'https://www.gauthmath.com/solution/r4-JzDWcbWe/S-o-todas-caracter-sticas-do-Pr-Modernismo-exceto-a-considerada-literatura-pr-mo'),
(2, 2, 1, '"Nasceu o dia e expirou.
Já brilha na cabana de Araquém o fogo, companheiro da noite. Correm lentas e silenciosas no azul do céu, as estrelas, filhas da lua, que esperam a volta da mãe ausente.
Martim se embala docemente; e como a alva rede que vai e vem, sua vontade oscila de um a outro pensamento. Lá o espera a virgem loura dos castos afetos; aqui lhe sorri a virgem morena dos ardentes amores.
Iracema recosta-se langue ao punho da rede; seus olhos negros e fúlgidos, ternos olhos de sabiá, buscam o estrangeiro, e lhe entram na alma. O cristão sorri; a virgem palpita; como o saí, fascinado pela serpente, vai declinando o lascivo talhe, que se debruça enfim sobre o peito do guerreiro."

Afirmações adaptadas de um estudo de Augusto Meyer sobre a obra de Alencar:
I. A obra apresenta um sentimento de distância poética e exotismo na abordagem do tema nativista.
II. O texto funciona mais como um poema, focado na magia do ritmo e na imagem, do que como um simples relato.
III. O tema do bom selvagem é utilizado em um romance histórico com enredo típico das narrativas de capa e espada.
', 
'a) I, apenas',
'b) III, apenas',
'c) I e II, apenas',
'd) II e III, apenas',
'e) I, II e III',
'C) I e II, apenas.',
'A proposição [III] é incorreta, pois o enredo da narrativa não reproduz as de “capa e espada”, oriundas da novela de cavalaria. Trata-se de um romance histórico-indianista que desenvolve uma narrativa épico-lírica ou mitopoética. Como as demais são verdadeiras, está correta a opção [C].',
'https://sisq.elitecampinas.com.br/GabaritoVestibulares/VisualizarQuestaoLista?id_questao_lista=7264779&vestibular=fuvest&ano=2017&prova_vestibular_id=357872'),
(3, 3, 3, '— Não, mãe. Perde a graça. Este ano, a senhora vai ver. Compro um barato.
— Barato? Admito que você compre uma lembrancinha barata, mas não diga isso a sua mãe. É fazer pouco-caso de mim.
— Ih, mãe, a senhora está por fora mil anos. Não sabe que barato é o melhor que tem, é um barato!
— Deixe eu escolher, deixe...
— Mãe é ruim de escolha. Olha aquele blazer furado que a senhora me deu no Natal!
— Seu porcaria, tem coragem de dizer que sua mãe lhe deu um blazer furado?
— Viu? Não sabe nem o que é furado? Aquela cor já era, mãe, já era!
ANDRADE, C. D. Poesia e prosa. Rio de Janeiro: Nova Aguilar, 1998.
O modo como o filho qualifica os presentes é incompreendido pela mãe, e essas escolhas lexicais revelam diferenças entre os interlocutores, que estão relacionadas
', 
'a) à linguagem infantilizada.',
'b) ao grau de escolaridade.',
'c) à dicotomia de gêneros.',
'd) às especificidades de cada faixa etária.',
'e) à quebra de regras da hierarquia familiar.',
'D) Às especificidades de cada faixa etária.',
'O entrave na comunicação entre mãe e filho tem raiz na faixa etária a que cada um deles pertence. O jovem utiliza muitas gírias, que, nesse caso, consistem na ressignificação de palavras (“barato" e “furado”) já conhecidas pela mãe, que , por sua vez, não conhece os novos sentidos atribuídos aos vocábulos escolhidos por seu filho.',
'https://www.youtube.com/watch?v=fVHDaa0GxOU&t=56s'),
(4, 4, 3, 'Eu sei que a gente se acostuma. Mas não devia.
A gente se acostuma a morar em apartamentos de fundos e a não ter outra vista que não as janelas ao redor. E, porque não tem vista, logo se acostuma a não olhar para fora. E, porque não olha para fora, logo se acostuma a não abrir todas as cortinas. E, porque não abre as cortinas, logo se acostuma a acender mais cedo a luz. E, à medida que se acostuma, esquece o sol, esquece o ar, esquece a amplidão.
                                                                          COLASANTI, M. Eu sei, mas não devia. Rio de Janeiro, Rocco, 1996.

A progressão é garantida nos textos por determinados recursos linguísticos, e pela conexão entre esses recursos e as ideias que eles expressam. Na crônica, a continuidade textual é construída, predominantemente, por meio', 
'a) do emprego de vocabulário rebuscado, possibilitando a elegância do raciocínio.',
'b) da repetição de estruturas, garantindo o paralelismo sintático e de ideias.',
'c) da apresentação de argumentos lógicos, constituindo blocos textuais independentes.',
'd) da ordenação de orações justapostas, dispondo as informações de modo paralelo. ',
'e) da estruturação de frases ambíguas, construindo efeitos de sentido apostos.',
' B. da repetição de estruturas, garantindo o paralelismo sintático e de ideias. ',
' A progressão textual é o processo pelo qual o texto se constrói com a introdução de informação nova, ligada à informação que já é do conhecimento do leitor ou que lhe é fornecida no próprio texto. Na crônica de Marina Colasanti, essa continuidade é conseguida através da repetição de orações coordenadas sindéticas aditivas iniciadas que acrescentam uma nova justificativa às ideias expostas no último segmento. Ou seja, a repetição das conjunções “e” e “porque” garantem o paralelismo sintático e de ideias. Assim, é correta a alternativa [B].',
'https://www.youtube.com/watch?v=l_hlb1V5VdA&t=6s')

-- selects

-- View
create view filtragem as
select nomet, instituicao, nomed, enunciado, alt_a, alt_b, alt_c, alt_d, alt_e, resposta, comentario, material from tema t
inner join questao q on t.idt = q.tema
inner join vestibular v on q.vestibular = v.idv
inner join dificuldade d on q.dificuldade = d.idd

select * from filtragem where nomet='Pré-Modernismo' and instituicao='Unicamp' and nomed='Média'

