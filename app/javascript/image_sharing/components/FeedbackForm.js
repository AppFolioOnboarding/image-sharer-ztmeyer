import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

export default function FeedbackForm() {
  return (
    <Form>
      <FormGroup>
        <Label for="yourName">Your name:</Label>
        <Input id="yourName" />
      </FormGroup>
      <FormGroup>
        <Label for="comments">Comments:</Label>
        <Input type="textarea" id="comments" />
      </FormGroup>
    </Form>
  );
}
