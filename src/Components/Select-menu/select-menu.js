import Form from "react-bootstrap/Form";

function SelectMenu(props) {
  return (
    <>
      <Form.Label>{props.label}</Form.Label>
      <Form.Select aria-label="Default select example">
        <option key="555">Open this select menu</option>
        <option key={props.id} value={props.optionName}>
          {props.optionName}
        </option>
      </Form.Select>
    </>
  );
}

export default SelectMenu;
