import Web3 from "web3";
import { ethers } from "ethers";
import { toast } from "react-toastify";

import configEIP2771_5 from "./configs/5/EIP2771.json";
import configCustom_EIP712Sign_5 from "./configs/5/Custom_EIP712Sign.json";
import configCustom_PersonalSign_5 from "./configs/5/Custom_PersonalSign.json";
import configEIP2771_80001 from "./configs/80001/EIP2771.json";
import configCustom_EIP712Sign_80001 from "./configs/80001/Custom_EIP712Sign.json";
import configCustom_PersonalSign_80001 from "./configs/80001/Custom_PersonalSign.json";

export const getConfig = (chainId) => {
  if (chainId === "5") {
    return {
      configCustom_PersonalSign: configCustom_PersonalSign_5,
      configEIP2771: configEIP2771_5,
      configCustom_EIP712Sign: configCustom_EIP712Sign_5,
    };
  } else if (chainId === "80001") {
    return {
      configCustom_PersonalSign: configCustom_PersonalSign_80001,
      configEIP2771: configEIP2771_80001,
      configCustom_EIP712Sign: configCustom_EIP712Sign_80001,
    };
  } else {
    return {
      configCustom_PersonalSign: configCustom_PersonalSign_80001,

      configEIP2771: configEIP2771_80001,
      configCustom_EIP712Sign: configCustom_EIP712Sign_80001,
    };
  }
};

export const getSignatureParametersWeb3 = (signature) => {
  const web3 = new Web3(window.ethereum);
  if (!web3.utils.isHexStrict(signature)) {
    throw new Error(
      'Given value "'.concat(signature, '" is not a valid hex string.')
    );
  }
  const r = signature.slice(0, 66);
  const s = "0x".concat(signature.slice(66, 130));
  let v = "0x".concat(signature.slice(130, 132));
  v = web3.utils.hexToNumber(v).toString();
  if (![27, 28].includes(Number(v))) v += 27;
  return {
    r: r,
    s: s,
    v: Number(v),
  };
};

export const getSignatureParametersEthers = (signature) => {
  if (!ethers.utils.isHexString(signature)) {
    throw new Error(
      'Given value "'.concat(signature, '" is not a valid hex string.')
    );
  }
  const r = signature.slice(0, 66);
  const s = "0x".concat(signature.slice(66, 130));
  let v = "0x".concat(signature.slice(130, 132));
  v = ethers.BigNumber.from(v).toString();
  if (![27, 28].includes(Number(v))) v += 27;
  return {
    r: r,
    s: s,
    v: Number(v),
  };
};


export const ExternalProvider = {
  isMetaMask: undefined,
  isStatus: undefined,
  host: undefined,
  path: undefined,
  sendAsync: function(request, callback) {},
  send: function(request, callback) {},
  request: function(request) { return Promise.resolve(); },
};


export const showErrorMessage = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showInfoMessage = (message) => {
  toast.info(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showSuccessMessage = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showSuccessMessagePending = (promise) => {
  toast.promise(promise, {
    pending: "Promise is pending",
    success: "Promise resolved 👌",
    error: "Promise rejected 🤯",
  });
};
