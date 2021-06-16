import React from "react";
import { Line } from "react-chartjs-2";

const CharComponent = (props = {}) => {
  const {thangs,unit} = props;
  const ngays = [31, 30, 28, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [dataset, setDataset] = React.useState([]);
  const [Linelabels, setLinelLabel] = React.useState([]);
  React.useEffect(() => {
    createDataset();
  }, [thangs,unit]);
  const createDataset = () => {
    setLinelLabel([]);
    setDataset([]);
    for (let j = 0; j < ngays[thangs - 1]; j++) {
      setLinelLabel((Linelabels) => [...Linelabels, j + 1]);
    }
    for (let i = 0; i < 5; i++) {
      let label = `Công nhân ${i + 1}`;
      const background = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      const data = [];
      for (let j = 0; j < ngays[thangs - 1]; j++) {
        data.push(parseInt(Math.random() * 50 + 40));
      }

      const xxx = {
        label,
        borderColor: background,
        fill: false,
        data,
        tension: 0.25,
        pointBorderWidth: 0,
        pointBorderColor: "rgb(75, 192, 192)",
      };

      setDataset((dataset) => [...dataset, xxx]);
    }
  };
  return (
    <Line
      aria-checked={false}
      data={{
        labels: Linelabels,
        datasets: dataset,
      }}
    ></Line>
  );
};

export default CharComponent;
