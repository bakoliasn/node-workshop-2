function fortune() {
    var fortunes = ["you will die", "i will kill you", "we will die", "we will be killed", "everyone will die"];
    var f = fortunes[Math.floor(Math.random() * fortunes.length)];
    return f;
}

module.exports = {
    getFortune: fortune,
};