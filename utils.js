const addExpences = (category, amount, expencesTable) => {
  for (let i = 0; i < expencesTable.length; i++) {
    if (expencesTable[i]["type"] == category) {
      expencesTable[i]["amount"] += Number(amount)
      return
    };
  }
  expencesTable.push({ "type": category, "amount": Number(amount) })
}

module.exports = {
  addExpences
}
