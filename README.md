# NetApiFlow Site

Landing page do [NetApiFlow](https://github.com/Douglasproglima/netapiflow), publicada via
GitHub Pages.

## 🔗 Acesse

| Idioma | URL |
|---|---|
| 🇧🇷 Português (padrão) | **https://douglasproglima.github.io/netapiflow-site/** |
| 🇺🇸 English | **https://douglasproglima.github.io/netapiflow-site/en/** |

## Sobre

Site estático, HTML e CSS puro, sem build e sem dependência. Reaproveita a identidade visual do
[Guia de Marca do NetApiFlow](https://github.com/Douglasproglima/netapiflow/tree/develop/docs/brand)
(monograma, paleta de cores, tipografia, ícones de estado).

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

## Desenvolvimento local

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
