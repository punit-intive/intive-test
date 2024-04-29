const getLinearGradient = colors => {
  const underlineColors = colors?.split(";");
  const spacesForColors = 80;
  const gradient = [];

  if (!underlineColors?.length) {
    return `background-image: linear-gradient(90.00deg, #85cafd 0%, #ff93c4 100%);`;
  }

  if (underlineColors.length === 1) {
    return `background-color: ${underlineColors[0]}`;
  }

  gradient.push(`${underlineColors[0]} 0%`);

  const iterationCount = underlineColors.length - 2;
  const spaceToDist = spacesForColors / (underlineColors.length - 2);

  for (let i = 0; i < iterationCount; i += 1) {
    const colorIndex = i + 1;
    const spaceToDistCalculated = iterationCount === 1 ? "50" : spaceToDist * colorIndex;

    gradient.push(`${underlineColors[colorIndex]} ${spaceToDistCalculated}%`);
  }

  gradient.push(`${underlineColors[underlineColors.length - 1]} 100%`);

  return `background-image: linear-gradient(90.00deg, ${gradient.join(", ")});`;
};

export default getLinearGradient;
