import { useNavigate, useSearchParams } from 'react-router-dom'
import qs from 'query-string'



// eslint-disable-next-line react/prop-types 
const CatagoriBox = ({ label, icon: Icon, selected }) => {
    const [params, setPrams] = useSearchParams()
    const navigate = useNavigate()
    const handelClick = () => {
        let currentQery = {}
        if (params) {
            currentQery = qs.parse(params.toString())

        }
        const updatedQuery = { ...currentQery, category: label }
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        })
        navigate(url)
    }
    params.get('category')



    return (
        <div
            onClick={handelClick}
            className={`flex flex-col items-center justify-center gap-2 border-b-2 hover:text-green-400 transition cursor-pointer ${selected ? 'border-red-600 text-red-600  text-xl font-bold' : ''}`} >
            <Icon size={30} />
            <div className="font-sm text-bold">{label}</div>
        </div>
    );
};

export default CatagoriBox;