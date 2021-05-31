import moment from "moment-timezone";

export default [
  {
    invoiceNumber: 1,
    name: "Hoàn thành lô hàng số 1",
    status: "Đã kích hoạt",
    issueDate: moment().subtract(1, "days").format("DD MMM YYYY"),
    ts: 0.1,
    status: "Chưa kích hoạt",
  },
  {
    invoiceNumber: 2,
    name: "Hoàn thành lô hàng số 2",
    issueDate: moment().subtract(2, "days").format("DD MMM YYYY"),
    ts: 0.2,
    status: "Chưa kích hoạt",
  },
  {
    invoiceNumber: 3,
    name: "Hoàn thành lô hàng số 3",
    ts: 0.5,
    issueDate: moment().subtract(2, "days").format("DD MMM YYYY"),
    status: "Chưa kích hoạt",
  },
  {
    invoiceNumber: 4,
    name: "Hoàn thành lô hàng số 4",
    ts: 0.8,
    issueDate: moment().subtract(6, "days").format("DD MMM YYYY"),
    status: "Chưa kích hoạt",
  },
];
