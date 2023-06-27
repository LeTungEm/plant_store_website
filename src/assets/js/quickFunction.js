
const Buffer = require('buffer').Buffer;
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
const encodeEmail = (email) => {
    const encodedEmail = Buffer.from(email).toString('base64');
    return encodedEmail;
}

const decodeEmail = (encodedEmail) => {
    const decodedEmail = Buffer.from(encodedEmail, 'base64').toString('utf8');
    return decodedEmail;
}

const getCurrentTime = () => {
    let date = new Date();
    let day = date.getDate();
    day = day >= 10 ? day : `0${day}`;
    let month = date.getMonth();
    month = month >= 10 ? month : `0${month}`;
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
}
export { scrollToTop, encodeEmail, decodeEmail, getCurrentTime }