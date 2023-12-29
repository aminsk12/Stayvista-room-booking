import {  useState } from "react";
import { useLoaderData} from "react-router-dom";
import Loader from "../../components/Shared/Loader/Loader";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";


const RoomDetail = () => {
    
    const room = useLoaderData()
    const [loding] = useState(false)

    
    if (loding) return <Loader />


    return (
        <Container>
            <Helmet> <title>{room?.title}</title> </Helmet>
            <div className=" mt-10  mx-auto max-w-screen-xl ">
                <Header room={room} />
                <div className=" grid md:gap-12 grid-cols-1 mt-10   md:grid-cols-8">

                    <RoomInfo room={room}></RoomInfo>
                    <div className="md:col-span-3 sm:w-full items-center flex order-first md:order-last">
                        <RoomReservation room={room} />
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default RoomDetail;