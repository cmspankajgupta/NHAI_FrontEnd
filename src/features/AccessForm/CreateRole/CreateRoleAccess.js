
import "./CreateRoleAccess.scss";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function ModalContractComReg() {

  const modules = [
    "RFI",
    "UCC",
    "Account Management",
    "Road Safety Audit",
  ];

  const style = {
    color: "gray", // Default outline color
    "&.Mui-checked": {
      color: "#104685", // Checked color
    },
  };

  return (
    <>
      <div className="table-container" style={{ backgroundColor: "white" }}>
        <table >
          <thead>
            <tr className="create-table-head">
              <th className="access-th-text">SELECT MODULES</th>
              <th colSpan={4} className="access-th-text">SELECT PERMISSIONS</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module, index) => (
              <tr className="admin-table-row" key={index}>
                <td data-label="Module" className="body-s font-medium">
                <FormControlLabel control={<Checkbox sx={style} />} />
                  {module}
                </td>
                <td data-label="Create" className="body-xxs font-medium py1" >
                  <div className=" create-table-color"  >
                    <FormControlLabel control={<Checkbox sx={style} />} label="Create" />
                  </div>
                </td>
                <td data-label="Reports" className="body-xxs font-medium">
                  <div className=" create-table-color">
                    <FormControlLabel control={<Checkbox sx={style}/>} label="Reports" />
                  </div>
                </td>
                <td data-span="View" className="body-xxs font-medium ">
                  <div className=" create-table-color">
                    <FormControlLabel control={<Checkbox sx={style}/>} label="View" />
                  </div>
                </td>
                <td data-span="Delete" className="body-xxs font-medium">
                  <div className=" create-table-color">
                    <FormControlLabel control={<Checkbox sx={style}/>} label="Delete" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

