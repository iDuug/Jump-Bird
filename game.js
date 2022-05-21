const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

i = 0

n = 1


canvas.height = innerHeight
canvas.width = innerWidth


const gravidade = 0.5
var saltos = 1

class Ply{

    constructor(){
        this.posicao = {
            x: 200,
            y: 100
        }
        this.altura = {
            x: 0,
            y: 0
        }
        this.width = 48
        this.height = 42

    }

    draw(){

        ctx.fillStyle = '#f59042'

        ctx.fillRect(this.posicao.x,this.posicao.y,this.width,this.height)
    }

    update(){
        this.posicao.y += this.altura.y
        this.draw()

        if(this.posicao.y + this.height + this.altura.y <= canvas.height){
            this.altura.y += gravidade
        }
        else if(this.posicao.y + this.height + this.altura.y >= canvas.height){
            this.altura.y += gravidade
        }
        else{
            this.altura.y = 0
        }


    }
}

const player = new Ply()


player.update()

function animacao(){
    requestAnimationFrame(animacao)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.update()

}

animacao()

addEventListener('keydown', ({keyCode}) =>{
    switch(keyCode){

        case 38:
            console.log("Tecla ('cima')")
            if(player.posicao.y >= 5){
                player.altura.y -= 15
                
            }
            else{
                player.altura.y = 0
              }
            break

        case 32:
            console.log("Tecla ('Espaço')")
            player.altura.y -= 15
            break
    }

})
addEventListener('keyup', ({keyCode}) =>{
    switch(keyCode){
        case 38:
            player.altura.y = 0
            break
        
        case 32:
            player.altura.y = 0
            break
    }
})

