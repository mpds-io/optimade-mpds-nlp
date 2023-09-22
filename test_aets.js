#!/usr/bin/env node

const nlp = require('./index');

const guesser = nlp();

function test_main(input){

    var result = guesser.parse_aeatoms(input);

    return input + " -> center: " + result[0] + " ligand: " + result[1];
}

console.log( test_main('U') );
console.log( test_main('fe') );
console.log( test_main('D') );
console.log( test_main('X') );
console.log( test_main('Z') );
console.log( test_main('X-X') );
console.log( test_main('x-x') );
console.log( test_main('x-x9') );
console.log( test_main('X-Se') );
console.log( test_main('X-U-F') );
console.log( test_main('Se-X') );
console.log( test_main('fe-cusila6') );
console.log( test_main('x-xxxx') );
console.log( test_main('x-coseru') );
console.log( test_main('Se2-X') );
console.log( test_main('Se-X22') );
console.log( test_main('Se-X2.2') );
console.log( test_main('Se-ZX') );
console.log( test_main('Se-XB') );
console.log( test_main('coseru') );
console.log( test_main('COSErU') );
console.log( test_main('NO3') );
console.log( test_main('No3') );
console.log( test_main('no3') );
console.log( test_main('OX6') );
console.log( test_main('XO6') );
console.log( test_main('UO6') );
console.log( test_main('UX6') );
console.log( test_main('XX') );
console.log( test_main('XX6') );
console.log( test_main('xX') );
console.log( test_main('Xx') );
console.log( test_main('xeo2u') );
console.log( test_main('XeXe1000') );
console.log( test_main('FXe2[H2O]2') );
console.log( test_main('U2X6') );
console.log( test_main('U0.02X0.07') );
console.log( test_main('CaLaX2SXe') ); // KNOWN ISSUE: FIXME???
console.log( test_main('sixsam') );
console.log( test_main('SIXSAm') ); // KNOWN ISSUE: FIXME???
console.log( test_main('UBX') ); // KNOWN ISSUE: FIXME???
console.log( test_main('ZZZ') );
console.log( test_main('poni') );
console.log( test_main('PONI') );
console.log( test_main('posra') );
console.log( test_main('POsRa') );
console.log( test_main('POSRa') );
console.log( test_main('+++') );
console.log( test_main('.\\') );
console.log( test_main('эй!') );
console.log( test_main('? &nbsp;;') );
