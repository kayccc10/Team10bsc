// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract IdentityVerify {
    
    uint private fileCount = 0;
    
     struct UserInfo {
        string FullName;
		string EmailAddress;
		uint phoneNo;
		address payable uploader;
     }
     
     event userCreated (
        string FullName,
		string EmailAddress,
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
	
	event idCreated	(
	    uint Id_No,
		string Id_Name,
		uint Id_DOB,
		string Id_Hash,
		string Id_HomeAddress,
		address payable uploader);
		

	
	 mapping(address => UserInfo) public Users;
	 mapping(uint => mapping(address => UserId)) public UserIds;
	 //mapping(address => IssuedId) public IssuedIds;
		

    address public Owner;
    
     constructor() public {
        
        Owner = msg.sender;
    }
    
     function AddUser(string memory _FullName,string memory _EmailAddress,uint _phoneNo) public {
         
         Users[Owner]= UserInfo(_FullName,_EmailAddress,_phoneNo, msg.sender);
         emit userCreated (_FullName,_EmailAddress,_phoneNo, msg.sender);
     }
    
    function AddUserId(uint _Id_No,string memory _Id_Name,uint _Id_DOB,string memory _Id_Hash,string memory _Id_HomeAddress) public {
    require(bytes(_Id_Hash).length>0); 
    require(bytes(_Id_Name).length>0); 
    require(bytes(_Id_HomeAddress).length>0); 
    require(msg.sender!=address(0));
       fileCount++;
        UserIds[fileCount][Owner]= UserId( _Id_No,_Id_Name,_Id_DOB,_Id_Hash,_Id_HomeAddress,msg.sender);
        emit idCreated	(_Id_No,_Id_Name,_Id_DOB,_Id_Hash,_Id_HomeAddress,msg.sender);
    }
}
