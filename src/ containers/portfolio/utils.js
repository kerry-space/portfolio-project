import todoList from "../../images/todoList.png";
import ImageTwo from "../../images/pageTheme.png"
import ImageThree from "../../images/smartphone.png";


export const portfolioData = [
    {
        sectionId : 1,
        projectName : "TodoList",
        projectDescription: "ToDoList",
        projectLink : "/todolist",
        image : todoList
    },
    {
        sectionId : 2,
        projectName : "PageTheme",
        projectDescription: "",
        projectLink : "/theme",
        image : ImageTwo
    },
    {
        sectionId : 2,
        projectName : "ToDo-Appliction3",
        projectDescription: "this is test of description of project",
        projectLink : "das",
        image : ImageThree
    }
]


export const filterOptions = [
    {
        label : "All",
        id : 1
    },
    {
        label : "Developement",
        id : 2
    },
    {
        label : "Design",
        id : 3
    }
]