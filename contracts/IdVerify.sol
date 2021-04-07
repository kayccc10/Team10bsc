contract IdVerify {

  //uint private fileCount = 0;

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
   // address uploader;
  }

  event idCreated    (
    uint idNo,
    string idName,
    uint idDob,
    string idHash,
    string idHomeAddress
    //address upload
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
 // address [UserInfo] public allInfo;
  mapping(address => UserId[]) userIds;
  //mapping(address => IssuedId) public IssuedIds;
    mapping (address => address[]) requestInstitutions;  // Address of all institutions that sent request  to a specific user
    mapping(address => idRequest[]) dataRequested;  // Data requested by the institution
   // mapping (address => mapping(address => bool[])) approvedRequest;
    mapping (address => string) public institutionInfo;

  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  function addUser(string memory _fullName, string memory _emailAddress, uint _phoneNo) public {

    Users[msg.sender].push( UserInfo(_fullName, _emailAddress, _phoneNo, msg.sender));
    
    emit userCreated(_fullName, _emailAddress, _phoneNo, msg.sender);
  }
  
 

  function addUserId(uint _idNo, string memory _idName, uint _idDob, string memory _idHash, string memory _idHomeAddress) public {
    require(bytes(_idHash).length > 0);
    require(bytes(_idName).length > 0);
    require(bytes(_idHomeAddress).length > 0);
   // fileCount++;
    userIds[msg.sender].push (UserId(_idNo, _idName, _idDob, _idHash, _idHomeAddress));
    emit idCreated(_idNo, _idName, _idDob, _idHash, _idHomeAddress);
  }
  
  function viewUserid(address UserAddress, uint UserIndex) public view returns(uint idNo, string memory idName, uint idDob, string memory idHash, string memory idHomeAddress) {
  	UserId storage ThisUser=userIds [UserAddress][UserIndex];
        return (ThisUser.idNo, ThisUser.idName, ThisUser.idDob, ThisUser.idHash, ThisUser.idHomeAddress);
    }

  function registerInstitution(string memory _name)public {
        institutionInfo[msg.sender] = _name;
    }
     function sendRequest(address userAddress,string memory _RequestedBy, uint _idNo, uint _idName, uint _idDOB, uint _idHash, uint _idAddress, uint _idOverAllStatus) public {
        dataRequested[userAddress].push(idRequest(msg.sender,_RequestedBy, _idNo, _idName, _idDOB, _idHash, _idAddress, _idOverAllStatus));
    }
    function getInstitutionAddr() public view returns(address [] memory){  // User Side   List of institutions that sent request
        return requestInstitutions[msg.sender];
    }
    
     function viewIdRequestLength() public view returns(uint) {  
        return dataRequested[msg.sender].length;
    }
    
     function viewIdRequestHeader( uint RequestIndex) public view returns(string memory RequestedBy, uint idOverAllStatus) {
        idRequest storage thisiIdRequest = dataRequested[msg.sender][RequestIndex];
        return (thisiIdRequest.RequestedBy, thisiIdRequest.idOverAllStatus);
    }
    
     function viewidRequestDetail( uint RequestIndex) public view returns(string memory RequestedBy, uint idNo, uint idName, uint idDOB, uint idHash, uint idAddress, uint idOverAllStatus) {
        idRequest storage thisiIdRequest=dataRequested[msg.sender][RequestIndex];
        return (thisiIdRequest.RequestedBy, thisiIdRequest.idNo, thisiIdRequest.idName, thisiIdRequest.idDOB, thisiIdRequest.idHash, thisiIdRequest.idAddress, thisiIdRequest.idOverAllStatus);
    }

    function UpdateRequestStatus( uint RequestIndex, uint _idNo, uint _idName, uint _idDOB, uint _idHash, uint _idAddress, uint _idOverAllStatus) public {
        dataRequested[msg.sender][RequestIndex].idNo=_idNo;
	dataRequested[msg.sender][RequestIndex].idName=_idName;
	dataRequested[msg.sender][RequestIndex].idDOB=_idDOB;
	dataRequested[msg.sender][RequestIndex].idHash=_idHash;
	dataRequested[msg.sender][RequestIndex].idAddress=_idAddress;
	dataRequested[msg.sender][RequestIndex].idOverAllStatus=_idOverAllStatus;
    }
    
    function viewUser(address UserAddress, uint UserIndex) public view returns(string memory fullName,string memory emailAddress,uint phoneNo,address uploader) {
        UserInfo storage ThisUser=Users[UserAddress][UserIndex];
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
