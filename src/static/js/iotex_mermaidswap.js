
$(function() {
    consoleInit(main)
      });
    
    const PANCAKE_CHEF_ABI = [
        {
          "inputs": [
            {
              "internalType": "contract Mermaid",
              "name": "_merd",
              "type": "address"
            },
            {
              "internalType": "contract IMerdReferral",
              "name": "_merdReferral",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_startBlock",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "pid",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Deposit",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "pid",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "EmergencyWithdraw",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "caller",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "previousAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newAmount",
              "type": "uint256"
            }
          ],
          "name": "EmissionRateUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "referrer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "commissionAmount",
              "type": "uint256"
            }
          ],
          "name": "ReferralCommissionPaid",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "pid",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amountLockedUp",
              "type": "uint256"
            }
          ],
          "name": "RewardLockedUp",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "pid",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Withdraw",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_allocPoint",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "contract IBEP20",
              "name": "_lpToken",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint16",
              "name": "_withdrawFeeBP",
              "type": "uint16"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "_withUpdate",
              "type": "bool"
            }
          ],
          "name": "addEvent",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [],
          "name": "massUpdatePoolEvent",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "_newDevAddress",
              "type": "address"
            }
          ],
          "name": "setDevAddressEvent",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_pid",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_allocPoint",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint16",
              "name": "_withdrawFeeBP",
              "type": "uint16"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "_withUpdate",
              "type": "bool"
            }
          ],
          "name": "setEvent",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "_feeAddress",
              "type": "address"
            }
          ],
          "name": "setFeeAddressEvent",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "contract IMerdReferral",
              "name": "_newAddress",
              "type": "address"
            }
          ],
          "name": "setReferralAddressEvent",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_newRate",
              "type": "uint256"
            }
          ],
          "name": "setReferralCommissionRateEvent",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "EMISSION_REDUCTION_PERIOD_BLOCKS",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "EMISSION_REDUCTION_RATE_PER_PERIOD",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "INITIAL_EMISSION_RATE",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MAXIMUM_REFERRAL_COMMISSION_RATE",
          "outputs": [
            {
              "internalType": "uint16",
              "name": "",
              "type": "uint16"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_allocPoint",
              "type": "uint256"
            },
            {
              "internalType": "contract IBEP20",
              "name": "_lpToken",
              "type": "address"
            },
            {
              "internalType": "uint16",
              "name": "_withdrawFeeBP",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "_withUpdate",
              "type": "bool"
            }
          ],
          "name": "add",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "burnAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_pid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_referrer",
              "type": "address"
            }
          ],
          "name": "deposit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "devAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_pid",
              "type": "uint256"
            }
          ],
          "name": "emergencyWithdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "feeAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_from",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_to",
              "type": "uint256"
            }
          ],
          "name": "getMultiplier",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "lastReductionPeriodIndex",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "massUpdatePools",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "merd",
          "outputs": [
            {
              "internalType": "contract Mermaid",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "merdPerBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "merdReferral",
          "outputs": [
            {
              "internalType": "contract IMerdReferral",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_pid",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_user",
              "type": "address"
            }
          ],
          "name": "pendingMerd",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract IBEP20",
              "name": "",
              "type": "address"
            }
          ],
          "name": "poolExistence",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "poolInfo",
          "outputs": [
            {
              "internalType": "contract IBEP20",
              "name": "lpToken",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "allocPoint",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastRewardBlock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "accMerdPerShare",
              "type": "uint256"
            },
            {
              "internalType": "uint16",
              "name": "withdrawFeeBP",
              "type": "uint16"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "poolLength",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "referralCommissionRate",
          "outputs": [
            {
              "internalType": "uint16",
              "name": "",
              "type": "uint16"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_pid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_allocPoint",
              "type": "uint256"
            },
            {
              "internalType": "uint16",
              "name": "_withdrawFeeBP",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "_withUpdate",
              "type": "bool"
            }
          ],
          "name": "set",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_burnWallet",
              "type": "address"
            }
          ],
          "name": "setBurnWallet",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_devAddress",
              "type": "address"
            }
          ],
          "name": "setDevAddress",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_feeAddress",
              "type": "address"
            }
          ],
          "name": "setFeeAddress",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract IMerdReferral",
              "name": "_merdReferral",
              "type": "address"
            }
          ],
          "name": "setMerdReferral",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint16",
              "name": "_referralCommissionRate",
              "type": "uint16"
            }
          ],
          "name": "setReferralCommissionRate",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "startBlock",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalAllocPoint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "updateEmissionRate",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_pid",
              "type": "uint256"
            }
          ],
          "name": "updatePool",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "userInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardDebt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "rewardLockedUp",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_pid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]

    async function main() {
        const App = await init_ethers();
    
        _print(`Initialized ${App.YOUR_ADDRESS}\n`);
        _print("Reading smart contracts...\n");
    
       const PANCAKE_CHEF_ADDR = "0xA8d3F6D1deA173A262f7dDb74A15c15858Cb0113";
       const rewardTokenTicker = "MERD";
       const PANCAKE_CHEF = new ethers.Contract(PANCAKE_CHEF_ADDR, PANCAKE_CHEF_ABI, App.provider);
    
       const rewardsPerWeek = await PANCAKE_CHEF.merdPerBlock() /1e18
            * 604800 / 3;
    
        const tokens = {};
        const prices = await getIotexPrices();
    
        await loadGeneralEthcallChefContract(App, tokens, prices, PANCAKE_CHEF, PANCAKE_CHEF_ADDR, PANCAKE_CHEF_ABI, rewardTokenTicker,
            "merd", null, rewardsPerWeek, "pendingMerd", [], "iotex");
    
        hideLoading();
      }
    