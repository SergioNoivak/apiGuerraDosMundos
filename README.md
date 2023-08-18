Lista de Exercícios de API Node JS
Introdução
"Guerra dos Mundos" é um romance de ficção científica escrito pelo autor britânico H.G. Wells e publicado pela primeira vez em 1898. É uma das obras mais conhecidas e influentes no gênero da invasão alienígena e tem sido uma fonte de inspiração para várias adaptações em diferentes mídias, incluindo filmes, séries de TV, quadrinhos e mais.

A história se passa na Inglaterra vitoriana e é narrada em primeira pessoa por um protagonista anônimo, frequentemente chamado de "Narrador", que testemunha os eventos extraordinários da invasão alienígena. A narrativa começa com misteriosas explosões em Marte que chamam a atenção dos astrônomos da Terra. Logo, enormes cilindros metálicos caem na Terra, revelando-se como naves alienígenas. De dentro desses cilindros emergem tripods (tripés), máquinas altas e mortais, controladas por uma raça alienígena avançada e hostil.

Os marcianos, como são chamados, lançam uma ofensiva implacável contra a humanidade, utilizando tecnologias superiores, como raios de calor destrutivos e um veneno mortal que contamina o ambiente. A sociedade humana entra em colapso diante da brutalidade e superioridade tecnológica dos invasores. O protagonista narra sua luta pela sobrevivência enquanto observa a devastação e a decadência da civilização ao seu redor.

Exercício 1: CRUD Equipamentos
Nesse sentido, imagine que você foi contratado pela raça alienígena para desenvolver uma API Node.JS para gerenciar todos os equipamentos das Naves alienígenas, equipamentos como raios de calor destrutivos e um veneno mortal, e outros equipamentos que podem surgir.

O armazenamento no banco de dados MongoDB deve seguir o diagrama UML.

A API deverá conter as rotas:

GET "equipments" com os Query String Parameters:

Campo: Valor
page: 1
sort: equipment
order: asc
limit: 100
E retorno:

json
Copy code
{
  "count": 2,
  "rows": [
    {
      "ship_id": "5ecd7e1c6c4dc6feb18f8131",
      "ship_nm": "Nave marciana 1",
      "equipment": "Raio de calor destrutivo",
      "createdAt": "2023-08-10T11:51:34.561Z",
      "updatedAt": "2023-08-10T11:51:34.561Z",
      "__v": 0,
      "id": "64d4cf463d9e990021203d7e"
    },
    {
      "ship_id": "5ecd7e1c6c4dc6feb18f813c",
      "ship_nm": "Nave marciana 2",
      "equipment": "Veneno mortal",
      "createdAt": "2023-08-10T11:51:34.561Z",
      "updatedAt": "2023-08-10T11:51:34.561Z",
      "__v": 0,
      "id": "64d4cf463d9e990021203d7e"
    }
  ]
}
GET "ships" com os Query String Parameters:

Campo: Valor
page: 1
sort: ship_nm
order: asc
limit: 100
E retorno:

json
Copy code
{
  "count": 2,
  "rows": [
    {
      "id": "5ecd7e1c6c4dc6feb18f8131",
      "ship_nm": "Nave marciana 1",
      "ship_sg": "NM1"
    },
    {
      "id": "5ecd7e1c6c4dc6feb18f813c",
      "ship_nm": "Nave marciana 2",
      "ship_sg": "NM2"
    }
  ]
}
POST "equipments"

O payload da requisição deve ser:

Campo: Valor
equipment: Veneno mortal
ship_nm: "Nave marciana 2"
E o retorno deve ser:

json
Copy code
{
  "id": "64dbcb5d793a7800212e206d",
  "ship_nm": "Nave marciana 2",
  "equipment": "Veneno Mortal",
  "createdAt": "2023-08-15T19:00:45.558Z",
  "updatedAt": "2023-08-15T19:00:45.558Z"
}
POST "ships"

O payload da requisição deve ser:

Campo: Valor
ship_sg: NM2
ship_nm: "Nave marciana 2"
E o retorno deve ser:

json
Copy code
{
  "id": "64dbcb5d793a7800212e206d",
  "ship_nm": "Nave marciana 2",
  "ship_sg": "NM2",
  "createdAt": "2023-08-15T19:00:45.558Z",
  "updatedAt": "2023-08-15T19:00:45.558Z"
}
PUT "equipments/{id}"

O payload deve ser:

Campo: Valor
equipment: "Veneno mortal"
ship_id: "64d4cf463d9e990021203d82"
ship_nm: "Nave marciana 2"
O retorno deve ser:

json
Copy code
{
  "createdAt": "2023-08-15T19:00:45.558Z",
  "equipment": "Raio mortal",
  "id": "64dbcb5d793a7800212e206d",
  "ship_id": "64d4cf463d9e990021203d82",
  "ship_nm": "Nave marciana 2",
  "updatedAt": "2023-08-15T19:05:26.191Z"
}
PUT "ships/{id}"

O payload deve ser:

Campo: Valor
ship_sg: NM2
ship_nm: "Nave marciana 2"
E o retorno deve ser:

json
Copy code
{
  "id": "64dbcb5d793a7800212e206d",
  "ship_nm": "Nave marciana 2",
  "ship_sg": "NM2",
  "createdAt": "2023-08-15T19:00:45.558Z",
  "updatedAt": "2023-08-15T19:00:45.558Z"
}
DELETE "equipments/{id}" sem payload e sem retorno.

DELETE "ships/{id}" sem payload e sem retorno.

Exercício 2: Exclusão múltipla
Implemente as rotas de exclusão múltipla:

POST "equipments/deleteMany" com payload:

json
Copy code
{
  "ids": [
    "64d4cf463d9e990021203d7e",
    "64d4cf463d9e990021203d7f"
  ]
}
POST "ships/deleteMany" com payload:

json
Copy code
{
  "ids": [
    "64d4cf463d9e990021203d7e",
    "64d4cf463d9e990021203d7f"
  ]
}
Exercício 3: Filtros
Implemente os filtros para a tabela do sistema:

GET "equipments/uniqueAttributes" com Payload:

Campo: Valor
page: 1
sort: [vazio]
order: [vazio]
limit: 100
E retorno:

json
Copy code
[
  {
    "_id": null,
    "ship_nm": [
      "Nave marciana 2"
    ],
    "equipment": [
      "Raio mortal"
    ]
  }
]
Atualize a rota GET "equipments" para aceitar os filtros em payload:

Campo: Valor
page: 1
sort: [vazio]
order: [vazio]
limit: 100
ship_nm: Nave marciana 2
