const AwkwardSkeletonClubArtifact = {
  address: {
    1: "0x5c264E7c519Ec468DcD6Af63A84308497733D67F",
    4: "0x9d1292498C66d96AB30db9a2097935590DbB6310",
  },
  abi: [
    {
      "inputs": [
        { 
        "internalType": "address[]", 
        "name": "_team", 
        "type": "address[]"
        },
        { 
        "internalType": "uint256[]", 
        "name": "_teamShares", 
        "type": "uint256[]"
        },
        {
        "internalType": 
        "bytes32", 
        "name": "_merkleRoot", 
        "type": "bytes32" 
        },
        { 
        "internalType": "string", 
        "name": "_baseURI", 
        "type": "string" 
        },
        { 
        "internalType": "string", 
        "name": "_hiddenURI", 
        "type": "string" 
        },
      ],
      "stateMutability": "nonpayable",
      "type": "constructor",
    },
    { 
    "inputs": [], 
    "name": "ApprovalCallerNotOwnerNorApproved", 
    "type": "error" 
    },
    { 
    "inputs": [], 
    "name": "ApprovalQueryForNonexistentToken", 
    "type": "error" 
    },
    { 
    "inputs": [], 
    "name": "ApprovalToCurrentOwner", 
    "type": "error" },
    { "inputs": [], "name": "ApproveToCaller", "type": "error" },
    { "inputs": [], "name": "BalanceQueryForZeroAddress", "type": "error" },
    { "inputs": [], "name": "MintToZeroAddress", "type": "error" },
    { "inputs": [], "name": "MintZeroQuantity", "type": "error" },
    { "inputs": [], "name": "OwnerQueryForNonexistentToken", "type": "error" },
    { "inputs": [], "name": "TransferCallerNotOwnerNorApproved", "type": "error" },
    { "inputs": [], "name": "TransferFromIncorrectOwner", "type": "error" },
    {
      "inputs": [],
      "name": "TransferToNonERC721ReceiverImplementer",
      "type": "error",
    },
    { "inputs": [], "name": "TransferToZeroAddress", "type": "error" },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
         "internalType": "address",
          "name": "owner",
          "type": "address",
        },
        {
          "indexed": true,
         "internalType": "address",
          "name": "approved",
          "type": "address",
        },
        {
          "indexed": true,
         "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256",
        },
      ],
      "name": "Approval",
      "type": "event",
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internaType": "address",
          "name": "owner",
          "type": "address",
        },
        {
          "indexed": true,
         "internalType": "address",
          "name": "operator",
          "type": "address",
        },
        {
          "indexed": false,
         "internalType": "bool",
          "name": "approved",
          "type": "bool",
        },
      ],
      "name": "ApprovalForAll",
      "type": "event",
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
         "internalType": "contract IERC20",
          "name": "token",
          "type": "address",
        },
        {
          "indexed": false,
         "internalType": "address",
          "name": "to",
          "type": "address",
        },
        {
          "indexed": false,
         "internalType": "uint256",
          "name": "amount",
          "type": "uint256",
        },
      ],
      "name": "ERC20PaymentReleased",
      "type": "event",
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
         "internalType": "address",
          "name": "previousOwner",
          "type": "address",
        },
        {
          "indexed": true,
         "internalType": "address",
          "name": "newOwner",
          "type": "address",
        },
      ],
      "name": "OwnershipTransferred",
      "type": "event",
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
         "internalType": "address",
          "name": "account",
          "type": "address",
        },
        {
          "indexed": false,
         "internalType": "uint256",
          "name": "shares",
          "type": "uint256",
        },
      ],
      "name": "PayeeAdded",
      "type": "event",
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
         "internalType": "address",
          "name": "from",
          "type": "address",
        },
        {
          "indexed": false,
         "internalType": "uint256",
          "name": "amount",
          "type": "uint256",
        },
      ],
      "name": "PaymentReceived",
      "type": "event",
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
         "internalType": "address",
          "name": "to",
          "type": "address",
        },
        {
          "indexed": false,
         "internalType": "uint256",
          "name": "amount",
          "type": "uint256",
        },
      ],
      "name": "PaymentReleased",
      "type": "event",
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
         "internalType": "address",
          "name": "from",
          "type": "address",
        },
        { "indexed": true,"internalType": "address", "name": "to", "type": "address" },
        {
          "indexed": true,
         "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256",
        },
      ],
      "name": "Transfer",
      "type": "event",
    },
    {
      "inputs": [
        {"internalType": "address", "name": "to", "type": "address" },
        {"internalType": "uint256", "name": "tokenId", "type": "uint256" },
      ],
      "name": "approve",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "address", "name": "owner", "type": "address" }],
      "name": "balanceOf",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "_salePrice", "type": "uint256" },
      ],
      "name": "calculatingRoyalties",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256" }],
      "name": "getApproved",
     "outputs": [{"internalType": "address", "name": "", "type": "address" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "_mintAmmount", "type": "uint256" },
        {"internalType": "address", "name": "_reciver", "type": "address" },
      ],
      "name": "givaweyMint",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "hiddenURI",
     "outputs": [{"internalType": "string", "name": "", "type": "string" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "address", "name": "owner", "type": "address" },
        {"internalType": "address", "name": "operator", "type": "address" },
      ],
      "name": "isApprovedForAll",
     "outputs": [{"internalType": "bool", "name": "", "type": "bool" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "merkleRoot",
     "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "name",
     "outputs": [{"internalType": "string", "name": "", "type": "string" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "owner",
     "outputs": [{"internalType": "address", "name": "", "type": "address" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256" }],
      "name": "ownerOf",
     "outputs": [{"internalType": "address", "name": "", "type": "address" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "paused",
     "outputs": [{"internalType": "bool", "name": "", "type": "bool" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "uint256", "name": "index", "type": "uint256" }],
      "name": "payee",
     "outputs": [{"internalType": "address", "name": "", "type": "address" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "_mintAmmount", "type": "uint256" },
      ],
      "name": "publicMint",
     "outputs": [],
     "stateMutability": "payable",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "pubprice",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "address payable", "name": "account", "type": "address" },
      ],
      "name": "release",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "contract IERC20", "name": "token", "type": "address" },
        {"internalType": "address", "name": "account", "type": "address" },
      ],
      "name": "release",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "contract IERC20", "name": "token", "type": "address" },
        {"internalType": "address", "name": "account", "type": "address" },
      ],
      "name": "released",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "address", "name": "account", "type": "address" }],
      "name": "released",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "revealed",
     "outputs": [{"internalType": "bool", "name": "", "type": "bool" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "_tokenId", "type": "uint256" },
        {"internalType": "uint256", "name": "_salePrice", "type": "uint256" },
      ],
      "name": "royaltyInfo",
     "outputs": [
        {"internalType": "address", "name": "receiver", "type": "address" },
        {"internalType": "uint256", "name": "royaltyAmount", "type": "uint256" },
      ],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "address", "name": "from", "type": "address" },
        {"internalType": "address", "name": "to", "type": "address" },
        {"internalType": "uint256", "name": "tokenId", "type": "uint256" },
      ],
      "name": "safeTransferFrom",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "address", "name": "from", "type": "address" },
        {"internalType": "address", "name": "to", "type": "address" },
        {"internalType": "uint256", "name": "tokenId", "type": "uint256" },
        {"internalType": "bytes", "name": "_data", "type": "bytes" },
      ],
      "name": "safeTransferFrom",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "salesPhase",
     "outputs": [
        {
         "internalType": "enum AwkwardSkeletonClub.Phase",
          "name": "",
          "type": "uint8",
        },
      ],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "uint256", "name": "_phase", "type": "uint256" }],
      "name": "selectPhase",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "address", "name": "operator", "type": "address" },
        {"internalType": "bool", "name": "approved", "type": "bool" },
      ],
      "name": "setApprovalForAll",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "string", "name": "_baseURI", "type": "string" }],
      "name": "setBaseUri",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "string", "name": "_hiddenURI", "type": "string" }],
      "name": "setHiddenMetadataUri",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "bytes32", "name": "_merkleRoot", "type": "bytes32" },
      ],
      "name": "setMerkleRoot",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "bool", "name": "_state", "type": "bool" }],
      "name": "setPaused",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "bool", "name": "_state", "type": "bool" }],
      "name": "setRevealed",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "uint96", "name": "_royaltyFeesInBeeps", "type": "uint96" },
      ],
      "name": "setRoyalty",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "address", "name": "_receiver", "type": "address" }],
      "name": "setRoyaltyReceiver",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "address", "name": "account", "type": "address" }],
      "name": "shares",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }],
      "name": "supportsInterface",
     "outputs": [{"internalType": "bool", "name": "", "type": "bool" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "symbol",
     "outputs": [{"internalType": "string", "name": "", "type": "string" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "uint256", "name": "_tokenId", "type": "uint256" }],
      "name": "tokenURI",
     "outputs": [{"internalType": "string", "name": "", "type": "string" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "address", "name": "", "type": "address" }],
      "name": "totalPublicMint",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "contract IERC20", "name": "token", "type": "address" },
      ],
      "name": "totalReleased",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "totalReleased",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "totalShares",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "totalSupply",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "address", "name": "", "type": "address" }],
      "name": "totalWhitelistMint",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "address", "name": "from", "type": "address" },
        {"internalType": "address", "name": "to", "type": "address" },
        {"internalType": "uint256", "name": "tokenId", "type": "uint256" },
      ],
      "name": "transferFrom",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "address", "name": "newOwner", "type": "address" }],
      "name": "transferOwnership",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [{"internalType": "address", "name": "_owner", "type": "address" }],
      "name": "walletOfOwner",
     "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]" }],
     "stateMutability": "view",
      "type": "function",
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "_mintAmmount", "type": "uint256" },
        {"internalType": "bytes32[]", "name": "_proof", "type": "bytes32[]" },
      ],
      "name": "whiteListMint",
     "outputs": [],
     "stateMutability": "payable",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "withdrawalsAll",
     "outputs": [],
     "stateMutability": "nonpayable",
      "type": "function",
    },
    {
      "inputs": [],
      "name": "wlprice",
     "outputs": [{"internalType": "uint256", "name": "", "type": "uint256" }],
     "stateMutability": "view",
      "type": "function",
    },
    {"stateMutability": "payable", "type": "receive" },
  ],
};

export default AwkwardSkeletonClubArtifact;