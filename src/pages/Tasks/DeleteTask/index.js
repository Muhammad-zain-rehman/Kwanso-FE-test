import React from 'react'
import styled from 'styled-components'
import { getTasks } from '../../../utils'
import { TASK_CONST } from '../../../constants'

const DeleteTask = ({ setData,setRefresh,refresh }) => {

  const StyledButton = styled.button`
  background: rgb(185 28 28);
  color:#FFFFFF;
  font-size: 1em;
  margin-top:10px;
  padding: 0.25em 2em;
  border: 2px solid rgb(185 28 28);
  border-radius: 5px;
  `
  const Container=styled.div`
  margin: 10px;
  display:flex;
  justify-content:end;
  `

  const handleDelete = () => {
      let arr = getTasks()
      let modified_arr = arr.filter((item) => item.checked === false)
      localStorage.setItem(TASK_CONST, JSON.stringify(modified_arr));
      setData(modified_arr)
  }

  return (
    <Container>
      <StyledButton onClick={handleDelete}>
        Delete
      </StyledButton>
    </Container>
  )
}

export default DeleteTask