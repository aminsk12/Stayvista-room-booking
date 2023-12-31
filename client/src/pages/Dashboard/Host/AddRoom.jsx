import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoom/AddRoomForm";
import imgUplod from "../../../api/ultils";
import useAuth from "../../../hooks/useAuth";
import { tr } from "date-fns/locale";
import { addRoom } from "../../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddRoom = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Uplod Image')
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const location = form.location.value
        const category = form.category.value
        const title = form.title.value
        const to = dates.endDate
        const from = dates.startDate
        const price = form.price.value
        const guest = form.total_guest.value
        const bathrooms = form.bathrooms.value
        const description = form.description.value
        const bedrooms = form.bedrooms.value
        const image = form.image.files[0]
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }
        const image_url = await imgUplod(image)

        const roomData = {
            location,
            category,
            title,
            to,
            from,
            price,
            guest,
            bathrooms,
            description,
            bedrooms,
            host,
            image: image_url?.data.display_url
        }

        try {
            
            const data = await addRoom(roomData)
            setUploadButtonText('Uploded!')
            toast.success('Room Added successful')
            navigate('/dasboard/myList')
            console.log(data);
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }

        console.table(roomData);
    }


    const handleDates = ranges => {
        setDates(ranges.selection)
        console.log(ranges);
    }
    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

    return (
        <div>
            <AddRoomForm
                dates={dates}
                handleSubmit={handleSubmit}
                handleDates={handleDates}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
            />
        </div>
    );
};

export default AddRoom;