// Função para retornar o parâmetro maior entre dois objetos Date
function parametroMaior(date1, date2) {
    return date1 > date2 ? date1 : date2;
}

// Função para calcular o intervalo entre duas datas, garantindo que a primeira seja sempre mais antiga
function calcularIntervaloEntreDatas(dataAntiga, dataNova) {
    if (dataAntiga > dataNova) {
        return "Erro: A primeira data deve ser mais antiga que a segunda.";
    }

    const intervaloMs = dataNova.getTime() - dataAntiga.getTime();
    const intervaloDias = intervaloMs / (1000 * 60 * 60 * 24);
    return intervaloDias;
}

// Função para retornar a data atual no formato desejado
function formatarDataAtual() {
    const dataAtual = new Date();
    const hora = pad(dataAtual.getHours());
    const minuto = pad(dataAtual.getMinutes());
    const dia = pad(dataAtual.getDate());
    const mes = pad(dataAtual.getMonth() + 1); // Meses começam do zero
    const ano = dataAtual.getFullYear();
    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

// Função utilitária para garantir que os números tenham dois dígitos
function pad(numero) {
    return numero < 10 ? '0' + numero : numero;
}

// Exemplo de uso das funções
const data1 = new Date('2024-05-09');
const data2 = new Date('2024-05-12');

console.log("O parâmetro maior é:", parametroMaior(data1, data2));

const intervalo = calcularIntervaloEntreDatas(data1, data2);
if (typeof intervalo === "number") {
    console.log("O intervalo entre as datas é de", intervalo, "dias.");
} else {
    console.log(intervalo);
}

console.log("Data formatada atual:", formatarDataAtual());
