import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Web3 from 'web3';
import styled from 'styled-components';
import GlobalStyles from 'styles/global';
import { $cream } from 'styles/colors';
import { disableHighlight } from 'styles/mixins';
import Button from 'components/button/button';
import attemptMetamaskConnection from 'utils/attemptMetamaskConnection';
import { abi as BUTTON_ABI } from 'components/button/abi.json';

const BUTTON_ADDRESS = '0x719909e381A78E85a66e67d5530620234a773561';
console.log(BUTTON_ABI);
const Header = styled.div`
  color: ${$cream};
  background: #444;
  height: 60px;
  font-size: 20px;
  line-height: 3;
  padding: 0px 0px 0px 8px;
  ${disableHighlight}
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  useEffect(() => {
    (async function initWeb3() {
      if (!ethereum || !ethereum.isMetaMask) {
        throw new Error(`It appears you're unable to connect to the Ethereum network. Ensure you're using the Chrome browser, and then download the MetaMask extension to continue. 👉🏽 https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn`);
      }

      // Remove on 13 JAN 2020 — as it'll become default and the property deprecated
      ethereum.autoRefreshOnNetworkChange = false;

      window.web3 = new Web3(ethereum);
      const isRinkeby = (await window.web3.eth.net.getId()) === 4;
      if (!isRinkeby) {
        throw new Error(`Ensure your MetaMask client is set to the Rinkeby network.`);
      }

      const buttonContract = new window.web3.eth.Contract(BUTTON_ABI, BUTTON_ADDRESS);
      console.log(buttonContract);
      const cost = await buttonContract.methods.COST().call();
      console.log('cost:', cost);
    })();
  }, []);

  // Metamask deprecates `ethereum.selectedAddress` on 13 JAN 2020
  // Thenceforth, use `(await ethereum.send('eth_requestAccounts'))[0]` to retrieve address
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(ethereum.selectedAddress === null ? false : true);
  console.log('isMetamaskConnected:', isMetamaskConnected);
  console.log('selectedAddress:', ethereum.selectedAddress);

  return (
    <div>
      <GlobalStyles />
      <Header>The Button Game</Header>
      <ButtonContainer>
        <Button
          label={isMetamaskConnected ? 'click me' : 'connect to metamask'}
          buttonAddress={BUTTON_ADDRESS}
          onClickHandler={
            isMetamaskConnected ?
              () => console.log('begin game / track button trigger') :
              () => attemptMetamaskConnection(setIsMetamaskConnected)
          }
        />
      </ButtonContainer>
    </div>
  );
}

export default hot(App);
