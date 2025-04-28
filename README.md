# Premissa
- Solução foi pensada como OnPremise e tecnologias OpenSource. 
- Para poupar tempo foi utilizado o Docker Compose na Orquestração.

![Diagrama C4](https://i.imgur.com/A5tKa2L.png)

## Web App
Interface Web para utilização dos Serviços da API.

## Kong
Aplicação OpenSource responsável por fazer o Proxy reverso. Não foi contemplado no desenvolvimento. 

## OAuth2
Sistema de autenticação seguindo os padrões OAuth2 com JWT, apesar de estar desenhado não foi contemplado no desenvolvimento.

## Entry Api
É responsável por fornecer o controle sobre os lançamentos do sistema.
A api disponibiliza as seguintes funcionalidades: Criar Lançamentos e Listar Lançamentos.

## Consolidation Api
Responsável por gerar e fornecer as informações dos consolidados diários de lançamentos. Suas funções são: Listar Consolidações Diárias e Criar Consolidações.
Os consolidados são feitos através de um CronJob que executa todos os dias as 8:30h, desconsidera a última meia hora(Para garantir que os registros já estejam na instancia de replica) e contabiliza  todos os lançamentos das ultimas 24h

## Consolidation DB
Banco de dados do Serviço de Consolidação.

## Entry DB
Banco de dados do Serviço de Lançamentos

## Entry Réplica DB
Réplica Read-Only do banco de Lançamentos utilizado para calcular a Consolidação.

# Pré-requisitos

Garante que já tenha instalados as seguintes ferramentas abaixo:

| Name | Min. Version |
|------|--------------|
| docker | ^26 |
| docker compose | ^2 |

## Get Started

Após baixar o projeto, mude o nome do arquivo .env.example na raiz para .env ou rode:
```
$ cp .env.example .env
```
com docker e docker compose instalados acesse a pasta do projeto já baixada e rode: 
```bash
$ docker compose up -d
```

O docker dispobiliza-ra os seguintes serviços:

| Componente       | Tipo                       | URL                   |
|------------------|----------------------------|-----------------------|
| Entry API        | HTTP                       | http://localhost:3000 |
| Consolidate API  | HTTP                       | http://localhost:3001 |
| Web App          | HTTP | http://localhost:8080 |
| Entry DB         | Postgres | localhost:5432        |
| Entry Replica DB | Postgres | localhost:5433        |
| Consolidate DB   | Postgres | localhost:5434        |

> Essas portas precisam estar liberadas, caso contrário o comando `docker compose up -d` dará erro. 


# Números da API

Containers em IDLE
```
CONTAINER ID   NAME                          CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O   PIDS
34fa0d7d6716   backend-consolidation-api-1   0.00%     42.98MiB / 15.54GiB   0.27%     49.8kB / 38.2kB   0B / 0B     11
bb8a90d042f9   backend-pg_entry_replica-1    0.09%     20.75MiB / 15.54GiB   0.13%     38.9MB / 6.55MB   0B / 0B     6
5ce37f9437e1   backend-entry-api-1           0.00%     132.2MiB / 15.54GiB   0.83%     19.8MB / 28.7MB   0B / 0B     11
05ee5a78516a   backend-web-app-1             0.00%     9.5MiB / 15.54GiB     0.06%     2.8kB / 0B        0B / 0B     13
28bb30bcaa03   backend-pg_consolidate-1      0.00%     22.8MiB / 15.54GiB    0.14%     39.8kB / 43.6kB   0B / 0B     7
e0490bdb1cbb   backend-pg_entry_primary-1    0.00%     27.57MiB / 15.54GiB   0.17%     21.4MB / 49.7MB   0B / 0B     8
```

Containers com 500 requests por segundo de criação de Lançamentos
```
CONTAINER ID   NAME                          CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O   PIDS
34fa0d7d6716   backend-consolidation-api-1   0.00%     42.98MiB / 15.54GiB   0.27%     49.9kB / 38.2kB   0B / 0B     11
bb8a90d042f9   backend-pg_entry_replica-1    4.75%     62.97MiB / 15.54GiB   0.40%     79.4MB / 29.9MB   0B / 0B     6
5ce37f9437e1   backend-entry-api-1           46.67%    248.7MiB / 15.54GiB   1.56%     100MB / 149MB     0B / 0B     11
05ee5a78516a   backend-web-app-1             0.00%     9.5MiB / 15.54GiB     0.06%     2.95kB / 0B       0B / 0B     13
28bb30bcaa03   backend-pg_consolidate-1      0.01%     22.8MiB / 15.54GiB    0.14%     39.9kB / 43.6kB   0B / 0B     7
e0490bdb1cbb   backend-pg_entry_primary-1    21.42%    58.45MiB / 15.54GiB   0.37%     101MB / 129MB     0B / 0B     18
```
Summario dos testes:

| Label | # Samples | Average | Min | Max | Std. Dev. | Error % | Throughput | Received KB/sec | Sent KB/sec | Avg. Bytes 
|-------|-----------|---------|-----|-----|-----------|---------|------------|-----------------|-------------|------------
| HTTP Request | 180201 | 442 | 57 | 1780 | 276.82 | 0.000% | 1122.51687 | 430.60 | 298.61 | 392.8
| TOTAL | 180201 | 442 | 57 | 1780 | 276.82 | 0.000% | 1122.51687 | 430.60 | 298.61 | 392.8


Exemplo de payload:
```
POST http://localhost:3000/entry

POST data:
{
    "type": "credit",
    "amount": 3213,
    "description": "Qualquer descriÃ§Ã£o aleatÃ³ria"
}
```