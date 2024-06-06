// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

interface IEurocupLegends {
    struct Creator {
        address creator;
        uint256 share;
    }

    event WinnersSet(address[] winners);
}