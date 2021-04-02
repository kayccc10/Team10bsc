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

  struct UserId {
    uint idNo;
    string idName;
    uint idDob;
    string idHash;
    string idHomeAddress;
    address uploader;
  }

  event idCreated    (
    uint idNo,
    string idName,
    uint idDob,
    string idHash,
    string idHomeAddress,
    address uploader);


  mapping(address => UserInfo) public Users;
  mapping(uint => mapping(address => UserId)) public userIds;
  //mapping(address => IssuedId) public IssuedIds;
    mapping (address => address[]) requestInstitutions;  // Address of all institutions that sent request  to a specific user
    mapping (address => mapping(address => bool[]))  dataRequest;  // Data requested by the institution
    mapping (address => mapping(address => bool[])) approvedRequest;
    mapping (address => string) public institutionInfo;

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
    emit idCreated(_idNo, _idName, _idDob, _idHash, _idHomeAddress, msg.sender);
  }

  function registerInstitution(string _name)public {
        institutionInfo[msg.sender] = _name;
    }
    function sendRequest(address _a, bool[] memory _data) public{  // Institution Side
        requestInstitutions[_a].push(msg.sender);
        dataRequest[_a][msg.sender] = _data;
    }
    function getInstitutionAddr() public view returns(address [] memory){  // User Side   List of institutions that sent request
        return requestInstitutions[msg.sender];
    }
    function getRequest(address _a) public view returns(bool [] memory){  //User Side
        return dataRequest[msg.sender][_a];
    }
    function approveRequest(uint _id, bool [] memory _approvedData ) public{
        address _a = requestInstitutions[msg.sender][_id];
        approvedRequest[msg.sender][_a] = _approvedData;
    }
    function getApprovedRequest(address _a) public view  returns(bool [] memory){
        return approvedRequest[msg.sender][_a];
    }
}
