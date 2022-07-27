const { fizzbuzz } = require('../src/fizzbuzz')


describe("fizzbuzz", () => {
   
   describe("Input is multiple of 3", () => {
        let spyOnConsole; 
	beforeEach(() => {
           spyOnConsole = jest.spyOn(console, 'log');
	})

	afterEach(() => {
	   jest.clearAllMocks();
	})

   	it("should print 'Fizz' when input is multiple of 3", () => {
		fizzbuzz(3);
		expect(spyOnConsole).toHaveBeenCalledWith('Fizz')
   	})
   
   	it("should not print 'Fizz' when input is not multiple of 3", () => {
        	fizzbuzz(5);
        	expect(spyOnConsole).not.toHaveBeenCalledWith('Fizz')
   	})
   
   })
})
