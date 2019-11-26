





const pokedex = document.getElementById('pokedex');

async function catchEm (name){
let url = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
const parsed = await url.json()
pokemon = new Pokemon(parsed)
console.log(parsed)
}



class Pokemon {
    constructor(parsed){
     this.name = parsed.name,
     this.id = parsed.id,
     this.height = parsed.height,
     this.sprite = parsed.sprites.back_shiny,
     this.hp = parsed.stats[5].base_stat,
     this.attack = parsed.stats[4].base_stat,
     this. defense = parsed.stats[3].base_stat
     this.abilities = []
     this.types = []
     this.sprite = parsed.sprites.front_default


    for (let i = 0; i < parsed.abilities.length; i++) {
        this.abilities.push(parsed.abilities[i].ability.name)
    }
}
}



    class Trainer {
        constructor() {
            this.army = []
        }

        all = () => {
            return this.army
        }

        get = (name) => {
            for (let i = 0; i < this.army.length; i++) {
                if (name == this.army[i].name) {
                    return this.army[i]
                }
            }
        }

        addToArmy(pokemon) {
            if (this.army.length < 6) {
                this.army.push(pokemon)
            }
        }
    }

let synthefire = new Trainer()


// poke1 = document.getElementById("poke1")




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
