import {useState} from "react";
import "./table.css"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../api/dummyData";
import {DeleteOutline} from "@mui/icons-material";
import { Link } from 'react-router-dom'

function Table({title}) {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'user', headerName: 'User', width: 400, renderCell: (params) => {
          return(
              <div>
                  <div className="tableUser">
                      <img className="tableAvatar" src={params.row.avatar} alt="" />
                      {params.row.username}
                  </div>
              </div>
          )
        } },
        { field: 'email', headerName: 'Email', width: 240 },
        { field: 'status', headerName: 'Status', width: 100 },
        { field: 'transaction',  headerName: 'Transaction Volume', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: params => {
                return(
                    <>
                        <Link to={`/users/${params.row.id}`}>
                            <button className="tableEditButton">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="tableDeleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                )
            }
        },
    ];
    return (
        <div className="table">
            <h3 className="tableTitle">{title}</h3>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}

export default Table;