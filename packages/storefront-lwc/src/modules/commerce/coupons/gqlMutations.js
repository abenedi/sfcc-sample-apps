import gql from 'graphql-tag';

export const ADDCOUPONMUTATION = gql`
    mutation submitCoupon($couponCode: String!) {
        submitCoupon(couponCode: $couponCode) {
            basketId
            customerId
            getBasketMessage
            totalProductsQuantity
            shipmentId
            shipmentTotal
            selectedShippingMethodId
            products {
                productId
                itemId
                quantity
                productName
                price
                image
                }
            orderTotal
            orderLevelPriceAdjustment {
                itemText
                price
            }
            shippingTotal
            shippingTotalTax
            taxation
            taxTotal
            couponItems {
                valid
                code
                couponItemId
                statusCode
            }
        }
    }
`;

export const REMOVECOUPONMUTATION = gql`
    mutation removeCoupon($couponItemId: String!) {
        removeCoupon(couponItemId: $couponItemId) {
            basketId
            customerId
            getBasketMessage
            totalProductsQuantity
            shipmentId
            shipmentTotal
            selectedShippingMethodId
            products {
                productId
                itemId
                quantity
                productName
                price
                image
                }
            orderTotal
            orderLevelPriceAdjustment {
                itemText
                price
            }
            shippingTotal
            shippingTotalTax
            taxation
            taxTotal
            couponItems {
                valid
                code
                couponItemId
                statusCode
            }
        }
    }
`;