# MyCypressProjectII Excelência em Automação de Testes: Práticas para o sucesso! Trilha Bootcamp de testes automatizados! @Minsait
Author : Diogo Rangel @diogorangel
# MyCypressProject capacitação Minsait
# Comandos no cypress que podem ser necessários:
# 1 - npm init -y
# 2 - npm install --save-dev
# Comando para executar o cypress:
# 3 - npx cypress open
# Comandos para instalar o Allure:
# npm install --save-dev allure-cypress allure-commandline
# npm install -D @shelex/cypress-allure-plugin
# - yarn cypress open
# - pnpm cypress open
# updated
# Comando para executar testes via allure:
# 4 - npx cypress run --env allure=true

# Gerar e visualizar o relatório:
# 5 - npx allure generate allure-results --clean -o allure-report

# Abrir o allure:
# 6 - npx allure open 
# 7 - Executar o Allure : npm run test:allure
# Instruções adicionais caso haja necessidade:
#1. Desabilitar verificação de certificado no npm
npm config set strict-ssl false
npm config set registry "http://registry.npmjs.org/"

2. Desabilitar SSL no Cypress

Antes de instalar, configure estas variáveis de ambiente (no PowerShell ou CMD):

setx NODE_TLS_REJECT_UNAUTHORIZED 0
setx CYPRESS_INSTALL_BINARY 0


🔹 NODE_TLS_REJECT_UNAUTHORIZED=0 → ignora verificação SSL.
🔹 CYPRESS_INSTALL_BINARY=0 → pula o download automático do binário.

Depois rode:

npm install cypress --ignore-scripts