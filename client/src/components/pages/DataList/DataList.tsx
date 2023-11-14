import CsvDownloader from "react-csv-downloader";
import { useLoaderData } from "react-router";
import HeaderAdmin from "../../templates/HeaderAdmin/HeaderAdmin";
import { containerTable } from "../../../styles/DataList.style";
import { columns } from "./DataList.funcions";
import { List } from "../../../interfaces/services.interface";

const DataList: React.FC = () => {
  const { dataList } = useLoaderData() as { dataList: List[] };

  return (
    <>
      <HeaderAdmin mapCoverage={""} dataList={"active"} />

      <div className="container py-4 px-3 mx-auto b-1 text-center">
        <div style={containerTable}>
          <table className="table">
            <thead>
              <tr>
                {columns.map((a) => (
                  <th key={a.id} scope="col">
                    {a.displayName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataList.map((a) => (
                <tr key={a.id}>
                  {columns.map((col) => (
                    <td key={col.id}>{a[col.id]}</td>
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
