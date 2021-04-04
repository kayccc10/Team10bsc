pragma solidity >=0.4.22 <0.9.0;

contract IdVerify {

  uint private fileCount = 0;

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
  
  // fullName The full name of the applicant
  // emailAddress The email address of the applicant
  // phoneNo The applicant mobile number
  
  struct UserId {
    uint idNo;
    string idName;
    uint idDob;
    string idHash;
    string idHomeAddress;
    address uploader;
  }
  // idNo The number on the applicant identity card
  // idName The type of identity card used
  // idDob The date of birth of the applicant as shown on the identity card
  // idHash The hash generated when Tendity account is created
  // idHomeAddress The current residential address of the applicant

  event idCreated    (
    uint idNo,
    string idName,
    uint idDob,
    string idHash,
    string idHomeAddress,
    address uploader);


  mapping(address => UserInfo) public Users;
  mapping(uint => mapping(address => UserId)) public userIds;
    mapping(address => IssuedId) public IssuedIds;
    mapping (address => address[]) requestInstitutions;  // Address of all institutions that sent request  to a specific user
    mapping (address => mapping(address => bool[]))  dataRequest;  // Data requested by the institution
    mapping (address => mapping(address => bool[])) approvedRequest;
    mapping (address => string) public institutionInfo;

  address public owner;

  constructor() public {
    owner = msg.sender;
  }

  function addUser(string memory _fullName, string memory _emailAddress, uint _phoneNo) public {

    Users[msg.sender] = UserInfo(_fullName, _emailAddress, _phoneNo, msg.sender);
    emit userCreated(_fullName, _emailAddress, _phoneNo, msg.sender);
  }

  function addUserId(uint _idNo, string memory _idName, uint _idDob, string memory _idHash, string memory _idHomeAddress) public {
    require(bytes(_idHash).length > 0);
    require(bytes(_idName).length > 0);
    require(bytes(_idHomeAddress).length > 0);
    fileCount++;
    userIds[fileCount][msg.sender] = UserId(_idNo, _idName, _idDob, _idHash, _idHomeAddress, msg.sender);
    emit idCreated(_idNo, _idName, _idDob, _idHash, _idHomeAddress, msg.sender);
  }

  function registerInstitution(string memory _name)public {
        institutionInfo[msg.sender] = _name;
    }
    
    // Institutions does their registration here
    
    function sendRequest(address _a, bool[] memory _data) public{  
        requestInstitutions[_a].push(msg.sender);
        dataRequest[_a][msg.sender] = _data;
    }
    
    // Institutions makes request for a specific user information here
    
    function getInstitutionAddr() public view returns(address [] memory){  
        return requestInstitutions[msg.sender];
    }
    
    // User Side   List of institutions that sent request
    
    function getRequest(address _a) public view returns(bool [] memory){  
        return dataRequest[msg.sender][_a];
    }
    
    // User receives the Institution request for information
    
    function approveRequest(uint _id, bool [] memory _approvedData ) public{  
        address _a = requestInstitutions[msg.sender][_id];
        approvedRequest[msg.sender][_a] = _approvedData;
    }
    
    // User determines what information to be released to the institution
    // User is allowed to reject the institution request
    
    function getApprovedRequest(address _a) public view  returns(bool [] memory){
        return approvedRequest[msg.sender][_a];
    }
    
    // The institution receives the the released information
}
