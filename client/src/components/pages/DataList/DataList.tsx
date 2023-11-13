import CsvDownloader from "react-csv-downloader";
import { useLoaderData } from "react-router";
import HeaderAdmin from "../../templates/HeaderAdmin/HeaderAdmin";
import { Table } from "../../../interfaces/DataList.interface";

const DataList: React.FC = () => {

  const containerTable: Table = {
    height: "30rem",
    width: "100%",
    overflow: "scroll",
    border: "solid 0.1rem gray",
  };

  const { dataList } = useLoaderData();
  console.log(dataList)

  const columns:{id: string, displayName: string}[] = [
    { id: "id", displayName: "#" },
    { id: "date", displayName: "Date" },
    { id: "red", displayName: "Red" },
    { id: "Company", displayName: "Company" },
    { id: "Location", displayName: "Location" },
  ];

  return (
    <>
      <HeaderAdmin mapCoverage={""} dataList={"active"} />

      <div className="container py-4 px-3 mx-auto b-1 text-center">
        <div style={containerTable}>
          <table className="table">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col.id} scope="col">
                    {col.displayName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataList.map((row) => (
                <tr key={row.id}>
                  {columns.map((col) => (
                    <td key={col.id}>{row[col.id]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CsvDownloader
          filename="datos"
          extension=".csv"
          columns={columns}
          datas={dataList}
          text="EXPORT"
        >
          <button className="btn btn-primary m-4">Download CSV</button>
        </CsvDownloader>
      </div>
    </>
  );
};

export default DataList;
