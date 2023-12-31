/* eslint-disable react/prop-types */
//import { formatDistance } from "date-fns";
import { useState } from "react";
import Button from "../Button/Button";
import DatePicker from "./DatePicker";
import { formatDistance } from "date-fns";


const RoomReservation = ({ room }) => {

    const [value] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: 'selection'
    })

    const totalDays = parseInt(
        formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
    )
    console.log(totalDays);
    const totalPrise = totalDays * parseFloat(room.price)

    {/* const date1 = new Date(room?.from);
    const date2 = new Date(room?.to);
    const totalDays = parseInt(date2.getDate() - date1.getDate())
    console.log(totalDays);
    const totalPrise = totalDays * room?.price*/}

    return (
        <div className="rounded-xl border-[1px] items-center p-4 border-neutral-400 overflow-hidden bg-white">
            <div className="flex items-center gap-1">
                <div className="flex items-center  text-2xl font-bold ">$ {room?.price}</div>
                <div className="">night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <DatePicker value={value} />
            </div>
            <hr />
            <div className="p-4">
                <Button label={'Reserv'} />
            </div>
            <hr />
            <div className="flex p-4 text-3xl items-center font-bold justify-between">
                <p>Total</p>
                <p>$ {totalPrise}</p>
            </div>
        </div>
    );
};

export default RoomReservation;