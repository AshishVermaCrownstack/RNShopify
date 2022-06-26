import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";
import { Theme } from "../../style/theme";
import Box, { boxType } from "./Box";

const Card = createRestyleComponent<VariantProps<Theme, 'cardVariants'> & React.ComponentProps<boxType> ,Theme>([createVariant({themeKey:'cardVariants'})], Box);

Card.defaultProps={
    variant:'medium'
}

export default Card;