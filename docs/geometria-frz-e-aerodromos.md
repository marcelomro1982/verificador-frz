# Geometria das FRZ e dados de aeródromos

Pesquisado em 19/11/2026. Fontes externas à legislação estão indicadas — conferir antes de uso oficial.

## 1. Como as zonas são medidas

A ICA 100-40/2026 (Art. 7º, LXII a LXIV) só traz definições curtas de ZAD, ZEA e ZEH. A geometria detalhada estava na **ICA 100-40/2023** (revogada, itens 2.1.69 a 2.1.71) e na MCA 56-5/2023. Como as distâncias da tabela de 2026 são as mesmas de 2023, essa geometria é usada como **referência interpretativa** (não é texto vigente):

- **ZAD** – linha perpendicular ao eixo da pista na cabeceira, 150 m para cada lado, abrindo 20° para cada lado; distância medida **a partir da cabeceira**. (Bate com a Figura 2 de 2026: "300 m" e "20°".)
- **ZEA** – origem no **eixo da pista**; limite variável em função da altura (formato oval da Figura 2). Exclui a ZAD.
- **ZEH** – círculo a partir do **ARP do heliponto**.

Fontes: ICA 100-40/2023 (decea.mil.br/drone/docs); MCA 56-5/2023; Glossário Anatel (ZAD).

## 2. Leitura da tabela (distância × altura)

Cada setor é um anel com um **piso de altura**; a FRZ começa no piso indicado.

Exemplo – aeroporto, ZAD, coluna 1 (recreativa/padrão):
- até 3550 m da cabeceira (setor F): FRZ desde o solo (0 ft);
- 3550–4480 m (G): a partir de 100 ft;
- 4480–5400 m (H): a partir de 200 ft;
- 5400–6320 m (I): a partir de 300 ft;
- além de 6320 m (J): a partir de 400 ft.

Mesma lógica para ZEA (A a E) e ZEH. **Há interseção com FRZ (Art. 28 → Termo de Coordenação obrigatório) quando a altura máxima do voo PASSA do piso do setor onde está o ponto (> piso).** Conferido no SARPAS em 19/11/2026: ponto no setor B da SBSM a 100 ft = "Aprovação automática"; a 105 ft = conflito "FRZ de aeródromos/helipontos" (SBSM – 61 m/200 ft) e Termo de Coordenação obrigatório.

Pendências:
- (a) validar esta interpretação comparando com o SARPAS;
- (b) o limite externo do último setor (E/J) não está definido no texto encontrado (o Verificador responde "confirmar no SARPAS").

## 3. Aeródromos cadastrados – principais do RS

Fonte: AISWEB/DECEA (aisweb.decea.mil.br/?i=aerodromos&codigo=XXXX), consultado em 19/11/2026. Coordenadas das cabeceiras conferidas por cálculo contra o comprimento da pista (diferenças ≤ 25 m, exceto SBPK, explicada pela cabeceira deslocada). Nenhum tem heliponto listado no AISWEB. Antes de cada análise, verificar NOTAM/AIP SUP vigentes.

| Aeródromo | Cidade | Tipo | Regras | ARP | Pista | Cabeceiras | Observações |
|---|---|---|---|---|---|---|---|
| SBSM – Santa Maria | Santa Maria | PUB/MIL | VFR/IFR | 29°42'39"S 053°41'32"W | 11/29 – 2694×45 | 11: S29°42'38" W053°42'14" · 29: S29°42'43" W053°40'34" | — |
| SBSM | Santa Maria | | | | 02/20 – 1505×30 | 02: S29°43'17" W053°41'19" · 20: S29°42'28" W053°41'17" | Fechada (SUP N0057) até 26/04/2029, mas o SARPAS continua usando nas FRZ – **considerada desde a v18** (decisão do Marcelo, 25/11/2026; antes ficava de fora) |
| SBPA – Salgado Filho | Porto Alegre | PUB | VFR/IFR | 29°59'41"S 051°10'16"W | 11/29 – 3200×45 | 11: S29°59'39.79" W051°10'58.82" · 29: S29°59'42.14" W051°08'59.46" | — |
| SBCO – Canoas | Canoas | MIL | VFR/IFR | 29°56'44"S 051°08'37"W | 13/31 – 2751×45 | 13: S29°56'31" W051°09'28" · 31: S29°57'00" W051°07'51" | Conferir coordenadas |
| SBCX – Hugo Cantergiani | Caxias do Sul | PUB | VFR/IFR | 29°11'53"S 051°11'12"W | 15/33 – 1670×30 | 15: S29°11'33" W051°11'34" · 33: S29°12'12" W051°10'50" | Últimos 90 m da RWY 15 fechados |
| SBPF – Lauro Kurtz | Passo Fundo | PUB | VFR/IFR | 28°14'39"S 052°19'42"W | 09/27 – 1680×30 | 09: S28°14'49" W052°20'11" · 27: S28°14'29" W052°19'14" | — |
| SBPK – João Simões Lopes Neto | Pelotas | PUB | VFR/IFR | 31°42'58"S 052°19'52"W | 07/25 – 1823×42 | 07: S31°43'16" W052°20'01" · 25: S31°42'42" W052°19'11" | Cabeceira 07 deslocada 140 m |
| SBBG – Cmte Gustavo Kraemer | Bagé | PUB | VFR/IFR | 31°23'27"S 054°06'35"W | 06/24 – 1500×30 | 06: S31°23'42.70" W054°07'03.88" · 24: S31°23'09.00" W054°06'22.87" | — |
| SBUG – Rubem Berta | Uruguaiana | PUB INTL | VFR/IFR | 29°47'00"S 057°02'13"W | 10/28 – 1304×30 | 10: S29°46'57.29" W057°02'40.11" · 28: S29°46'53.48" W057°01'51.74" | — |
| SBNM – Santo Ângelo | Santo Ângelo | PUB | VFR/IFR | 28°16'54"S 054°10'06"W | 12/30 – 1625×30 | 12: S28°16'52" W054°10'40" · 30: S28°17'02" W054°09'41" | — |
| SJRG – Regional de Rio Grande | Rio Grande | PUB | **VFR** | 32°05'01"S 052°10'04"W | 06/24 – 1900×30 | **Não informadas no AISWEB** | Cabeceiras pendentes |

## 4. O que a ICA 100-40/2026 mostra nas figuras (conferido em 19/11/2026)

Texto oficial: ICA 100-40, Portaria DECEA nº 2.094/DNOR8, de 18/03/2026 (BCA nº 058, de 30/03/2026).

- **Figs. 2 e 4 (vista superior)**: as tabelas usadas no Verificador (iguais às do item 2 acima e de `diretrizes-de-resposta.md`).
- **Figs. 3 e 5 (vista de perfil)**: a FRZ aparece em **degraus**. Perto do aeródromo/heliponto ela vai do solo (0 ft) para cima; em cada anel seguinte ela só começa na altura indicada (100, 200, 300 ft). O conjunto é desenhado até 400 ft. No último anel (E/J, azul claro) não há volume colorido abaixo de 400 ft.
- Conclusão usada: **altura máxima do voo > altura do anel → entra em FRZ** (no piso exato não entra – conferido no SARPAS). No último anel, a FRZ começa em 400 ft; acima de 400 ft vale o Art. 25 (segregação do espaço aéreo).
- **Art. 16**: FRZ de áreas de segurança/locais de interesse estratégico e EAC têm limites "conforme autorizado e divulgado por meio de produto AIS" – não há tabela fixa na ICA.
- **Art. 13, parágrafo único** – áreas de segurança, entre outras: refinarias; plataformas de petróleo; depósitos de combustível; estabelecimentos penais; áreas militares; sedes de Governo; usinas hidroelétricas, termoelétricas ou nucleares; subestações e linhas de transmissão; redes de água ou gás; barragens ou represas; redes de comunicação ou vigilância da navegação aérea.

## 5. Helipontos cadastrados – RS

Fonte: AISWEB/DECEA – Aeródromos (ROTAER), filtro Tipo = Heliponto e UF = RS, consultado em 19/11/2026 (35 helipontos). Regra: IFR quando o ROTAER indica IFR; nos demais (VFR ou apenas "HJ" – operação diurna) considerado VFR.

Coluna da tabela (Fig. 4): heliponto **IFR** → coluna 1 para operação padrão, aerolevantamento, aeroagrícola, atípica e recreativa; coluna 2 para Aérea Especial e Entorno de estrutura. Heliponto **VFR** → sempre coluna 2.

| Código | Nome | Cidade | Regra | ARP |
|---|---|---|---|---|
| SI4A | Asor Sul Connect | Caxias do Sul | VFR | 29°13'08"S 51°10'18"W |
| SD7T | Base de Operações Aéreas da PRF | Porto Alegre | VFR | 29°58'21"S 51°10'34"W |
| SS2K | CBMRS | Porto Alegre | VFR | 30°02'30"S 51°12'12"W |
| SJMY | Monte Rey | Caxias do Sul | VFR | 29°08'07"S 51°08'31"W |
| SS3V | Termas Romanas | Restinga Sêca | VFR | 29°41'58"S 53°29'36"W |
| SWHC | Caracol | Canela | VFR | 29°19'02"S 50°51'07"W |
| SDT9 | CMPC HF Santa Margarida | Santa Margarida do Sul | VFR | 30°21'01"S 54°04'59"W |
| SDU2 | CMPC HF Fazenda da Bota | Encruzilhada do Sul | VFR | 30°28'01"S 52°28'10"W |
| SDWY | Caridade | Santa Maria | VFR | 29°41'30"S 53°48'21"W |
| SIAK | Santa Casa de Misericórdia de Porto Alegre | Porto Alegre | VFR | 30°01'48"S 51°13'14"W |
| SISE | Sementes Roos | Não-Me-Toque | VFR | 28°26'36"S 52°48'50"W |
| SJJZ | HELPN Ilha de Terrapleno | Rio Grande | IFR | 32°01'58"S 52°04'22"W |
| SJQW | Warna Roos | Santa Bárbara do Sul | VFR | 28°10'52"S 53°13'00"W |
| SJWN | Unimed - Nordeste | Caxias do Sul | VFR | 29°09'53"S 51°12'03"W |
| SSDD | HELPN Nossa Senhora de Fátima | Canoas | VFR | 29°55'58"S 51°10'60"W |
| SSHM | Hospital Moinhos de Vento | Porto Alegre | VFR | 30°01'35"S 51°12'33"W |
| SSUG | Full Gauge | Canoas | VFR | 29°57'18"S 51°10'26"W |
| SWGY | Sierra Móveis Gramado | Gramado | VFR | 29°25'02"S 50°51'12"W |
| SWSE | Iguatemi Corporate | Porto Alegre | VFR | 30°01'42"S 51°09'46"W |
| SJ5M | Michelon | Santa Cruz do Sul | VFR | 29°41'16"S 52°25'26"W |
| SJ3H | Calçados Beira Rio | Novo Hamburgo | VFR | 29°39'42"S 51°05'53"W |
| SD6D | Granitos.com | Nova Araçá | VFR | 28°39'46"S 51°44'26"W |
| SJ72 | Tri Telecom | Porto Alegre | VFR | 29°59'04"S 51°07'14"W |
| SDR7 | CMPC HF São Manoel | Pinheiro Machado | VFR | 31°33'25"S 53°25'44"W |
| SSAL | Mostardeiro | Porto Alegre | VFR | 30°01'40"S 51°12'14"W |
| SSMU | Magnum | Cachoeirinha | VFR | 29°56'53"S 51°06'19"W |
| SBQF | Ferigolo | Nova Palma | VFR | 29°27'42"S 53°27'49"W |
| SWFY | Fapar | Caxias do Sul | VFR | 29°10'56"S 51°14'10"W |
| SDU8 | Terroir | Garibaldi | VFR | 29°12'30"S 51°33'36"W |
| SS6Q | Aviação Santa Bárbara | Santa Bárbara do Sul | VFR | 28°20'24"S 53°09'28"W |
| SDTT | Região das Hortênsias | Gramado | VFR | 29°21'42"S 50°51'11"W |
| SJRN | Carlos Gomes Center | Porto Alegre | VFR | 30°01'53"S 51°10'36"W |
| SJD6 | Blumen Park | Lajeado | VFR | 29°26'02"S 52°01'03"W |
| SWOH | Vinícola Don Guerino | Alto Feliz | VFR | 29°22'46"S 51°19'49"W |
| SJCT | 3 Tentos CETEC | Santa Bárbara do Sul | VFR | 28°23'13"S 53°15'24"W |
