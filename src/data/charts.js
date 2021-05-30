
import { faCheckCircle, faHourglassHalf, faTabletAlt } from '@fortawesome/free-solid-svg-icons';

const trafficShares = [
    { id: 1, label: "Đã hoàn thành", value: 60, color: "secondary", icon: faCheckCircle },
    { id: 2, label: "Chưa hoàn thành", value: 40, color: "primary", icon: faHourglassHalf },
];
const trafficShares2 = [
    { id: 1, label: "Đã hoàn thành", value: 80, color: "secondary", icon: faCheckCircle },
    { id: 2, label: "Chưa hoàn thành", value: 20, color: "primary", icon: faHourglassHalf },
];
const totalOrders = [
    { id: 1, label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "August", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

export {
    trafficShares,
    totalOrders,
    trafficShares2
};