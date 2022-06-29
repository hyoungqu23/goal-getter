import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const GoalForm = ({ onSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(e.target.goalForm.value);
  };

  return (
    <StyledGoalForm onSubmit={handleFormSubmit}>
      <label htmlFor="goalForm">What's your Goal?</label>
      <input type="text" name="goalForm" placeholder="What's your Goal?" />
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
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
