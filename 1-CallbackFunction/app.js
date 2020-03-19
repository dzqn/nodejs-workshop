
function f1(callback1, callback2, callback3) {
    setTimeout(() => {
        console.log("1");
        callback1(callback2, callback3)
    }, 3300);

}

function f2(callback1, callback2) {
    setTimeout(() => {
        console.log("2");
        callback1(callback2);
    }, 200);

}

function f3(callback1) {
    setTimeout(() => {
        console.log("3");
        callback1();
    }, 2000);
}

function f4() {
    setTimeout(() => {
        console.log("4");
    }, 100);
}

f1(f2, f3, f4);