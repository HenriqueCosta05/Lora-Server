# Lora Back-End
<p align="center">
  <!-- Logo do Projeto -->
  <img src="./assets/lora_logo.svg" alt="Lora Server Logo" width="500" height="250" />
</p>

<p align="left">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" />
  <img src="https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-opcional-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-enabled-2496ED?logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/API%20Integrations-Notion%20%7C%20Obsidian%20%7C%20Google%20Calendar-blue" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
</p>

O Lora Server é um gateway de integração entre plataformas de produtividade como Notion, Obsidian e Google Calendar. A proposta é unificar tarefas, notas e eventos em um único fluxo, reduzindo fricção no gerenciamento diário e permitindo automações mais inteligentes.

## Introdução
Este projeto surgiu da necessidade real de centralizar informações espalhadas entre diferentes ferramentas. Ao invés de alternar entre vários aplicativos, o Lora Server atua como um hub que recebe, transforma e sincroniza dados entre serviços externos — tudo de forma modular, escalável e previsível.

## Motivação
A ideia principal é acelerar o fluxo de trabalho e eliminar redundâncias. Como usuário intensivo de Notion, Obsidian e Google Calendar, percebi que grande parte do tempo se perde apenas navegando entre apps ou replicando informações manualmente.
O Lora Server foi criado para resolver isso: automatizar processos, integrar APIs e servir como laboratório para testar arquiteturas, padrões, sincronizações e modelos de automação que podem ser aplicados em contextos profissionais.


## Métricas de Sucesso
Alguns indicadores que norteiam o desenvolvimento:

1. Redução de tempo operacional: diminuir em até 40% o tempo gasto alternando entre apps.
2. Confiabilidade da sincronização: manter taxa de sucesso acima de 98%.
3. Extensibilidade: possibilidade de adicionar novos provedores sem alterar o core.
4. Baixa latência: processar webhooks e rotinas de sync de forma ágil e sem bloqueios.
5. Manutenibilidade: arquitetura modular com baixo acoplamento e código facilmente evolutivo.


## Arquitetura
* Core baseado em Node.js
* Engine de sincronização isolada por serviços
* Adaptadores individuais para cada provedor (Notion, Obsidian, Google Calendar etc.)
* Middlewares para validação, formatação e tratamento de erros
* Rotinas de background para processos assincronos e sincronizações programadas

## Tecnologias Utilizadas

* Node.js – núcleo da aplicação e orquestração das integrações
* Prisma ORM – modelagem tipada do banco, migrations e queries otimizadas
* Integração com APIs externas – REST, webhooks, tokens e pipelines personalizados
* Docker – containerização do ambiente para garantir consistência entre dev e deploy
* TypeScript - Tipagem estática
* Logger estruturado – monitoramento e debugging mais eficiente
* Job schedulers – para sincronizações automáticas entre serviços
* Fallback strategies – para lidar com indisponibilidade de provedores externos