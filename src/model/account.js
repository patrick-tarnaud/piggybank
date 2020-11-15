class Account {
  constructor(accountId, bankId, branchId) {
    this.accountId = accountId
    this.bankId = bankId
    this.branchId = branchId
    this.transactions = []
  }

  get id() {
    return `${this.bankId}${this.branchId}${this.accountId}`
  }

  /**
   * Set transactions
   * @param {Transaction[]} transactions
   * @returns this
   */
  setTransactions(transactions) {
    this.transactions = transactions
    return this
  }

  /**
   * Add a transaction
   * @param {Transaction} transaction
   * @returns this
   */
  addTransaction(transaction) {
    this.transactions.push(transaction)
    return this
  }

  /**
   * Remove a transaction from id
   * @param {string} idTransaction
   */
  removeTransaction(idTransaction) {
    this.transactions = this.transactions.filter(tx => tx.id !== idTransaction)
    return this
  }

  /**
   * Equality test
   * @param {Account} account
   * @returns true if equals
   */
  equals(account) {
    return account instanceof Account && this.accountId === account.accountId && this.bankId === account.bankId && this.branchId === account.branchId
  }
}

export default Account
