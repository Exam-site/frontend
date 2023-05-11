import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Start = () => {
    const navigate=useNavigate()
  return (
    <>

      <Box
        className="for-box"
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <center>
          <h2 className="for-color">Sri Venkateswara University</h2>

          <Box
            className="Boxproperty"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img
              alt="ExamWEbsite"
              className="For-an-image"
              src="https://res.cloudinary.com/dwiwsq9a2/image/upload/v1683428168/college-entrance-exam-concept-illustration_114360-10202_f7qmp2.jpg"
            />
          </Box>
          <Box
            className="Boxproperty"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <button onClick={()=>{navigate('/SignIn')}}>UserLogin</button>
              <hr />
              <button onClick={()=>{navigate('/SignInadmin')}}>AdminLogin</button>
            </div>
          </Box>
        </center>
      </Box>
    </>
  );
};
export default Start;
