const { registerUserInfo, validateUserCredential } = require('./user');

async function signUpAccount(userInfo) {
  try {
    console.log("IN Sign up account function")

    const { username, email, firstName, lastName, school } = await registerUserInfo(userInfo);
    const response = {
      username,
      email,
      firstName,
      lastName,
      school
    };
    return response;
  } catch (err) {
    throw err;
  }
}

async function loginAccount(username, password) {
  try {
    console.log("Login:", username)
    // const {userID, token}  = await validateUserCredential(username, password);
    const token = await validateUserCredential(username, password);
    // console.log(userID);
    const response = {
      username,
      token,
    };
    return response;
  } catch (err) {
    throw err;
  }
}

module.exports = {signUpAccount, loginAccount}; 
