
   alert("Seja bem-vindo(a) ao meu site!") 

   let c = window.document.querySelector('input')
   c.addEventListener('click',soma)
   function soma(){
    let res = window.document.querySelector('p')

    let valor = prompt("Digite um número:")
    res.innerHTML = `O dobro de ${valor} é ${dobro(valor)} e a metade é ${metade(valor)}!`
   }

   function dobro(d){
   return d * 2
   }
   function metade(m){
    return m / 2
   }