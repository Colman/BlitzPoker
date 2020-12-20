import crypto from "crypto";

export function getCardPath(card) {
  if (card === null) {
    return "/cards/back.gif";
  }

  let suit = Math.floor(card / 13);
  switch (suit) {
    case 1:
      suit = "c";
      break;

    case 2:
      suit = "h";
      break;

    case 3:
      suit = "d";
      break;

    default:
      suit = "s";
      break;
  }

  let number = card % 13;
  switch (number) {
    case 0:
      number = "a";
      break;

    case 10:
      number = "j";
      break;

    case 11:
      number = "q";
      break;

    case 12:
      number = "k";
      break;

    default:
      number = (number + 1).toString();
  }

  return "/cards/" + number + suit + ".gif";
}

export function getPlayerImage(name) {
  const size = 300;
  const palettes = [
    ["#4b1cba", "#def168", "#22846f"],
    ["#265c4c", "#df719d", "#e1d7f9"],
    ["#8903f7", "#52f0ee", "#299e54"],
    ["#0f2f89", "#f06b4d", "#5cc797"],
  ];

  const alg = crypto.createHash("sha256");
  alg.update(name);
  const hash = alg.digest("hex");

  const paletteIndex = parseInt(hash[0], 16) % 4;
  const palette = palettes[paletteIndex];

  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", size);
  canvas.setAttribute("height", size);
  const ctx = canvas.getContext("2d");
  ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
  ctx.clip();

  const width = size / 8;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++) {
      let index = i * 4 + j;
      let color = parseInt(hash[index], 16) % palette.length;
      ctx.fillStyle = palette[color];
      ctx.fillRect(j * width, i * width, width, width);
      ctx.fillRect((7 - j) * width, i * width, width, width);
    }
  }

  return canvas.toDataURL();
}
