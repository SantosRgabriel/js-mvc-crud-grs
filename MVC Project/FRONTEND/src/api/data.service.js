const dataService = {
    load: async () =>{
     try {
      const response = await fetch('http://localhost:4014/api/data');
      const data = await response.json();
      return data;
     } catch (error) {
        console.error("Error fetching data:", error);
        return[] 
     } 
    },

    save: async (novosDados) =>{
      try {
        const response = await fetch('http://localhost:4014/api/save', {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify(novosDados),
        });
        const retorno = await response.json();
        console.log("Dados foram salvos com sucesso", retorno);
        return retorno; 
      } catch (error) {
        console.error('Erro ao salvar os dados', error);
        return {error: 'Não foi possível salvar os dados'}
      }
    }
};

export { dataService };
