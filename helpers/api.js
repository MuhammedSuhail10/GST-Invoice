const BASE_URL = "http://127.0.0.1:8000/api";

const ApiList = {
    BASE_URL,

    // Auth
    LOGIN: `${BASE_URL}/user/login`,
    REFRESH_TOKEN: `${BASE_URL}/user/refresh-token`,

    // Product
    CREATE_PRODUCT:`${BASE_URL}/product/create-product`,
    FETCH_PRODUCT: `${BASE_URL}/product/get-product`,
    EDIT_PRODUCT: `${BASE_URL}/product/update-product`,
    DELETE_PRODUCT: `${BASE_URL}/product/delete-product`,

    // Customer
    CREATE_CUSTOMER:`${BASE_URL}/customer/create-customer`,
    FETCH_CUSTOMER: `${BASE_URL}/customer/get-customer`,
    EDIT_CUSTOMER: `${BASE_URL}/customer/update-customer`,
    DELETE_CUSTOMER: `${BASE_URL}/customer/delete-customer`,

    // Order
    CREATE_ORDER:`${BASE_URL}/order/create-order`,
    FETCH_SALE: `${BASE_URL}/order/get-sale`,
    FETCH_PURCHASE: `${BASE_URL}/order/get-purchase`,
    FETCH_ITEMS: `${BASE_URL}/order/get-items`,
    EDIT_ORDER: `${BASE_URL}/order/update-order`,
    DELETE_ORDER: `${BASE_URL}/order/delete-order`,

    // Company
    CREATE_COMPANY:`${BASE_URL}/company/create-company`,
    FETCH_COMPANY: `${BASE_URL}/company/get-company`,
    EDIT_COMPANY: `${BASE_URL}/company/update-company`,
    EDIT_SIGNATURE: `${BASE_URL}/company/change-signature`,

    // Bank A/c
    CREATE_BANK:`${BASE_URL}/company/create-bank-details`,
    FETCH_BANK: `${BASE_URL}/company/get-bank-details`,
    EDIT_BANK: `${BASE_URL}/company/update-bank-details`,
    DELETE_BANK: `${BASE_URL}/company/delete-bank-details`,
};

export default ApiList;