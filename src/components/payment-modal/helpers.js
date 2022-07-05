import { send } from 'emailjs-com';
import { ethers } from "ethers";

export const submitPayment = async (eth, emailData, handleModal) => {

    let message = "Eth Wallet:".concat(" ", emailData.ethwallet).concat("  Sol Wallet:", emailData.solwallet)
    message = message.concat("  Additional Info: ", emailData.additional);

    send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        {
          from_name: emailData.name,
          to_name: 'Max Breslauer-Friedman',
          message: message,
          reply_to: emailData.email,
        },
        process.env.REACT_APP_EMAIL_USER_ID,
      ).then(() => {
        useMakeTransaction(eth, handleModal)
      })
}

export const useMakeTransaction = async (eth, handleModal) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    const signer = provider.getSigner();
    ethers.utils.getAddress(process.env.REACT_APP_WALLET_ADDRESS);
    
    await signer.sendTransaction({
      to:  process.env.REACT_APP_WALLET_ADDRESS,
      value: ethers.utils.parseEther(eth)
    }).then(() => handleModal()).catch(err => console.log('hello'));

}