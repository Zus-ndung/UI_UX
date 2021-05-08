import moment from "moment-timezone";

export default [
  {
    invoiceNumber: 1,
    status: "Đã hoàn thành",
    subscription: "Platinum Subscription Plan",
    price: "0%",
    issueDate: moment().subtract(1, "days").format("DD MMM YYYY"),
    dueDate: moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY"),
  },
  {
    invoiceNumber: 2,
    status: "Đã hoàn thành",
    subscription: "Platinum Subscription Plan",
    price: "0%",
    issueDate: moment().subtract(2, "days").format("DD MMM YYYY"),
    dueDate: moment().subtract(2, "days").add(1, "month").format("DD MMM YYYY"),
  },
  {
    invoiceNumber: 3,
    status: "Đã hoàn thành",
    subscription: "Platinum Subscription Plan",
    price: "0%",
    issueDate: moment().subtract(2, "days").format("DD MMM YYYY"),
    dueDate: moment().subtract(2, "days").add(1, "month").format("DD MMM YYYY"),
  },
  {
    invoiceNumber: 4,
    status: "Đã hoàn thành",
    subscription: "Flexible Subscription Plan",
    price: "0",
    issueDate: moment().subtract(3, "days").format("DD MMM YYYY"),
    dueDate: moment().subtract(3, "days").add(1, "month").format("DD MMM YYYY"),
  },
  {
    invoiceNumber: 5,
    status: "Đang thực hiện",
    subscription: "Gold Subscription Plan",
    price: "0",
    issueDate: moment()
      .subtract(1, "day")
      .subtract(1, "month")
      .format("DD MMM YYYY"),
    dueDate: moment().subtract(1, "day").format("DD MMM YYYY"),
  },
  {
    invoiceNumber: 6,
    status: "Đang thực hiện",
    subscription: "Gold Subscription Plan",
    price: "0",
    issueDate: moment()
      .subtract(3, "days")
      .subtract(1, "month")
      .format("DD MMM YYYY"),
    dueDate: moment().subtract(3, "days").format("DD MMM YYYY"),
  },
  {
    invoiceNumber: 7,
    status: "Đang thực hiện",
    subscription: "Flexible Subscription Plan",
    price: "0",
    issueDate: moment()
      .subtract(4, "days")
      .subtract(1, "month")
      .format("DD MMM YYYY"),
    dueDate: moment().subtract(4, "days").format("DD MMM YYYY"),
  },
  {
    invoiceNumber: 8,
    status: "Quá hạn",
    subscription: "Gold Subscription Plan",
    price: "0",
    issueDate: moment()
      .subtract(20, "days")
      .subtract(1, "month")
      .format("DD MMM YYYY"),
    dueDate: moment().subtract(20, "days").format("DD MMM YYYY"),
  },
  {
    invoiceNumber: 9,
    status: "Quá hạn",
    subscription: "Platinum Subscription Plan",
    price: "0%",
    issueDate: moment().subtract(2, "months").format("DD MMM YYYY"),
    dueDate: moment().subtract(3, "months").format("DD MMM YYYY"),
  },
  {
    invoiceNumber: 10,
    status: "Đã hoàn thành",
    subscription: "Platinum Subscription Plan",
    price: "0%",
    issueDate: moment().subtract(6, "days").format("DD MMM YYYY"),
    dueDate: moment().subtract(6, "days").add(1, "month").format("DD MMM YYYY"),
  },
];
export const UserListData = [
  {
    invoiceNumber: 1,
    subscription: "Nguyen Van Dung",
    congviec: "May Cổ áo",
  },
  {
    invoiceNumber: 2,
    subscription: "Nguyen Van Dung",
    congviec: "May Cổ áo",
  },
  {
    invoiceNumber: 3,
    subscription: "Nguyen Van Dung",
    congviec: "May Cổ áo",
  },
  {
    invoiceNumber: 4,
    subscription: "Nguyen Van Dung",
    congviec: "May Cổ áo",
  },
  {
    invoiceNumber: 5,
    subscription: "Nguyen Van Dung",
    congviec: "May Cổ áo",
  },
  {
    invoiceNumber: 6,
    subscription: "Nguyen Van Dung",
    congviec: "May Cổ áo",
  },
];
