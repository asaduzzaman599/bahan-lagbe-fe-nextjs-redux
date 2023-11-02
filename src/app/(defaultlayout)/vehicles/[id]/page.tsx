import VehicleDetails from "@/modules/Vehicle/VehicleDetails"

type IDParams = {
    params: any
}
const VehicleDetailsPage = ({params}:IDParams ) => {
    const {id} = params
    return (
        <VehicleDetails
            id={id}
        />
    );
};

export default VehicleDetailsPage;