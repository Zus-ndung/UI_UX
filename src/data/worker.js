import moment from "moment-timezone";

export default [
  {
    invoiceNumber: 1,
    name: "Nguyen Van A",
    birthday: moment().subtract(1, "days").format("DD MMM YYYY"),
    phone: "0944588230",
    cccd: "24873857389",
    dg: 80,
    rank: 3,
  },
  {
    invoiceNumber: 2,
    name: "Nguyen Van B",
    birthday: moment().subtract(2, "days").format("DD MMM YYYY"),
    phone: "0944588230",
    cccd: "02487246234",
    dg: 80,
    rank: 2,
  },
  {
    invoiceNumber: 3,
    name: "Nguyen Van C",
    birthday: moment().subtract(2, "days").format("DD MMM YYYY"),
    phone: "0944588230",
    cccd: "02483977354",
    dg: 90,
    rank: 1,
  },
  {
    invoiceNumber: 4,
    name: "Nguyen Van D",
    birthday: moment().subtract(6, "days").format("DD MMM YYYY"),
    phone: "0944588230",
    cccd: "03957375454",
    dg: 80,
    rank: 5,
  },
];
