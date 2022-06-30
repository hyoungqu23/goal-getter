import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const GoalForm = ({ onSubmit }) => {
  const [isValid, setIsValid] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 공백인 경우 입력 불가능
    isValid && onSubmit(e.target.goalForm.value);
  };

  const handleInputChange = (e) => {
    const enterGoal = e.target.value;

    enterGoal.trim().length === 0 ? setIsValid(false) : setIsValid(true);
  };

  return (
    <StyledGoalForm onSubmit={handleFormSubmit}>
      <label htmlFor="goalForm" isValid>
        What's your Goal?
      </label>
      <input
        type="text"
        name="goalForm"
        placeholder="What's your Goal?"
        onChange={handleInputChange}
        isValid
      />
      <Button type="submit">Add Goal</Button>
    </StyledGoalForm>
  );
};

export default GoalForm;

const StyledGoalForm = styled.form`
  width: 30rem;
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.isValid ? 'black' : 'red')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.isValid ? 'black' : 'red')};
    border: 1px solid ${(props) => (props.isValid ? '#ccc' : 'red')};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
