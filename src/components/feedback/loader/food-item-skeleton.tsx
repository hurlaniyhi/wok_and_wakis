import { CustomContainer } from '@/components/styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function FoodItemSkeleton () {

    return (
        <CustomContainer 
            $padding='2.5' $topPadding='0'
            data-testid="skeleton-container"
        >
            <Skeleton 
                className='h-[6rem]'
                data-testid="skeleton-item" 
            />

            <CustomContainer $topMargin='2'>
                <CustomContainer>
                    <Skeleton 
                        className='h-[5.2rem] mb-[3rem]'
                        width='41rem'
                        data-testid="skeleton-item"
                    />
                    <div className="grid-wrapper">
                        {
                            Array.from(Array(6).keys()).map((item) => {
                                return (
                                    <Skeleton 
                                        key={item} 
                                        className='h-[14.8rem]'
                                        data-testid="skeleton-item"
                                    />
                                )
                            })
                        }
                    </div>
                </CustomContainer>
            </CustomContainer>
        </CustomContainer>
    )
}