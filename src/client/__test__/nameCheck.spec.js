import { nameCheck } from "../js/nameCheck"

//this section of the code to see if the formHandler is working 
describe("Testing to see if the user's name is being checked", () => {
    test("Testing the nameCheck() function to make sure it is working", () => {
           expect(nameCheck).toBeDefined();
})});