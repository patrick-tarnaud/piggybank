import banking from 'banking'
import Account from '@/model/account'
import Transaction from '@/model/transaction'

const importOfxFile = (filename, callback) => {
  banking.parseFile(filename, data => {
    let ofxAccount = data.body.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.BANKACCTFROM
    let account = new Account(ofxAccount.ACCTID, ofxAccount.BANKID, ofxAccount.BRANCHID)
    let ofxTransactions = data.body.OFX.BANKMSGSRSV1.STMTTRNRS.STMTRS.BANKTRANLIST.STMTTRN
    let transactions = ofxTransactions.map(
      tx =>
        new Transaction(
          tx.FITID,
          new Date(tx.DTPOSTED.substring(0, 4), tx.DTPOSTED.substring(4, 6), tx.DTPOSTED.substring(6, 8)),
          tx.TRNTYPE,
          tx.NAME,
          tx.MEMO,
          tx.TRNAMT
        )
    )
    account.setTransactions(transactions)
    callback(account)
  })
}

export { importOfxFile }
