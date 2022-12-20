#language: pt
Funcionalidade: Api de Produtos e Estabelecimentos
    Seja possível confirmar um alert na tela.

    @api_establishment
    Cenario: Encontrar a chave typeOfEstablishment e exibir todos os Estabelecimentos
        Dado que eu faça a requisição no serviço "api-web/comum/enumerations/VRPAT"
        Quando analiso o retorno json
        Entao é exibido com sucesso o array typeOfEstablishment com todas os Estabelecimentos
    
    @api_establishment_one
    Cenario: Encontrar a chave typeOfEstablishment e exibir um Estabelecimento randomico
        Dado que eu faça a requisição no serviço "api-web/comum/enumerations/VRPAT"
        Quando analiso o retorno json
        Entao é exibido com sucesso o array typeOfEstablishment com apenas um Estabelecimento