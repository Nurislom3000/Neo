// describe("pow", function() {
//     before(function() { console.log('Obey me people')})
//     beforeEach(function() {console.log('each')})
//
//     describe("power of 3", function() {
//         function squarer(x) {
//             let result = x * x * x
//             it(`raises ${x} to 3-rd power and result is ${result}`, function() {
//                 assert.equal(pow(x, 3), result);
//             });
//             it('just in case', function() {
//                 assert.isNaN(pow(x, 3));
//             })
//         }
//
//         for (let i = 0; i < 10; i++) {
//             squarer(-i);
//         }
//     })
//
//     afterEach(function() {console.log('after each')})
//     after(function() { console.log('I won')})
//
// });