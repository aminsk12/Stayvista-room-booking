import { axiosSecure } from "."
//get all rooms
export const getAllRooms = async () => {
    const { data } = await axiosSecure('/rooms')
    return data
}

//get single room
export const getRoom = async (id) => {
    const { data } = await axiosSecure(`/room/${id}`)
    return data
}

// save room in db
export const addRoom = async roomData => {
    const { data } = await axiosSecure.post(`/rooms`, roomData)
    return data
}