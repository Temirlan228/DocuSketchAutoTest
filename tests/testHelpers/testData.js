function getRandomInt() {
    return Math.floor(Math.random() * 10000);
}

const getRandomEmail = () => {
    const num = getRandomInt();
    return `testemail${num}@gmail.com`;
}


export const firstName = 'TestName';
export const lastName = 'Test';
export const email = getRandomEmail();
export const companyName = 'TestCompany';
export const phoneNumber = '131313131';
export const password = 'newTest123$';
