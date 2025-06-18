export const saveScore = (name, score) => {
  const old = JSON.parse(localStorage.getItem('scoreboard') || '[]');
  const updated = [...old, { name, score }];
  localStorage.setItem('scoreboard', JSON.stringify(updated));
};

export const getTopScores = () => {
  const raw = JSON.parse(localStorage.getItem('scoreboard') || '[]');
  const merged = raw.reduce((acc, curr) => {
    const existing = acc.find(e => e.name === curr.name);
    if (existing) {
      existing.score += curr.score;
    } else {
      acc.push({ ...curr });
    }
    return acc;
  }, []);
  return merged.sort((a, b) => b.score - a.score);
};
