const random = () => {
    const randomNumbers = [];

    for (let i = 0; i < 10; i++) {
        randomNumbers.push(Math.floor((Math.random() * 16) + 5));
    }

    return randomNumbers;
};

const displayNumbers = (array) => array.forEach((item) => console.log(item));

const array = random();

displayNumbers(array);

