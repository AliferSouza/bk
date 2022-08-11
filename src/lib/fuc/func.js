

function Select(props) { 
    const Selecionado = document.querySelector(`${props}`)
   return Selecionado

}



function bancoLocal(props) {
const admIndetidadeEConfiguracao = JSON.parse(localStorage.getItem('admIndetidadeEConfiguracao') || "[]")
const intesProdutosEOutros = JSON.parse(localStorage.getItem('intesProdutosEOutros') || "[]")


if (!localStorage.hasOwnProperty("DB")) {
   localStorage.setItem("admIndetidadeEConfiguracao", JSON.stringify(props))
}

intesProdutosEOutros.push(props)
localStorage.setItem("intesProdutosEOutros", JSON.stringify(intesProdutosEOutros))

const resultadoDoBanco = {
   admIndetidadeEConfiguracao,
   ...intesProdutosEOutros
}
return resultadoDoBanco

}

function stylesComponets(...props) {

const retornoStyles = props.map((itens, index) => itens())

document.querySelector('style').innerHTML = retornoStyles


}


const Emitter = {
events: {},



on(event, cb) {
   Emitter.events[event] = Emitter.events[event] || []
   Emitter.events[event].push(cb)

},

emit(event, ...rest) {
   if (event in Emitter.events === false) {
       return;
   }

   Emitter.events[event].forEach((e) => {
       e(...rest)
   })
}
}



function Update(tag, valor) {
const Selecionado = window.document.querySelector(`${tag}`).innerHTML = valor
}


function updateComponets(id, componets, ativo) {


if (ativo) {
   const containerComponent = window.document.querySelector(`${id}`)
   containerComponent.innerHTML = componets
  
} else {
   const containerComponent = window.document.querySelector(`${id}`)
   containerComponent.innerHTML += componets
   console.log(componets)

}
}

function criarElemetHTML(props) {
const container = document.querySelector("#root")
const elementComponet = document.createElement("div")
elementComponet.id = `${props}`
container.insertAdjacentElement('beforeend', elementComponet)

}


function updateComponetsadd(id, componets, ativo) {


if (ativo) {
   const containerComponent = window.document.querySelector(`${id}`)
   containerComponent.innerHTML = componets
  
} else {
   const containerComponent = window.document.querySelector(`${id}`)
   containerComponent.innerHTML += componets
   console.log(componets)

}
}


export {   
    Select,
    bancoLocal,
    stylesComponets,
    Emitter,
    Update,
    updateComponets,
    updateComponetsadd,
  
}