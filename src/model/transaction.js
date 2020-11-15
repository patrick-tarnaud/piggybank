const TransactionTypeEnum = {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT',
}

class Transaction {
  /**
   * Constructor
   *
   * @param {string} id
   * @param {date} date
   * @param {TransactionTypeEnum} type
   * @param {string} name
   * @param {string} memo
   * @param {number} amount
   */
  constructor(id, date, type, name, memo, amount) {
    this.id = id
    this.date = date
    this.type = type
    this.name = name
    this.memo = memo
    this.amount = amount
  }
}

export default Transaction
export { TransactionTypeEnum }
