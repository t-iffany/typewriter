// Take a sentence and display it as an animation
// animate the sentence, revealing one character at a time
// console.log adds a new line character (\n) to the end of the string
// process.stdout.write avoids adding extra new line character
// prints all characters on single line

                  // string
const sentence = "hello there from lighthouse labs";
// define delay so we can adjust it later
let delay = 0;
// loop through each character of the string and output it to console
for (const char of sentence) {
  // use setTimeout to get letters to appear with a delay
  // add setTimeout call WITHIN the loop   
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);       // instead of console.log(char);  
  }, delay);                          // when first char appears, has delay of 'delay = 0'
  delay += 90;     // each char appears with delay of 90ms longer than the previous char
}
// output a newline character before exiting, so next prompt starts on its own line
setTimeout(() => {
  process.stdout.write("\n");
}, delay);