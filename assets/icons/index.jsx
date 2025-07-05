import React from 'react';
import { useTheme } from './../../constants/theme';
import DownloadIcon from './Download';
import ProductIcon from './Products';
import ProfileFill from './ProfileFill';
import PurachaseIcon from './Purchase';
import SaleIcon from './Sale';
import Search from './Search';
import ShareIcon from './Share';
import ThreeDots from './ThreeDots';

const icons = {
    dots: ThreeDots,
    profile: ProfileFill,
    search: Search,
    sale: SaleIcon,
    purchase: PurachaseIcon,
    product: ProductIcon,
    share: ShareIcon,
    download: DownloadIcon
}

const Icon = ({ name, ...props }) => {
    const theme = useTheme();
    const IconComponent = icons[name];
    return (
        <IconComponent
            height={props.size || 24}
            width={props.size || 24}
            strokeWidth={props.strokeWidth || 2}
            color= {props.focused && theme.colors.primary}
            {...props}
        />
    )
}

export default Icon