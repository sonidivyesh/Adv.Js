let userData = [
    {
        name: "Hetul",
        age: 23,
        hobby: ["reading", "playing", "testing"],
    },
    {
        name: "Divyesh",
        age: 22,
        hobby: ["cricket", "badminton", "tennis"],
    },
    {
        name: "Vishvesh",
        age: 28,
        hobby: ["book reading", "hockey", "boxing"],
    },
];

// for (let i = 0; i < userData.length; i++) {
//     console.log(userData[i].name);
//     console.log(userData[i].age);
//     console.log(userData[i].hobby);
// }

for (let i = 0; i < userData.length; i++) {
    let all_hobbies = userData[i].hobby;
    // console.log(all_hobbies);
    let lastHobby = all_hobbies[all_hobbies.length - 1];
    // console.log(lastHobby);
    console.log(`${userData[i].name}'s last hobby is: ${lastHobby}`);
}