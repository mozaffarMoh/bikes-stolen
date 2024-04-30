import "./ErrorNotify.css";

const ErrorNotify = ({ message }: any) => {
  return <div className="error-notify flexCenter">{message}</div>;
};

export default ErrorNotify;
