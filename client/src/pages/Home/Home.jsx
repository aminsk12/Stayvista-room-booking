import { Helmet } from "react-helmet-async"
import Categoris from "../../components/Categoris/Categoris"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
  return (
    <div>
      <Helmet> <title>Stayvista | Home</title> </Helmet>

      <Categoris></Categoris>
      <Rooms />
    </div>
  )
}

export default Home
