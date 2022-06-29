import React, { useState } from 'react';
import styled from 'styled-components';
import GoalForm from './components/Goal/GoalForm';
import GoalList from './components/Goal/GoalList';

const App = () => {
  const [goals, setGoals] = useState([
    { title: 'Do all exercises!', id: 1 },
    { title: 'Finish the course!', id: 2 },
  ]);
  console.log(goals);

  const handleSubmit = (text) => {
    const newGoal = {
      title: text,
      id: Math.random().toString(),
    };

    setGoals((currentGoal) => {
      return [newGoal, ...currentGoal];
    });
  };

  const handleDeleteItem = (id) => {
    setGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  };

  return (
    <StyledGoalGetter>
      <GoalForm onSubmit={handleSubmit} />
      <GoalList goals={goals} onDelete={handleDeleteItem} />
    </StyledGoalGetter>
  );
};

export default App;

const StyledGoalGetter = styled.div`
  width: 35rem;
  max-width: 90%;
  margin: 3rem auto;
`;
