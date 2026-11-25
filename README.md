# Verificador FRZ – Drones RS

Consulta rápida: **o voo do drone entra em Zona de Restrição de Voo (FRZ) de aeródromo? Precisa de Termo de Coordenação?**

Você informa a coordenada, a altura máxima e o tipo de operação, e a página mostra:
- se o voo **entra ou não em FRZ** (e de qual aeródromo, zona e setor);
- a conclusão sobre o **Termo de Coordenação** (ICA 100-40, Art. 28);
- avisos de limites (Art. 25 – acima de 400 ft; Art. 32 – recreativa acima de 200 ft ou 300 m);
- um mapa com **imagem de satélite** e os anéis das FRZ por cima.

Página on-line: https://marcelomro1982.github.io/verificador-frz/

> **Orientação prévia.** A confirmação oficial é feita no **SARPAS** (DECEA).

## Como usar
1. Abra o arquivo `index.html` no navegador (dois cliques).
2. Cole a coordenada (ex.: `-29.74, -53.65` ou `29°43'05"S 053°44'20"W`) ou clique no mapa.
3. Preencha altura (ft), raio (m) e tipo de operação → **Verificar**.

## O que cobre
- FRZ de **aeródromos** (ICA 100-40, Art. 14) dos principais aeroportos do RS: SBSM, SBPA, SBCO, SBCX, SBPF, SBPK, SBBG, SBUG, SBNM (SJRG com dados incompletos).
- FRZ de **helipontos** (Art. 15): os 35 helipontos do RS cadastrados no AISWEB (19/11/2026).
- **Áreas proibidas, restritas e perigosas** (Art. 29) que tocam o RS, da AIP ENR 5.1 (emenda A 25/2026).

## O que NÃO cobre
TRA, TSA e áreas temporárias (NOTAM/Suplemento AIP), Rotas Especiais de Helicóptero (Art. 30) e NOTAM vigentes.

## Base
- ICA 100-40/2026 – Aeronaves Não Tripuladas e o Acesso ao Espaço Aéreo Brasileiro (Portaria DECEA nº 2.094/DNOR8).
- Geometria das zonas: ICA 100-40/2023 (itens 2.1.69–2.1.71), usada como referência interpretativa.
- Dados dos aeródromos: AISWEB/DECEA, consultados em 19/11/2026.

Detalhes em `docs/`. Autor: Sgt Marcelo da Rocha – DTCEA-SM.
