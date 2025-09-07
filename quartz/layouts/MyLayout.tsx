import Content from "../components/pages/Content"
import Header from "../components/Header"
import ProjectsGrid from "../components/ProjjectsGrid"

export default {
  name: "MyLayout",
  components: [
    Header(),
    Content(),
    ProjectsGrid(),
  ],
}