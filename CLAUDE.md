# CLAUDE.md – Verificador FRZ (Drones RS)

Contexto para o Claude Code trabalhar neste projeto.

## Quem usa e para quê
- Dono: Sgt Marcelo da Rocha – DTCEA-SM (Santa Maria/RS). Não é programador: explique tudo em passos simples, em português.
- Objetivo: **abreviar a consulta ao SARPAS**. A partir da coordenada, altura e tipo de voo do drone, dizer rapidamente se o voo entra em alguma **FRZ** (Zona de Restrição de Voo) e, portanto, se precisa de **Termo de Coordenação** (ICA 100-40, Art. 28).
- O SARPAS (DECEA) continua sendo a palavra final. Esta ferramenta é **orientação prévia**.

## Arquivos
- `index.html` – a página (abre direto no navegador). Carrega `frz.js` e o Leaflet (mapa de satélite, via cdnjs; sem internet usa o mapa desenhado simples).
- `frz.js` – toda a lógica: dados dos aeródromos, tabelas da ICA 100-40 e cálculo das zonas. Funciona no navegador e no Node.
- `testes/teste-frz.js` – testes da lógica: `node testes/teste-frz.js`.
- `docs/diretrizes-de-resposta.md` – regras de resposta e tabelas da norma.
- `docs/geometria-frz-e-aerodromos.md` – geometria das zonas, interpretação da altura e dados dos aeródromos (fontes).
- `eac-rs.js` – áreas proibidas/restritas/perigosas do RS (gerado, não editar à mão).
- `ferramentas/extrair-eac.js` – gera o `eac-rs.js` a partir do PDF da AIP (instruções no topo do arquivo).
- `CHANGELOG.md` – histórico de versões.
- PDFs da AIP/cartas ficam na pasta só para consulta (o `.gitignore` não deixa irem para o GitHub).

## Regras de cálculo (resumo)
- **ZEA**: distância ao eixo da pista (segmento entre as cabeceiras). Tabela coluna 1: 1740/2350/2960/3570 m → pisos 0/100/200/300/400 ft.
- **ZAD**: em cada cabeceira, base de 300 m (150 m para cada lado) abrindo 20° para cada lado; distância à cabeceira. Coluna 1: 3550/4480/5400/6320 m.
- **Coluna 2** (Aérea Especial e Entorno de estrutura): ZEA 1130/1740/2350/2960; ZAD 1700/2630/3550/4480.
- **Entra em FRZ** quando a altura máxima **passa** do piso do anel (> piso); no anel A/F (desde o solo) sempre entra. Conferido no SARPAS em 19/11/2026 (SBSM setor B: 100 ft aprovado, 105 ft conflito).
- Áreas P/R/D com limite inferior em AGL: por segurança continua "≥" (não conferido no SARPAS).
- Último anel (E/J): FRZ a partir de 400 ft; até 400 ft não entra; acima → "confirmar no SARPAS" (limite externo não definido).
- Área com raio: amostra centro + 2 anéis de 24 pontos e usa o pior caso.
- Filtro das áreas EAC (v14): só esconde no mapa; o resultado considera SEMPRE todas as áreas (decisão do Marcelo, 19/11/2026).
- Área em polígono (v13): FRZ pelo contorno (pontos a cada ≤ 5 m) + grade no interior, pior caso; áreas P/R/D por interseção exata dos lados; prazo "> 100 km²" usa a área do polígono.
- SBSM RWY 02/20 está fechada (SUP N0057, até 26/04/2029), mas o SARPAS continua usando ela nas FRZ. **Decisão do Marcelo (25/11/2026, v18):** considerar a 02/20 igual ao SARPAS. (Até a v17 ela ficava de fora, por decisão de 19/11/2026.)
- SJRG: cabeceiras não publicadas → resultado "indefinido".
- **Prazo de antecedência** (Arts. 56 e 57): 30 min sem FRZ/área restrita; 4 dias com interseção (ou aerolevantamento, ou área > 100 km²); 8 dias acima de 400 ft ou Atípica; Aérea Especial 30 min. Considera UA ≤ 25 kg e VLOS. Conferido com print do SARPAS em 19/11/2026 (SDWY, 390 ft: SARPAS "Não aceito – prazo insuficiente").

## Regras de trabalho
- **Não inventar.** Toda regra deve vir da legislação (ICA 100-40/2026, RBAC-E 94, RBAC 100, Resolução ANAC 806/2026) ou de fonte oficial (AISWEB/DECEA). Se houver dúvida, perguntar ao Marcelo e avisar que não há certeza.
- Linguagem simples nas mensagens da página; citar artigo da norma.
- Ao mudar a lógica, rodar os testes e atualizar `CHANGELOG.md`.
- Versionar: subir a versão (v2 → v3…) no cabeçalho do `index.html` e no CHANGELOG, com data. Trocar também o `?v=` dos `<script src="frz.js?v=…">` e `eac-rs.js?v=…` (evita o navegador usar cópia antiga).

## Pendências
1. ~~Validar a regra da altura no SARPAS~~ – feito na v8 (19/11/2026): no piso exato não entra; acima entra. Observação: no teste a 105 ft o SARPAS listou **2 conflitos SBSM (61 m/200 ft)** – o Marcelo confirmou que o SARPAS ainda considera a RWY 02/20 – desde a v18 (25/11/2026) o verificador também considera a 02/20.
2. ~~Limite externo dos setores E/J~~ – resolvido na prática (v4): nesse anel a FRZ começa em 400 ft; abaixo disso não entra. O limite externo continua sem definição na norma, mas só importa para voo com 400 ft ou mais.
3. Cabeceiras do SJRG (Rio Grande) – desconsiderada por decisão do Marcelo (19/11/2026).
4. Cabeceiras de SBCO (Canoas) – desconsiderada por decisão do Marcelo (19/11/2026).
5. ~~Helipontos~~ – feito na v4. ~~Áreas P/R/D (Art. 29) e áreas de segurança publicadas como área proibida (ex.: refinaria, presídios)~~ – feito na v5 a partir da AIP ENR 5.1 (emenda A 25/2026, efetiva 24/12/2026). Faltam: TRA/TSA e áreas temporárias (vêm por NOTAM/Suplemento AIP). **A cada nova emenda AIRAC da AIP, rodar `ferramentas/extrair-eac.js` de novo.**
7. Lista de helipontos muda com o tempo: reconferir no AISWEB (Aeródromos → Tipo Heliponto, UF RS) de tempos em tempos.
6. ~~Mapa com imagem de satélite~~ – feito na v3 (Leaflet + Esri), publicado em https://marcelomro1982.github.io/verificador-frz/
