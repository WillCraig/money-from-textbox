

export function countUSD(text: string): number {
  let total = 0;
  let matches = text.match(/\$\d+(\.\d+)?/g);
  if (matches) {
    matches.forEach((match) => {
      total += parseFloat(match.replace("$", ""));
    });
  }
  return total;
}


