import React from 'react'
import { TASK_CONST } from '../../constants'
import { getTasks } from '../../utils'
import { styled } from 'styled-components';

const Card = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
font-weight: lighter;
color: #666;
`;


const Box = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
`

const CheckBox = styled.input.attrs({ type: "checkbox" })`
width:20px;
height:20px;`


const Cards = ({ item, selectable, index, refresh, setRefresh }) => {

  const handleClick = () => {

    let taskArr = getTasks();
    taskArr[index].checked = !item.checked
    localStorage.setItem(TASK_CONST, JSON.stringify(taskArr))
    setRefresh(!refresh)
  }

  return (
    <Card>
      <Box >
        <Title>{item.name}</Title>
        {
          selectable &&
          <CheckBox checked={item.checked} onClick={handleClick} />
        }
      </Box>
    </Card>

  )
}

export default Cards