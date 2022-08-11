export default function textComponent(props) {  

const text = {
 
}
    return `    
    <div class="container-texte-home" style="margin: 30px">
        <h1 class="container-texte-home-01">${props.t0}</h1>
        <h2 class="container-texte-home-02">${props.t1}</h2>
        <h2 class="container-texte-home-03">${props.t2}</h2>
    </div>
    `

}