<div align="center">
  <img src="assets/logo-mark-dark.svg" width="96" height="96" alt="NetApiFlow" />

  <h1>NetApiFlow Site</h1>

  <p><strong>Integrações complexas. Fluxos lineares.</strong></p>

  <p>
    <a href="https://douglasproglima.github.io/netapiflow-site/">
      <img src="https://img.shields.io/badge/PT--BR-ACESSAR_SITE-8B5CF6?style=for-the-badge" alt="Acessar site em português" />
    </a>
    &nbsp;
    <a href="https://douglasproglima.github.io/netapiflow-site/en/">
      <img src="https://img.shields.io/badge/EN-VISIT_SITE-7C3AED?style=for-the-badge" alt="Visit the site in English" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/github/deployments/Douglasproglima/netapiflow-site/github-pages?label=github%20pages&style=flat-square&color=10B981" alt="GitHub Pages deployment" />
    <img src="https://img.shields.io/badge/license-MIT-64748B?style=flat-square" alt="License MIT" />
    <img src="https://img.shields.io/badge/stack-HTML%20%2B%20CSS-F59E0B?style=flat-square" alt="Stack: HTML + CSS" />
  </p>
</div>

<br>

## Sobre

Landing page do [NetApiFlow](https://github.com/Douglasproglima/netapiflow), publicada via
GitHub Pages. Site estático, HTML e CSS puro, sem build e sem dependência. Reaproveita a
identidade visual do
[Guia de Marca do NetApiFlow](https://github.com/Douglasproglima/netapiflow/tree/develop/docs/brand):
monograma, paleta de cores, tipografia e ícones de estado.

## Estrutura

```
.
├── index.html        # página em português, idioma padrão
├── en/
│   └── index.html    # página em inglês
└── assets/
    ├── site.css      # estilo compartilhado pelas duas páginas
    ├── logo-mark-*.svg
    ├── icons/
    └── node-states/
```

## Rodar localmente

Sem build step. Basta abrir `index.html` direto no navegador, ou servir a pasta com qualquer
servidor estático:

```bash
python -m http.server 8080
```

## Deploy

Publicado via GitHub Pages, direto da raiz do branch `main`. Qualquer push em `main` atualiza o
site em alguns minutos.

## Licença

MIT, mesma do [NetApiFlow](https://github.com/Douglasproglima/netapiflow/blob/main/LICENSE).
