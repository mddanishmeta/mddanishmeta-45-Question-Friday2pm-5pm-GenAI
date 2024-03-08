// lowercash
let personName: string ="Danish"
console.log("lowercase:",personName.toLowerCase());

// uppercase
console.log("uppercase:", personName.toUpperCase());

// title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
