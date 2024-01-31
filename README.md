# Dev & Dragons

Dev & Dragons é um projeto que simula um jogo de RPG onde personagens com habilidades mágicas e de combate se enfrentam em batalhas emocionantes. O projeto utiliza a linguagem de programação JavaScript e é composto por diferentes módulos e componentes.

## Instalação

Para utilizar o projeto Dev & Dragons, siga as etapas abaixo:

1. Faça o download ou clone este repositório.
2. Certifique-se de ter o Node.js instalado em seu sistema.
3. Abra o terminal na pasta do projeto.
4. Execute o comando `npm install` para instalar as dependências.

## Uso

O projeto utiliza os seguintes módulos:

- `Personagem`: Define a classe base para os personagens do jogo.
- `Mago`: Define a classe para os personagens do tipo Mago.
- `Arqueiro`: Define a classe para os personagens do tipo Arqueiro.
- `ArqueiroMago`: Define a classe para os personagens do tipo Arqueiro Mago.
- `Guerreiro`: Define a classe para os personagens do tipo Guerreiro.

Além disso, o projeto conta com o componente `PersonagemView` para renderizar os personagens na interface.

## Documentação dos Módulos

### Mago

O módulo `mago.js` define a classe `Mago`, que herda da classe `Personagem`. Os magos possuem as seguintes propriedades:

- `elementoMagico`: o elemento mágico do mago.
- `levelMagico`: o nível mágico do mago.
- `inteligencia`: a inteligência do mago.

O módulo também possui as seguintes propriedades estáticas:

- `tipo`: uma string que representa o tipo de personagem (Mago).
- `descricao`: uma descrição do mago.

Além disso, o módulo possui o método `obterInsignia()`, que retorna a insígnia do mago com base no nível mágico e na inteligência.


## Contribuição

Se você quiser contribuir para o projeto Dev & Dragons, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch com sua contribuição: `git checkout -b minha-contribuicao`.
3. Faça as alterações desejadas e adicione os arquivos modificados: `git add .`.
4. Faça o commit das suas alterações: `git commit -m "Minha contribuição"`.
5. Faça push das suas alterações para a branch: `git push origin minha-contribuicao`.
6. Envie um pull request para revisão.

## Licença

O projeto Dev & Dragons é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

![screencapture-127-0-0-1-5501-index-html-2023-06-18-19_09_15](https://github.com/christianduhp/dev-and-dragons/assets/85292359/225e6429-380f-4212-adf8-60420189b8aa#vitrinedev)


