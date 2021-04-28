const inputCep = document.getElementById('cep')
const btnCep = document.getElementById('btnCep')


btnCep.addEventListener('click', e =>{
    const cep = inputCep.value
    if(cep.length === 8){
        const URL = `https://ws.apicep.com/cep/${cep}.json`

        axios.request(URL)
	        .then(response => showCep(response.data))
	        .catch(erro => console.error(erro));

    }else{
        alert('Preencha o CEP corretamente!')
    }
    e.preventDefault()
})
const showCep = (cep)=>{
    const html = document.getElementById('response')
    const message = `

    <ul>
        <li> CEP: ${cep.code}</li>
        <li>Logradouro: ${cep.address}</li>
        <li>Bairro: ${cep.district}</li>
        <li>Cidade ${cep.city}</li>
        <li>Estado: ${cep.state}</li>
    </ul>
        
    `;

    html.innerHTML = message
    
    }