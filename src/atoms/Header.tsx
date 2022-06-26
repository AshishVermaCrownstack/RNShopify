import { backgroundColor, BackgroundColorProps, composeRestyleFunctions, spacing, SpacingProps } from '@shopify/restyle'
import React, { FC } from 'react'
import { Theme } from '../../style/theme'
import Box, { boxType } from './Box'
import Text from './Text'

type HeaderProps =
    React.ComponentProps<boxType> &
    {
        title:string,
    }

const restyleFunctios = composeRestyleFunctions<Theme, HeaderProps>([
    spacing,
    backgroundColor,
])

export const Header:FC<HeaderProps> = ({title, ...props}) =>{
    return(
        <Box {...props}>
            <Text variant='header' color='whiteText'>{title}</Text>
        </Box>
    )
}