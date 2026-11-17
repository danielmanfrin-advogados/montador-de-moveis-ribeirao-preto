# Plano de implementação: Montador de Móveis em Ribeirão Preto

## Escopo e implementação

Criar um site estático em português do Brasil para captação de contatos do nicho **Montador de Móveis em Ribeirão Preto**, com HTML, CSS e JavaScript puros. O conteúdo de cada página ficará integralmente no HTML entregue, sem depender de JavaScript para ser renderizado ou indexado. O projeto terá 13 páginas reais: inicial; três serviços; seis bairros (Centro, Jardim Botânico, Nova Aliança, Vila Tibério, Bonfim Paulista e Campos Elíseos); Sobre; Perguntas frequentes; Política de privacidade. Não serão inventados endereço, CNPJ, prestador, avaliações ou fatos locais específicos.

A marca será **Montador de Móveis em Ribeirão Preto**, slug **montadordemoveisribeiraopreto**. A paleta adotada será destaque `#6b4f3a`, escura `#4d392a`, suave `#f3f1ef` e suave 2 `#e1dcd8`, com texto branco contrastante. A página inicial usará o title “Montador de Móveis em Ribeirão Preto | Orçamento”, H1 “Montador de móveis em Ribeirão Preto”, subtítulo orientado a solicitar a montagem pelo WhatsApp, e meta description de 120 a 155 caracteres.

Os três serviços serão: montagem de móveis novos (`montagem-de-moveis`), desmontagem de móveis (`desmontagem-de-moveis`) e montagem de móveis para escritório (`montagem-de-moveis-para-escritorio`). As mensagens de WhatsApp serão formuladas no infinitivo. Os textos solicitarão bairro, tipo/modelo e quantidade de móveis, existência de manual e peças, necessidade de desmontagem e fotos que ajudem a entender o pedido. O texto evitará promessas de preço, prazo, garantia, certificação ou disponibilidade.

## Design

**Direção escolhida pelo usuário:** visual orgânico e acolhedor, baseado na referência descrita no prompt, adaptado à paleta marrom terrosa do nicho. Princípios: leitura clara e confiável; formas arredondadas; hierarquia forte entre chamada e conteúdo; acessibilidade móvel. O layout terá barra de navegação branca flutuante em pílula; hero fotográfico arredondado com overlay; faixa de pedido rápido sobreposta; seções em creme alternadas com tons suaves da marca; cards de cantos arredondados, imagens fotográficas e sombras leves; CTA final escura e barra fixa de contato em telas estreitas. Fonte Fira Sans com alternativa de sistema. Transições discretas, foco visível, alvos de toque de pelo menos 44 px e respeito a `prefers-reduced-motion`.

A home conterá hero com os dois contatos, formulário de seleção de bairro/área e serviço, seção de três passos, cartões dos serviços, quatro diferenciais, links dos bairros, FAQ, CTA e rodapé. Páginas de serviço terão pelo menos 250 palavras de conteúdo útil e único; cada página de bairro terá pelo menos 150 palavras realmente distintas, sem dados inventados sobre a localidade.

## Estrutura do projeto

- `index.html`: página inicial e conteúdo visível da FAQ.
- `servicos/<slug>/index.html`: três páginas de serviço.
- `bairros/<slug>/index.html`: seis páginas de bairro.
- `sobre/index.html`, `perguntas-frequentes/index.html`, `politica-de-privacidade/index.html`: páginas institucionais.
- `style.css`: estilos compartilhados mobile-first.
- `config.js`: configuração central de número provisório, site, nicho, cidade, mensagem e endpoint.
- `tracker.js`: lógica de link e registro de cliques conforme o anexo A.
- `img/`: fotos ilustrativas JPG `hero.jpg`, `sobre.jpg` e uma por serviço.
- `favicon.svg`, `sitemap.xml`, `robots.txt`, `llms.txt`: identidade e descoberta por buscadores/assistentes.
- `apps-script/Code.gs`: anexo B conforme fornecido.
- `package.json`, `build.js`, `vercel.json`: build nativo sem dependências para copiar o site para `dist/`, de acordo com a última seção do prompt.
- `LEIA-ME.txt`: troca de telefone, Apps Script, Vercel, Search Console, imagens e recomendação condicional de Perfil da Empresa no Google.
- `manus-routes.json`: manifesto auxiliar do ambiente de preview.

## SEO, GEO e contatos

Todas as páginas terão conteúdo e metadados próprios no HTML inicial: title até 60 caracteres, description de 120 a 155, canonical e Open Graph/Twitter com o domínio de projeto indicado pelo usuário, um H1 e hierarquia de títulos. Serão incluídos links internos e breadcrumbs nas páginas internas. A home e a página completa terão JSON-LD FAQPage com respostas idênticas às visíveis; a home também terá WebSite; serviços e bairros terão Service com a cidade como área atendida e sem endereço inventado; internas terão BreadcrumbList. Sitemap, robots e `llms.txt` cobrirão as 13 URLs.

Todos os botões WhatsApp e telefone terão `data-acao` e `data-local`, href provisório 5516900000000 e mensagens específicas; `config.js` permitirá substituir os números em um único lugar. A seleção rápida formará a mensagem conforme o tracker do anexo A. O script enviará ao endpoint Google Apps Script os campos definidos no prompt. O código do anexo B será copiado para `apps-script/Code.gs`. Não serão coletados nome, e-mail ou CPF, nem usados cookies publicitários.

O aviso legal literal será incluído no rodapé de cada página. A política de privacidade descreverá os dados do clique, finalidade, tratamento posterior pelo prestador e direitos previstos na LGPD, com data de atualização.

## Build e entrega

Usar `package.json` sem `dependencies` nem `devDependencies`, `build.js` com APIs nativas do Node e `vercel.json` apontando para `npm run build` e a pasta `dist`. Não haverá React, Vite, framework, biblioteca ou etapa de compilação de conteúdo. As páginas devem ser servidas por diretórios com `index.html`, com URLs limpas e barra final. O projeto será validado com `npm install` e `npm run build`, verificações dos 13 HTML/metadados/canonicals/links/JSON-LD, teste de dimensões móveis e checagem de arquivos e rotas. O pacote ficará pronto para ser enviado a um repositório GitHub e importado pela Vercel; não será publicado externamente sem pedido explícito.