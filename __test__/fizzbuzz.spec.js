const { fizzbuzz } = require('../src/fizzbuzz')


describe("fizzbuzz", () => {

   it("Should print 'Fizz' when input is multiple of 3", () => {
	const spyOnConsole = jest.spyOn(console, 'log');
	fizzbuzz(3);
	expect(spyOnConsole).toHaveBeenCalledWith('Fizz')
   })
})
