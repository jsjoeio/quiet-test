"use strict";
/*
function that takes in an array of values and checks for duplicates
- values: strings
- returns a boolean, true are duplicates, false no dups


server
client

requirements:
- no duplicates in serverValues or clientValues
-

Approach:
1. get logic working
2. server

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasDuplicates = void 0;
function hasDuplicates(serverValues, clientValues) {
    const seenSet = new Set();
    const allValues = [...serverValues, ...clientValues];
    for (const str of allValues) {
        // time complexity O(1)
        if (seenSet.has(str)) {
            return true; // Duplicate found
        }
        seenSet.add(str);
    }
    return false;
}
exports.hasDuplicates = hasDuplicates;
