import convertModelToPojo from './convertModelToPojo.js';

describe('convertModelToPojo()', () => {
  test('handles singular model results', () => {
    const model = {
      dataValues: {
        prop0: true,
        prop1: 1,
        prop2: 'two',
      },
    };

    expect(convertModelToPojo(model)).toStrictEqual(model.dataValues);
  });

  test('handles an array of results', () => {
    const model0 = {
      dataValues: {
        prop0: true,
        prop1: 1,
        prop2: 'two',
      },
    };
    const model1 = {
      dataValues: {
        prop0: false,
        prop1: 7,
        prop2: 'four',
      },
    };

    expect(convertModelToPojo([model0, model1]))
      .toStrictEqual([model0.dataValues, model1.dataValues]);
  });
});
