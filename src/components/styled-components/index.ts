import styled from 'styled-components'
import { StyleProps } from "@/types";

export const CustomContainer = styled.div<StyleProps>`
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : '100%'};
    height: ${({height, $hUnit}) => $hUnit && height ? `${height}${$hUnit}` : height ? `${height}rem` : 'auto'};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}rem;
    margin-left: ${({$leftMargin, $sizeUnit}) => $sizeUnit && $leftMargin ? `${$leftMargin}${$sizeUnit}` : $leftMargin ? `${$leftMargin}rem` : '0rem'};
    margin-right: ${({$rightMargin, $sizeUnit}) => $sizeUnit && $rightMargin ? `${$rightMargin}${$sizeUnit}` : $rightMargin ? `${$rightMargin}rem` : '0rem'};
    padding-top: ${({$topPadding, $padding}) => $topPadding || $padding || 0}rem;
    padding-bottom: ${({$bottomPadding, $padding}) => $bottomPadding || $padding || 0}rem;
    padding-left: ${({$leftPadding, $padding}) => $leftPadding || $padding || 0}rem;
    padding-right: ${({$rightPadding, $padding}) => $rightPadding || $padding || 0}rem;
    background-color: ${({$bgColor}) => $bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}rem;
    border: ${({$borderColor}) => $borderColor ? `1px solid ${$borderColor}` : 'none'};
    position: ${({position}) => position || 'relative'};
    overflow: ${({overflow}) => overflow || 'hidden'};
    z-index: ${({$zIndex}) => $zIndex || 1};
    box-shadow: ${({$shadow}) => $shadow || 'none'};
    min-height: ${({$minHeight, mnHUnit}) => mnHUnit && $minHeight ? `${$minHeight}${mnHUnit}` : $minHeight ? `${$minHeight}rem` : 'none'};
    max-height: ${({maxHeight, mxHUnit}) => mxHUnit && maxHeight ? `${maxHeight}${mxHUnit}` : maxHeight ? `${maxHeight}rem` : 'none'};
    min-width: ${({$minWidth, mnWUnit}) => mnWUnit && $minWidth ? `${$minWidth}${mnWUnit}` : $minWidth ? `${$minWidth}rem` : 'none'};
    max-width: ${({maxWidth, mxWUnit}) => mxWUnit && maxWidth ? `${maxWidth}${mxWUnit}` : maxWidth ? `${maxWidth}rem` : 'none'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};
    cursor: ${({cursor}) => cursor || 'auto'};
    transition: all .2s;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none
    }
`

export const FlexColumn = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    height: ${({height, $hUnit}) => $hUnit && height ? `${height}${$hUnit}` : height ? `${height}rem` : 'auto'};
    justify-content: ${({$justifyContent}) => $justifyContent || 'center'};
    align-items: ${({$alignItems}) => $alignItems || 'center'};
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : '100%'};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    padding-top: ${({$topPadding, $padding}) => $topPadding || $padding || 0}rem;
    padding-bottom: ${({$bottomPadding, $padding}) => $bottomPadding || $padding || 0}rem;
    padding-left: ${({$leftPadding, $padding}) => $leftPadding || $padding || 0}rem;
    padding-right: ${({$rightPadding, $padding}) => $rightPadding || $padding || 0}rem;
    background-color: ${({$bgColor}) => $bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}rem;
    border: ${({$borderColor}) => $borderColor ? `1px solid ${$borderColor}` : 'none'};
    box-shadow: ${({$shadow}) => $shadow || 'none'};
    min-height: ${({$minHeight, mnHUnit}) => mnHUnit && $minHeight ? `${$minHeight}${mnHUnit}` : $minHeight ? `${$minHeight}rem` : 'none'};
    max-height: ${({maxHeight, mxHUnit}) => mxHUnit && maxHeight ? `${maxHeight}${mxHUnit}` : maxHeight ? `${maxHeight}rem` : 'none'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};
    position: relative;
`
export const FlexRow = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${({$justifyContent}) => $justifyContent || 'flex-start'};
    align-items: ${({$alignItems}) => $alignItems || 'center'};
    flex-wrap: ${({wrap}) => wrap || 'nowrap'};
    gap: ${({$gap, $sizeUnit}) => $sizeUnit && $gap ? `${$gap}${$sizeUnit}` : $gap ? `${$gap}rem` : '0'};
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : '100%'};
    height: ${({height, $hUnit}) => $hUnit && height ? `${height}${$hUnit}` : height ? `${height}rem` : 'auto'};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    padding-top: ${({$topPadding, $padding}) => $topPadding || $padding || 0}rem;
    padding-bottom: ${({$bottomPadding, $padding}) => $bottomPadding || $padding || 0}rem;
    padding-left: ${({$leftPadding, $padding}) => $leftPadding || $padding || 0}rem;
    padding-right: ${({$rightPadding, $padding}) => $rightPadding || $padding || 0}rem;
    background-color: ${({$bgColor}) => $bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}rem;
    border: ${({$borderColor}) => $borderColor ? `1px solid ${$borderColor}` : 'none'};
    box-shadow: ${({$shadow}) => $shadow || 'none'};
    min-height: ${({$minHeight, mnHUnit}) => mnHUnit && $minHeight ? `${$minHeight}${mnHUnit}` : $minHeight ? `${$minHeight}rem` : 'none'};
    max-height: ${({maxHeight, mxHUnit}) => mxHUnit && maxHeight ? `${maxHeight}${mxHUnit}` : maxHeight ? `${maxHeight}rem` : 'none'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};
    position: relative;
    cursor: pointer;
    transition: all .2s;

    &:hover, &:focus {
        border: ${({$hoverBorderColor, $borderColor}) => ($hoverBorderColor || $borderColor) ? `1px solid ${$hoverBorderColor || $borderColor}` : 'none'};
    }
`
export const GridContainer = styled.div<StyleProps>`
    display: grid;
    place-items: ${({$alignItems}) => $alignItems || 'center'};
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : '100%'};
    height: ${({height, $hUnit}) => $hUnit && height ? `${height}${$hUnit}` : height ? `${height}rem` : 'auto'};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    padding-top: ${({$topPadding, $padding}) => $topPadding || $padding || 0}rem;
    padding-bottom: ${({$bottomPadding, $padding}) => $bottomPadding || $padding || 0}rem;
    padding-left: ${({$leftPadding, $padding}) => $leftPadding || $padding || 0}rem;
    padding-right: ${({$rightPadding, $padding}) => $rightPadding || $padding || 0}rem;
    background-color: ${({$bgColor}) => $bgColor || 'transparent'};
    border-radius: ${({radius}) => radius || 0}rem;
    border: ${({$borderColor}) => $borderColor ? `1px solid ${$borderColor}` : 'none'};
    box-$shadow: ${({$shadow}) => $shadow || 'none'};
    min-height: ${({$minHeight, mnHUnit}) => mnHUnit && $minHeight ? `${$minHeight}${mnHUnit}` : $minHeight ? `${$minHeight}rem` : 'none'};
    max-height: ${({maxHeight, mxHUnit}) => mxHUnit && maxHeight ? `${maxHeight}${mxHUnit}` : maxHeight ? `${maxHeight}rem` : 'none'};
    min-width: ${({$minWidth, mnWUnit}) => mnWUnit && $minWidth ? `${$minWidth}${mnWUnit}` : $minWidth ? `${$minWidth}rem` : 'none'};
    max-width: ${({maxWidth, mxWUnit}) => mxWUnit && maxWidth ? `${maxWidth}${mxWUnit}` : maxWidth ? `${maxWidth}rem` : 'none'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};
    grid-template-columns: ${({gridColumn}) => gridColumn || 'none'};
    position: relative;
    cursor: pointer;
`

export const Button = styled.button<StyleProps>`
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : '2rem'};
    height: ${({height}) => height || 4.5}rem;
    background-color: ${({$bgColor}) => $bgColor || '#0D968F'};
    border-radius: ${({radius}) => radius || 0.8}rem;
    outline: none;
    border: none;
    border: ${({$borderColor}) => $borderColor ? `1px solid ${$borderColor}` : 'none'};
    transition: all .2s;
    font-size: ${({$titleSize}) => $titleSize || 1.4}rem;
    color: ${({color}) => color || '#ffffff'};
    font-weight: ${({fontWeight}) => fontWeight || 500};
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-top: ${({$topMargin}) => $topMargin || '0'}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin || '0'}rem;
    padding: 0 ${({$padding}) => $padding || 0}rem;
    padding-top: ${({$topPadding}) => $topPadding || 0}rem;
    padding-bottom: ${({$bottomPadding}) => $bottomPadding || 0}rem;
    padding-left: ${({$leftPadding, $padding}) => $leftPadding ? $leftPadding : $padding ? $padding : 0.5}rem;
    padding-right: ${({$rightPadding, $padding}) => $rightPadding ? $rightPadding : $padding ? $padding : 0.5}rem;
    box-shadow: ${({$shadow}) => $shadow || '0px 1px 2px rgba(16, 24, 40, 0.05)'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};
    cursor: ${({cursor}) => cursor || 'pointer'};
    overflow: ${({overflow}) => overflow || 'hidden'};
    display: grid;
    place-items: center;

    &:hover, &:focus {
        background-color: ${({$hoverBgColor, $bgColor}) => $hoverBgColor || $bgColor};
        color: ${({$hoverColor, color}) => $hoverColor ? $hoverColor : color ? color : '#00071F'};
        border: ${({$hoverBorderColor, $borderColor}) => ($hoverBorderColor || $borderColor) ? `1px solid ${$hoverBorderColor || $borderColor}` : 'none'};
        outline: none;

        svg {
            color: ${({$hoverColor, color}) => $hoverColor ? $hoverColor : color ? color : '#00071F'};
        }
    }

    &:disabled {
        background-color: #DDE0E4;
        color: #ffffff;

        svg {
            color: #ffffff
        }
    }
`

export const Text = styled.p<StyleProps>`
    font-size: ${({$textSize}) => $textSize || 1.4}rem;
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : 'auto'};
    color: ${({color}) => color || '#07121D'};
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin || 0}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    padding-top: ${({$topPadding}) => $topPadding || 0}rem;
    padding-bottom: ${({$bottomPadding}) => $bottomPadding || 0}rem;
    padding-left: ${({$leftPadding}) => $leftPadding || 0}rem;
    padding-right: ${({$rightPadding}) => $rightPadding || 0}rem;
    text-align: ${({$align}) => $align || 'left'};
    font-family: ${({fontFamily}) => fontFamily && fontFamily};
    word-wrap: break-word;
    overflow-wrap: ${({textWrap}) => textWrap || 'anywhere'};
    cursor: ${({cursor}) => cursor || 'auto'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};

    &:hover {
        color: ${({color, $hoverColor}) => $hoverColor || color};
    }
`
export const Span = styled.span<StyleProps>`
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : 'auto'};
    font-size: ${({$textSize}) => $textSize || 1.4}rem;
    color: ${({color}) => color || '#07121D'};
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    padding-top: ${({$topPadding}) => $topPadding || 0}rem;
    padding-bottom: ${({$bottomPadding}) => $bottomPadding || 0}rem;
    padding-left: ${({$leftPadding}) => $leftPadding || 0}rem;
    padding-right: ${({$rightPadding}) => $rightPadding || 0}rem;
    text-align: ${({$align}) => $align || 'left'};
    font-family: ${({fontFamily}) => fontFamily && fontFamily};
    cursor: ${({cursor}) => cursor || 'auto'};
    word-wrap: break-word;
    overflow-wrap: ${({textWrap}) => textWrap || 'anywhere'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};
    background-color: ${({$bgColor}) => $bgColor || 'none'};
    border-radius: ${({radius}) => `${radius}rem` || 0};

    &:hover {
        color: ${({color, $hoverColor}) => $hoverColor || color};
    }
`

export const CustomLink = styled.a<StyleProps>`
    color: ${({color}) => color || '#07121D'};
    text-decoration: ${({decoration}) => decoration || 'underline'};
    font-size: ${({$textSize}) => $textSize || 1.4}rem;
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin || 0}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    padding-top: ${({$topPadding}) => $topPadding || 0}rem;
    padding-bottom: ${({$bottomPadding}) => $bottomPadding || 0}rem;
    padding-left: ${({$leftPadding}) => $leftPadding || 0}rem;
    padding-right: ${({$rightPadding}) => $rightPadding || 0}rem;
    text-align: ${({$align}) => $align || 'left'};
    border-bottom: ${({hasBottomBorder, color}) => hasBottomBorder ? `1px solid ${color || '#6DE7B4'}` : 'none'};
    outline: none;
    cursor: pointer;
    transition: all .2s;
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};

    &:hover, &:visited {
        outline: none;
        color: ${({color, $hoverColor}) => $hoverColor || color};
    }

    &:hover {
        color: ${({color, $hoverColor}) => $hoverColor || color};
        border-bottom: ${({hasBottomBorder, $hoverColor, color}) => hasBottomBorder ? `1px solid ${$hoverColor || color}` : 'none'};
        text-decoration: ${({decoration}) => decoration || 'underline'};
        outline: none
    }
`

export const Label = styled.label<StyleProps>`
    color: ${({color}) => color || '#07121D'};
    text-decoration: ${({decoration}) => decoration || 'none'};
    font-size: ${({$textSize}) => $textSize || 1.4}rem;
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin || 0}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    text-align: ${({$align}) => $align || 'left'};
    font-family: ${({fontFamily}) => fontFamily || 'Inter'};
    outline: none;
    cursor: pointer;
    transition: all .2s;

    &:hover, &:visited {
        outline: none;
    }

    &:hover {
        color: ${({color, $hoverColor}) => $hoverColor || color};
    }
`

export const Heading5 = styled.h5<StyleProps>`
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : 'auto'};
    font-size: ${({$textSize}) => $textSize || 1.4}rem;
    color: ${({color}) => color || '#07121D'};
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    padding-top: ${({$topPadding}) => $topPadding || 0}rem;
    padding-bottom: ${({$bottomPadding}) => $bottomPadding || 0}rem;
    padding-left: ${({$leftPadding}) => $leftPadding || 0}rem;
    padding-right: ${({$rightPadding}) => $rightPadding || 0}rem;
    text-align: ${({$align}) => $align || 'left'};
    font-family: ${({fontFamily}) => fontFamily && fontFamily};
    cursor: ${({cursor}) => cursor || 'auto'};
`

export const Heading4 = styled.h4<StyleProps>`
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : 'auto'};
    font-size: ${({$textSize}) => $textSize || 1.4}rem;
    color: ${({color}) => color || '#07121D'};
    font-weight: ${({fontWeight}) => fontWeight || 400};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    padding-top: ${({$topPadding}) => $topPadding || 0}rem;
    padding-bottom: ${({$bottomPadding}) => $bottomPadding || 0}rem;
    padding-left: ${({$leftPadding}) => $leftPadding || 0}rem;
    padding-right: ${({$rightPadding}) => $rightPadding || 0}rem;
    text-align: ${({$align}) => $align || 'left'};
    font-family: ${({fontFamily}) => fontFamily && fontFamily}
`

export const Circle = styled.div<StyleProps>`
    width: ${({size}) => size || 2}rem;
    height: ${({size}) => size || 2}rem;
    border-radius: ${({radius}) => radius || 50}%;
    background: ${({$bgColor}) => $bgColor};
    border: ${({$borderWidth}) => $borderWidth || 1}px solid ${({$borderColor}) => $borderColor || 'transparent'};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    display: grid;
    place-items: center;
    transition: all .2s;
` 

export const AbsoluteContainer = styled.div<StyleProps>`
    position: absolute;
    top: ${({$top, tSizeUnit}) => tSizeUnit && $top ? `${$top}${tSizeUnit}` : $top ? `${$top}rem` : 'none'};
    right: ${({$right, rSizeUnit}) => rSizeUnit && $right ? `${$right}${rSizeUnit}` : $right ? `${$right}rem` : 'none'};
    left: ${({$left, $lSizeUnit}) => $lSizeUnit && $left ? `${$left}${$lSizeUnit}` : $left ? `${$left}rem` : 'none'};
    bottom: ${({$bottom, bSizeUnit}) => bSizeUnit && $bottom ? `${$bottom}${bSizeUnit}` : $bottom ? `${$bottom}rem` : 'none'};
    background: ${({$bgColor}) => $bgColor || 'transparent'};
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : 'auto'};
    height: ${({height}) => height === 'full' ? '100%' : height ? `${height}rem`: 'auto'};
    border-radius: ${({radius}) => radius || 0}rem;
    z-index: ${({$zIndex}) => $zIndex || 1};
    box-shadow: ${({$shadow}) => $shadow || 'none'};
    transition: all 0.2s;
`
export const FixedContainer = styled.div<StyleProps>`
    position: fixed;
    top: ${({$top, tSizeUnit}) => tSizeUnit && $top ? `${$top}${tSizeUnit}` : $top ? `${$top}rem` : 'none'};
    right: ${({$right, rSizeUnit}) => rSizeUnit && $right ? `${$right}${rSizeUnit}` : $right ? `${$right}rem` : 'none'};
    left: ${({$left, $lSizeUnit}) => $lSizeUnit && $left ? `${$left}${$lSizeUnit}` : $left ? `${$left}rem` : 'none'};
    bottom: ${({$bottom, bSizeUnit}) => bSizeUnit && $bottom ? `${$bottom}${bSizeUnit}` : $bottom ? `${$bottom}rem` : 'none'};
    background: ${({$bgColor}) => $bgColor || 'transparent'};
    width: ${({width, $wUnit}) => $wUnit && width ? `${width}${$wUnit}` : width ? `${width}rem` : 'auto'};
    height: ${({height}) => height === 'full' ? '100%' : height ? `${height}rem`: 'auto'};
    border-radius: ${({radius}) => radius || 0}rem;
    z-index: ${({$zIndex}) => $zIndex || 1};
    transition: all 0.2s;
    padding-top: ${({$topPadding}) => $topPadding || 0}rem;
    padding-bottom: ${({$bottomPadding}) => $bottomPadding || 0}rem;
    padding-left: ${({$leftPadding}) => $leftPadding || 0}rem;
    padding-right: ${({$rightPadding}) => $rightPadding || 0}rem;
    box-shadow: ${({$shadow}) => $shadow || 'none'};
`
export const FormGroup = styled.div<StyleProps>`
    width: ${({width}) => width || 100}%;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}%;
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin || 1.5}rem;
    position: relative;

    label {
        margin: 0;
        padding-bottom: 1rem;
        font-weight: 600;
        font-size: 1.4rem;
        color: #5B6671;
    }

    input, select, textarea {
        border: 1px solid #BBC2C9;
        border-radius: .8rem;
        background-color: ${({$bgColor}) => $bgColor || 'transparent'};
        padding: 0 1.5rem;
        color: #07121D;
        outline: none;
        height: ${({height}) => height || '4'}rem;
        font-weight: 400;
        font-size: 1.6rem;
        width: 100%;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
    }
    textarea {
        height: 10rem;
        padding: 1rem 1.5rem;
        resize: none;
    }
    
    input:focus, textarea:focus {
        border-color: #28a745;
        box-$shadow: 0 0 0 0.2rem #ABD2FC;
    }
`
export const FormGroupWithIcon = styled.div<StyleProps>`
    width: ${({width}) => width || 100}%;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}%;
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin || 1.5}rem;

    label {
        margin: 0;
        padding-bottom: 1rem;
        font-weight: 600;
        font-size: 1.4rem;
        color: #5B6671;
    }
`

export const NotifierContainer = styled.div<StyleProps>`
    right: ${({$isNotifier}) => $isNotifier ? 30 : -700}px;
    opacity: ${({$isNotifier}) => $isNotifier ? 1 : 0};
    transform: translateX(0%);
    background-color: #ffffff;
    width: 40rem;
    padding: 1.2rem;
    position: fixed;
    top: 3rem;
    z-index: 15;
    border-radius: 0.8rem;
    box-shadow: 0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814;
    transition: all 1s;
    box-sizing: border-box;

    @media (max-width: 463px) {
        right: ${({$isNotifier}) => $isNotifier ? 50 : 120}%;
        transform: ${({$isNotifier}) => $isNotifier ? 'translateX(50%)' : 'translateX(0%)'};
    }

    @media (max-width: 428px) {
        width: 37rem;
    }

    @media (max-width: 388px) {
        width: 90%;
    }
`

export const NotifierIconWrapper = styled.div<StyleProps>`
    width: ${({size}) => size || 2}rem;
    height: ${({size}) => size || 2}rem;
    border-radius: ${({radius}) => radius || 50}%;
    background: ${({$bgColor}) => $bgColor};
    border: ${({$borderWidth}) => $borderWidth || 1}px solid ${({$borderColor}) => $borderColor || 'transparent'};
    margin-top: ${({$topMargin}) => $topMargin || 0}rem;
    margin-bottom: ${({$bottomMargin}) => $bottomMargin}rem;
    margin-left: ${({$leftMargin}) => $leftMargin || 0}rem;
    margin-right: ${({$rightMargin}) => $rightMargin || 0}rem;
    display: grid;
    place-items: center;
    transition: all .2s;

    svg {
        font-size: 2.5rem;
        color: #15B79E
    }

    @media (max-width: 360px) {
        width: 3.8rem;
        height: 3.8rem;
        margin-top: 0.3rem;
        overflow: hidden;

        svg {
            font-size: 1.8rem;
        }
    }
` 