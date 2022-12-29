/* -------------------------------------------------------------------------- */
/*                               Classe Viajante                              */
/* -------------------------------------------------------------------------- */


class Traveler {

    constructor(nome){

        this.nome      = nome
        this.comida    = 1
        this.saudavel  = true  
        
    }

    hunt(){

        this.comida += 2
        
    }

    eat(){

        if(this.comida > 0){

            this.comida -= 1
            this.saudavel = true

        }else{

            this.saudavel = false
            
        }

    }
    
}


/* -------------------------------------------------------------------------- */
/*                               Classe carroça                               */
/* -------------------------------------------------------------------------- */


class Wagon{

    constructor(capacidade){

        this.capacity  = capacidade
        this.passenger = []

    }

    getAvailableSeatCount(){

        let assentosVazios = this.capacity - this.passenger.length

        return assentosVazios

    }

    join(viajante){

        if(this.capacity > this.passenger.length){

            this.passenger.push(viajante)

        }else{

           return "A carroça está cheia!"

        }

    }

    shouldQuarantine(){

        return this.passenger.some((elem) => elem.saudavel === false)  //retorna false/true
          
    }

    totalFood(){

        let total = 0

        this.passenger.forEach((elem) => {

            total += elem.comida

        })

        return total

    }

}


/* -------------------------------------------------------------------------- */
/*                                Classe Hunter                               */
/* -------------------------------------------------------------------------- */


class Hunter extends Traveler{

    constructor(nome){
    super(nome)

    this.comida = 2

    }

    hunt(){

        this.comida += 5

    }

    eat(){

        if(this.comida > 1){

            this.comida -= 2
            this.saudavel = true

        }else if(this.comida === 1){
            
            this.comida -= 1
            this.saudavel = false

        }else{

            this.saudavel = false

        }

    }

    giveFood(viajante, qtd){

        if(this.comida >= qtd){

        viajante.comida += qtd
        this.comida -= qtd

        }
        
    }

}


/* -------------------------------------------------------------------------- */
/*                                  classe dr                                 */
/* -------------------------------------------------------------------------- */


class Doctor extends Traveler{

    constructor(nome){
    super(nome)

    }

    heal(viajante){
        
        viajante.saudavel = true        

    }

}


/* -------------------------------------------------------------------------- */
/*                             Testes da atividade                            */
/* -------------------------------------------------------------------------- */


// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');

// console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

// wagon.join(henrietta);
// console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

// wagon.join(juan);
// wagon.join(drsmith);
// wagon.join(sarahunter);

// wagon.join(maude); // Não tem espaço para ela!
// console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

// console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);

// sarahunter.hunt(); // pega mais 5 comidas
// drsmith.hunt();

// console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);

// henrietta.eat();
// sarahunter.eat();
// drsmith.eat();
// juan.eat();
// juan.eat(); // juan agora está doente (sick)

// console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
// console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);

// drsmith.heal(juan);
// console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);

// sarahunter.giveFood(juan, 4);
// sarahunter.eat(); // Ela só tem um, então ela come e fica doente

// console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
// console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);


/* -------------------------------------------------------------------------- */
/*                             Testes com historia                            */
/* -------------------------------------------------------------------------- */


// console.log("======================================")
// console.log("")

// console.log(`A carroça tem ${wagon.getAvailableSeatCount()} de capacidade.`)
// console.log("")

// wagon.join(henrietta);
// console.log(`${henrietta.nome} entrou na carroça, agora a capacidade da carroça foi para: ${wagon.getAvailableSeatCount()}!`)
// console.log("")

// wagon.join(juan);
// wagon.join(drsmith);
// wagon.join(sarahunter);

// wagon.join(maude); // Não tem espaço para ela!

// console.log(`${juan.nome}, ${drsmith.nome} e ${sarahunter.nome} entaram na carroça também, com isso a carroça ficou com: ${wagon.getAvailableSeatCount()} de capacidade!`)
// console.log("")

// console.log(`${maude.nome} tentou entrar, mas não tinha mais espaço na carroça...Então ela ficou de fora.`)
// console.log("")

// console.log(`Ao todo a carroça tem ${wagon.totalFood()} de comida. Sendo ela destribuida por: ${henrietta.comida} de ${henrietta.nome}, ${juan.comida} de ${juan.nome}, ${drsmith.comida} de ${drsmith.nome} e ${sarahunter.comida} de ${sarahunter.nome}!`)
// console.log("")

// sarahunter.hunt(); // pega mais 5 comidas
// drsmith.hunt(); // pega mais 2 comidas

// console.log(`${sarahunter.nome} e ${drsmith.nome} vão caçar e conseguem 5 e 2 comidas respectivamente. Fazendo com que a carroça agora tenha ${wagon.totalFood()} comidas ao todo!`)
// console.log("")

// henrietta.eat();
// sarahunter.eat();
// drsmith.eat();
// juan.eat();
// juan.eat(); // juan agora está doente (sick)


// console.log(`${henrietta.nome}, ${sarahunter.nome} e ${drsmith.nome} comem 1 comida cada, para ficarem com a saúde em bom estado. ${juan.nome} come 1 vez e esgota a quantidade de comida em seu estoque, ainda com fome, ele tenta comer de novo, mas como não possui mais comida, eentão a saúde dele vai para: ${juan.saudavel}!`)
// console.log("")
// console.log(`Com isso o total de comida da carroça foi para ${wagon.totalFood()} `)
// console.log("")

// drsmith.heal(juan);
// console.log(`${drsmith.nome} vê ${juan.nome} doente e cura ele, fazendo com que sua saúde fique: ${juan.saudavel}`)
// console.log("")

// console.log(`${sarahunter.nome} vendo que ${juan.nome} tinha ${juan.comida} comida em seu estoque, e vendo que ela tinha ao todo ${sarahunter.comida} em seu estoque, resolve então dar 4 comidas para ${juan.nome}!`)
// sarahunter.giveFood(juan, 4)
// console.log("")

// console.log(`Agora ${sarahunter.nome} tem ${sarahunter.comida} em seu estoque e ${juan.nome} tem ${juan.comida} comidas em seu estoque!`)
// console.log("")

// console.log(`Depois de um tempo, ${sarahunter.nome} fica com fome e resolve comer, mas como ela é caçadora, precisa de 2 comidas para se alimentar, e como ela só tem ${sarahunter.comida} comida no estoque, ela come, mas não é o suficiente para alimenta-la...`)
// sarahunter.eat()
// console.log("")
// console.log(`Então sua saúde vai para ${sarahunter.saudavel}.`)
// console.log("")

// console.log(`Com isso a carroça agora possui 1 pessoa doente, fazendo com que o status de quarentena da carroça seja: ${wagon.shouldQuarantine()}.`)
// console.log("")
// console.log(`E agora a carroça tem ao todo ${wagon.totalFood()} de comida. Sendo ela destribuida por: ${henrietta.comida} de ${henrietta.nome}, ${juan.comida} de ${juan.nome}, ${drsmith.comida} de ${drsmith.nome} e ${sarahunter.comida} de ${sarahunter.nome}!`)


