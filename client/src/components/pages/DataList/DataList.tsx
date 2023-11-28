import CsvDownloader from "react-csv-downloader";
import { useLoaderData } from "react-router";
import HeaderAdmin from "../../templates/HeaderAdmin/HeaderAdmin";
import React, { Key, useState, useEffect } from "react";
import './dataList.style.css'
import { ResponseListInterface } from "../../../services/service.module";

const DataList = (): React.JSX.Element => {
  const { response } = useLoaderData() as ResponseListInterface;
  const [formattedResponse, setFormattedResponse] = useState([]);

  useEffect(() => {
    if (Array.isArray(response) && response.length > 0 && formattedResponse.length === 0) {
      const formattedData = response.map((row) => {
        const date = new Date(row.created_at);
        console.log(date);
        return {
          ...row,
          created_at: isNaN(date.getTime()) ? 'Fecha inválida' : date.toLocaleString('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }),
        };
      });
      setFormattedResponse(formattedData);
    }
  }, [response]);
  

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = formattedResponse.slice(indexOfFirstItem, indexOfLastItem);

  const columns = [
    { id: "id", displayName: "ID" },
    { id: "created_at", displayName: "Fecha" },
    { id: "network", displayName: "Tipo de red" },
    { id: "latitude", displayName: "Latitud" },
    { id: "longitude", displayName: "Longitud" },
    { id: "rtt", displayName: "RTT" },
    { id: "downlink", displayName: "Downlink" },
    { id: "city", displayName: "Ciudad" },
  ];

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(formattedResponse.length / itemsPerPage); i++) {
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
                <tr>
                  {columns.map((col) => (
                    <th id="table-color" key={col.id} scope="col">
                      {col.displayName}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {currentItems.map((row: { id: Key; created_at: string | number | Date }) => (
                  <tr key={row.id}>
                    {columns.map((col) => (
                      <td id="table-color" key={col.id}>{row[col.id]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example ">
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link"
                    onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                  ></a>
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
                    onClick={() => setCurrentPage((prev) => (prev < pageNumbers.length ? prev + 1 : prev))}
                  ></a>
                </li>
              </ul>
            </nav>
          </div>
          <CsvDownloader
            filename="datos"
            extension=".csv"
            columns={columns}
            datas={formattedResponse}
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
