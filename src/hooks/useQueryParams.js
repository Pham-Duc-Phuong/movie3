import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import qs from 'qs'
export const useQueryParams = () => {
    const [searchParams, setsearchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()
    const queryParams = Object.entries(searchParams)
    const setQueryParams = (a) => {
        const qsStringly = qs.stringify(a,{
            addQueryPrefix: true,
        })
        navigate(location.pathname + qsStringly)
    }
    return [queryParams, setQueryParams]
}