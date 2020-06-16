// WHILE: pergunta primeiro, executa depois
var c = 0
while (c <= 6){
    console.log(`Log ${c}: tudo bem?`)
    c++
} 

// DO: executa primeiro, pergunta depois
do {
    console.log(`Log ${c}: tudo bem?`)
    c++
} while (c <= 6)

// FOR: o mais delicinha de todos. for('início';'condição';'incremento')
for (c==0 ; c <= 6 ; c++) {
    console.log(`Log ${c}: tudo bem?`)
}
