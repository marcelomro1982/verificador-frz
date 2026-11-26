// Gera os ícones do app (PNG) sem programas extras: node ferramentas/gerar-icones.js
// Desenho: fundo azul-marinho, anéis das FRZ (azul, amarelo, laranja, vermelho) e um drone branco no centro.
const fs = require('fs'), zlib = require('zlib'), path = require('path');
const hex = h => [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
const NAVY = hex('#14304f'), BRANCO = [255,255,255];
const ANEIS = [[400,'#8ccbe8'],[318,'#f2d03b'],[236,'#f08c2a'],[156,'#e5483f']]; // raio (em 1024) e cor
function corEm(x, y){ // x,y em 0..1024
  const dx = x - 512, dy = y - 512, r = Math.hypot(dx, dy);
  let c = NAVY;
  for(const [R, h] of ANEIS) if(r <= R) c = hex(h);
  // drone: braços em X, corpo e 4 hélices
  const a = Math.abs(dx), b = Math.abs(dy);
  const braco = Math.abs(a - b) / Math.SQRT2 <= 20 && Math.max(a, b) <= 175;
  const corpo = a <= 62 && b <= 62 && Math.hypot(Math.max(a-30,0), Math.max(b-30,0)) <= 32;
  const dh = Math.hypot(a - 175, b - 175);
  const helice = dh >= 52 && dh <= 74;
  if(braco || corpo || helice) c = BRANCO;
  return c;
}
function png(tam){
  const S = 4, linhas = [];
  for(let y = 0; y < tam; y++){
    const lin = Buffer.alloc(1 + tam*3); lin[0] = 0;
    for(let x = 0; x < tam; x++){
      const s = [0,0,0];
      for(let i = 0; i < S; i++) for(let j = 0; j < S; j++){
        const c = corEm((x + (i+.5)/S) * 1024/tam, (y + (j+.5)/S) * 1024/tam); s[0]+=c[0]; s[1]+=c[1]; s[2]+=c[2]; }
      for(let k = 0; k < 3; k++) lin[1 + x*3 + k] = Math.round(s[k] / (S*S));
    }
    linhas.push(lin);
  }
  const crcT = []; for(let n = 0; n < 256; n++){ let c = n; for(let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crcT[n] = c >>> 0; }
  const crc = b => { let c = 0xffffffff; for(const v of b) c = crcT[(c ^ v) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
  const bloco = (t, d) => { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(t), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); };
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(tam, 0); ihdr.writeUInt32BE(tam, 4); ihdr[8] = 8; ihdr[9] = 2;
  return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]), bloco('IHDR', ihdr), bloco('IDAT', zlib.deflateSync(Buffer.concat(linhas), { level: 9 })), bloco('IEND', Buffer.alloc(0))]);
}
const pasta = path.join(__dirname, '..', 'icones');
fs.mkdirSync(pasta, { recursive: true });
for(const [nome, t] of [['icone-32.png',32],['icone-180.png',180],['icone-192.png',192],['icone-512.png',512]]) fs.writeFileSync(path.join(pasta, nome), png(t));
console.log('ícones gerados em', pasta);
