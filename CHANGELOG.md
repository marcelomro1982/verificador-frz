# Histórico de versões

## v15 – 23/11/2026
- **Botão "📍 Usar minha localização atual"** (formato Círculo): pega a posição do aparelho (GPS do celular), coloca no campo da coordenada e já faz a verificação. Assim dá para saber na hora se o local onde você está fica em FRZ ou em área proibida/restrita.
- No formato Polígono, o botão **"📍 Marcar ponto na minha localização"** acrescenta um ponto onde você está (útil para andar pelos cantos da área).
- A página mostra a hora e a **precisão** da localização (± metros), avisa quando a precisão está baixa (mais de 100 m) e desenha um círculo azul com essa precisão no mapa.
- O navegador pede permissão na primeira vez. Se a permissão for negada, ou se o GPS estiver desligado, aparece uma mensagem explicando o que fazer.

## v14 – 19/11/2026
- **Filtro das áreas (EAC) agora só muda o mapa.** Por decisão do Sgt Marcelo, o resultado considera sempre todas as áreas proibidas, restritas e perigosas, mesmo as desligadas no filtro. Antes, uma área desligada saía do resultado e aparecia só como aviso.
- Na tabela, a área desligada aparece com a nota "(oculta no mapa)". O aviso do filtro foi reescrito para dizer que ela foi considerada.

## v13 – 19/11/2026
- **Área do voo em polígono**, como no SARPAS ("Formato → Polígono"). No topo do formulário há a escolha **Círculo** (ponto + raio, como antes) ou **Polígono**.
- No polígono, cada clique no mapa marca um ponto (1, 2, 3…). Também dá para digitar as coordenadas, uma por linha, nos mesmos formatos do círculo. Há botões "Desfazer último ponto" e "Apagar pontos". A página mostra a área em m² e km².
- Cálculo das FRZ no polígono: considera o contorno inteiro (pontos a cada 5 m ou menos) e o interior, e usa a parte mais crítica, como já era feito no círculo.
- Áreas P/R/D no polígono: a interseção é calculada pelos lados do polígono, então um polígono que só encosta na área também conta.
- Prazo de antecedência: a regra de "área maior que 100 km²" (Art. 57, II, "c") usa a área do polígono.
- Área conferida com o print do SARPAS de 19/11/2026: o verificador dá 1.073.966 m² e o SARPAS 1.076.378 m² (1,08 km²). A diferença de 0,2% vem do modelo da Terra usado no cálculo e não muda a regra dos 100 km².

## v12 – 19/11/2026
- O Sgt Marcelo abriu a v11 e ainda viu o satélite e os nomes de cidades. O site publicado estava certo; o navegador tinha mostrado uma cópia antiga guardada (cache).
- A página agora pede ao navegador para não guardar cópia antiga, e os arquivos frz.js e eac-rs.js levam o número da versão no endereço (?v=12). Assim, cada versão nova é baixada de novo.

## v11 – 19/11/2026
- O mapa abre no **Mapa de ruas**, com "Nomes de cidades" desligado. O satélite e os nomes continuam no botão de camadas.
- **Coordenada sem símbolos**, fácil de digitar no celular: `295344S 0535522W` (GGMMSS e GGGMMSS, também com decimais nos segundos), `2953S 05355W` (GGMM) ou só `295344 0535522` (nesse caso o verificador considera Sul e Oeste e avisa). O formato com ° ' " continua aceito.

## v10 – 19/11/2026
- Inclui as mudanças da v9 (não publicada separadamente).
- **Altura em pés ou metros:** ao lado do campo "Altura máxima" há um seletor pés (ft) / metros (m). O cálculo continua em pés, porque as tabelas da ICA 100-40 estão em ft (1 ft = 0,3048 m). Ao trocar a unidade, o número do campo é convertido, e a escolha fica lembrada neste navegador.
- Os campos de altura e raio aceitam qualquer número (antes o navegador podia recusar, por exemplo, 105 ft ou raio 120 m).
- Conferido com prints do SARPAS (SBSM, 10 ft, raio 100 m): ponto no setor F da ZAD → SARPAS "Não aceito – ZAD SBSM" e verificador "Entra".
- Conferido também: ponto no setor G da ZAD da SBSM (−29,70827, −53,74538, 3.915 m da cabeceira 11, piso 100 ft) a 105 ft → SARPAS "Não aceito – ZAD SBSM" e verificador "Entra".

## v9 – 19/11/2026
- SBSM: a RWY 02/20 (fechada pelo SUP N0057 até 26/04/2029) continua **fora** do cálculo, por decisão do Sgt Marcelo.
- O aviso da SBSM agora diz que o SARPAS ainda considera a 02/20 e pode mostrar conflito a mais.

## v8 – 19/11/2026
- **Regra da altura conferida no SARPAS** (prints de 19/11/2026, ponto no setor B da SBSM): a 100 ft o SARPAS deu "Aprovação automática"; a 105 ft deu conflito com FRZ e Termo de Coordenação obrigatório.
- A regra passou de "altura ≥ piso" para **"altura > piso"** (voar exatamente na altura do anel não entra). No anel A/F (desde o solo) qualquer voo entra.
- Último anel (E/J): até 400 ft não entra; acima de 400 ft fica "confirmar no SARPAS".
- Textos da página explicam o caso "exatamente no piso".

## v7 – 19/11/2026
- Comparado com o SARPAS (print de 19/11/2026, ponto em Santa Maria a 390 ft, heliponto SDWY): a detecção de FRZ coincide; o "Não aceito" do SARPAS vinha do **prazo de antecedência**.
- Novo campo opcional **"Início do voo"** e quadro **"Prazo de antecedência"** (ICA 100-40, Arts. 56 e 57): 30 min / 4 dias / 8 dias conforme o caso; avisa "SARPAS: não aceito – prazo insuficiente", início no passado, pedido com mais de 90 dias e área proibida (Art. 56, V).

## v6 – 19/11/2026
- **Filtro das áreas (EAC)**: liga/desliga por tipo (Proibidas, Restritas, Perigosas) e área por área, com busca e botões "Ligar todas", "Desligar todas" e "Desligar as mediante NOTAM".
- Área desligada some do mapa e não entra na verificação; se o voo tocar uma área desligada, a página avisa ("Filtro: ... não foi considerada").
- A escolha fica guardada neste navegador.

## v5 – 19/11/2026
- **Áreas proibidas (P), restritas (R) e perigosas (D)** – ICA 100-40, Art. 29: 63 áreas que tocam o RS, extraídas da AIP Brasil, ENR 5.1 (emenda AIRAC A 25/2026, efetiva 24 DEC 2026), conferidas com a carta ENRC L1 (29 OCT 2026).
  - P → "OPERAÇÃO PROIBIDA" (Art. 29, I); R → Termo de Coordenação obrigatório (Art. 29, II); D → aviso, TCo dispensado (Art. 29, III).
  - Limite inferior GND/AGL comparado com a altura do voo; limite em AMSL → "confirmar" (depende do terreno), a não ser que comece acima de 4.600 ft + altura do voo; limite em FL → não afeta drones.
- Mapa: áreas P/R/D desenhadas (camada que pode ser ligada/desligada), com nome e limites ao passar o mouse.
- Novo arquivo `eac-rs.js` (dados) e `ferramentas/extrair-eac.js` (gera os dados a partir do PDF da AIP).
- Testes: 6 casos de áreas P/R/D.

## v4 – 19/11/2026
- **Helipontos**: 35 helipontos do RS (AISWEB/ROTAER, 19/11/2026) com FRZ de heliponto (ZEH – ICA 100-40, Art. 15, Fig. 4). Heliponto IFR usa a coluna 1 nas operações padrão/recreativa/etc.; heliponto VFR usa sempre a coluna 2.
- **Último anel (E/J)**: conferido nas vistas de perfil da ICA 100-40/2026 (Figs. 3 e 5) – a FRZ começa em 400 ft nesse anel. Abaixo de 400 ft o resultado é "não entra"; só com 400 ft ou mais fica "confirmar no SARPAS" (acima de 400 ft já vale a segregação do Art. 25).
- Aviso da nota (4) das Figs. 2 e 4 para operação no entorno de estrutura (afastamento mínimo de 500 m do aeroporto / 200 m do heliponto).
- Mapa: helipontos marcados com "H" e anéis da ZEH; aeródromos/helipontos próximos desenhados juntos.
- Testes: 6 novos casos de helipontos.
- Botão **"Limpar dados"**: volta todos os campos ao início (coordenada, altura 200 ft, raio 0, Recreativa) e apaga o resultado e o ponto do mapa.

## v3 – 19/11/2026
- Mapa com **imagem de satélite** (Esri) e opção de mapa de ruas (OpenStreetMap), com zoom e arrastar (biblioteca Leaflet).
- FRZ desenhadas por cima do satélite, com controle de transparência ("Cor das FRZ").
- Pistas e nomes dos aeródromos no mapa; ponto do voo e raio da área marcados.
- Sem internet, a página volta a usar o mapa desenhado simples da v2.
- Lógica de cálculo (frz.js) sem mudanças.

## v2 – 19/11/2026
- Escala do mapa até ± 50 km (opções de 20, 30 e 50 km).
- Barra de escala ajustada automaticamente.

## v1 – 19/11/2026
- Primeira versão: verificação de FRZ de aeródromos do RS (ZEA/ZAD, ICA 100-40 Art. 14).
- Conclusão sobre Termo de Coordenação (Art. 28), avisos dos Arts. 25 e 32.
- Mapa desenhado das FRZ; entrada de coordenada decimal ou GMS, ou clique no mapa.
- 10 aeródromos cadastrados (dados AISWEB 19/11/2026).
