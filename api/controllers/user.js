const db = require("../models");
const { User, UserProfile } = db;
const { Op } = db.Sequelize;

async function findAllUsers(userInfo) {
  try {
    const { email, username } = userInfo;
    const response = await User.findOne({
      where: {
        [Op.or]: [{ email }, { username }]
      }
    });
    // console.log(response)
    return response;
  } catch (err) {
    throw err;
  }
}

async function checkUserInfo(userInfo) {
  try {
    const { email, username } = userInfo;
    const response = await findAllUsers({ email, username });
    // console.log(response)
    return !!response;
  } catch (err) {
    throw new Error("Username or email already Existed!");
  }
}

async function createUser(userInfo) {
    try {
      const { email, username, password, firstName, lastName, school } = userInfo;
      const response = await User.create({
        username,
        email,
        password: password
      });
      // console.log(response);
      const {userID} = response.dataValues;
      // console.log(userID);
      const responses = await UserProfile.create({
        userID,
        firstName,
        lastName,
        school
      });
      // console.log("response:", responses)
      return {
        ...response.dataValues,
        ...responses.dataValues,
      };
    } catch (err) {
      throw err;
    }
  }

async function registerUserInfo(userInfo) {
  try {
    const { email, username, password, firstName, lastName, school } = userInfo;
    const userExist = await checkUserInfo(userInfo);
    if (userExist) {
      throw new Error("This email or username has already been taken");
    }
    const response = await createUser({
      email,
      username,
      password,
      firstName,
      lastName,
      school
    });
    // console.log("register info:",response)
    return response;
  } catch (err) {
    throw err;
  }
}

async function findUser(username) {
  try {
    const response = await User.findOne({
      where: { username }
    });
    // console.log(response);
    return response;
  } catch (err) {
    throw err;
  }
}

async function getMatchingUser(username) {
  try {
    const userData = await findUser(username);
    // console.log(userData);
    if (!userData) {
      throw new Error("Invaild username");
    }
    return userData;
  } catch (err) {
    throw err;
  }
}

async function validateUserCredential(username, password) {
  try {
    const userData = await getMatchingUser(username);
    // console.log(userData);
    const { password: comparedPassword, userID} = userData;
    const isMatchPassword = await (password === comparedPassword)
    // console.log(isMatchPassword);
    if (!isMatchPassword) {
      throw new Error("Login unsuccessfully");
    }
    const token = Buffer.from(userID.toString(), 'binary').toString('base64');
    return token;
  } catch (err) {
    throw err;
  }
}

async function tokenAuthentiation(token) {
  const bearerToken = token;
  try {
    if (typeof bearerToken === 'undefined') {
      throw new Error('must have a token');
    }
    const filteredToken = bearerToken.split(' ');
    // console.log("encoded: " + filteredToken[1])
    const userID = Buffer.from(filteredToken[1], 'base64').toString('binary')
    
    // console.log("decoded: " + userID);
    return userID;
  } catch (err) {
    throw new Error('Invalid Token' );
  }
}

module.exports = { registerUserInfo, validateUserCredential, tokenAuthentiation }; 