/* variaveis com arquivos guardados*/
const form = document.querySelector( '#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
/* um ouvidor onde estou determinando que ao dar "click" na função "add" ele irá ouvir e executar uma ação que eu adicionarei depois */
button.addEventListener("click", add)
/* esse ouvidor determina que irá executar a função "save" sempre que houver alteração na pagina*/
form.addEventListener("change", save)
/* função criada para o evento a cima */
function add(){
/* variavel que guarda a data e o mes que eu coloquei*/
const today = new Date().toLocaleDateString("pt-br").slice(0, -5) 
/* codigo da biblioteca nlwSetup que verifica os dados inseridos em (today)*/
const dayExists = nlwSetup.dayExists(today)
 /* se a variavel "addDay" já estiver sido inserida, o codigo entenderá como "true" e rodará o que está dentro da função "if"*/  
if(dayExists) {
   alert("Dia já incluso 🔴")
    return
}
/* caso ainda não tenha inserido as checkbox, o codigo entenderá como "false", e não rodará o que está dentro do "if", vindo direto para os codigos a baixo*/
alert('Adicionado com sucesso ✅')
nlwSetup.addDay(today)
} 
/* função criada para salva as informações em "string" que houver na pagina */
function save(){
localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))    
}

/* aqui eu estou pegando os itens da biblioteca que estão em "string" e convertendo os objetos que aparecerão na tela */
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
/* aqui eu insiro os itens da variavel data na pagina*/   
nlwSetup.setData(data)
/* aqui eu faço com que os itens na tela fiquem salvos, mesmo eu atualizando a pagina */
nlwSetup.load() 
