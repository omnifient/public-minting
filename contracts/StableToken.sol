//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract StableToken is ERC20 {
    constructor() ERC20("StableToken", "STABLE") {}

    function publicMint(uint256 amount) external {
        _mint(msg.sender, amount);
    }
}
