const getRandom = (max) => Math.floor(Math.random() * max);

const getRandomInRange = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min) + min);
};

export { getRandomInRange };
export default getRandom;
