// Import urlChecker function from urlCheck.js
import { urlChecker } from "../src/client/js/urlCheck";
// The describe() function
describe("Testing the URL validity", () => {
    // The test() function
    test("Testing the checkForName() function", () => {
        expect(urlChecker).toBeDefined();
    })
});