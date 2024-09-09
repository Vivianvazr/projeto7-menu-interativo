/*Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.*/

let menu = alert(`
As opções disponíveis são:

1- Opção 1
2- Opção 2
3- Opção 3
4- Opção 4
5- Encerrar
`)

do {
    menu = prompt(`
    Escolha uma das opções abaixo:

    1- Opção 1
    2- Opção 2
    3- Opção 3
    4- Opção 4
    5- Encerrar
    `)

    switch (menu) {
       case '1':
            alert('A opção escolhida foi: Opção 1.')
            break
        case '2':
            alert('A opção escolhida foi: Opção 2.')
            break
        case '3':
            alert('A opção escolhida foi: Opção 3.')
            break
        case '4':
            alert('A opção escolhida foi: Opção 4.')
            break
        default:
            alert('O sistema está sendo encerrado.')
    }

} while (menu === '1' || menu === '2' || menu === '3' || menu === '4')
