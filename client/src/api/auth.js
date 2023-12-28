import { axiosSecure } from "."


export const saveUser = async user => {
    const currentUser = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        role: 'admin',
        status: 'veryfied'
    }
    console.log("user from save", user);
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)

    return data
}