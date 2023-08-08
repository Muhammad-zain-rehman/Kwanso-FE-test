import React, { useEffect, useRef, useState } from 'react'
import { saveTask } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components';


const TaskInputField = styled.input`
  background-image: linear-gradient(#20aee3, #20aee3), linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: #bfbfbf;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #525252;
    }
`;

const StyledButton = styled.button`
  background: #BF4F74;
  color:#FFFFFF;
  font-size: 1em;
  margin-top:10px;
  padding: 0.25em 2em;
  border: 2px solid #BF4F74;
  border-radius: 10px;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')}`

const CreateTask = () => {
  const navigate = useNavigate('');
  const [taskName, setTaskName] = useState('')
  const ref = useRef()

  const handleSave = () => {
    saveTask(taskName)
    setTaskName('')
    navigate('/list-tasks')
  }

  useEffect(() => {
    ref.current.focus();

    return (() => {
      setTaskName('')
    })
  }, [])


  return (
    <div>
      <h1 style={{ justifyContent:"end" }}>Create Your Task Here!</h1>
      <TaskInputField
        ref={ref}
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        placeholder='Task name'

      />

      <StyledButton disabled={!taskName} onClick={handleSave} hasValue={taskName}>
        Save
      </StyledButton>
    </div>
  )
}

export default CreateTask