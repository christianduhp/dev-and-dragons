import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const cientistaNewton = new Mago('Newton', 4, 'fogo', 4, 3);
const cientistaCurie = new Mago('Curie', 8, 'gelo', 7, 10);
const cientistaGalileu = new Arqueiro('Galileu', 7, 8);
const cientistaEinstein = new ArqueiroMago('Einstein', 7, 10, 'ar', 4, 8);
const cientistaHawking = new Guerreiro('Hawking', 8);
const cientistaTesla = new Mago('Tesla', 6, 'elétrico', 5, 9);
const cientistaDarwin = new Arqueiro('Darwin', 6, 7);
const cientistaMarie = new Guerreiro('Marie', 7);

const personagens = [
    cientistaNewton, 
    cientistaCurie, 
    cientistaGalileu, 
    cientistaEinstein, 
    cientistaTesla,
    cientistaHawking, 
    cientistaDarwin, 
    cientistaMarie];


new PersonagemView(personagens).render()

console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio))

console.log(arqueiroBruno)