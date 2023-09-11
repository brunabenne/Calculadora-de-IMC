function calcular() {
    console.log('calcular function called');

    event.preventDefault();

    //PEGAR O ELEMENTO HTML   
    const element1 = document.getElementById('altura');
    const altura = parseFloat(element1.value.replace(',','.'));
    const element2 = document.getElementById('peso');
    const peso = parseFloat(element2.value);

    

    //VALIDAÇÃO
    const imc = peso / (altura * altura);
    let title = '';
    let mensagem = '';
    let erro = '';
    let imagem = '';

    erro = isEmpty(altura, peso);

    removeBorda();

    if (erro) {
        // Exiba o erro 
        const elementErro = document.getElementById('erro');
        elementErro.innerHTML = erro;

        // Sair da função calcular() 
        return;
    }


    if (imc <= 18.5) {
        document.getElementById('abaixo').classList.add('result-borda');
        imagem = '<img src="Imagens/abaixo.jpg" alt="abaixo">';
        title = '<h3>Abaixo do normal</h3>';
        mensagem = '<p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>';
    }
    else if (imc > 18.5 && imc <= 24.9) {
        document.getElementById('normal').classList.add('result-borda');
        imagem = '<img src="Imagens/normal.jpg" alt="normal">';
        title = '<h3>Normal</h3>';
        mensagem = '<p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>';
    }
    else if (imc > 24.9 && imc <= 29.9) {
        document.getElementById('sobrepeso').classList.add('result-borda');
        imagem = '<img src="Imagens/sobrepeso.jpg" alt="sobrepeso">';
        title = '<h3>Sobrepeso</h3>';
        mensagem = '<p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>';
    }
    else if (imc > 29.9 && imc <= 34.9) {
        document.getElementById('obeso1').classList.add('result-borda');
        imagem = '<img src="Imagens/obeso1.jpg" alt="obeso">';
        title = '<h3>Obesidade grau I</h3>';
        mensagem = '<p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>';
    }
    else if (imc > 34.9 && imc <= 39.9) {
        document.getElementById('obeso2').classList.add('result-borda');
        imagem = '<img src="Imagens/obeso2.jpg" alt="obeso">';
        title = '<h3>Obesidade grau II</h3>';
        mensagem = '<p>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>';
    }
    else if (imc > 39.9) {
        document.getElementById('obeso3').classList.add('result-borda');
        imagem = '<img src="Imagens/obeso3.jpg" alt="obeso">';
        title = '<h3>Obesidade grau III</h3>';
        mensagem = '<p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>';
    }


    //CONVERTER P/ STRING
    const imcString = imc.toFixed(1);

    //MOSTRAR O ELEMENTO NO HTML

    const elementImc = document.getElementById("value");
    elementImc.innerHTML = imcString;

    const elementImg = document.getElementById("imagem");
    elementImg.innerHTML = imagem;

    const elementTitle = document.getElementById('title-imc');
    elementTitle.innerHTML = title;

    const elementMsg = document.getElementById('mensagem-imc');
    elementMsg.innerHTML = mensagem;

    const elementErro = document.getElementById('erro');
    elementErro.innerHTML = erro;

    //TIRAR CLASSE HIDDEN
    document.getElementById('meio').classList.remove('hidden');
    document.getElementById('resumo').classList.remove('hidden');

    console.log('End of calcular function');





};

function limparInput(elementClicado) {
    elementClicado.value = '';
}


function removeBorda() {
    document.getElementById('abaixo').classList.remove('result-borda');
    document.getElementById('normal').classList.remove('result-borda');
    document.getElementById('sobrepeso').classList.remove('result-borda');
    document.getElementById('obeso1').classList.remove('result-borda');
    document.getElementById('obeso2').classList.remove('result-borda');
    document.getElementById('obeso3').classList.remove('result-borda');
};

function isEmpty(altura, peso) {
    let erro = '';

    if (isNaN(peso) || isNaN(altura)) {
        erro = 'Altura e peso devem ser números válidos.';
    } else if (peso <= 0 || altura <= 0) {
        erro = 'Altura e peso devem ser maiores que zero.';
    }

    return erro;
};
