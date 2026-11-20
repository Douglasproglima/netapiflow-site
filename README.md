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

## Atualizar a demo

A demo em `demo/` é o dashboard do NetApiFlow compilado contra dados gravados, e é regenerada a
cada release a partir da tag, nunca da `develop`. A pasta `demo/` inteira é substituída: os nomes
dos arquivos do Angular levam hash, então copiar por cima deixaria arquivo velho para trás.

1. No repositório `netapiflow`, crie um worktree da tag, sem mexer no checkout principal:

   ```bash
   git worktree add ../netapiflow-v<versao> v<versao>
   ```

2. No `ClientApp` desse worktree, compile com o `base href` do GitHub Pages. O Git Bash no Windows
   reescreve um argumento que começa com `/`, então desligue a conversão de caminho:

   ```bash
   cd ../netapiflow-v<versao>/src/NetApiFlow.Dashboard/ClientApp
   npm ci
   MSYS_NO_PATHCONV=1 npx ng build --configuration demo --base-href /netapiflow-site/demo/
   ```

3. Neste repositório, troque a pasta pelo conteúdo de `dist/demo/browser`:

   ```bash
   git pull --ff-only
   git rm -r demo
   cp -r <caminho do worktree>/src/NetApiFlow.Dashboard/ClientApp/dist/demo/browser demo
   ```

4. Reponha em `demo/index.html` o script que decodifica o redirecionamento do `404.html` da raiz.
   Ele fica logo depois de `<base href="/netapiflow-site/demo/">`, antes de qualquer outro script.
   Copie o bloco do `index.html` anterior (`git show HEAD:demo/index.html`).

5. Confira num servidor local que serve a raiz do `404.html` para caminho inexistente, como o
   GitHub Pages faz:
   - o diálogo Sobre mostra a versão da tag;
   - o layout mobile aparece em 390x844, sem rolagem horizontal;
   - um link direto como `/netapiflow-site/demo/history` abre a tela, e não o 404.

6. Remova o worktree (`git worktree remove`) e publique: um push em `main` atualiza o site na hora.

## Deploy

Publicado via GitHub Pages, direto da raiz do branch `main`. Qualquer push em `main` atualiza o
site em alguns minutos.

## Licença

MIT, mesma do [NetApiFlow](https://github.com/Douglasproglima/netapiflow/blob/main/LICENSE).
