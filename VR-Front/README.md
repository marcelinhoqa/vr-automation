## Projeto VR

O objetivo é automatizar algum fluxo do site VR.

##### Modulo de instalação

- Para executar os testes é necessário ter o nodejs instalado!
- Executar o comando npm install na raiz do projeto.
- versão do npm 8.19.2
- versão do node v18.12.0

#### Configuração para executar os testes no ambiente de Produção

- Para executar todos os testes, na raiz do projeto executar o comando:
    - npm run cypress:run
- Explicação da arquitetura do projeto
    - Por padrão o cypress cria a pasta downloads, não tem nada
    - na pasta e2e é onde fica os arquivos que tem os casos de testes de determinada feature
    - na pasta api fica tudo que é teste back-end, no caso não tem nada já que o teste foi feito com httparty
    - na pasta fixtures, fica o json com as massas que vamos usar, da pra faker e template string, mas só usei o padrão.
    - na pasta support/components, deve ficar tudo que é aproveitado em todas as telas, menu, alert, termos de privacide, cookies e etc.
    - na pasta support/page deve ficar todas os PageObjects da pra quebrar também por actions mas deixei tudo em um arquivo
    - na pasta só support/ vão ficar todas as DSLs para ajudar na automação, métodos que vão ser aproveitados tanto no back ou no front, deixei alguns exemplos em cada arquivo.
    - na pasta support/video são as evidencias em vídeo, da pra configurar o json para não criar o vídeo
    - na pasta node_modules vão ficar todas as dependencias do projeto
    - na raiz principal tem o arquivo cypress.config onde criamos algumas configurações/plugins pra ajudar na execução dos testes
    