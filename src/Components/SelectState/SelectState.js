import Form from "react-bootstrap/Form";
import { states } from "../../Data/data-mocked";

function SelectState() {
  return (
    <div className="dropdown-container">
      <span>States</span>
      <Form.Select aria-label="Default select example">
        {states.map((state) => {
          return (
            <option key={state.id} value={state.name}>
              {state.name}
            </option>
          );
        })}
      </Form.Select>
    </div>
  );
}

export default SelectState;
