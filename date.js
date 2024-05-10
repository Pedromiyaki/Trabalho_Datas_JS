function encontrarDataMaior(data1, data2) {
    if (data1 > data2) {
      return data1;
    } else {
      return data2;
    }
  }

  function calcularDiferencaDeDatas(dataInicio, dataFim) {
    if (dataInicio > dataFim) {
      throw new Error("A data inicial deve ser anterior à data final");
    }
  
    const diferencaEmMilisegundos = dataFim.getTime() - dataInicio.getTime();
    const diferencaEmSegundos = diferencaEmMilisegundos / 1000;
    const diferencaEmMinutos = diferencaEmSegundos / 60;
    const diferencaEmHoras = diferencaEmMinutos / 60;
    const diferencaEmDias = diferencaEmHoras / 24;
  
    return {
      dias: Math.floor(diferencaEmDias),
      horas: Math.floor(diferencaEmHoras % 24),
      minutos: Math.floor(diferencaEmMinutos % 60),
      segundos: Math.floor(diferencaEmSegundos % 60)
    };
  }
  
  function formatarDataAtual() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours().toString().padStart(2, "0");
    const minutos = dataAtual.getMinutes().toString().padStart(2, "0");
    const dia = dataAtual.getDate().toString().padStart(2, "0");
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0");
    const ano = dataAtual.getFullYear();
  
    return `${horas}:${minutos} - ${dia}/${mes}/${ano}`;
  }

  function formatarDataAtual() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours().toString().padStart(2, "0");
    const minutos = dataAtual.getMinutes().toString().padStart(2, "0");
    const dia = dataAtual.getDate().toString().padStart(2, "0");
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0"); 
    const ano = dataAtual.getFullYear();
  
    return `${horas}:${minutos} - ${dia}/${mes}/${ano}`;
  }
    