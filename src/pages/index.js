import CardInfo from "../components/cardInfo";
import CreateRoute from "../components/crateRoute";
import Msgtop from "../components/msgtop";

export default function Home() {
    return(
        <div className="container flex flex-col w-full max-w-screen-md m-auto p-3">
        <Msgtop />
        <CreateRoute />
        <CardInfo />
        </div>
    )
}