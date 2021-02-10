import { FC, ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';

interface UserInputFormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UserInputForm: FC<UserInputFormProps> = ({ value, onChange }) => (
  <Form>
    <Form.Group controlId="user-input">
      <Form.Control 
        type="text" 
        value={value} 
        onChange={onChange} 
      />
    </Form.Group>
  </Form>
);

export default UserInputForm;
