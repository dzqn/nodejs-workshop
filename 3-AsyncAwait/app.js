
const user = { name: "Ali", Surname: "Kaya" };
const userFriends = [
    { name: "Ayşe", Surname: "Akar" },
    { name: "Veli", Surname: "Kaya" },
    { name: "Kaya", Surname: "Kaya" }
];

let GetUser = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(user);
        }, 2000);
    });
}

let GetUserFriend = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(userFriends);
        }, 500);
    });
}

async function main() {
    try {
        let a = await GetUser();
        let b = await GetUserFriend();
        console.log(a);
        console.log(b);
    } catch (error) {
        console.log(error);
    }

}

main();



