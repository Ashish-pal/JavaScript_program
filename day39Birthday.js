function generateBirthMonth(){
    return Math.floor(Math.random() * 12) + 1;
}

const individuals = Array.from({ length: 50 }, () => {
const birthYear = Math.floor(Math.random() * 2) + 1992;
const birthMonth = generateBirthMonth();
return `${birthMonth}/${birthYear}`;
});

const birthdayByMonth = individuals.reduce((acc, individual) => {
    const [birthMonth] = individual.split('/');
    if (!acc[birthMonth]) {
        acc[birthMonth] = [];
    }
    acc[birthMonth].push(individual);
    return acc;
}, {});

for (const month in birthdayByMonth) {
    console.log(`Month ${month}: ${birthdayByMonth[month].join(", ")}`);
}