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

Questions:
1. How is it that seen set doesn't grow as big as the array? 
2.  

["hello", "world"]
["goodbye", world]

["hello", "world", "goodbye", world]

set {
    hello: 2,
    world: 1,
    goodbye: 1
}
chunk 1: hello, world -> no duplicates
chunk 2: goodbye, world -> no duplicates

*/

export function hasDuplicates(
  serverValues: Array<string>,
  clientValues: Array<string>,
  chunkSize = 100
): boolean {
  const seenSet = new Set<string>();
  const allValues = [...serverValues, ...clientValues];

  /* 

  1. grab a chunk
  2. process it
  3. repeat until all chunks processed
  
  */

  for (let i = 0; i < allValues.length; i += chunkSize) {
    const chunk = serverValues.slice(i, i + chunkSize);

    for (const str of chunk) {
      if (seenSet.has(str)) {
        return true; // Duplicate found
      }
      seenSet.add(str);
    }
  }

  return false;
}
