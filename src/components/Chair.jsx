import React from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { Movie3Actions } from '../store/Movie3/slice'
const Chair = ({ b, classNames }) => {
    const dispatch = useDispatch()
    const { booking, booked } = useSelector(state => state.Movie3)
    return (
        <div>
            {
                <p className={cn('border-solid border-black border h-40 w-40 text-center flex justify-center items-center cursor-pointer rounded-6', classNames, {
                    'bg-red-600 text-white' : booking.find (a => a.soGhe === b.soGhe)  ,
                    'text-black line-through bg-gray-400 pointer-events-none': booked.find(a => a.soGhe === b.soGhe)
                })}
                    onClick={() => {
                        dispatch(Movie3Actions.bookChair(b))
                    }}
                >{b.soGhe}</p>
            }

        </div>
    )
}

export default Chair