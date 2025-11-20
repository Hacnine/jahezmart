const crypto = require('crypto');

// Generate a secure random secret for NEXTAUTH_SECRET
const secret = crypto.randomBytes(32).toString('base64');

console.log('\n========================================');
console.log('Generated NEXTAUTH_SECRET:');
console.log('========================================\n');
console.log(secret);
console.log('\n========================================');
console.log('Add this to your .env.local file:');
console.log('========================================\n');
console.log(`NEXTAUTH_SECRET=${secret}`);
console.log('\n');
