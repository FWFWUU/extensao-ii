
const n = document.querySelector("#next")
const c = document.querySelector("#counter")
const cc = document.querySelector("#c")

var pages = [
	`<center>
     <h1>Benefícios tecnológicos e a terrível "modernidade" humana</h1>
	 <p>Na nossa realidade não é mais surpresa o quão necessário a tecnologia é, o que transformou também alguns lares...</p>
    </center>`,
`
<p>A internet se tornou a fonte de dados e pesquisa mais acessado do mundo
pela sua grande facilidade no acesso e pesquisa. </p>
<p>Os aplicativos de delivery se tornaram comuns na vida das pessoas, é possível estudar sem precisar estar em uma sala de aula
e ainda podemos nos comunicar com pessoas distantes a qualquer momento.</p>
<p>A tecnologia trouxe uma grande facilidade consigo, facilitou nossos trabalhos e até mesmo nossas tarefas comuns.</p>
`,
`<b>Então existe uma desvantagem mesmo com esses benefícios?</b>
<p>Infelizmente a tecnologia também fez muito para quem tão pouco fazia.
Pessoas que pouco se comunicavam com as outras, começaram a se esconder por trás da tecnologia.</br>
A comunicação a distância uniu e desuniu aqueles que tão pouco se viam. Pessoas que por algum motivo se isolavam da sociedade
foram se escondendo ainda mais graças a essa facilidade tecnológica.</p>
<small>Estudar a distância trouxe uma grande vantagem para quem tão pouco tinha tempo de parar em casa,
porém não se dá pra trocar o benefício de estar em conjunto, de conhecer pessoas novas e interagir, pela escolha de estudar isolado.
</small>
<p>A dependência tecnológica foi um desafio para muitas empresas que tiverão que se adaptar ao "moderno".
Dificilmente alguém trocaria o atendimento digital e rápido pelas grandes filas e o atendimento manual.
Isso foi uma vantagem, para o cliente, mas não para algumas pessoas que viram seus empregos serem tomadas por um software inteligente.
Esse é um de muitos exemplos que a tecnologia fez.</p>`,
`
<h2>A tecnologia é o vilão?</h2>
<p>Acredito que não! Dificilmente um trabalho ou outro continua sendo necessário com o passar do tempo.
Não é só a tecnologia que evolui, mas a necessidade das pessoas também. Hoje você pode pagar sua passagem do ônibus usando apenas um cartão.
Do mesmo jeito que as coisas se adequam ao "novo", as pessoas precisam se adequarem, mas com muita atenção.
`,`
<h2>Atenção para o que fazemos</h2>
<p>Antes vamos dar uma olhada nesse vídeo que crítica a sociedade moderna, segundo a visão do autor:</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Qx8JIoNOz0Y?si=7hJI5mSTJl_O9Gpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`,
`
<p></p>
`]



function show(content) {
	var index = 0
	var pages = JSON.parse(content)["pages"]
	
	for (let i = 0; i < pages[index].length; i++) {
		cc.innerHTML += pages[index][i]
	}
	c.innerText = `${index + 1}/${pages.length}`

	n.onclick = () =>{
		cc.innerHTML = ""
		index = (index + 1) % pages.length

		for (let i = 0; i < pages[index].length; i++) {
			cc.innerHTML += pages[index][i]
		}

		c.innerText = `${index + 1}/${pages.length}`
		cc.scrollTop = 0
	}
}

window.onload = () => {

	var xhttp = new XMLHttpRequest()
	xhttp.open('GET', '../content.json', true)
	xhttp.onload = function() {
		if (xhttp.status == 200) {
			show(xhttp.response)
		}
	}
	xhttp.send()
	
}
