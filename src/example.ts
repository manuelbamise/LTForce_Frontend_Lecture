const someObject = {
  username: "username",
  mainData: {
    main1: "main1",
    main2: "main2",
  },
  password: "password",
  createdAT: "createdAT",
  updatedAT: "updatedAT",
};

const { password, ...rest } = someObject;

console.log(rest);
