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

export const UnitKPIData = [
  {
    invoiceNumber: 1,
    status: "Đã kích hoạt",
    issueDate: moment().subtract(6, "days").format("DD MMM YYYY"),
    targetNumber: 2,
    score: 0,
  }
];
export const WorkerKPIData = [
  {
    invoiceNumber: 1,
    status: "Đã kích hoạt",
    issueDate: moment().subtract(6, "days").format("DD MMM YYYY"),
    name: "Nguyen Van A",
    targetNumber: 1,
    score: 0,
  },
  {
    invoiceNumber: 2,
    status: "Đã kích hoạt",
    issueDate: moment().subtract(6, "days").format("DD MMM YYYY"),
    name: "Nguyen Van B",
    targetNumber: 1,
    score: 0,
  },
  {
    invoiceNumber: 2,
    status: "Đã kích hoạt",
    issueDate: moment().subtract(6, "days").format("DD MMM YYYY"),
    name: "Nguyen Van C",
    targetNumber: 1,
    score: 0,
  },
  {
    invoiceNumber: 3,
    status: "Đã kích hoạt",
    issueDate: moment().subtract(6, "days").format("DD MMM YYYY"),
    name: "Nguyen Van D",
    targetNumber: 1,
    score: 0,
  },
  {
    invoiceNumber: 5,
    status: "Đã kích hoạt",
    issueDate: moment().subtract(6, "days").format("DD MMM YYYY"),
    name: "Nguyen Van E",
    targetNumber: 1,
    score: 0,
  }
];
export const UnitKPITargets = [
  {
    id: '1',
    name: "Thực hiện tốt các đơn hàng đã nhận",
    descrip: "Thực hiện đúng chỉ tiêu về cả số lượng, thời gian, chất lượng",
    key: 80,
  },
  {
    id: '2',
    name: "Đào tạo nhân viên",
    descrip: "Có thêm 5 nhân viên được thăng cấp xếp hạng nhân viên",
    key: 20,
  },
]