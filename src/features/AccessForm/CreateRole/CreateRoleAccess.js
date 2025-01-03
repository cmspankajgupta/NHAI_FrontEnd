
import "./CreateRoleAccess.scss";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from "@mui/material";
import MuiButton from "../../../components/Button/MuiButton";
import { useDispatch } from "react-redux";
import { updateConfirmModalState, updateCreateModalState } from "../../../store/slices/accessManagementSlice";
import MuiInput from "../../../components/Input/MuiInput";



export default function CreateRoleAccess() {
  const dispatch = useDispatch();

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

  const handleCreateRole = () => {
    dispatch(updateCreateModalState(false));
    setTimeout(() => {
      dispatch(updateConfirmModalState(true));
    }, 500);
  }

  return (
    <>
      <Divider />
      <MuiInput
        variant="outlined"
        label="Name of the role"
        type="text"
        sx={{
          margin: '2rem 3.33rem 0',
          borderRadius: '1rem',
          width: "27.667rem",
          height: "4.667rem",
        }}
        autoFocus={true}
      />
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
                    <FormControlLabel control={<Checkbox sx={style} />} label="Reports" />
                  </div>
                </td>
                <td data-span="View" className="body-xxs font-medium ">
                  <div className=" create-table-color">
                    <FormControlLabel control={<Checkbox sx={style} />} label="View" />
                  </div>
                </td>
                <td data-span="Delete" className="body-xxs font-medium">
                  <div className=" create-table-color">
                    <FormControlLabel control={<Checkbox sx={style} />} label="Delete" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Divider sx={{ pt: "2rem", }} />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <MuiButton
          onClick={handleCreateRole}
          type="submit"
          name="Create Role"
          variant="contained"
          sx={{
            background: `var(--brand-500)`,
            borderRadius: "6.25rem",
            fontWeight: `var(--font-medium)`,
            width: "9.167rem",
            my: "1.33rem",
            mx: "2rem",

          }}
        />
      </div>
    </>
  )
}

