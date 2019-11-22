// splits items array into expired and undexpired
function splitExpr(items){
    currentDate = new Date();
    expiredItems = items.filter( elem => elem.expireDate <= currDate);
    goodItems = items.filter( elem => elem.expireDate > currDate);
    return [expiredItems, goodItems];
}

module.exports = {splitExpr}