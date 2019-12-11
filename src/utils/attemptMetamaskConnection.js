async function attemptMetamaskConnection(setIsMetamaskConnected) {
  // ATTEMPT LOG IN
  try {
    const account = (await ethereum.enable())[0];
    // TODO: Convert to
    // (await ethereum.send('eth_requestAccounts'))[0]
    // on or after 13 JAN 2020
    console.log('account:', account);
    setIsMetamaskConnected(true);
  } catch (error) {
    console.error('MetaMask access denied by user.');
    console.error(error);
  }
}

export default attemptMetamaskConnection;
