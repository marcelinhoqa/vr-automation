## Projeto VR

O objetivo é automatizar algum fluxo do site VR.

##### Modulo de instalação

- Para executar os testes é necessário ter o ruby instalado com o devkit
- ter o bundle instalado 
- Executar o comando bundle install na raiz do projeto.
- versão do Ruby 3.0.3p157

#### Configuração para executar os testes no ambiente de Produção

- Para executar apenas um teste, na raiz do projeto executar o comando:
    - cucumber -t @api_establishment ou cucumber -t @api_establishment_one
- Para executar todos os testes, na raiz do projeto executar o comando:
    - cucumber

- Explicação da arquitetura do projeto
    - Por padrão ao executar o comando do cucumber cria algumas pastas.
    - Na pasta features/step_definitions fica toda estrutura principal da execução dos testes, são os steps
    - Na pasta features/support/page vai ficar uma classe para cada endpoint com algumas informações
    