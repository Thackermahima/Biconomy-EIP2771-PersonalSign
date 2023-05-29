// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@opengsn/contracts/src/ERC2771Recipient.sol";
contract TestContract is ERC2771Recipient{
  
    address public admin;
    string public quote;
    address public owner;

   constructor() public {
    admin = _msgSender();
   }
   modifier onlyOwner(){
    require(_msgSender() == admin, "You're not the Admin");
    _;
   }
  function setTrustedForwarder(address _trustedForwarder) public onlyOwner{
    _setTrustedForwarder(_trustedForwarder);  }

  function setQuote(string memory newQuote) public{
    quote = newQuote;
    owner = _msgSender();
   }

   function getQuote() view public returns(string memory currentQuote, address currentOwner){
      currentQuote = quote;
      currentOwner = owner;
   }
//    function versionRecipient() external view override returns (string memory) {
//     return "1";
// }

}
