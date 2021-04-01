// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract IdVerify {

    uint private fileCount = 0;

    struct UserInfo {
        string fullName;
        string emailAddress;
        uint phoneNo;
        address payable uploader;
    }

    event userCreated (
        string fullName,
        string emailAddress,
        uint phoneNo,
        address payable uploader
    );

    struct UserId {
        uint Id_No;
        string Id_Name;
        uint Id_DOB;
        string Id_Hash;
        string Id_HomeAddress;
        address payable uploader;
    }

    event idCreated    (
        uint idNo,
        string idName,
        uint idDob,
        string idHash,
        string idHomeAddress,
        address payable uploader);


    mapping(address => UserInfo) public Users;
    mapping(uint => mapping(address => UserId)) public userIds;
    //mapping(address => IssuedId) public IssuedIds;


    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    function addUser(string memory _fullName, string memory _emailAddress, uint _phoneNo) public {

        Users[owner] = UserInfo(_fullName, _emailAddress, _phoneNo, msg.sender);
        emit userCreated(_fullName, _emailAddress, _phoneNo, msg.sender);
    }

    function addUserId(uint _idNo, string memory _idName, uint _idDob, string memory _idHash, string memory _idHomeAddress) public {
        require(bytes(_idHash).length > 0);
        require(bytes(_idName).length > 0);
        require(bytes(_idHomeAddress).length > 0);
        require(msg.sender != address(0));
        fileCount++;
        userIds[fileCount][owner] = UserId(_idNo, _idName, _idDob, _idHash, _idHomeAddress, msg.sender);
        emit idCreated(_Id_No, _idName, _idDob, _idHash, _idHomeAddress, msg.sender);
    }
}
