const m = require('..');

test('should instanceof Module', () => {
	expect(m.isModule(module)).toBe(true);
});
