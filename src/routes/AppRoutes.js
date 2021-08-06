// Import Pages
import Homepage from "../pages/Homepage/Homepage";
import NotFound from "../pages/Error404";
import Courses from "../pages/Courses/Courses";
import C_programming from "../pages/Courses/C_programming";

export const routes = [
    { path: "/", component: Homepage },
    { path: "/home", component: Homepage },
    { path: "/courses", component: Courses },
    { path: "/courses/C-programming", component: C_programming },
    { path: "/404-page", component: NotFound },
    { path: "**", component: NotFound },
  ];