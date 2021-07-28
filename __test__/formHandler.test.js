// Import handle submit function from formhandler.js 
import { handleSubmit } from "../src/client/js/formHandler";
// The describe() function
describe("Testing the submit functionality", () => {
    // The test() function
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
});