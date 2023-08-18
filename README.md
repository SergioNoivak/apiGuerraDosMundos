# Lista de Exercícios de API Node JS

## Introdução

*"Guerra dos Mundos"* é um romance de ficção científica escrito pelo autor britânico H.G. Wells e publicado pela primeira vez em 1898. É uma das obras mais conhecidas e influentes no gênero da invasão alienígena e tem sido uma fonte de inspiração para várias adaptações em diferentes mídias, incluindo filmes, séries de TV, quadrinhos e mais.

A história se passa na Inglaterra vitoriana e é narrada em primeira pessoa por um protagonista anônimo, frequentemente chamado de *"Narrador"*, que testemunha os eventos extraordinários da invasão alienígena. A narrativa começa com misteriosas explosões em Marte que chamam a atenção dos astrônomos da Terra. Logo, enormes cilindros metálicos caem na Terra, revelando-se como naves alienígenas. De dentro desses cilindros emergem tripods (*tripés*), máquinas altas e mortais, controladas por uma raça alienígena avançada e hostil.

Os marcianos, como são chamados, lançam uma ofensiva implacável contra a humanidade, utilizando tecnologias superiores, como raios de calor destrutivos e um veneno mortal que contamina o ambiente. A sociedade humana entra em colapso diante da brutalidade e superioridade tecnológica dos invasores. O protagonista narra sua luta pela sobrevivência enquanto observa a devastação e a decadência da civilização ao seu redor.

## Exercício 1: CRUD Equipamentos

Nesse sentido, imagine que você foi contratado pela raça alienígena para desenvolver uma API Node.JS para gerenciar todos os equipamentos das Naves alienígenas, equipamentos como raios de calor destrutivos e um veneno mortal, e outros equipamentos que podem surgir.

O armazenamento no banco de dados MongoDB deve seguir o diagrama UML.

### GET "equipments"

Campos de Query String:
- page: 1
- sort: equipment
- order: asc
- limit: 100

Retorno:
{
  "count": 2,
  "rows": [
    {
      "ship_id": "5ecd7e1c6c4dc6feb18f8131",
      "ship_nm": "Nave marciana 1",
      "equipment": "Raio de calor destrutivo",
      ...
    },
    {
      "ship_id": "5ecd7e1c6c4dc6feb18f813c",
      "ship_nm": "Nave marciana 2",
      "equipment": "Veneno mortal",
      ...
    }
  ]
}

## GET "ships"

Campos de Query String:
- page: 1
- sort: ship_nm
- order: asc
- limit: 100

Retorno:
```json
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
```
## POST "equipments"

**Payload da requisição:**

```json
{
  "equipment": "Veneno mortal",
  "ship_nm": "Nave marciana 2"
}
```


## POST "ships"
**Payload da requisição:**

```json
{
  "ship_sg": "NM2",
  "ship_nm": "Nave marciana 2"
}
```
Retorno:
```json
{
  "id": "64dbcb5d793a7800212e206d",
  "ship_nm": "Nave marciana 2",
  "ship_sg": "NM2",
  
}
```
