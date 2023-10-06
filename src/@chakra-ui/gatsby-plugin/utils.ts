export const percentageWidths = (
  divisions: number,
  part: string,
  property = 'maxW'
) => {
  let result: Record<string, any> = {};

  for (let i = 1; i <= divisions; i++) {
    const name = i === divisions ? 'full' : `${i}/${divisions}`;
    const w = Number((i / divisions) * 100).toFixed(4);
    result[name] = {
      [part]: {
        [property]: `${+w}%`,
      },
    };
  }

  return result;
};

percentageWidths;
