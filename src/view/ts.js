async freeTon() {
    const userAddress = this.userWallets.addres;

    // Добавляем транзакцию в базу "transactionUSDT"
    const usdtTransactionRef = doc(db, "transactionUSDT", userAddress);
    await this.addTransaction(usdtTransactionRef, {
      text: "Received",
      guesAddress: userAddress,
      ton: 5 / 5.75,
      usdt: "+" + 5 + "USDT",
      comment: "Add +5 USDT",
      date: "Received " + this.getFormattedDateTime(),
      time: this.getTime(),
      transaction: this.generateCustomUUID(),
      fee: 0,
    });

    // Добавляем транзакцию в базу "transaction"
    const tonTransactionRef = doc(db, "transaction", userAddress);
    await this.addTransaction(tonTransactionRef, {
      text: "Received",
      guesAddress: userAddress,
      ton: 5 / 5.75,
      usdt: "+" + 5 + "USDT",
      comment: "Add +5 USDT",
      date: "Received " + this.getFormattedDateTime(),
      time: this.getTime(),
      transaction: this.generateCustomUUID(),
      fee: 0,
    });
    this.updateAddUSDT();
  },