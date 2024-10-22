import { Fragment, memo, useState } from "react";

const Memo = () => {
  const [title, setTitle] = useState("My name is niketh");
  const handleMathOp = () => {
    setTitle("My name is " + Math.random());
  };
  return (
    <div>
      <button onClick={handleMathOp}>Click me to change</button>
      <br />
      <Header title={title}/>
      <br />
      <Header title="my name is raman" />
      <br />
      <Header title="my name is raman" />
      <br />
      <Header title="my name is raman" />
    </div>
  );
};

// const Header = memo({ title }) => {
//   return <>{title}</>;
// };

const Header = memo(function({title}){
  return <Fragment>
  {title}
  </Fragment>
})

export default Memo;
