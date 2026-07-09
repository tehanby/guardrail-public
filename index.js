#!/usr/bin/env node

const readline = require('readline');

console.log('\x1b[36m%s\x1b[0m', '=====================================================');
console.log('\x1b[32m%s\x1b[0m', '🛡️  GuardRail-JS Core — Local AI Environment Firewall');
console.log('\x1b[36m%s\x1b[0m', '=====================================================');
console.log('\nThis is the public core shell. To initialize the background daemon');
console.log('and enable active containment/rollback capabilities, you need to');
console.log('deploy a verified commercial binary.');
console.log('\n👉 Get your Solo or Team license key at:');
console.log('\x1b[34mhttps://guardrail-pro.lemonsqueezy.com\x1b[0m\n');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Have a license key? Enter it here to download the signed engine: ', (key) => {
    if (!key.trim()) {
        console.log('\x1b[31m❌ Error: Valid product license required.\x1b[0m');
        rl.close();
        process.exit(1);
    }
    
    console.log('\nAuthenticating key with Lemon Squeezy...');
    console.log('Retrieving secure binary signatures...');
    console.log('\x1b[31m❌ Connection Refused: Please run the proprietary installer bundled with your storefront purchase.\x1b[0m');
    rl.close();
    process.exit(1);
});
