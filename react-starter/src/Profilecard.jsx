import Row from "./Row";

const Profilecard = ({ userinfo = [] }) => {
  //React Context
  return (
    <div className="border-t border-gray-100 pt-4 space-y-3">
      {userinfo.map((info) => (
        <Row key={info.name} rowKey={info.name} rowValue={info.value} />
      ))}
    </div>
  );
};

export default Profilecard;
