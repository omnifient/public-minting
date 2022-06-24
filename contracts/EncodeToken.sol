//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract EncodeToken is ERC20 {
    constructor() ERC20("EncodeToken", "ENC") {}

    function publicMint(uint256 amount) external {
        _mint(msg.sender, amount);
    }
}
