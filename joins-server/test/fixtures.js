const crossJoinArr = [
	{
		j1Id: 1,
		name: "n1",
		qty: 10,
		createdAt: "2018-02-01T23:55:35.765Z",
		updatedAt: "2018-02-01T23:55:35.765Z",
		j2Id: 1,
		date: "2018-01-31T13:00:00.000Z",
		phone: "0411256326"
	},
	{
		j1Id: 2,
		name: "n1",
		qty: 10,
		createdAt: "2018-02-01T23:55:35.765Z",
		updatedAt: "2018-02-01T23:55:35.765Z",
		j2Id: 2,
		date: "2018-01-31T13:00:00.000Z",
		phone: "0422221368"
	},
	{
		j1Id: 1,
		name: "n2",
		qty: 20,
		createdAt: "2018-02-01T23:55:35.765Z",
		updatedAt: "2018-02-01T23:55:35.765Z",
		j2Id: 1,
		date: "2018-01-31T13:00:00.000Z",
		phone: "0411256326"
	},
	{
		j1Id: 2,
		name: "n2",
		qty: 20,
		createdAt: "2018-02-01T23:55:35.765Z",
		updatedAt: "2018-02-01T23:55:35.765Z",
		j2Id: 2,
		date: "2018-01-31T13:00:00.000Z",
		phone: "0422221368"
	},
	{
		j1Id: 1,
		name: "n3",
		qty: 30,
		createdAt: "2018-02-01T23:55:35.765Z",
		updatedAt: "2018-02-01T23:55:35.765Z",
		j2Id: 1,
		date: "2018-01-31T13:00:00.000Z",
		phone: "0411256326"
	},
	{
		j1Id: 2,
		name: "n3",
		qty: 30,
		createdAt: "2018-02-01T23:55:35.765Z",
		updatedAt: "2018-02-01T23:55:35.765Z",
		j2Id: 2,
		date: "2018-01-31T13:00:00.000Z",
		phone: "0422221368"
	}
];

const innerJoinArr = [
  {
    j1Id: 1,
    name: "n1",
    qty: 10,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 1,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0411256326"
  },
  {
    j1Id: 2,
    name: "n2",
    qty: 20,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 2,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0422221368"
  }
];

const leftJoinArr = [
  {
    j1Id: 1,
    name: "n1",
    qty: 10,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 1,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0411256326"
  },
  {
    j1Id: 2,
    name: "n2",
    qty: 20,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 2,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0422221368"
  },
  {
    j1Id: null,
    name: "n3",
    qty: 30,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: null,
    date: null,
    phone: null
  }
];

const leftoutJoinArr = [
  {
    j1Id: 1,
    name: "n1",
    qty: 10,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 1,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0411256326"
  },
  {
    j1Id: 2,
    name: "n2",
    qty: 20,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 2,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0422221368"
  },
  {
    j1Id: null,
    name: "n3",
    qty: 30,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: null,
    date: null,
    phone: null
  }
];

const rightJoinArr = [
  {
    j1Id: 1,
    name: "n1",
    qty: 10,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 1,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0411256326"
  },
  {
    j1Id: 2,
    name: "n2",
    qty: 20,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 2,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0422221368"
  }
];

const rightoutJoinArr = [
  {
    j1Id: 1,
    name: "n1",
    qty: 10,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 1,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0411256326"
  },
  {
    j1Id: 2,
    name: "n2",
    qty: 20,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 2,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0422221368"
  }
];

const fulloutJoinArr = [
  {
    j1Id: 1,
    name: "n1",
    qty: 10,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 1,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0411256326"
  },
  {
    j1Id: 2,
    name: "n2",
    qty: 20,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 2,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0422221368"
  },
  {
    j1Id: null,
    name: "n3",
    qty: 30,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: null,
    date: null,
    phone: null
  }
];

const joinrawArr = [
  {
    j1Id: 1,
    name: "n1",
    qty: 10,
    createdAt: "2018-02-01T23:55:35.765Z",
    updatedAt: "2018-02-01T23:55:35.765Z",
    j2Id: 1,
    date: "2018-01-31T13:00:00.000Z",
    phone: "0411256326"
  }
];

module.exports = {
  crossJoinArr,
  innerJoinArr,
  leftJoinArr,
  leftoutJoinArr,
  rightJoinArr,
  rightoutJoinArr,
  fulloutJoinArr,
  joinrawArr
};
