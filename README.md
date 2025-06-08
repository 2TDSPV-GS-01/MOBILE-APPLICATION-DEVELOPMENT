# FonteViva

O **FonteViva** é um aplicativo mobile desenvolvido com **React Native** e **Expo**, integrado a uma API desenvolvida em **.NET**, com o objetivo de monitorar em tempo real a qualidade da água de ambientes naturais ou controlados.

## Descrição do Projeto

O aplicativo é capaz de se conectar a sensores físicos que coletam dados como **pH**, **turbidez** e **temperatura** da água. Esses dados são enviados para uma API, onde ficam armazenados e podem ser acessados pelo app. A visualização é rápida, clara e acessível, permitindo que os usuários acompanhem os parâmetros ambientais e identifiquem possíveis alterações prejudiciais.

O app oferece uma experiência amigável, com um layout escuro, minimalista e voltado para a funcionalidade.

## Funcionalidades

- Tela inicial de boas-vindas (SplashScreen)
- Dashboard com as últimas medições dos sensores
- Listagem completa dos registros enviados pela API
- Possibilidade de editar e excluir registros existentes
- Tela de informações sobre o projeto
- Tela de ajuda e contato

## Tecnologias Utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **React Navigation**
- **Axios**
- **Styled-Components**
- **.NET Core (API REST)**

## Organização do Código

- `components/`: componentes reutilizáveis como cards
- `screens/`: telas do app (Dashboard, Registros, Ajuda, Sobre)
- `routes/`: configuração de navegação entre telas
- `services/`: integração com a API via Axios
- `styles/`: tema e estilos globais
- `assets/`: imagens e ícones

## Como executar o projeto

1. Clone este repositório
2. No terminal, navegue até a pasta do projeto
3. Instale as dependências:

- npm install

4. Inicie o projeto com:

- npx expo start

- Certifique-se de que a **API .NET** esteja rodando localmente no endereço:
- Link da nossa API .NET: https://github.com/2TDSPV-GS-01/ADVANCED-BUSINESS-DEVELOPMENT-WITH-.NET

## Informações do Grupo

**Curso:** Análise e Desenvolvimento de Sistemas  
**Disciplina:** Mobile Application Development

**Integrantes do Grupo:**
- Francesco Di Benedetto RM: RM557313
- Nathalia Gomes da Silva RM: RM554945
- Gustavo Goulart Bretas RM: RM555708
  
## Link do vídeo de apresentação

[Assista aqui](https://youtu.be/yJc41Vq_L8Q)
