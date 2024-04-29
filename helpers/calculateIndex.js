const calculateIndex = (newIndex, maxIndex) => {
  let finalIndex;

  if (newIndex < 0) {
    finalIndex = maxIndex - 1;
  } else if (newIndex > maxIndex - 1) {
    finalIndex = 0;
  } else {
    finalIndex = newIndex;
  }

  return finalIndex;
};

export default calculateIndex;
