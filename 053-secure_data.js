/*
Day-by-Day-Challenge
Exercice 053 - "Secure data"

Task
------------
Description:

Take the object to the filter function and return the object without sensitive data, i.e. only id, name and hasAvatar
*/



const obj = {
  id: 1,
  name: "Tester Testowy",
  pwdHash: "abcdef1749cdf9278ac98d7afffffffc729acccccf",
  isAdmin: true,
  hasAvatar: true,
};

const filter = (obj) => {
  const { id, name, hasAvatar } = obj;
  return (obj = {
    id,
    name,
    hasAvatar,
  });
};

console.log(filter(obj));
