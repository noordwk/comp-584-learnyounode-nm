// Create variable to hold total sum
let sum = 0;

// Start at index 2 because:
// argv[0] = node path
// argv[1] = filename
for (let i = 2; i < process.argv.length; i++) {

    // Convert string input to number and add it
    sum += Number(process.argv[i]);
}

// Print final total
console.log(sum);