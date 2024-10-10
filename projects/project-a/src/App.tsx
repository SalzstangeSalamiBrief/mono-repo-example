import { Button, IButtonProps } from "@mono/shared-components";
import { getTime } from "@mono/utils";
import "./App.css";

function App() {
  const p: IButtonProps = {
    label: "app",
    onClick: () => console.log(getTime()),
  };
  return <Button {...p}></Button>;
}

export default App;
