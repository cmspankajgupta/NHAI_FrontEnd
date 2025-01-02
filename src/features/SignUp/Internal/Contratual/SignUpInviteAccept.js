import Progressbar from "../../../../components/ProgressBar/ProgressBar";
import check_circle from "../../../../assets/images/logo/check_circle.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUpInvite() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          navigate('/dashboard');
          // clearInterval(timer); // Stop the timer when progress reaches 100
          return 100; // Ensure progress stays at 100
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 50);
  
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="cont-form-container">
        <img
          src={check_circle}
          alt="Check Icon"
          style={{ width: "5rem", marginLeft: "-.5rem" }}
        />
        <h3 className="head-xs head-black mb-28">
          Invite Accepted!
          <br />
          Welcome to NHAI
        </h3>
        <p className="body-xs font-regular mb-28 gray-800">
          You have successfully accepted the invite sent by Team NHAI
        </p>
        <Progressbar progress={progress}/>
        <p className="body-xxs font-regular mb-32 gray-800">
          Redirecting to NHAI DataLake 3.0
        </p>
      </div>
    </>
  );
}
