import { useRoutes } from "react-router-dom"
import MainLayout from "../page/MainLayout"
import { PATH } from "../constant/config"
import List from '../components/List'
import Detail from '../components/Detail'
import Booking from '../components/Booking'
import HomePage from "../page/HomePage"
import Event from "../components/Event"
import Position from "../components/Position"
import Lich from "../components/Lich"
export const useRouters = () => {
    return useRoutes([
        {
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: PATH.list,
                    element: <List />
                },
                {
                    path: PATH.booking,
                    element: <Booking />
                },
                {
                    path: PATH.detail,
                    element: <Detail />
                },
                {
                    path: PATH.event,
                    element: <Event />
                },
                {
                    path: PATH.position,
                    element: <Position />
                },
                {
                    path: PATH.lichchieu,
                    element: <Lich />
                },
            ]
        }
    ])
}