
const getPromise = () => {
    return new Promise((resolve, reject) => {
        try {
            // return resolve("Success");
            throw 'myException';
        } catch (error) {
            return reject("Error");
        }
    });
}

getPromise().then((data) => {
    console.log(data);
    return "Merhaba";
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})