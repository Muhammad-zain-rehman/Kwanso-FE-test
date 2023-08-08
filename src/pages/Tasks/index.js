import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import RecordNotFound from '../../components/RecordNotFound'
import { getTasks } from '../../utils'
import DeleteTask from '../Tasks/DeleteTask'
import { styled } from 'styled-components'

const Title = styled.h1`
font-size: 30px;
`;

const TasksListing = ({ selectable }) => {

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)


  useEffect(() => {
    setData(getTasks)

  }, [refresh])



  return (
    <div>
      <Title>{selectable ? "Bulk Delete" : "Tasks Listing"}</Title>
      {
        selectable && data && data.length > 0 &&
        <DeleteTask setData={setData} refresh={refresh} setRefresh={setRefresh} />
      }
      {
        data && data.length > 0 ? data.map((item, index) => (
          <Card item={item} index={index} selectable={selectable} checked={item.checked} refresh={refresh} setRefresh={setRefresh} />
        ))
        :
        <RecordNotFound />

      }
    </div>
  )
}

export default TasksListing