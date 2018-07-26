const common = require('../common');

const adviceList = [
    "Тобі варто поспати",
    "Можливо краще піти поїсти?;)",
    "Послухай музику",
    "Займись йогою, я часто цим займаюсь",
];

function adviceHandler() {
    let randomInt = common.getRandomInt(0, adviceList.length + 1);
    return adviceList[randomInt];
}

module.exports = adviceHandler;