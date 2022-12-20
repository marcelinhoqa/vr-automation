
require 'httparty'
    
    Before do 
        @uri = "https://portal.vr.com.br/"
        
        @products_establishments = ProductsEstablishments.new
        HTTParty::Basement.default_options.update(verify: false)
    end
