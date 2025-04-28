
# Sistema de Faturamento — Monorepo

[![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Node.js](https://img.shields.io/badge/node.js-18+-success?logo=node.js)](https://nodejs.org/)
[![Grafana Observability](https://img.shields.io/badge/observability-grafana-orange?logo=grafana)](https://grafana.com/)

---

## 📚 Índice

- [✨ Visão Geral](#-visão-geral)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🏛️ Arquitetura](#️-arquitetura)
- [🔥 Funcionalidades Principais](#-funcionalidades-principais)
- [⚙️ Requisitos](#️-requisitos)
- [🚀 Como Iniciar o Projeto](#-como-iniciar-o-projeto)
- [🌍 Serviços Disponíveis](#-serviços-disponíveis)
- [📈 Monitoramento](#-monitoramento)
- [🧪 Testes de Carga](#-testes-de-carga)
- [📅 Status do Projeto](#-status-do-projeto)
- [📄 Licença](#-licença)

---

## ✨ Visão Geral

**Sistema de Faturamento** é uma plataforma **on-premise** para gerenciamento de lançamentos e consolidações financeiras, baseada em **microserviços** e tecnologias **open-source**, com orquestração via **Docker Compose**.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** Next.js
- **Backend:** Node.js (Express)
- **Orquestração:** Docker Compose
- **Proxy Reverso:** Kong Gateway
- **Observabilidade:** Grafana
- **Banco de Dados:** PostgreSQL

---

## 🏛️ Arquitetura

![Diagrama C4](https://i.imgur.com/A5tKa2L.png)

---

## 🔥 Funcionalidades Principais

- **Entry API:** Criação e listagem de lançamentos financeiros.
- **Consolidation API:** Consolidação automática (via CronJob) ou manual dos lançamentos.
- **Observabilidade:** Monitoramento e análise de logs em tempo real via Grafana.
- **Autenticação:** (em desenvolvimento) OAuth2 + JWT.

---

## ⚙️ Requisitos

| Ferramenta         | Versão mínima |
| ------------------ |---------------|
| Docker             | 26+           |
| Docker Compose     | 2+            |
| Node.js (opcional para desenvolvimento local) | 22+           |

---

## 🚀 Como Iniciar o Projeto

Clone o repositório:
```bash
git clone https://github.com/vituhugo/sistema-faturamento.git
cd sistema-faturamento
```

Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Suba os containers:
```bash
docker compose up -d
```

---

## 🌍 Serviços Disponíveis

| Serviço        | URL                    |
| -------------- | ----------------------- |
| Web App        | [http://localhost:3000](http://localhost:3000) |
| Kong Gateway   | [http://localhost:8000](http://localhost:8000) |
| Grafana        | [http://localhost:3001](http://localhost:3001) |

> **Nota:** Certifique-se de que as portas **3000**, **8000** e **3001** estejam disponíveis.

---

## 📈 Monitoramento

- **Grafana** disponível em [http://localhost:3001](http://localhost:3001) para visualização de métricas e logs.
- Painéis customizáveis conforme necessidade.

---

## 🧪 Testes de Carga

- Testes de estresse e carga realizados com **Apache JMeter**.
- Planos de teste disponíveis na pasta:
  ```
  __tests__/loadtests
  ```

---

## 📅 Status do Projeto

- ✅ Microserviços configurados e operacionais
- ✅ Consolidação automática agendada via CronJob
- ✅ Observabilidade integrada com Grafana
- ⏳ Implementação de autenticação OAuth2 + JWT em andamento

---


# 🧪 Testes de Carga
Os testes de estresse e carga realizados com **Apache JMeter** e os resultados estão logo à baixo.

## 🚀 Criação de Lançamentos

Foram realizadas **500 requisições por segundo**, durante **5 minutos**, ao endpoint de criação de lançamentos.

### 📊 Resultados

| Label                  | Quantidade | Média (ms) | Mínimo (ms) | Máximo (ms) | Erros (%) | Throughput (req/seg) | KB Recebidos/seg | KB Enviados/seg |
|-------------------------|------------|------------|-------------|-------------|-----------|----------------------|------------------|-----------------|
| Criação de Lançamentos  | 325.969    | 455        | 38          | 993         | 0.0%      | 1079.024             | 408.314          | 273.544         |

---

### 🖥️ Uso de CPU/Memória (Grafana)

Durante os testes, foi monitorado o uso de CPU e memória através do Grafana:

![Gráfico de performance](https://i.imgur.com/BHseLWh.png)

---

## 🛠️ Consolidação

Após o teste de criação de lançamentos, foi executado o serviço de consolidação.

### 📊 Resultados da Consolidação

| Quantidade de Registros | Tempo de Execução Total |
|--------------------------|-------------------------|
| 392.763                  | 17,73 segundos          |

> **Nota:** Não foram obtidos dados detalhados de uso de máquina para a consolidação devido ao curto tempo de execução.

---

## 📌 Observações Finais

- Nenhum erro registrado durante os testes de criação de lançamentos.
- Consolidação realizada com alta eficiência em menos de 20 segundos.
- Sistema se manteve estável durante todo o período de teste.


