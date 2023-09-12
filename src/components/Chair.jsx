import React from 'react'
import cn from 'classnames'
const Chair = ({ b, classNames }) => {
    return (
        <div>
            {
                <p className={cn('border-solid border-2 h-40 w-40 text-center flex justify-center items-center cursor-pointer', classNames)}>{b.soGhe}</p>
            }

        </div>
    )
}

export default Chair