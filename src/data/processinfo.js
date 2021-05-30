export const ProcessInfo = {
    list: [
        {
            name: "Quy trình may áo sơ mi",
            steps: ["May tay áo","May cổ áo","May thân áo","Đính cúc","May lộn lại áo","Kiểm tra hoang thiện", "Ủi và gấp xếp"],
        },
        {
            name: "Quy trình may áo Vest",
            steps: ["May tay áo","May cổ áo","May thân áo","Đính cúc","May lộn lại áo","Kiểm tra hoang thiện", "Ủi và gấp xếp"],
        },
    ],
    getlist: function () {
        const data = localStorage.getItem("theList");
        if (!data) {
            return (JSON.parse(data))
        } else {
        return (
            this.list
        )}
    },
    savelist: (list) => {
        localStorage.setItem("theList", JSON.stringify(list));
    },
};
export default ProcessInfo;