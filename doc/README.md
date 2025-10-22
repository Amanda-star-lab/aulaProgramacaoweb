# 🌳 Amazonia Verdejante

Este é um projeto de front-end completo para uma ONG fictícia focada na restauração e preservação da Amazônia. O site serve como um portal informativo, plataforma de engajamento e formulário de captação de voluntários e parceiros.

Este projeto foi desenvolvido como parte do curso de Ciência da Computação, aplicando conceitos modernos de desenvolvimento web, acessibilidade e design responsivo.

**[Acesse o projeto no GitHub Pages](https://amanda-star-lab.github.io/aulaProgramacaoweb/)**

## ✨ Funcionalidades Principais

O site é composto por múltiplas páginas (Início, Nossas Ações, Participe) e inclui as seguintes funcionalidades:

* **Design Responsivo:** Totalmente adaptável a dispositivos móveis (mobile-first), tablets e desktops, utilizando CSS Flexbox e Grid Layout.
* **Formulário de Cadastro Avançado:**
    * Validação de campos em tempo real (JavaScript).
    * Mensagens de erro customizadas e acessíveis.
    * Uso da biblioteca **IMask.js** para máscaras de entrada (CPF, Telefone, CEP).
    * Consulta à **ViaCEP API** (usando `fetch`) para preenchimento automático de endereço.
* **Acessibilidade (WCAG):**
    * Menu de acessibilidade para alternar **Modo Escuro** e **Alto Contraste**.
    * Controles para aumentar e diminuir o tamanho da fonte.
    * Uso de HTML semântico (`<main>`, `<nav>`, `<section>`, etc.) e atributos ARIA para navegação via leitores de tela.
* **Tema (Dark Mode):** O site salva a preferência de tema do usuário no `localStorage` e a aplica automaticamente em visitas futuras.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído do zero utilizando as seguintes tecnologias:

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização moderna, incluindo:
    * Variáveis CSS (para gerenciamento de Design System e temas).
    * Flexbox e Grid Layout.
    * Media Queries (para responsividade).
* **JavaScript (ES6+):**
    * Manipulação do DOM e gerenciamento de eventos.
    * Validação de formulários (regex e lógica customizada).
    * Consumo de APIs com `Fetch API` (assíncrono).
    * Gerenciamento do `localStorage`.
* **Ferramentas:**
    * **Git & GitHub:** Versionamento de código seguindo o padrão de Commits Semânticos.
    * **GitHub Pages:** Para deploy e hospedagem contínua.


## 👨‍💻 Autor

Desenvolvido por **Amanda Rodrigues**.

