pragma solidity ^0.5.0;

contract Transfer{
    uint public netTransactions;
    uint public totalProfiles;
    constructor() public{
        netTransactions = 0;
    }

    struct Profile{
        address _address;
        string name;
        uint balance;
    }

    mapping(uint => Profile) public maps;

    function createProfile(string memory _name) public {
        bool present = false;
        uint i = 0;
        for(i; i <= totalProfiles; i++){
            string storage name = maps[i].name;
            if(keccak256(bytes(name)) == keccak256(bytes(_name))){
                present = true;
                break;
            }
        }
        require(!present);
        totalProfiles++;
        maps[totalProfiles] = Profile(msg.sender, _name, 0);
    }

    function seeBalance(address _addressed) public view returns(uint){
        bool present = false;
        uint i = 0;
        for(i; i <= totalProfiles; i++){
            if(maps[i]._address == _addressed){
                present = true;
                break;
            }
        }
        require(present);
        return maps[i].balance;
    }

    function sendBalance(address _address, uint _balance) public {
        bool present = false;
        uint i = 0;
        for(i; i <= totalProfiles; i++){
            if(maps[i]._address == _address){
                present = true;
                break;
            }
        }
        require(present);
        uint recieversMapping = i;

        present = false;
        i = 0;
        for(i; i <= totalProfiles; i++){
            if(maps[i]._address == msg.sender){
                present = true;
                break;
            }
        }
        require(present);
        uint sendersMapping = i;
        maps[recieversMapping].balance += _balance;
        maps[sendersMapping].balance -= _balance;   
    }
}