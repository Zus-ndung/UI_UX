import moment from "moment-timezone";

export default [
  {
    invoiceNumber: 1,
    status: "Đã kích hoạt",
    issueDate: moment().subtract(1, "days").format("DD MMM YYYY"),
    targetNumber: "10",
    score: 100,
  },
  {
    invoiceNumber: 2,
    status: "Đã kích hoạt",
    issueDate: moment().subtract(2, "days").format("DD MMM YYYY"),
    targetNumber: 3,
    score: 100,
  },
  {
    invoiceNumber: 3,
    status: "Đã kích hoạt",
    issueDate: moment().subtract(2, "days").format("DD MMM YYYY"),
    targetNumber: 5,
    score: 100,
  },
  {
    invoiceNumber: 4,
    status: "Chưa kích hoạt",
    issueDate: moment().subtract(6, "days").format("DD MMM YYYY"),
    targetNumber: 2,
    score: 0,
  },
];
