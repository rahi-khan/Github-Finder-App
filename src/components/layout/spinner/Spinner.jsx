import spinner from "./spinner.gif";

const Spinner = () => (
    <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", display: "block", margin: "auto" }}
    />
);

export default Spinner;
