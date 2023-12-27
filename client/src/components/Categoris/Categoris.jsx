import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import CatagoriBox from "./CatagoriBox";
import { categories } from "./categoriData";


const Categoris = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    console.log(category);
    return (
        <Container><div className="pt-4 mb-10 gap-16 flex items-center justify-between overflow-x-auto">
            {
                categories.map(item => <CatagoriBox key={item.label} icon={item.icon} label={item.label} selected={category === item.label} ></CatagoriBox>)
            }
        </div></Container>
    );
};

export default Categoris;