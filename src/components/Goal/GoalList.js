import React from 'react';
import styled from 'styled-components';
import GoalItem from './GoalItem';

const GoalList = ({ goals, onDelete }) => {
  return (
    <StyledGoalList>
      {goals.map((goal) => {
        return (
          <GoalItem key={goal.id} onDelete={onDelete} id={goal.id}>
            {goal.title}
          </GoalItem>
        );
      })}
    </StyledGoalList>
  );
};

export default GoalList;

const StyledGoalList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
