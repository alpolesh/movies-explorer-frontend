export function filterCardsAccToInput(inputText, arr) {
  const resultsRU = arr.filter((item) => item.nameRU.includes(inputText));
  if (resultsRU.length === 0) {
    const resultsEN = arr.filter((item) => {
      if (item.nameEN !== null) {
        return item.nameEN.includes(inputText)
      }
      return '';
    });
    return resultsEN;
  }
  return resultsRU;
}

