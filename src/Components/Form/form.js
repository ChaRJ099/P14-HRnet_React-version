import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SelectMenu from "../Select-menu/select-menu";
import { states } from "../../Data/data-mocked";

function CreateEmployeeForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formFirstname">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastname">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBirthdate">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formStartDate">
        <Form.Label>Start date</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <fieldset>
        <Form.Text className="text-muted">Address</Form.Text>
        <Form.Group className="mb-3" controlId="formStreet">
          <Form.Label>Street</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
      </fieldset>
      <SelectMenu label="State">
        {states.map((state) => {
          console.log(state.name);
          return (
            <option key={state.id} id={state.id} value={state.name}>
              {state.name}
            </option>
          );
        })}
      </SelectMenu>
      <Form.Group className="mb-3" controlId="formZipCode">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="number" placeholder="" />
      </Form.Group>
      <SelectMenu label="Department" />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateEmployeeForm;
