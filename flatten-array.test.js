const flatten = require('./flatten-array');

test('[[1,2,[3]],4] to return [1, 2, 3 , 4]', () => {
    expect(flatten([[1, 2, [3]], 4])).toEqual([1, 2, 3, 4]);
});

test('[1] to return [1]', () => {
    expect(flatten([1])).toEqual([1]);
});

test('[] to return []', () => {
    expect(flatten([])).toEqual([]);
});

test('\'not an array\' to return an exception', () => {
    expect(() => {
        flatten('not an array');
      }).toThrow(TypeError);
});