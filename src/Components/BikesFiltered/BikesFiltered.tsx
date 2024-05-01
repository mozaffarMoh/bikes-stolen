import "./BikesFiltered.css";
import noBikeImage from "../../assets/images/noBike.svg";
import { Bike } from "../../DTOs/DTOs";
import React from "react";

interface BikesFilteredProps {
  filteredData: Array<Bike>;
  success: boolean;
  firstDate: string;
  secondDate: string;
}

const BikesFiltered: React.FC<BikesFilteredProps> = ({
  filteredData,
  success,
  firstDate,
  secondDate,
}) => {
  const [updateFilteredData, setUpdateFilteredData] =
    React.useState<Array<Bike>>(filteredData);

  React.useEffect(() => {
    const startDate = new Date(firstDate);
    const endDate = new Date(secondDate);

    const filteredItems = filteredData.filter((item: Bike) => {
      const dateStolen = new Date(item.date_stolen * 1000);
      const formattedDate = dateStolen.toLocaleDateString();
      const formattedDateParsing = new Date(formattedDate);

      return (
        formattedDateParsing >= startDate && formattedDateParsing <= endDate
      );
    });
    if (firstDate && secondDate) {
      setUpdateFilteredData(filteredItems);
    } else {
      setUpdateFilteredData(filteredData);
    }
  }, [filteredData, success]);

  return (
    <div className="stolen-items flexEvenly">
      {updateFilteredData.map((item: Bike, index: number) => (
        <div className="stolen-item flexStartColumn" key={index}>
          <img
            src={item.thumb ? item.thumb : noBikeImage}
            alt="Bike Thumbnail"
          />
          <h3>{item.title}</h3>
          <p>
            <span>Serial : </span> {item.serial}
          </p>
          <p>
            <span>Primary colors :</span> {item.frame_colors[0]}
          </p>
          <p>
            <span className="stolen-span">STOLEN : </span>{" "}
            {new Date(item.date_stolen * 1000).toLocaleDateString()}
          </p>
          <p>
            <span>Location : </span>
            {item.stolen_location}
          </p>
          <p>
            <span>Description : </span>
            {item.description
              ? item.description.length > 200
                ? item.description.slice(0, 200) + "..."
                : item.description
              : "There is no description"}
          </p>
        </div>
      ))}
      {success && filteredData?.length === 0 && <h1>Data is empty</h1>}
    </div>
  );
};

export default BikesFiltered;
