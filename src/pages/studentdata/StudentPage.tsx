import StudentDirectory from "../../components/student_directory/StudentDirectory";
import { State } from "../../components/signIn_signUp/SignIn.component";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const StudentPage = () => {

  const state:any = useSelector<State>((state) => state.login);
  return (
    <div>
      { !state.username ? (
       <div>
          <h1>Please Login First</h1>
        <Navigate to='/'/>
       </div>
      ):(
        <StudentDirectory />
      )

      }
     
    </div>
  );
};

export default StudentPage;
  