# EventHub

**Descubra eventos, encontre novas experiências e explore o que acontece perto de você.**

O EventHub é um protótipo de plataforma web para descoberta de eventos. A interface reúne categorias, destaques e informações de eventos em um só lugar, com o objetivo de tornar a busca por atividades e experiências mais simples para o público.

O projeto também apresenta a proposta de valor para produtores e telas demonstrativas de login e criação de conta. Atualmente, é uma aplicação front-end estática, sem serviços de backend.

## Equipe

- Arthur dos Santos
- Diego Medeiros

## O que o projeto oferece

- **Descoberta de eventos:** página inicial com destaque, categorias e uma seleção de eventos populares.
- **Exploração visual:** carrossel de imagens e navegação horizontal pelas categorias.
- **Detalhes do evento:** página com descrição, local, data, opções de inscrição e cálculo demonstrativo do total conforme a quantidade selecionada.
- **Acesso e cadastro demonstrativos:** formulários com validação nativa do navegador e navegação entre páginas.
- **Área para produtores:** apresentação da proposta do EventHub para quem organiza eventos.
- **Layout responsivo:** estilos adaptados para diferentes tamanhos de tela.

> **Estado atual:** busca, autenticação, publicação de eventos e compra de ingressos ainda não estão conectadas a serviços reais. Os dados apresentados são estáticos e as ações de login, cadastro e favoritos são demonstrações de interface; não há contas, eventos ou compras persistidos.

## Tecnologias

- HTML5, CSS3 e JavaScript
- [Swiper](https://swiperjs.com/) para o carrossel de imagens
- [Lucide](https://lucide.dev/) para ícones
- [Toastify](https://apvarun.github.io/toastify-js/) e [SweetAlert2](https://sweetalert2.github.io/) para notificações nas páginas correspondentes
- Google Fonts: DM Sans e Manrope

As bibliotecas, fontes e algumas imagens são carregadas de serviços externos. É necessária uma conexão com a internet para que esses recursos sejam exibidos.

## Estrutura do repositório

```text
.
├── README.md
└── Projeto_(EventHub)/
    ├── index.html             # Página principal do protótipo
    ├── style.css
    ├── script.js
    ├── home/
    │   ├── home.html          # Variante da página inicial
    │   ├── home.css
    │   └── home.js
    ├── event-details.html     # Detalhes e inscrições demonstrativas
    ├── event-details.css
    ├── event-details.js
    ├── login/
    │   ├── login.html
    │   └── login.css
    └── cadastro/
        ├── cadastrado.html
        └── cadastro.css
```

O HTML, CSS e JavaScript de cada página ficam juntos ou próximos dentro dessa estrutura. A página `home/home.html` é uma variante da página inicial e utiliza seus próprios arquivos de estilo e comportamento.

## Como executar

Não é necessário instalar dependências nem executar um processo de build.

1. Clone o repositório:

   ```bash
   git clone https://github.com/DiegoGMdrs/EventHub_Project.git
   ```

2. Abra `Projeto_(EventHub)/index.html` no navegador.

Opcionalmente, abra a pasta do projeto no VS Code e use uma extensão de servidor local, como Live Server. Se o Python estiver instalado, também é possível iniciar um servidor simples:

```bash
cd "Projeto_(EventHub)"
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Páginas

| Página | Caminho | Descrição |
|---|---|---|
| Inicial | [`Projeto_(EventHub)/index.html`](<./Projeto_(EventHub)/index.html>) | Busca visual, categorias, destaques e chamada para produtores. |
| Inicial alternativa | [`Projeto_(EventHub)/home/home.html`](<./Projeto_(EventHub)/home/home.html>) | Variante da página inicial com arquivos CSS e JS próprios. |
| Detalhes do evento | [`Projeto_(EventHub)/event-details.html`](<./Projeto_(EventHub)/event-details.html>) | Informações da Ultramaratona BM 2027 e cálculo demonstrativo de inscrições. |
| Login | [`Projeto_(EventHub)/login/login.html`](<./Projeto_(EventHub)/login/login.html>) | Formulário demonstrativo de acesso. |
| Cadastro | [`Projeto_(EventHub)/cadastro/cadastrado.html`](<./Projeto_(EventHub)/cadastro/cadastrado.html>) | Formulário demonstrativo de criação de conta. |

## Próximos passos

Possíveis evoluções do protótipo:

- Implementar busca e filtros de eventos.
- Criar backend e persistência de usuários, eventos e favoritos.
- Integrar autenticação real.
- Conectar a seleção de ingressos a um fluxo de compra.
- Criar uma área de gerenciamento para produtores.

