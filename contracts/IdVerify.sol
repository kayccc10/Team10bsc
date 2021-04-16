pragma solidity >=0.4.22 <0.9.0;
contract IdVerify {

 // fullName The user's full name as it appears on the ID card
 // emailAddress The user's email address
 // phoneNo The user's mobile number
 // uploader The user's address on BSC testnet

  struct UserInfo {
    string fullName;
    string emailAddress;
    uint phoneNo;
    address uploader;
  }

  event userCreated (
    string fullName,
    string emailAddress,
    uint phoneNo,
    address uploader
  );
  
  // idNo The identity number on the user's ID card
  // idName The full name as it appears on the ID card
  // idDob The date of birth of the user
  // idHash The hash generated when the user's identity card is uploaded to the blockchain
  // idHomeAddress The current home address of the user

  struct UserId {
    uint idNo;
    string idName;
    uint idDob;
    string idHash;
    string idHomeAddress;
   
  }

  event idCreated    (
    uint idNo,
    string idName,
    uint idDob,
    string idHash,
    string idHomeAddress

    );
    
    // institutionAddr The Institution address on BSC testnet
    // RequestedBy The institution that requested the information
    // idNo Request for the user's identity number
    // idName Request for the user's full name
    // idDob Request for the user's date of birth
    // idHash Request for the user's identity card on the blockchain
    // idHomeAddress Request for the user's current home address
    
  struct idRequest{
    address institutionAddr;
	string RequestedBy;
	uint idNo;
	uint idName;
	uint idDOB;
	uint idHash;
	uint idHomeAddress;
	uint idOverAllStatus;
    }
    
     /*
            ApprovalStatus
        -------------
        0 --  default status
        1 --  Requested
        2 --  Approved
        3 --  Rejected
    */
    
  

  mapping(address => UserInfo[]) Users;
  mapping(address => UserId[]) userIds;
  mapping(address => idRequest[]) dataRequested;  // Data requested by the institution
  mapping (address => string) public institutionInfo;

  address public owner;

  constructor() {
    owner = msg.sender;
  }
  
   /*	Users does their registration here, data required includes:
 	full name, email address, and phone number	 */

  function addUser(string memory _fullName, string memory _emailAddress, uint _phoneNo) public {

    Users[msg.sender].push( UserInfo(_fullName, _emailAddress, _phoneNo, msg.sender));
    
    emit userCreated(_fullName, _emailAddress, _phoneNo, msg.sender);
  }
  
    /*	Tendity members upload their identity cards information here as it
  	appears on their identity cards. The hash generated when their
	id image is uploaded on the blockchain must be entered here		*/
  
  function addUserId(uint _idNo, string memory _idName, uint _idDob, string memory _idHash, string memory _idHomeAddress) public {
    require(bytes(_idHash).length > 0);
    require(bytes(_idName).length > 0);
    require(bytes(_idHomeAddress).length > 0);
   // fileCount++;
    userIds[msg.sender].push (UserId(_idNo, _idName, _idDob, _idHash, _idHomeAddress));
    emit idCreated(_idNo, _idName, _idDob, _idHash, _idHomeAddress);
  }
  
  // Users can view their account information here

  function viewUserId(uint UserIndex) public view returns(uint idNo, string memory idName, uint idDob, string memory idHash, string memory idHomeAddress) {
         UserId storage ThisUser=userIds [msg.sender][UserIndex];
        return (ThisUser.idNo, ThisUser.idName, ThisUser.idDob, ThisUser.idHash, ThisUser.idHomeAddress);
    }
    
    // Institutions does their registration here
    
    function registerInstitution(string memory _name)public {
        institutionInfo[msg.sender] = _name;
    }
    
    // Institutions makes request for Tendity user information here
    
     function sendRequest(address _userAdd, string memory _RequestedBy, uint _idNo, uint _idName, uint _idDOB, uint _idHash, uint _idHomeAddress, uint _idOverAllStatus) public {
        require(_idNo == 1 || _idNo == 0);
	require( _idName == 1 ||  _idName == 0);
	require(_idDOB == 1 || _idDOB == 0);
	require(_idHash == 1 || _idHash == 0);
	require(_idHomeAddress == 1 || _idHomeAddress == 0);
	require(_idHash == 1 || _idHash == 0);
	dataRequested[_userAdd].push(idRequest(msg.sender,_RequestedBy, _idNo, _idName, _idDOB, _idHash, _idHomeAddress, _idOverAllStatus));
    }
    
      // User can view the total number of requests from institutions here
    
     function viewIdRequestLength() public view returns(uint) {
        return dataRequested[msg.sender].length;
    }
      // Users views institutions that request for their identity information here and their current approval status
    
     function viewIdRequestStatus(uint RequestIndex) public view returns(string memory RequestedBy, uint idOverAllStatus) {
        idRequest storage thisiIdRequest = dataRequested[msg.sender][RequestIndex];
        return (thisiIdRequest.RequestedBy, thisiIdRequest.idOverAllStatus);
    }
    
       // Users views in detail the identity information requested by a specific institution
    
     function viewIdRequestDetail(uint RequestIndex) public view returns(string memory RequestedBy, uint idNo, uint idName, uint idDOB, uint idHash, uint idHomeAddress, uint idOverAllStatus) {
        idRequest storage thisiIdRequest=dataRequested[msg.sender][RequestIndex];
        return (thisiIdRequest.RequestedBy, thisiIdRequest.idNo, thisiIdRequest.idName, thisiIdRequest.idDOB, thisiIdRequest.idHash, thisiIdRequest.idHomeAddress, thisiIdRequest.idOverAllStatus);
    }
    
       // User either accept or reject the institution request here
       // The status of the request is shown here

    function updateIdRequestStatus(uint RequestIndex, uint _idNo, uint _idName, uint _idDOB, uint _idHash, uint _idHomeAddress, uint _idOverAllStatus) public {
        dataRequested[msg.sender][RequestIndex].idNo=_idNo;
		dataRequested[msg.sender][RequestIndex].idName=_idName;
		dataRequested[msg.sender][RequestIndex].idDOB=_idDOB;
		dataRequested[msg.sender][RequestIndex].idHash=_idHash;
		dataRequested[msg.sender][RequestIndex].idHomeAddress=_idHomeAddress;
		dataRequested[msg.sender][RequestIndex].idOverAllStatus=_idOverAllStatus;
    }
    
 	// Users views their profile information here
    
    function viewUser(uint UserIndex) public view returns(string memory fullName,string memory emailAddress,uint phoneNo,address uploader) {
        UserInfo storage ThisUser=Users[msg.sender][UserIndex];
        return (ThisUser.fullName, ThisUser.emailAddress, ThisUser.phoneNo, ThisUser.uploader);
    }
    
     // Institution views the identity information that has been approved by the user here
     // Information not approved by user will not be shown
     
    function getData(address _userAdd)public view returns(uint idNo, string memory idName, uint idDob, string memory idHash, string memory idHomeAddress){
        UserId memory _userData = userIds[_userAdd][0];       
        for(uint i=0; i<dataRequested[_userAdd].length; i++){
            if(dataRequested[_userAdd][i].institutionAddr == msg.sender){
                idRequest memory requestedData = dataRequested[_userAdd][i];
                if(requestedData.idNo == 2){
                    idNo = _userData.idNo;
                }
                if(requestedData.idName == 2){
                    idName = _userData.idName;
                }
                if(requestedData.idDOB == 2){
                    idDob = _userData.idDob;
                }
                if(requestedData.idHash == 2){
                    idHash = _userData.idHash;
                }
                if(requestedData.idHomeAddress == 2){
                    idHomeAddress = _userData.idHomeAddress;
                }

                break;
            }
        }
        return (idNo, idName, idDob, idHash, idHomeAddress);
    }
}
