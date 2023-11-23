import CsvDownloader from "react-csv-downloader";
import { useLoaderData } from "react-router";
import HeaderAdmin from "../../templates/HeaderAdmin/HeaderAdmin";
import React, { Key, useState } from "react";
import './dataList.style.css'


const DataList = (): React.JSX.Element => {

  const { response  } = useLoaderData();
  
  response.forEach(row => {
    row.created_at = new Date(row.created_at).toLocaleString();
  });
  

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = response.slice(indexOfFirstItem, indexOfLastItem);

  const columns = [
    { id: "id", displayName: "ID" },
    { id: "created_at", displayName: "Fecha" },
    { id: "network", displayName: "Tipo de red" },
    { id: "latitude", displayName: "Latitude" },
    { id: "longitude", displayName: "Longitude" },
    { id: "rtt", displayName: "RTT" },
    { id: "downlink", displayName: "Downlink" },
  ];

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(response.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <HeaderAdmin mapCoverage={""} dataList={"active"} />
      <div className="container-black">
      <div className="container-black container py-4 px-3 mx-auto b-1 text-center">
        <div className="container__data-list">
          <table className="table"> 
            <thead>
              <tr >
                {columns.map((col) => (
                  <th id="table-color" key={col.id} scope="col">
                    {col.displayName}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentItems.map(
                (row: { id: Key; created_at: string | number | Date }) => (
                  <tr key={row.id}>
                    {columns.map((col) => (
                      <td id="table-color" key={col.id}>{row[col.id]}</td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example ">
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() =>
                    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
                  }
                >
                  
                </a>
              </li>
              {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                  <a
                    href="#"
                    className={`page-link ${number === currentPage ? 'active' : ''}`}
                    onClick={() => setCurrentPage(number)}
                  >
                    {number}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() =>
                    setCurrentPage((prev) =>
                      prev < pageNumbers.length ? prev + 1 : prev
                    )
                  }
                >
                  
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <CsvDownloader
          filename="datos"
          extension=".csv"
          columns={columns}
          datas={response}
          text="EXPORT"
        >
          <button className="btn btn-primary m-4 w-25">Exportar</button>
        </CsvDownloader>
      </div>
      </div>
    </>
  );
};

export default DataList;
