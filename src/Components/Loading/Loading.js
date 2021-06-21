import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  return (
    <PacmanLoader
      color={"yellow"}
      css={{ display: "block",  margin: "25" }}
      size={200}
    />
  );
};

export default Loading;