const { fizzbuzz } = require('../src/fizzbuzz')


describe("fizzbuzz", () => {
   
     let spyOnConsole;
        beforeEach(() => {
           spyOnConsole = jest.spyOn(console, 'log');
        })

        afterEach(() => {
           jest.clearAllMocks();
        })

   describe("Input is multiple of 3", () => {

   	it("should print 'Fizz' when input is multiple of 3", () => {
		fizzbuzz(3);
		expect(spyOnConsole).toHaveBeenCalledWith('Fizz')
   	})
   
   	it("should not print 'Fizz' when input is not multiple of 3", () => {
        	fizzbuzz(5);
        	expect(spyOnConsole).not.toHaveBeenCalledWith('Fizz')
   	})
   
   })

     describe("Input is multiple of 5", () => {

        it("should print 'Buzz' when input is multiple of 5", () => {
                fizzbuzz(5);
                expect(spyOnConsole).toHaveBeenCalledWith('Buzz')
        })

        it("should not print 'Buzz' when input is not multiple of 5", () => {
                fizzbuzz(2);
                expect(spyOnConsole).not.toHaveBeenCalledWith('Buzz')
        })

   })
})
