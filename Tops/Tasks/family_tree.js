let grandFather = {
    name: "Rameshbhai",
    age: 72,
    son: [
        {
            name: "Paragbhai",
            age: 53,
            occupation: "Businessmen",
            vehicle: [
                {
                    name: "Bike",
                    number: 5161,
                }
            ],
            children: [
                {
                    name: "Divyesh",
                    age: 23,
                },
                {
                    name: "Vishvesh",
                    age: 28,
                }
            ]
        },
        {
            name: "Jigneshbhai",
            age: 48,
            occupation: "Businessmen",
            vehicle: [
                {
                    name: "Activa",
                    number: 2598,
                }
            ],
            children: [
                {
                    name: "Hetul",
                    age: 23,
                },
                {
                    name: "Riddhi",
                    age: 15,
                }
            ]
        },
        {
            name: "Amitbhai",
            age: 56,
            occupation: "Businessmen",
            vehicle: [
                {
                    name: "Car",
                    number: 8511,
                }
            ],
            children: [
                {
                    name: "Pranshi",
                    age: 7,
                }
            ]
        }
    ]
}


// console.log('Grandfather Name: ', grandFather.name);
// console.log('Grandfather Age: ', grandFather.age);
// console.log('Grandfather"s Sons: ', grandFather.son[0].children[0].name);

let a = 1;
for (let i = 0; i < grandFather.son.length; i++) {
    let son = grandFather.son[i];
    console.log(`Grandfather Son${a++}:`, son.name);

    let b = 1;
    for (let j = 0; j < son.children.length; j++) {
        console.log(`Son Children${b++}: `, son.children[j].name);
    }
}

