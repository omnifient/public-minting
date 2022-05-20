//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;

import {SuperTokenBase} from "./base/SuperTokenBase.sol";
import "hardhat/console.sol";

contract SuperETHGlobalToken is SuperTokenBase {
    function initialize(address factory) external {
        _initialize("Super ETHGlobal Token", "ETHGx", factory);
    }

    function publicMint(uint256 amount) external {
        _mint(msg.sender, amount, new bytes(0));
    }
}
