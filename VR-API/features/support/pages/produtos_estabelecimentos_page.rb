require 'httparty'
class ProductsEstablishments
include HTTParty

    base_uri = 'https://portal.vr.com.br/'

    def getProductsAndEstablishments(endpoint)
        self.class.get(endpoint,  headers: { 'Accept-Encoding' => '*'}, verify: false)
    end
end