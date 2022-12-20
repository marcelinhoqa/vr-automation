Dado('que eu faça a requisição no serviço {string}') do |url|
    
    #@response = @products_establishments.getProductsAndEstablishments(url)
    @response = HTTParty.get(@uri+url)
    print(@response)
    
    if @response.success? == false
        print('Fail Test')
    end
end
  
Quando('analiso o retorno json') do
    @establishments = @response.parsed_response["typeOfEstablishment"]

end
  
Entao('é exibido com sucesso o array typeOfEstablishment com todas os Estabelecimentos') do
    @establishments.each do |establishment|
    puts establishment
    end
end

Entao('é exibido com sucesso o array typeOfEstablishment com apenas um Estabelecimento') do
    puts @establishments.sample
end