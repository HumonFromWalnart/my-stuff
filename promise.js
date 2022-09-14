const myFunc = new Promise((resolve, reject) => {
    const num = parseInt(Math.random() * 1000);
    if (isNaN(num)) {
        reject("NaN");
    }
    if (num % 2 == 0) {
        setTimeout(() => {
            resolve("even");
        }, 200)
    } else {
        setTimeout(() => {
            reject("odd");
        }, 100);
    }
})
const scndFunc = () => {
    myFunc
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
}
const youFellForItFool = () => {
    const text = async () => {
        const value = await scndFunc();
        console.log("Yo numba is da" + value);
        const response = await fetch("https://www.randomuser.me/api/?results=50");
        let data = await response.json();
        console.log(data);
    }
}
scndFunc();
