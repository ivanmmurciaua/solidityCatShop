pragma solidity ^0.5.16;

// Import ERC721 contract from Open Zeppelin lib
import "./ERC721Full.sol";

/**
 * The CryptoCat contract
 */
contract CryptoCat is ERC721Full {

	//IDs
	uint id = 0;
	
	// Store cats
	string[] public cats_used;

	// Cats are registered
	mapping(string => bool) _catExists;

	//Cats from user
	mapping(uint => string) _cat4user;

	// ERC721 Constructor 
	constructor() ERC721Full("CryptoCat", "PUSSY_CAT") public {
	}

	// Mint cats
	function mint (string memory _cat) public {
		
		// Check if cat exists
		require(!_catExists[_cat]);

		// Add Cat & used is true
		_cat4user[id] = _cat;
		cats_used.push(_cat);
		_catExists[_cat] = true;

		// Mint a cat with _mint from OZ_ERC721
		_mint(msg.sender, id);

		id++;

	}

	// Check cats minted by user
	function check_CryptoCat (uint _idreact, address _address) public view returns (string memory){
		uint _id_ =  _tokensOfOwner(_address)[_idreact];
		return _cat4user[_id_];
	}

}