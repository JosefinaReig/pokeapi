let urlBase = 'https://pokeapi.co/api/v2/'

document.getElementById('busqueda').addEventListener('click', ()=>{
    const pokemon= document.getElementById('pokemon').value 
    if(pokemon){
        fetchPoke(pokemon)
    }
})

function fetchPoke (pokemon){
    fetch(`${urlBase}pokemon/${pokemon}`)
   .then(response=> response.json())
   .then(response=>mostrarPokemon(response))
}

function mostrarPokemon(response){
    const divInfoPoke = document.getElementById('infoPokemon')
    divInfoPoke.innerHTML= ''
    divInfoPoke.classList.add('imagen') 
    
    const nombrePokemon= response.name
    const idPokemon= response.order
    const imagenPokemon= response.sprites.other.dream_world.front_default

    const nombre= document.createElement('h2') 
    nombre.textContent= `${nombrePokemon}` 
    const id= document.createElement('p')
    id.textContent= `Orden: ${idPokemon}`
    const imagen= document.createElement('img')
    imagen.src=`${imagenPokemon}`

    divInfoPoke.appendChild(nombre)
    divInfoPoke.appendChild(id) 
    divInfoPoke.appendChild(imagen)

   

}

