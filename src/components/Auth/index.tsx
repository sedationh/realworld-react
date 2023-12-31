import { useEffect } from "react";
import { hasLogin } from "../../utils/request";
import { useNavigate } from "react-router-dom";

function Auth(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasLogin()) {
      navigate("/login");
    }
  }, []);
  return <div>{props.children}</div>;
}
export default Auth;
