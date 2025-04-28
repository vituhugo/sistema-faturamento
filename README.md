# Sistema de Faturamento - Monorepo

**Visão geral:**  
Este projeto é uma solução **On-Premise** para gestão de lançamentos e consolidações financeiras, utilizando tecnologias **Open Source** e arquitetura **baseada em microserviços**.

Orquestração realizada via **Docker Compose** para facilitar a instalação e o ambiente de desenvolvimento.

---

## Arquitetura

![Diagrama C4](https://i.imgur.com/A5tKa2L.png)

- **Web App**: Interface web para interação com os serviços da API.
- **Kong (Proxy Reverso)**: Gerencia e controla as API.  
- **OAuth2 (Autenticação)**: Especificação projetada (baseada em JWT), mas ainda não implementada.
- **Grafana (Observabilidade)**: Ferramenta para coleta de logs da aplicação e monitoramento.

### Api's

| Serviço | Função |
|:--------|:-------|
| **Entry API** | Gerencia lançamentos financeiros (criação e listagem). |
| **Consolidation API** | Consolida e lista informações diárias de lançamentos. Executa via **CronJob** diário às 8:30h, contabilizando as últimas 24h (ignorando a última meia hora para garantir replicação). |

> Também é possível rodar o serviço de consolidação pela API.

### Banco de Dados
| Serviço | Função                                                   |
|:--------|:---------------------------------------------------------|
| **Entry DB** | Banco de dados principal de lançamentos.                 |
| **Consolidation DB** | Banco de dados do serviço de consolidação.               |
| **Entry Replica DB** | Réplica somente leitura para uso na api de consolidação. |

---

## Pré-requisitos

Certifique-se de ter instalado:

| Ferramenta | Versão mínima |
|:-----------|:--------------|
| Docker     | 26+            |
| Docker Compose | 2+         |

---

## Como iniciar

1. Clone o repositório:

```bash
git clone https://github.com/vituhugo/sistema-faturamento.git
cd sistema-faturamento
```


Copie o arquivo de ambiente:
```bash
cp .env.example .env
```

Suba os containers:

```bash
docker compose up -d
```

## Serviços disponíveis:


| Componente | Tipo      | URL/Conexão           |
|:-----------|:----------|:----------------------|
| Web App    | HTTP      | http://localhost:3000 |
| Kong API   | HTTP      | http://localhost:8000 |
| Grafana    | HTTP      | http://localhost:3001 |

> ⚠️ Importante: Certifique-se de que essas portas estão livres antes de iniciar.

# Status do Projeto

✅ Estrutura inicial dos microserviços.

✅ Lançamentos e consolidações básicas funcionando.

✅ Configuração de proxy reverso (Kong).

🔜 Integração com OAuth2.

# Dados de Performance

Para a validação de performance foi utilizado a ferramenta Jmeter. O plano de teste pode ser visto no projeto dentro da pasta \_\_test__.

## Criação de Lançamentos

Caso de teste:
- 500 requisições por segundo, durante 5 minutos ao endpoint de criação de lançamentos.

| Label                       | Quantidade | Média | Min | Máx | Erros (%) | Troughput              | Kb recebidos/Sec           | Kb Enviados/sec |
|-----------------------------|------------|-------|-----|-----|-----------|------------------------|-------------------|-------------------|
| Criação Lançamentos | 325969     | 455   | 38  | 993 | 0.0       | 1079.024/sec | 408.314 | 273.544 |

--- 

#### Uso de CPU/Memoria (Grafana)

![Gráfico de performance](https://i.imgur.com/BHseLWh.png)

## Cronjob de Consolidação

Foi executado o serviço de consolidação para o teste acima e foi levantado os seguintes valores: 

|                         |         |
|:------------------------|:--------|
| Quantidade de registros | 392.763 |
| Tempo de execução total | 17,73s  |

Como o tempo foi pequeno, foi desprezado o uso de CPU e de memória.

> É importante ressaltar que o banco do serviço de consolidação é Apartado e o processamento do mesmo não afetará o resto do sistema. 


