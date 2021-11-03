export const ProcessInfo = {
    list: [
        {
            name: "Quy trình may áo sơ mi",
            steps: [
                {
                    name: "May tay áo",
                    status: "Đúng tiến độ",
                    times: 56,
                },
                {
                    name: "May cổ áo",
                    status: "Đúng tiến độ",
                    times: 66,
                },
                {
                    name: "May thân áo",
                    status: "Chậm tiến độ",
                    times: 31,
                },
                {
                    name: "Đính cúc",
                    status: "Chậm tiến độ",
                    times: 51,
                },
                {
                    name: "May lộn lại áo",
                    status: "Đúng tiến độ",
                    times: 55,
                },
                {
                    name: "Kiểm tra hoang thiện",
                    status: "Đúng tiến độ",
                    times: 90,
                },
                {
                    name:  "Ủi và gấp xếp",
                    status: "Đúng tiến độ",
                    times: 67,
                },
            ],
        },
        {
            name: "Quy trình may áo Vest",
            steps: [
                {
                    name: "May tay áo",
                    status: "Đúng tiến độ",
                    times: 56,
                },
                {
                    name: "May cổ áo",
                    status: "Đúng tiến độ",
                    times: 66,
                },
                {
                    name: "May thân áo",
                    status: "Chậm tiến độ",
                    times: 31,
                },
                {
                    name: "Đính cúc",
                    status: "Chậm tiến độ",
                    times: 51,
                },
                {
                    name: "May lộn lại áo",
                    status: "Đúng tiến độ",
                    times: 55,
                },
                {
                    name: "Kiểm tra hoang thiện",
                    status: "Đúng tiến độ",
                    times: 90,
                },
                {
                    name:  "Ủi và gấp xếp",
                    status: "Đúng tiến độ",
                    times: 67,
                },
            ],
        },
    ],
    getlist: function () {
        const data = localStorage.getItem("theList");
        if (data != null) {
            return (JSON.parse(data))
        } else {
            return (
                this.list
            )
        }
    },
    savelist: (list) => {
        localStorage.setItem("theList", JSON.stringify(list));
    },
};
export default ProcessInfo;