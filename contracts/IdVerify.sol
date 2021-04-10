pragma solidity >=0.4.22 <0.9.0;
contract IdVerify {

 

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
    
  struct idRequest{
    address institutionAddr;
	string RequestedBy;
	uint idNo;
	uint idName;
	uint idDOB;
	uint idHash;
	uint idAddress;
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

  function addUser(string memory _fullName, string memory _emailAddress, uint _phoneNo) public {

    Users[msg.sender].push( UserInfo(_fullName, _emailAddress, _phoneNo, msg.sender));
    
    emit userCreated(_fullName, _emailAddress, _phoneNo, msg.sender);
  }
  
  /*	Users does their registration here, data required includes:
 	full name, email address, and phone number	 */
  
  function addUserId(uint _idNo, string memory _idName, uint _idDob, string memory _idHash, string memory _idHomeAddress) public {
    require(bytes(_idHash).length > 0);
    require(bytes(_idName).length > 0);
    require(bytes(_idHomeAddress).length > 0);
   // fileCount++;
    userIds[msg.sender].push (UserId(_idNo, _idName, _idDob, _idHash, _idHomeAddress));
    emit idCreated(_idNo, _idName, _idDob, _idHash, _idHomeAddress);
  }
  
  /*	Tendity members upload their identity cards information here as it
  	appears on their identity cards. The hash generated when their
	Tendity account was created should be entered here		*/
  
  
  function viewUserid(uint UserIndex) public view returns(uint idNo, string memory idName, uint idDob, string memory idHash, string memory idHomeAddress) {
         UserId storage ThisUser=userIds [msg.sender][UserIndex];
        return (ThisUser.idNo, ThisUser.idName, ThisUser.idDob, ThisUser.idHash, ThisUser.idHomeAddress);
    }

// Users can view their account information here

  function registerInstitution(string memory _name)public {
        institutionInfo[msg.sender] = _name;
    }
    
    // Institutions does their registration here
    
     function sendRequest(string memory _RequestedBy, uint _idNo, uint _idName, uint _idDOB, uint _idHash, uint _idAddress, uint _idOverAllStatus) public {
        dataRequested[msg.sender].push(idRequest(msg.sender,_RequestedBy, _idNo, _idName, _idDOB, _idHash, _idAddress, _idOverAllStatus));
    }
    
     // Institutions makes request for Tendity user information here
    
     function viewIdRequestLength() public view returns(uint) {  // ->>>>  msg.sender
        return dataRequested[msg.sender].length;
    }
    
    
     function viewIdRequestStatus(uint RequestIndex) public view returns(string memory RequestedBy, uint idOverAllStatus) {
        idRequest storage thisiIdRequest = dataRequested[msg.sender][RequestIndex];
        return (thisiIdRequest.RequestedBy, thisiIdRequest.idOverAllStatus);
    }
    
    // Users views institutions that request for their identity information here and their current status
    
     function viewidRequestDetail(uint RequestIndex) public view returns(string memory RequestedBy, uint idNo, uint idName, uint idDOB, uint idHash, uint idAddress, uint idOverAllStatus) {
        idRequest storage thisiIdRequest=dataRequested[msg.sender][RequestIndex];
        return (thisiIdRequest.RequestedBy, thisiIdRequest.idNo, thisiIdRequest.idName, thisiIdRequest.idDOB, thisiIdRequest.idHash, thisiIdRequest.idAddress, thisiIdRequest.idOverAllStatus);
    }
    
    // Users views in details the identity information requested by a specific institution

    function updateIdRequestStatus(uint RequestIndex, uint _idNo, uint _idName, uint _idDOB, uint _idHash, uint _idAddress, uint _idOverAllStatus) public {
        dataRequested[msg.sender][RequestIndex].idNo=_idNo;
		dataRequested[msg.sender][RequestIndex].idName=_idName;
		dataRequested[msg.sender][RequestIndex].idDOB=_idDOB;
		dataRequested[msg.sender][RequestIndex].idHash=_idHash;
		dataRequested[msg.sender][RequestIndex].idAddress=_idAddress;
		dataRequested[msg.sender][RequestIndex].idOverAllStatus=_idOverAllStatus;
    }
    
    // User either accept or reject the institution request here
    // The status of the request is shown here
    
    function viewUser(uint UserIndex) public view returns(string memory fullName,string memory emailAddress,uint phoneNo,address uploader) {
        UserInfo storage ThisUser=Users[msg.sender][UserIndex];
        return (ThisUser.fullName, ThisUser.emailAddress, ThisUser.phoneNo, ThisUser.uploader);
    }
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
                if(requestedData.idAddress == 2){
                    idHomeAddress = _userData.idHomeAddress;
                }

                break;
            }
        }
        return (idNo, idName, idDob, idHash, idHomeAddress);
    }
   
}
