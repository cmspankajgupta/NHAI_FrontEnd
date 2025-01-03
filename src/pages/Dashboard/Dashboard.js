import React from "react";
import ModalContractComReg from "../../features/SignUp/Internal/Contratual/ModalContractComReg";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contract = queryParams.get("contract");
  return (
    <div>
      {contract && <ModalContractComReg />}
    </div>
  );
}

export default Dashboard;
