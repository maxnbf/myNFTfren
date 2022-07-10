import { send } from 'emailjs-com';
import { ethers } from "ethers";

export const submitPayment = async (eth, emailData, handleModal, setSubmitError) => {

    send(
        'service_20i65q8',
        'template_qx172bf',
        {
          from_name: emailData.name,
          ethwallet: emailData.ethwallet,
          sollwallet: emailData.ethwallet,
          twitter: emailData.twitter,
          additionalInfo: emailData.additional,
          reply_to: emailData.email,
        },
        'c9hwMGoB3VT_WRnjK',
      ).then(() => {
        useMakeTransaction(eth, handleModal, setSubmitError)
      })
}

export const useMakeTransaction = async (eth, handleModal, setSubmitError) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    const signer = provider.getSigner();
    ethers.utils.getAddress('0xB538BE3AE46C8F7A0a8Fe8916cfb097058ca3d31');
    await signer.sendTransaction({
      to:  '0xB538BE3AE46C8F7A0a8Fe8916cfb097058ca3d31',
      value: ethers.utils.parseEther(eth)
    }).then(() => handleModal()).catch(err => setSubmitError(true));

}