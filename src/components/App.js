import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
    const [tasks, setTasks] = useState(TASKS);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId)); 
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const visibleTasks =
        selectedCategory === "All"
            ? tasks
            : tasks.filter((task) => task.category === selectedCategory);

    return (
        <div className="App">
            <h2>My tasks</h2>
            <CategoryFilter
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategoryChange}
            />
            <NewTaskForm
                categories={CATEGORIES}
                onTaskFormSubmit={(newTask) => setTasks([...tasks, newTask])}
            />
            <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
        </div>
    );
}

export default App;
