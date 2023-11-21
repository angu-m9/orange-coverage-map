import CsvDownloader from "react-csv-downloader";
import { useLoaderData } from "react-router";
import HeaderAdmin from "../../templates/HeaderAdmin/HeaderAdmin";

const DataList = () => {
  const divStyle = {
    height: "30rem",
    width: "100%",
    overflow: "scroll",
    border: "solid 0.1rem gray",
  };

  const { response } = useLoaderData();

  const columns = [
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
        <div style={divStyle}>
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
              {response.map((row) => (
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
          datas={response}
          text="EXPORT"
        >
          <button className="btn btn-primary m-4">Download CSV</button>
        </CsvDownloader>
      </div>
    </>
  );
};

export default DataList;
