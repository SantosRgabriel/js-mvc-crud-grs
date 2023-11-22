const construtorGrafico = {
  render: (parametros) => {
    const elemento = document.getElementById("conteudo");
    elemento.innerHTML = `
            <h2>${parametros.titulo}</h2>
            <img src="${parametros.imgSrc}">
            <p>${parametros.conteudo}</p>
        `;
  },
};
export { construtorGrafico };
