Feature: Realizar um pedido com 1 ou mais itens

Como cliente com cpf válido
Quero poder realizar pedidos
E aplicar cupons de desconto
Para realizar minhas compras

Scenario: Cpf válido

Dado que sou um cliente
Quando realizar meu cadastro
E meu cpf for válido
Entao quero poder realizar pedidos

Scenario: Cpf inválido

Dado que sou um cliente
Quando realizar meu cadastro
E meu cpf não for valido
Então não poderei realizar pedidos

Scenario: Realizar pedido

Dado que sou cliente
E possuo cpf valido
Quando realizar um pedido
Então quero poder adcionar 1 ou mais itens

Scenario: Aplicar cupom de desconto

Dado que sou cliente
E possu cpf valido
Quando realizar um pedido
E aplicar um cupom de desconto
Então quero que o valor do desconto seja aplicado no valor final da compra