import "./BikesFiltered.css";
import noBikeImage from "../../assets/images/noBike.svg";

const BikesFiltered = ({ dataPerPage, success }: any) => {
  return (
    <div className="stolen-items flexEvenly">
      {dataPerPage &&
        dataPerPage.map((item: any, index: number) => {
          const dateStolenMilliseconds = item.date_stolen * 1000;
          const dateStolen = new Date(dateStolenMilliseconds);
          const formattedDate = `${
            dateStolen.getMonth() + 1
          }-${dateStolen.getDate()}-${dateStolen.getFullYear()}`;

          return (
            <div className="stolen-item flexCenterColumnItemsStart" key={index}>
              <img src={item.thumb ? item.thumb : noBikeImage} />

              <h3>{item.title}</h3>
              <p>
                <span>Serial : </span> {item.serial}
              </p>
              <p>
                <span>Primary colors :</span> {item.frame_colors[0]}
              </p>
              <p>
                <span className="stolen-span">STOLEN : </span> {formattedDate}
              </p>
              <p>
                <span>Location : </span>
                {item.stolen_location}
              </p>
            </div>
          );
        })}

      {success && dataPerPage?.length === 0 && <h1>Data is empty</h1>}
    </div>
  );
};

export default BikesFiltered;
