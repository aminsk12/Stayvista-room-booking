import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading/Heading";
import Card from "../Card/Card";
import { getAllRooms } from "../../api/rooms";




const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [params, setParams] = useSearchParams()
    const [loding, setLoding] = useState(false)
    const category = params.get('category')


    useEffect(() => {
        setLoding(true)
        getAllRooms()
            .then(data => {
                if (category) {
                    const filter = data.filter(room => room.category === category)
                    setRooms(filter)
                } else setRooms(data)
                setLoding(false)
            })
    }, [category])
    if (loding) return <Loader />
    return (
        <Container>
            {rooms && rooms.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-5 gap-10">
                {
                    rooms?.map(room => <Card key={room._id} room={room} ></Card>)
                }
            </div> :
                <div className="flex flex-col items-center justify-center min-h-[55vh]">
                    <Heading center={true} title={'No room avilable in this category'} subtitle={'Please select other categorys'} />
                </div>
            }
        </Container>
    );
};

export default Rooms;