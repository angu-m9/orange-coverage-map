import CsvDownloader from "react-csv-downloader";
import { useLoaderData } from "react-router";
import HeaderAdmin from "../../templates/HeaderAdmin/HeaderAdmin";
import React, { Key } from "react";
import { ResponseListInterface } from "../../../services/service.module";

const DataList = (): React.JSX.Element => {

  const { response } = useLoaderData() as ResponseListInterface;

if (!response || !Array.isArray(response)) {
  return <div>Error: Datos no válidos</div>;
}



  response.forEach((row: { created_at: string | number | Date }) => {
    row.created_at = new Date(row.created_at).toLocaleDateString();
  });

  const columns = [
    { id: "id", displayName: "ID" },
    { id: "created_at", displayName: "Fecha" },
    { id: "network", displayName: "Tipo de red" },
    { id: "latitude", displayName: "Latitude" },
    { id: "longitude", displayName: "Longitude" },
    { id: "rtt", displayName: "RTT" },
    { id: "downlink", displayName: "Downlink" },
  ];

  return (
    <>
      <HeaderAdmin mapCoverage={""} dataList={"active"} />
      <div className="container py-4 px-3 mx-auto b-1 text-center">
        <div
          style={{
            height: "30rem",
            width: "100%",
            overflow: "scroll",
            border: "solid 0.1rem gray",
          }}
        >
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
              {response.map(
                (row: { id: Key; created_at: string | number | Date }) => (
                  <tr key={row.id}>
                    {columns.map((col) => (
                      <td key={col.id}>{row[col.id]}</td>
                    ))}
                  </tr>
                )
              )}
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


      <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item disabled"><a className="page-link">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">4</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">5</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">6</a></li>
    <li className="page-item"><a className="page-link" href="#">7</a></li>
    <li className="page-item"><a className="page-link" href="#">8</a></li>
    <li className="page-item"><a className="page-link" href="#">9</a></li>
    <li className="page-item"><a className="page-link" href="#">10</a></li>
    <li className="page-item"><a className="page-link" href="#" aria-label="Next"></a></li>
  </ul>
</nav>
    </>
  );
};

export default DataList;
