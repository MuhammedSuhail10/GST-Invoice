import React from 'react';
import { useTheme } from './../../constants/theme';
import CalendarIcon from './Calendar';
import CartAdd from './CartAdd';
import CloseIcon from './Close';
import CustomerAdd from './CustomerAdd';
import DownloadIcon from './Download';
import FilterIcon from './Filter';
import HomeIcon from './HomeIcon';
import MenuIcon from './Menu';
import ProductAdd from './ProductAdd';
import ProductIcon from './Products';
import ProfileFill from './ProfileFill';
import PurachaseIcon from './Purchase';
import Report from './Report';
import BackArrow from './RightArrow';
import SaleIcon from './Sale';
import SaleAdd from './SaleAdd';
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
    download: DownloadIcon,
    filter: FilterIcon,
    calendar: CalendarIcon,
    close: CloseIcon,
    home: HomeIcon,
    menu: MenuIcon,
    customerAdd: CustomerAdd,
    saleAdd: SaleAdd,
    productAdd: ProductAdd,
    report: Report,
    cartAdd: CartAdd,
    back: BackArrow
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