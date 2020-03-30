/*
    Copyright (c) 2020, salesforce.com, inc.
    All rights reserved.
    SPDX-License-Identifier: BSD-3-Clause
    For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
*/
import { LightningElement, api, wire } from 'lwc';
import { ShoppingBasket } from 'commerce/data';

import { GET_BASKET } from 'commerce/data';

export default class ShippingMethods extends LightningElement {
    @api shippingLabel;
    @api shippingMethods;
    @api selectedShippingMethodId;

    constructor() {
        super();
        this.selectedShippingMethodId =
            ShoppingBasket.basket.selectedShippingMethodId;
    }

    @wire(useQuery, {
        query: GET_BASKET,
        lazy: false,
    })
    getBasket;

    newShippingMethod = e => {
        this.selectedShippingMethodId = e.target.value;
        const event = new CustomEvent('update-shipping-method', {
            detail: {
                shippingMethodId: this.selectedShippingMethodId,
            },
        });
        window.dispatchEvent(event);
    };

    get viewShippingMethods() {
        return this.shippingMethods.map(shippingMethod => ({
            ...shippingMethod,
            selected: shippingMethod.id === this.selectedShippingMethodId,
        }));
    }
}
