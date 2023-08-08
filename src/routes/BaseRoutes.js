import React, { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router';
import TasksListing from '../pages/Tasks'
import CreateTask from '../pages/Tasks/CreateTask'



const BaseRoutes = () => {
    return (
        <Suspense fallback={"loading..."}>
            <Routes>
                <Route path="/list-tasks" element={<TasksListing />} />
                <Route path="/create-task" element={<CreateTask />} />
                <Route path="/bulk-delete"  element={<TasksListing selectable={true}  />} />

                <Route path='*' element={<Navigate to="/list-tasks" />} />
                
            </Routes>

        </Suspense>
    )
}

export default BaseRoutes