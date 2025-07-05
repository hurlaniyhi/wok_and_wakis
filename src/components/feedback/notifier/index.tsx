import { 
    Button, 
    CustomContainer,
    FlexRow, 
    NotifierContainer, 
    NotifierIconWrapper, 
    Span,
    Text 
} from "@/components/styled-components";
import { useNotifier } from "@/hooks";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'

export default function Notifier () {
    const { notification, handleCloseNotifier } = useNotifier()

    return (
        <NotifierContainer
            $isNotifier={notification.status}
            data-testid="notifier"
        >
            <FlexRow 
                $justifyContent='space-between' 
                $alignItems='flex-start'
            >
                {  notification.type === 'success' ?
                    <NotifierIconWrapper 
                        $bgColor='#B4E3E1' size='4.5'
                        overflow='hidden'
                        $borderWidth='0.6' $borderColor='#F0FDF9'
                        $topMargin='-0.5'
                        className="fixed_flex_shape"
                    >
                        <AiOutlineCheckCircle /> 
                    </NotifierIconWrapper>
                    : 
                    <NotifierIconWrapper 
                        $bgColor='#FEF3F2' size='4.5' 
                        overflow='hidden' $topMargin='-0.5'
                        $borderWidth='0.6' $borderColor='#FDFAFA'
                        className="fixed_flex_shape"
                    >
                        <AiOutlineCloseCircle color='#B42318'  /> 
                    </NotifierIconWrapper>
                }
                <CustomContainer 
                    width='27' $leftMargin='1' $rightMargin='1.5'
                >
                    { notification.title &&
                        <Text 
                            fontWeight='600' $bottomMargin='0.7' 
                            color='#101828'
                        >
                            {notification.title}
                        </Text>
                    }
                    <Text  
                        color='#667085' $bottomMargin='2' 
                    >
                        {notification.message}
                    </Text>
                    <Span 
                        color={(notification.type === 'success' ? '#0A756F' : '#B42318')} 
                        fontWeight='600' cursor='pointer'
                        $hoverColor='#B42318'
                        onClick={handleCloseNotifier}
                    >
                        Dismiss
                    </Span>
                </CustomContainer>
                <Button 
                    $titleSize="2" fontWeight="500"
                    width='3.4' $shadow='none'
                    height='3.4'radius='0.4'
                    $bgColor='#ffffff' $hoverBgColor='#FEF3F2'
                    $borderColor='none' color='#000000'
                    $hoverColor='#B42318'
                    onClick={handleCloseNotifier}
                >
                    <RiCloseFill style={{marginTop: '0.5rem'}} />
                </Button> 
            </FlexRow>
        </NotifierContainer>
    )
}