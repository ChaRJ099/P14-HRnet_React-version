import Form from "react-bootstrap/Form";
import { departments } from "../../Data/data-mocked";

function SelectState() {
  return (
    <div className="dropdown-container">
      <span>Department</span>
      <Form.Select aria-label="Default select example">
        {departments.map((department) => {
          return (
            <option key={department.id} value={department.name}>
              {department.name}
            </option>
          );
        })}
      </Form.Select>
    </div>
  );
}

export default SelectState;
