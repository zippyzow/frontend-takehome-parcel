// Returns an object. The keys are gem names and the values are gem data.
// The object can be empty.
export function loadSavedGems() {
  const savedGemsStr = localStorage.getItem('savedGems');

  return savedGemsStr !== null ? JSON.parse(savedGemsStr) : {};
}

export function saveGem(gem) {
  const savedGems = loadSavedGems();

  savedGems[gem.name] = gem;

  localStorage.setItem('savedGems', JSON.stringify(savedGems));
}

export function removeGem(gem) {
  localStorage.removeItem(gem.name);
}