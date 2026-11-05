import axios from "axios";
import { useEffect, useState } from "react";

function TitleText(props) {
  const { title } = props;
  const [data, setData] = useState();
  useEffect(() => {
    async function getUser() {
      const userData = await axios.get("https://dummyjson.com/auth/me");
      console.log(userData);
      setData(userData.data);
    }
    getUser();
  }, []);
  return <div className="text-5xl font-bold">{data?.firstName}</div>;
}

export default TitleText;
