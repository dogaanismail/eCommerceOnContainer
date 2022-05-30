(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+fjr":
/*!******************************************************!*\
  !*** ./src/modules/shared/components/pager/pager.ts ***!
  \******************************************************/
/*! exports provided: Pager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pager", function() { return Pager; });
/* harmony import */ var _raw_loader_pager_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./pager.html */ "8evf");
/* harmony import */ var _pager_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pager.scss */ "iXAA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Pager = class Pager {
    constructor() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.buttonStates = {
            nextDisabled: true,
            previousDisabled: true,
        };
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.model) {
            this.model.items = (this.model.itemsPage > this.model.totalItems) ? this.model.totalItems : this.model.itemsPage;
            this.buttonStates.previousDisabled = (this.model.actualPage == 0);
            this.buttonStates.nextDisabled = (this.model.actualPage + 1 >= this.model.totalPages);
        }
    }
    onNextClicked(event) {
        event.preventDefault();
        console.log('Pager next clicked');
        this.changed.emit(this.model.actualPage + 1);
    }
    onPreviousCliked(event) {
        event.preventDefault();
        console.log('Pager previous clicked');
        this.changed.emit(this.model.actualPage - 1);
    }
};
Pager.propDecorators = {
    changed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Pager = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-pager',
        template: _raw_loader_pager_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pager_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], Pager);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dogan\Downloads\eShopOnContainers-dev\src\Web\WebSPA\Client\src\main.ts */"zUnb");


/***/ }),

/***/ "0P2R":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/catalog/catalog.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"esh-catalog-filters\">\n    <div class=\"container\">\n        <div class=\"alert alert-warning esh-catalog-alert\" role=\"alert\" [hidden]=\"!errorReceived\">\n            Error requesting catalog products, please try later on\n        </div>\n        <div class=\"esh-catalog-filters-wrapper d-flex align-items-end  mt-3\">\n            <div class=\"esh-catalog-filter-wrapper\">\n                <label class=\"esh-catalog-label\" for=\"brand\">Brand</label>\n                <select class=\"esh-catalog-filter form-control\" id=\"brand\" (change)=\"onBrandFilterChanged($event, $event.target.value)\">\n                    <option *ngFor=\"let brand of brands\" [value]=\"brand.id\">{{brand.brand}}</option>\n                </select>\n            </div>\n            <div class=\"esh-catalog-filter-wrapper\">\n                <label class=\"esh-catalog-label\" for=\"type\">Type</label>\n                <select class=\"esh-catalog-filter form-control\" id=\"type\" (change)=\"onTypeFilterChanged($event, $event.target.value)\">\n                    <option *ngFor=\"let type of types\" [value]=\"type.id\">{{type.type}}</option>\n                </select>\n            </div>\n            <button \n                type=\"button\" \n                class=\"btn btn-primary\"\n                (click)=\"onFilterApplied($event)\">Apply</button>\n        </div>\n    </div>\n</section>\n\n<div class=\"container\">\n    <div *ngIf=\"catalog?.data.length > 0\">\n        <esh-pager [model]=\"paginationInfo\" (changed)=\"onPageChanged($event)\"></esh-pager>\n\n        <div class=\"esh-catalog-items row\">\n            <div class=\"col-12 col-sm-6 col-md-4 col-lg-3\" \n                 *ngFor=\"let item of catalog?.data\">\n                <div [ngClass]=\"{'esh-catalog-item': true, 'is-disabled': !authenticated }\" (click)=\"addToCart(item)\">\n                    <div class=\"esh-catalog-thumbnail-wrapper\">\n                        <div class=\"esh-catalog-thumbnail-icon d-flex justify-content-center\">\n                            <img class=\"esh-catalog-thumbnail-icon-svg\" src=\"assets/images/add.svg\" />\n                        </div>\n                        <img class=\"esh-catalog-thumbnail\" src=\"{{item.pictureUri}}\" />\n                    </div>\n                    <div class=\"esh-catalog-details d-flex justify-content-between align-items-center\">\n                        <div class=\"esh-catalog-name ml-3\">\n                            <span>{{item.name}}</span>\n                        </div>\n                        <div class=\"esh-catalog-price mr-3\">\n                            <span>{{item.price | number:'1.2-2'}}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <esh-pager [model]=\"paginationInfo\" (changed)=\"onPageChanged($event)\"></esh-pager>\n    </div>\n    <div *ngIf=\"catalog?.data.length == 0\">\n        <span>THERE ARE NO RESULTS THAT MATCH YOUR SEARCH</span>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "21Fg":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/shared/components/header/header.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"esh-header\">\n    <div class=\"container\">\n        <a class=\"esh-header-back\" routerLink=\"{{url}}\">\n            <ng-content></ng-content>\n        </a>\n    </div>\n</div>\n");

/***/ }),

/***/ "4mXz":
/*!*****************************************************************!*\
  !*** ./src/modules/orders/orders-new/orders-new.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".esh-orders_new-titles {\n  padding-bottom: 1rem;\n  padding-top: 2rem;\n}\n.esh-orders_new-item {\n  font-size: 1rem;\n  font-weight: 300;\n}\n.esh-orders_new-thumbnail-container {\n  width: 10rem;\n}\n.esh-orders_new-thumbnail-wrapper {\n  background-color: #dbdede;\n  height: 0;\n  overflow: hidden;\n  padding-top: 100%;\n  position: relative;\n}\n.esh-orders_new-thumbnail {\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n}\n.esh-orders_new-buttons {\n  margin-top: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlcnMtbmV3LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQUhSO0FBTUk7RUFDSSxlQ2dCTTtFRGZOLGdCQ1FnQjtBRFp4QjtBQU9JO0VBQ0ksWUFBQTtBQUxSO0FBUUk7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFOUjtBQVNJO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFQUjtBQVVJO0VBQ0ksZ0JBQUE7QUFSUiIsImZpbGUiOiJvcmRlcnMtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4uZXNoLW9yZGVyc19uZXcge1xuXG4gICAgJi10aXRsZXMge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgJi1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtc2VtaWxpZ2h0O1xuICAgIH1cblxuICAgICYtdGh1bWJuYWlsLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICB9XG5cbiAgICAmLXRodW1ibmFpbC13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGVkZTtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICYtdGh1bWJuYWlsIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cblxuICAgICYtYnV0dG9ucyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgfVxufVxuIiwiLy8gQ29sb3JzXG4kY29sb3ItcHJpbWFyeTogI2Y2NmY2MTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzI5MjkyOTtcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0OiAjODE4MjhkO1xuJGNvbG9yLXNlY29uZGFyeS1icmlnaHRlcjogIzk3OTc5NztcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0OiAjZjNmNGYzO1xuXG4kY29sb3ItZGFya2VzdDogIzAwMDtcbiRjb2xvci1icmlnaHRlc3Q6ICNmZmY7XG5cblxuLy8gQW5pbWF0aW9uc1xuJGFuaW1hdGlvbi1zcGVlZC1kZWZhdWx0OiAuMzVzO1xuJGFuaW1hdGlvbi1zcGVlZC1zbG93OiAuNXM7XG4kYW5pbWF0aW9uLXNwZWVkLWZhc3Q6IC4xNXM7XG5cbi8vIEZvbnRzXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcbiRmb250LXdlaWdodC1zZW1pbGlnaHQ6IDMwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcblxuJGZvbnQtc2l6ZS14czogLjc1cmVtOyAgICAvLyAxMnB4XG4kZm9udC1zaXplLXM6IC44NzVyZW07ICAgIC8vIDE0cHhcbiRmb250LXNpemUtbTogMXJlbTsgICAgICAvLyAxNnB4XG4kZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgLy8gMjBweFxuJGZvbnQtc2l6ZS14eGw6IDEuNTYyNXJlbTsgICAvLyAyNXB4XG5cbi8vIE1lZGlhc1xuJG1lZGlhLXNjcmVlbi14eHM6IDM2MHB4O1xuJG1lZGlhLXNjcmVlbi14czogNjQwcHg7XG4kbWVkaWEtc2NyZWVuLXM6IDc2OHB4O1xuJG1lZGlhLXNjcmVlbi1tOiAxMDI0cHg7XG4kbWVkaWEtc2NyZWVuLWw6IDEyODBweDtcbiRtZWRpYS1zY3JlZW4teGw6IDE0NDBweDtcbiRtZWRpYS1zY3JlZW4teHhsOiAxNjgwcHg7XG4kbWVkaWEtc2NyZWVuLXh4eGw6IDE5MjBweDtcblxuLy8gQm9yZGVyc1xuJGJvcmRlci1saWdodDogMXB4O1xuXG4vLyBJbWFnZXNcbiRpbWFnZV9wYXRoOiAnL2Fzc2V0cy9pbWFnZXMvJztcbiRpbWFnZS1hcnJvd19kb3duOiAnI3skaW1hZ2VfcGF0aH1hcnJvdy1kb3duLnBuZyc7XG4iXX0= */");

/***/ }),

/***/ "6lyU":
/*!***************************************************************!*\
  !*** ./src/modules/orders/orders-new/orders-new.component.ts ***!
  \***************************************************************/
/*! exports provided: OrdersNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersNewComponent", function() { return OrdersNewComponent; });
/* harmony import */ var _orders_new_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-new.component.scss */ "4mXz");
/* harmony import */ var _raw_loader_orders_new_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders-new.component.html */ "pujc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../orders.service */ "J6to");
/* harmony import */ var _basket_basket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../basket/basket.service */ "GsTr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let OrdersNewComponent = class OrdersNewComponent {
    constructor(orderService, basketService, fb, router) {
        this.orderService = orderService;
        this.basketService = basketService;
        this.router = router;
        // Obtain user profile information
        this.order = orderService.mapOrderAndIdentityInfoNewOrder();
        this.newOrderForm = fb.group({
            'street': [this.order.street, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'city': [this.order.city, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'state': [this.order.state, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'country': [this.order.country, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'cardnumber': [this.order.cardnumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'cardholdername': [this.order.cardholdername, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'expirationdate': [this.order.expiration, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'securitycode': [this.order.cardsecuritynumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    submitForm(value) {
        this.order.street = this.newOrderForm.controls['street'].value;
        this.order.city = this.newOrderForm.controls['city'].value;
        this.order.state = this.newOrderForm.controls['state'].value;
        this.order.country = this.newOrderForm.controls['country'].value;
        this.order.cardnumber = this.newOrderForm.controls['cardnumber'].value;
        this.order.cardtypeid = 1;
        this.order.cardholdername = this.newOrderForm.controls['cardholdername'].value;
        this.order.cardexpiration = new Date(20 + this.newOrderForm.controls['expirationdate'].value.split('/')[1], this.newOrderForm.controls['expirationdate'].value.split('/')[0]);
        this.order.cardsecuritynumber = this.newOrderForm.controls['securitycode'].value;
        let basketCheckout = this.basketService.mapBasketInfoCheckout(this.order);
        this.basketService.setBasketCheckout(basketCheckout)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((errMessage) => {
            this.errorReceived = true;
            this.isOrderProcessing = false;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
        }))
            .subscribe(res => {
            this.router.navigate(['orders']);
        });
        this.errorReceived = false;
        this.isOrderProcessing = true;
    }
};
OrdersNewComponent.ctorParameters = () => [
    { type: _orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] },
    { type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_6__["BasketService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
OrdersNewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-orders_new .esh-orders_new .mb-5',
        template: _raw_loader_orders_new_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_new_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"], _basket_basket_service__WEBPACK_IMPORTED_MODULE_6__["BasketService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], OrdersNewComponent);



/***/ }),

/***/ "72p4":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/basket/basket-status/basket-status.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"esh-basketstatus pt-2 pb-2\"\n   [ngClass]=\"{'is-disabled': badge < 1}\"\n   [routerLink]=\"['basket']\">\n\n    <div class=\"esh-basketstatus-image ml-4 mr-1\">\n        <img src=\"assets/images/cart.svg\" />\n    </div>\n    <div class=\"esh-basketstatus-badge\">\n        {{badge}}\n    </div>\n</a>\n");

/***/ }),

/***/ "8evf":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/shared/components/pager/pager.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"esh-pager\">\n    <div class=\"container\">\n        <article class=\"esh-pager-wrapper row\">\n            <nav class=\"w-100\">\n                <span class=\"esh-pager-item esh-pager-item--navigable\"\n                      id=\"Previous\"\n                      [ngClass]=\"{'is-disabled': buttonStates?.previousDisabled}\"\n                      (click)=\"onPreviousCliked($event)\"\n                      aria-label=\"Previous\">\n                    Previous\n                </span>\n\n                <span class=\"esh-pager-item\">\n                    Showing {{model?.items}} of {{model?.totalItems}} products - Page {{model?.actualPage + 1}} - {{model?.totalPages}}\n                </span>\n\n                <span class=\"esh-pager-item esh-pager-item--navigable\"\n                      id=\"Next\"\n                      [ngClass]=\"{'is-disabled': buttonStates?.nextDisabled}\"\n                      (click)=\"onNextClicked($event)\"\n                      aria-label=\"Next\">\n                    Next\n                </span>\n            </nav>\n        </article>\n    </div>\n</div>\n");

/***/ }),

/***/ "9fF1":
/*!**************************************************!*\
  !*** ./src/modules/catalog/catalog.component.ts ***!
  \**************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _catalog_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog.component.scss */ "OlNY");
/* harmony import */ var _raw_loader_catalog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./catalog.component.html */ "0P2R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog.service */ "GIIC");
/* harmony import */ var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/configuration.service */ "b7Aq");
/* harmony import */ var _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/basket.wrapper.service */ "h7ng");
/* harmony import */ var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/security.service */ "x8Yk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let CatalogComponent = class CatalogComponent {
    constructor(service, basketService, configurationService, securityService) {
        this.service = service;
        this.basketService = basketService;
        this.configurationService = configurationService;
        this.securityService = securityService;
        this.authenticated = false;
        this.authenticated = securityService.IsAuthorized;
    }
    ngOnInit() {
        // Configuration Settings:
        if (this.configurationService.isReady)
            this.loadData();
        else
            this.configurationService.settingsLoaded$.subscribe(x => {
                this.loadData();
            });
        // Subscribe to login and logout observable
        this.authSubscription = this.securityService.authenticationChallenge$.subscribe(res => {
            this.authenticated = res;
        });
    }
    loadData() {
        this.getBrands();
        this.getCatalog(12, 0);
        this.getTypes();
    }
    onFilterApplied(event) {
        event.preventDefault();
        this.brandSelected = this.brandSelected && this.brandSelected.toString() != "null" ? this.brandSelected : null;
        this.typeSelected = this.typeSelected && this.typeSelected.toString() != "null" ? this.typeSelected : null;
        this.paginationInfo.actualPage = 0;
        this.getCatalog(this.paginationInfo.itemsPage, this.paginationInfo.actualPage, this.brandSelected, this.typeSelected);
    }
    onBrandFilterChanged(event, value) {
        event.preventDefault();
        this.brandSelected = value;
    }
    onTypeFilterChanged(event, value) {
        event.preventDefault();
        this.typeSelected = value;
    }
    onPageChanged(value) {
        console.log('catalog pager event fired' + value);
        event.preventDefault();
        this.paginationInfo.actualPage = value;
        this.getCatalog(this.paginationInfo.itemsPage, value);
    }
    addToCart(item) {
        if (!this.authenticated) {
            return;
        }
        this.basketService.addItemToBasket(item);
    }
    getCatalog(pageSize, pageIndex, brand, type) {
        this.errorReceived = false;
        this.service.getCatalog(pageIndex, pageSize, brand, type)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => this.handleError(err)))
            .subscribe(catalog => {
            this.catalog = catalog;
            this.paginationInfo = {
                actualPage: catalog.pageIndex,
                itemsPage: catalog.pageSize,
                totalItems: catalog.count,
                totalPages: Math.ceil(catalog.count / catalog.pageSize),
                items: catalog.pageSize
            };
        });
    }
    getTypes() {
        this.service.getTypes().subscribe(types => {
            this.types = types;
            let alltypes = { id: null, type: 'All' };
            this.types.unshift(alltypes);
        });
    }
    getBrands() {
        this.service.getBrands().subscribe(brands => {
            this.brands = brands;
            let allBrands = { id: null, brand: 'All' };
            this.brands.unshift(allBrands);
        });
    }
    handleError(error) {
        this.errorReceived = true;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
    }
};
CatalogComponent.ctorParameters = () => [
    { type: _catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"] },
    { type: _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_7__["BasketWrapperService"] },
    { type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"] },
    { type: _shared_services_security_service__WEBPACK_IMPORTED_MODULE_8__["SecurityService"] }
];
CatalogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-catalog .esh-catalog .mb-5',
        template: _raw_loader_catalog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"], _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_7__["BasketWrapperService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_8__["SecurityService"]])
], CatalogComponent);



/***/ }),

/***/ "Ah7w":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"esh-app-header\" [ngClass]=\"{'esh-app-header':true, 'esh-app-header--expanded': router.url === '/catalog'}\">\n    <div class=\"esh-app-header-promo\">\n        <span class=\"esh-app-header-promo-title\">All T-SHIRTS</span>\n        <span class=\"esh-app-header-promo-subtitle\">On sale this weekend</span>\n    </div>\n    <div class=\"container\">\n        <article class=\"d-flex align-content-center justify-content-between\">\n            <section>\n                <a routerLink=\"catalog\">\n                    <img class=\"esh-app-header-brand\" src=\"assets/images/logo_color.svg\" />\n                </a>\n            </section>\n\n            <section class=\"d-flex align-content-center justify-content-between\">\n                <esh-identity></esh-identity>\n                <esh-basket-status *ngIf=\"Authenticated\"></esh-basket-status>\n            </section>\n        </article>\n    </div>\n</header>\n\n<!-- component routing placeholder -->\n<router-outlet></router-outlet>\n\n<footer class=\"esh-app-footer\">\n    <div class=\"container\">\n        <article class=\"d-flex w-100 h-100 justify-content-between align-items-center\">\n\n            <section>\n                <img class=\"esh-app-footer-brand\" src=\"assets/images/logo.svg\" />\n            </section>\n\n            <section>\n                © e-Shoponcontainers. All rights reserved\n            </section>\n\n        </article>\n    </div>\n</footer>\n\n");

/***/ }),

/***/ "AiEP":
/*!************************************************!*\
  !*** ./src/modules/basket/basket.component.ts ***!
  \************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var _basket_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket.component.scss */ "I4Yj");
/* harmony import */ var _raw_loader_basket_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./basket.component.html */ "gL9z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _basket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basket.service */ "GsTr");
/* harmony import */ var _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/basket.wrapper.service */ "h7ng");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let BasketComponent = class BasketComponent {
    constructor(basketSerive, router, basketWrapperService) {
        this.basketSerive = basketSerive;
        this.router = router;
        this.basketWrapperService = basketWrapperService;
        this.totalPrice = 0;
    }
    ngOnInit() {
        this.basketSerive.getBasket().subscribe(basket => {
            this.basket = basket;
            this.calculateTotalPrice();
        });
    }
    deleteItem(id) {
        this.basket.items = this.basket.items.filter(item => item.id !== id);
        this.calculateTotalPrice();
        this.basketSerive.setBasket(this.basket).subscribe(x => {
            this.basketSerive.updateQuantity();
            console.log('basket updated: ' + x);
        });
    }
    itemQuantityChanged(item, quantity) {
        item.quantity = quantity > 0 ? quantity : 1;
        this.calculateTotalPrice();
        this.basketSerive.setBasket(this.basket).subscribe(x => console.log('basket updated: ' + x));
    }
    update(event) {
        let setBasketObservable = this.basketSerive.setBasket(this.basket);
        setBasketObservable
            .subscribe(x => {
            this.errorMessages = [];
            console.log('basket updated: ' + x);
        }, errMessage => this.errorMessages = errMessage.messages);
        return setBasketObservable;
    }
    checkOut(event) {
        this.update(event)
            .subscribe(x => {
            this.errorMessages = [];
            this.basketWrapperService.basket = this.basket;
            this.router.navigate(['order']);
        });
    }
    calculateTotalPrice() {
        this.totalPrice = 0;
        this.basket.items.forEach(item => {
            this.totalPrice += (item.unitPrice * item.quantity);
        });
    }
};
BasketComponent.ctorParameters = () => [
    { type: _basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["BasketWrapperService"] }
];
BasketComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-basket .esh-basket .mb-5',
        template: _raw_loader_basket_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basket_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["BasketWrapperService"]])
], BasketComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "EDuJ":
/*!*********************************************!*\
  !*** ./src/modules/orders/orders.module.ts ***!
  \*********************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "uQzi");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.component */ "aMt0");
/* harmony import */ var _orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders-detail/orders-detail.component */ "H5iX");
/* harmony import */ var _orders_new_orders_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-new/orders-new.component */ "6lyU");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.service */ "J6to");
/* harmony import */ var _basket_basket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../basket/basket.service */ "GsTr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"], _orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__["OrdersDetailComponent"], _orders_new_orders_new_component__WEBPACK_IMPORTED_MODULE_5__["OrdersNewComponent"]],
        providers: [_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"], _basket_basket_service__WEBPACK_IMPORTED_MODULE_7__["BasketService"]]
    })
], OrdersModule);



/***/ }),

/***/ "F5ZD":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/shared/components/page-not-found/page-not-found.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>404!</h1>\n\n<p>Page you are looking for does not exists.</p>");

/***/ }),

/***/ "FwHL":
/*!*********************************************************************!*\
  !*** ./src/modules/basket/basket-status/basket-status.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasketStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketStatusComponent", function() { return BasketStatusComponent; });
/* harmony import */ var _basket_status_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket-status.component.scss */ "OdHY");
/* harmony import */ var _raw_loader_basket_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./basket-status.component.html */ "72p4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basket.service */ "GsTr");
/* harmony import */ var _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/basket.wrapper.service */ "h7ng");
/* harmony import */ var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/security.service */ "x8Yk");
/* harmony import */ var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/configuration.service */ "b7Aq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let BasketStatusComponent = class BasketStatusComponent {
    constructor(basketService, basketWrapperService, authService, configurationService) {
        this.basketService = basketService;
        this.basketWrapperService = basketWrapperService;
        this.authService = authService;
        this.configurationService = configurationService;
        this.badge = 0;
    }
    ngOnInit() {
        // Subscribe to Add Basket Observable:
        this.basketItemAddedSubscription = this.basketWrapperService.addItemToBasket$.subscribe(item => {
            this.basketService.addItemToBasket(item).subscribe(res => {
                this.basketService.getBasket().subscribe(basket => {
                    if (basket)
                        this.badge = basket.items.length;
                });
            });
        });
        this.basketUpdateSubscription = this.basketService.basketUpdate$.subscribe(res => {
            this.basketService.getBasket().subscribe(basket => {
                this.badge = basket ? basket.items.length : 0;
            });
        });
        // Subscribe to login and logout observable
        this.authSubscription = this.authService.authenticationChallenge$.subscribe(res => {
            this.basketService.getBasket().subscribe(basket => {
                if (basket != null)
                    this.badge = basket.items.length;
            });
        });
        // Init:
        if (this.configurationService.isReady) {
            this.basketService.getBasket().subscribe(basket => {
                if (basket != null)
                    this.badge = basket.items.length;
            });
        }
        else {
            this.configurationService.settingsLoaded$.subscribe(x => {
                this.basketService.getBasket().subscribe(basket => {
                    if (basket != null)
                        this.badge = basket.items.length;
                });
            });
        }
    }
};
BasketStatusComponent.ctorParameters = () => [
    { type: _basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"] },
    { type: _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"] },
    { type: _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"] },
    { type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"] }
];
BasketStatusComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-basket-status',
        template: _raw_loader_basket_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basket_status_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"], _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]])
], BasketStatusComponent);



/***/ }),

/***/ "GIIC":
/*!************************************************!*\
  !*** ./src/modules/catalog/catalog.service.ts ***!
  \************************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/data.service */ "fGsj");
/* harmony import */ var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/configuration.service */ "b7Aq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let CatalogService = class CatalogService {
    constructor(service, configurationService) {
        this.service = service;
        this.configurationService = configurationService;
        this.catalogUrl = '';
        this.brandUrl = '';
        this.typesUrl = '';
        this.configurationService.settingsLoaded$.subscribe(x => {
            this.catalogUrl = this.configurationService.serverSettings.purchaseUrl + '/c/api/v1/catalog/items';
            this.brandUrl = this.configurationService.serverSettings.purchaseUrl + '/c/api/v1/catalog/catalogbrands';
            this.typesUrl = this.configurationService.serverSettings.purchaseUrl + '/c/api/v1/catalog/catalogtypes';
        });
    }
    getCatalog(pageIndex, pageSize, brand, type) {
        let url = this.catalogUrl;
        if (type) {
            url = this.catalogUrl + '/type/' + type.toString() + '/brand/' + ((brand) ? brand.toString() : '');
        }
        else if (brand) {
            url = this.catalogUrl + '/type/all' + '/brand/' + ((brand) ? brand.toString() : '');
        }
        url = url + '?pageIndex=' + pageIndex + '&pageSize=' + pageSize;
        return this.service.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((response) => {
            return response;
        }));
    }
    getBrands() {
        return this.service.get(this.brandUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((response) => {
            return response;
        }));
    }
    getTypes() {
        return this.service.get(this.typesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((response) => {
            return response;
        }));
    }
    ;
};
CatalogService.ctorParameters = () => [
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }
];
CatalogService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
], CatalogService);



/***/ }),

/***/ "GsTr":
/*!**********************************************!*\
  !*** ./src/modules/basket/basket.service.ts ***!
  \**********************************************/
/*! exports provided: BasketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketService", function() { return BasketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/data.service */ "fGsj");
/* harmony import */ var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/security.service */ "x8Yk");
/* harmony import */ var _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/basket.wrapper.service */ "h7ng");
/* harmony import */ var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/configuration.service */ "b7Aq");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/storage.service */ "tfFe");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let BasketService = class BasketService {
    constructor(service, authService, basketWrapperService, router, configurationService, storageService) {
        this.service = service;
        this.authService = authService;
        this.basketWrapperService = basketWrapperService;
        this.router = router;
        this.configurationService = configurationService;
        this.storageService = storageService;
        this.basketUrl = '';
        this.purchaseUrl = '';
        this.basket = {
            buyerId: '',
            items: []
        };
        //observable that is fired when item is removed from basket
        this.basketUpdateSource = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.basketUpdate$ = this.basketUpdateSource.asObservable();
        this.basket.items = [];
        // Init:
        if (this.authService.IsAuthorized) {
            if (this.authService.UserData) {
                this.basket.buyerId = this.authService.UserData.sub;
                if (this.configurationService.isReady) {
                    this.basketUrl = this.configurationService.serverSettings.purchaseUrl;
                    this.purchaseUrl = this.configurationService.serverSettings.purchaseUrl;
                    this.loadData();
                }
                else {
                    this.configurationService.settingsLoaded$.subscribe(x => {
                        this.basketUrl = this.configurationService.serverSettings.purchaseUrl;
                        this.purchaseUrl = this.configurationService.serverSettings.purchaseUrl;
                        this.loadData();
                    });
                }
            }
        }
        this.basketWrapperService.orderCreated$.subscribe(x => {
            this.dropBasket();
        });
    }
    addItemToBasket(item) {
        let basketItem = this.basket.items.find(value => value.productId == item.productId);
        if (basketItem) {
            basketItem.quantity++;
        }
        else {
            this.basket.items.push(item);
        }
        return this.setBasket(this.basket);
    }
    setBasket(basket) {
        let url = this.purchaseUrl + '/b/api/v1/basket/';
        this.basket = basket;
        return this.service.post(url, basket).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((response) => true));
    }
    setBasketCheckout(basketCheckout) {
        let url = this.basketUrl + '/b/api/v1/basket/checkout';
        return this.service.postWithId(url, basketCheckout).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((response) => {
            this.basketWrapperService.orderCreated();
            return true;
        }));
    }
    getBasket() {
        let url = this.basketUrl + '/b/api/v1/basket/' + this.basket.buyerId;
        return this.service.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((response) => {
            if (response.status === 204) {
                return null;
            }
            return response;
        }));
    }
    mapBasketInfoCheckout(order) {
        let basketCheckout = {};
        basketCheckout.street = order.street;
        basketCheckout.city = order.city;
        basketCheckout.country = order.country;
        basketCheckout.state = order.state;
        basketCheckout.zipcode = order.zipcode;
        basketCheckout.cardexpiration = order.cardexpiration;
        basketCheckout.cardnumber = order.cardnumber;
        basketCheckout.cardsecuritynumber = order.cardsecuritynumber;
        basketCheckout.cardtypeid = order.cardtypeid;
        basketCheckout.cardholdername = order.cardholdername;
        basketCheckout.total = 0;
        basketCheckout.expiration = order.expiration;
        return basketCheckout;
    }
    updateQuantity() {
        this.basketUpdateSource.next();
    }
    dropBasket() {
        this.basket.items = [];
        this.setBasket(this.basket).subscribe(res => {
            this.basketUpdateSource.next();
        });
    }
    loadData() {
        this.getBasket().subscribe(basket => {
            if (basket != null)
                this.basket.items = basket.items;
        });
    }
};
BasketService.ctorParameters = () => [
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _shared_services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"] },
    { type: _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"] },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
BasketService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"], _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"], _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
], BasketService);



/***/ }),

/***/ "H5iX":
/*!*********************************************************************!*\
  !*** ./src/modules/orders/orders-detail/orders-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrdersDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDetailComponent", function() { return OrdersDetailComponent; });
/* harmony import */ var _orders_detail_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-detail.component.scss */ "UboX");
/* harmony import */ var _raw_loader_orders_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders-detail.component.html */ "JD9h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ "J6to");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let OrdersDetailComponent = class OrdersDetailComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.order = {};
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getOrder(id);
        });
    }
    getOrder(id) {
        this.service.getOrder(id).subscribe(order => {
            this.order = order;
            console.log('order retrieved: ' + order.ordernumber);
            console.log(this.order);
        });
    }
};
OrdersDetailComponent.ctorParameters = () => [
    { type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
OrdersDetailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-orders_detail .esh-orders_detail .mb-5',
        template: _raw_loader_orders_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_detail_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], OrdersDetailComponent);



/***/ }),

/***/ "HClI":
/*!********************************************************!*\
  !*** ./src/modules/shared/services/signalr.service.ts ***!
  \********************************************************/
/*! exports provided: SignalrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalrService", function() { return SignalrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security.service */ "x8Yk");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.service */ "b7Aq");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let SignalrService = class SignalrService {
    constructor(securityService, configurationService, toastr) {
        this.securityService = securityService;
        this.configurationService = configurationService;
        this.toastr = toastr;
        this.SignalrHubUrl = '';
        this.msgSignalrSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.msgReceived$ = this.msgSignalrSource.asObservable();
        if (this.configurationService.isReady) {
            this.SignalrHubUrl = this.configurationService.serverSettings.signalrHubUrl;
            this.init();
        }
        else {
            this.configurationService.settingsLoaded$.subscribe(x => {
                this.SignalrHubUrl = this.configurationService.serverSettings.signalrHubUrl;
                this.init();
            });
        }
    }
    stop() {
        this._hubConnection.stop();
    }
    init() {
        if (this.securityService.IsAuthorized == true) {
            this.register();
            this.stablishConnection();
            this.registerHandlers();
        }
    }
    register() {
        this._hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
            .withUrl(this.SignalrHubUrl + '/hub/notificationhub', {
            accessTokenFactory: () => this.securityService.GetToken()
        })
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information)
            .withAutomaticReconnect()
            .build();
    }
    stablishConnection() {
        this._hubConnection.start()
            .then(() => {
            console.log('Hub connection started');
        })
            .catch(() => {
            console.log('Error while establishing connection');
        });
    }
    registerHandlers() {
        this._hubConnection.on('UpdatedOrderState', (msg) => {
            console.log(`Order ${msg.orderId} updated to ${msg.status}`);
            this.toastr.success('Updated to status: ' + msg.status, 'Order Id: ' + msg.orderId);
            this.msgSignalrSource.next();
        });
    }
};
SignalrService.ctorParameters = () => [
    { type: _security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
SignalrService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"],
        _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], SignalrService);



/***/ }),

/***/ "I4Yj":
/*!**************************************************!*\
  !*** ./src/modules/basket/basket.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".esh-basket-item {\n  background-color: #fff;\n  margin-bottom: 1.5rem;\n}\n.esh-basket-delete {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  height: 2rem;\n  justify-content: center;\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem;\n  transition: all 0.15s;\n  width: 2rem;\n  z-index: 20;\n}\n.esh-basket-delete:hover {\n  transform: scale(1.2);\n}\n.esh-basket-delete-svg {\n  height: auto;\n  width: 1.5rem;\n}\n.esh-basket-buttons {\n  width: 5rem;\n}\n.esh-basket-button {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  height: 1.5rem;\n  justify-content: center;\n  padding: 0;\n  transition: all 0.15s;\n  width: 1.5rem;\n  z-index: 20;\n}\n.esh-basket-button.is-disabled {\n  cursor: default;\n  opacity: 0.3;\n}\n.esh-basket-button-svg {\n  height: auto;\n  width: 1.5rem;\n}\n.esh-basket-thumbnail-wrapper {\n  background-color: #dbdede;\n  height: 0;\n  overflow: hidden;\n  padding-top: 100%;\n  position: relative;\n}\n.esh-basket-thumbnail {\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n}\n.esh-basket-title {\n  font-size: 1rem;\n  line-height: 3rem;\n  padding: 0 1rem;\n  text-transform: uppercase;\n}\n.esh-basket-description {\n  min-height: 3rem;\n  padding: 0 1rem;\n}\n.esh-basket-quantity {\n  line-height: 1.5rem;\n  text-align: center;\n  width: 2rem;\n}\n.esh-basket-price {\n  color: #f66f61;\n  width: 4rem;\n}\n.esh-basket-checkout {\n  background-color: #fff;\n}\n.esh-basket-checkout-title {\n  font-weight: 600;\n  text-align: center;\n}\n.esh-basket-input {\n  line-height: 1rem;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJhc2tldC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUk7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0FBUFI7QUFVSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVJSO0FBVVE7RUFDSSxxQkFBQTtBQVJaO0FBWUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVZSO0FBYUk7RUFDSSxXQUFBO0FBWFI7QUFjSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVpSO0FBY1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVpaO0FBZ0JJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFkUjtBQWlCSTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWZSO0FBa0JJO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFoQlI7QUFtQkk7RUFDSSxlQ3hETTtFRHlETixpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWpCUjtBQW9CSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQWxCUjtBQXFCSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbkJSO0FBc0JJO0VBQ0ksY0NuR1E7RURvR1IsV0FBQTtBQXBCUjtBQXVCSTtFQUNJLHNCQ2hHVTtBRDJFbEI7QUF3Qkk7RUFDSSxnQkN4RmU7RUR5RmYsa0JBQUE7QUF0QlI7QUF5Qkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUF2QlIiLCJmaWxlIjoiYmFza2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG5AbWl4aW4gbWFyZ2luLWxlZnQoJGRpc3RhbmNlKSB7XG4gICAgbWFyZ2luLWxlZnQ6ICRkaXN0YW5jZTtcbn1cblxuLmVzaC1iYXNrZXQge1xuXG4gICAgJi1pdGVtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cblxuICAgICYtZGVsZXRlIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAuNXJlbTtcbiAgICAgICAgdG9wOiAuNXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsICRhbmltYXRpb24tc3BlZWQtZmFzdDtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIHotaW5kZXg6IDIwO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1kZWxldGUtc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgIH1cblxuICAgICYtYnV0dG9ucyB7XG4gICAgICAgIHdpZHRoOiA1cmVtO1xuICAgIH1cblxuICAgICYtYnV0dG9uIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uLXNwZWVkLWZhc3Q7XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgIHotaW5kZXg6IDIwO1xuXG4gICAgICAgICYuaXMtZGlzYWJsZWQge1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWJ1dHRvbi1zdmcge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgfVxuXG4gICAgJi10aHVtYm5haWwtd3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRlZGU7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAmLXRodW1ibmFpbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgJi1kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDNyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG5cbiAgICAmLXF1YW50aXR5IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICB9XG5cbiAgICAmLXByaWNlIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB3aWR0aDogNHJlbTtcbiAgICB9XG5cbiAgICAmLWNoZWNrb3V0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcbiAgICB9XG5cbiAgICAmLWNoZWNrb3V0LXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICYtaW5wdXQge1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5cblxuIiwiLy8gQ29sb3JzXG4kY29sb3ItcHJpbWFyeTogI2Y2NmY2MTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzI5MjkyOTtcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0OiAjODE4MjhkO1xuJGNvbG9yLXNlY29uZGFyeS1icmlnaHRlcjogIzk3OTc5NztcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0OiAjZjNmNGYzO1xuXG4kY29sb3ItZGFya2VzdDogIzAwMDtcbiRjb2xvci1icmlnaHRlc3Q6ICNmZmY7XG5cblxuLy8gQW5pbWF0aW9uc1xuJGFuaW1hdGlvbi1zcGVlZC1kZWZhdWx0OiAuMzVzO1xuJGFuaW1hdGlvbi1zcGVlZC1zbG93OiAuNXM7XG4kYW5pbWF0aW9uLXNwZWVkLWZhc3Q6IC4xNXM7XG5cbi8vIEZvbnRzXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcbiRmb250LXdlaWdodC1zZW1pbGlnaHQ6IDMwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcblxuJGZvbnQtc2l6ZS14czogLjc1cmVtOyAgICAvLyAxMnB4XG4kZm9udC1zaXplLXM6IC44NzVyZW07ICAgIC8vIDE0cHhcbiRmb250LXNpemUtbTogMXJlbTsgICAgICAvLyAxNnB4XG4kZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgLy8gMjBweFxuJGZvbnQtc2l6ZS14eGw6IDEuNTYyNXJlbTsgICAvLyAyNXB4XG5cbi8vIE1lZGlhc1xuJG1lZGlhLXNjcmVlbi14eHM6IDM2MHB4O1xuJG1lZGlhLXNjcmVlbi14czogNjQwcHg7XG4kbWVkaWEtc2NyZWVuLXM6IDc2OHB4O1xuJG1lZGlhLXNjcmVlbi1tOiAxMDI0cHg7XG4kbWVkaWEtc2NyZWVuLWw6IDEyODBweDtcbiRtZWRpYS1zY3JlZW4teGw6IDE0NDBweDtcbiRtZWRpYS1zY3JlZW4teHhsOiAxNjgwcHg7XG4kbWVkaWEtc2NyZWVuLXh4eGw6IDE5MjBweDtcblxuLy8gQm9yZGVyc1xuJGJvcmRlci1saWdodDogMXB4O1xuXG4vLyBJbWFnZXNcbiRpbWFnZV9wYXRoOiAnL2Fzc2V0cy9pbWFnZXMvJztcbiRpbWFnZS1hcnJvd19kb3duOiAnI3skaW1hZ2VfcGF0aH1hcnJvdy1kb3duLnBuZyc7XG4iXX0= */");

/***/ }),

/***/ "J6to":
/*!**********************************************!*\
  !*** ./src/modules/orders/orders.service.ts ***!
  \**********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/data.service */ "fGsj");
/* harmony import */ var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/security.service */ "x8Yk");
/* harmony import */ var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/configuration.service */ "b7Aq");
/* harmony import */ var _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/basket.wrapper.service */ "h7ng");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let OrdersService = class OrdersService {
    constructor(service, basketService, identityService, configurationService) {
        this.service = service;
        this.basketService = basketService;
        this.identityService = identityService;
        this.configurationService = configurationService;
        this.ordersUrl = '';
        if (this.configurationService.isReady)
            this.ordersUrl = this.configurationService.serverSettings.purchaseUrl;
        else
            this.configurationService.settingsLoaded$.subscribe(x => this.ordersUrl = this.configurationService.serverSettings.purchaseUrl);
    }
    getOrders() {
        let url = this.ordersUrl + '/o/api/v1/orders';
        return this.service.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            return response;
        }));
    }
    cancelOrder(orderNumber) {
        let url = this.ordersUrl + '/o/api/v1/orders/cancel';
        let data = { OrderNumber: orderNumber };
        return this.service.putWithId(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            return;
        }));
    }
    getOrder(id) {
        let url = this.ordersUrl + '/o/api/v1/orders/' + id;
        return this.service.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            return response;
        }));
    }
    mapOrderAndIdentityInfoNewOrder() {
        let order = {};
        let basket = this.basketService.basket;
        let identityInfo = this.identityService.UserData;
        console.log(basket);
        console.log(identityInfo);
        // Identity data mapping:
        order.street = identityInfo.address_street;
        order.city = identityInfo.address_city;
        order.country = identityInfo.address_country;
        order.state = identityInfo.address_state;
        order.zipcode = identityInfo.address_zip_code;
        order.cardexpiration = identityInfo.card_expiration;
        order.cardnumber = identityInfo.card_number;
        order.cardsecuritynumber = identityInfo.card_security_number;
        order.cardtypeid = identityInfo.card_type;
        order.cardholdername = identityInfo.card_holder;
        order.total = 0;
        order.expiration = identityInfo.card_expiration;
        // basket data mapping:
        order.orderItems = new Array();
        basket.items.forEach(x => {
            let item = {};
            item.pictureurl = x.pictureUrl;
            item.productId = +x.productId;
            item.productname = x.productName;
            item.unitprice = x.unitPrice;
            item.units = x.quantity;
            order.total += (item.unitprice * item.units);
            order.orderItems.push(item);
        });
        order.buyer = basket.buyerId;
        return order;
    }
};
OrdersService.ctorParameters = () => [
    { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"] },
    { type: _shared_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"] },
    { type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
];
OrdersService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["BasketWrapperService"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
], OrdersService);



/***/ }),

/***/ "JD9h":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/orders/orders-detail/orders-detail.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"esh-orders_detail\">\n    <div class=\"container\">\n        <h1 class=\"mb-4 mt-5\">[ Order List Detail ]</h1>\n        <div class=\"u-background-brightest p-5\">\n            <article class=\"esh-orders_detail-titles row\">\n                <section class=\"col-3\">Order number</section>\n                <section class=\"col-3\">Date</section>\n                <section class=\"col-3\">Total</section>\n                <section class=\"col-3\">Status</section>\n            </article>\n\n            <article class=\"esh-orders_detail-items row\">\n                <section class=\"col-3\">{{order.ordernumber}}</section>\n                <section class=\"col-3\">{{order.date | date:'short'}}</section>\n                <section class=\"col-3\">$ {{order.total}}</section>\n                <section class=\"col-3\">{{order.status}}</section>\n            </article>\n\n            <h2 class=\"esh-orders_detail-title mt-5\">Shipping address</h2>\n            <div class=\"u-mb-5\">{{order.street}} {{order.city}} {{order.country}}</div>\n\n            <article class=\"esh-orders_detail-items divider divider--bottom d-flex align-items-center pb-3 mt-3 u-text-sm\"\n                     *ngFor=\"let item of order.orderitems\">\n                <div class=\"esh-orders_detail-thumbnail-container\">\n                    <div class=\"esh-orders_detail-thumbnail-wrapper\">\n                        <img class=\"esh-orders_detail-thumbnail\" src=\"{{item.pictureurl}}\">\n                    </div>\n                </div>\n                <div class=\"row w-100 ml-3\">\n                    <div class=\"col-6\">{{item.productname}}</div>\n                    <div class=\"col-2\">$ {{item.unitprice | number:'.2-2'}}</div>\n                    <div class=\"col-2\">{{item.units}}</div>\n                    <div class=\"col-2 text-right\">${{(item.units * item.unitprice) | number:'.2-2'}}</div>\n                </div>\n            </article>\n\n            <div class=\"d-flex align-items-center justify-content-end mt-4 mb-4 text-uppercase u-text-xl\">\n                <div>Total</div>\n                <div class=\"ml-3\">${{order.total | number:'.2-2'}}</div>\n            </div>\n\n            <aside class=\"d-flex justify-content-end mt-5\">\n                <a class=\"btn btn-secondary\" routerLink=\"/orders\">Back to list</a>\n            </aside>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "OdHY":
/*!***********************************************************************!*\
  !*** ./src/modules/basket/basket-status/basket-status.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".esh-basketstatus {\n  cursor: pointer;\n  display: inline-block;\n  float: right;\n  position: relative;\n  transition: all 0.35s;\n}\n.esh-basketstatus.is-disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.esh-basketstatus-image {\n  height: auto;\n  width: 1.5rem;\n}\n.esh-basketstatus-badge {\n  background-color: #f66f61;\n  border-radius: 50%;\n  bottom: 0;\n  color: #fff;\n  display: block;\n  font-size: 0.75rem;\n  line-height: 1.2rem;\n  height: 1.2rem;\n  right: 0;\n  position: absolute;\n  text-align: center;\n  transition: all 0.15s;\n  width: 1.2rem;\n}\n.esh-basketstatus:hover .esh-basketstatus-badge {\n  transform: scale(1.2) rotate(20deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYXNrZXQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFESjtBQUdJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FBRFI7QUFJSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRlI7QUFLSTtFQUNJLHlCQ25CUTtFRG9CUixrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQ2RVO0VEZVYsY0FBQTtFQUNBLGtCQ0RPO0VERVAsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFIUjtBQU1JO0VBQ0ksbUNBQUE7QUFKUiIsImZpbGUiOiJiYXNrZXQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4uZXNoLWJhc2tldHN0YXR1cyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ7XG5cbiAgICAmLmlzLWRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgICYtaW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgfVxuXG4gICAgJi1iYWRnZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgY29sb3I6ICRjb2xvci1icmlnaHRlc3Q7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgIGhlaWdodDogMS4ycmVtO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uLXNwZWVkLWZhc3Q7XG4gICAgICAgIHdpZHRoOiAxLjJyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciAmLWJhZGdlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSgyMGRlZyk7XG4gICAgfVxufVxuIiwiLy8gQ29sb3JzXG4kY29sb3ItcHJpbWFyeTogI2Y2NmY2MTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzI5MjkyOTtcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0OiAjODE4MjhkO1xuJGNvbG9yLXNlY29uZGFyeS1icmlnaHRlcjogIzk3OTc5NztcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0OiAjZjNmNGYzO1xuXG4kY29sb3ItZGFya2VzdDogIzAwMDtcbiRjb2xvci1icmlnaHRlc3Q6ICNmZmY7XG5cblxuLy8gQW5pbWF0aW9uc1xuJGFuaW1hdGlvbi1zcGVlZC1kZWZhdWx0OiAuMzVzO1xuJGFuaW1hdGlvbi1zcGVlZC1zbG93OiAuNXM7XG4kYW5pbWF0aW9uLXNwZWVkLWZhc3Q6IC4xNXM7XG5cbi8vIEZvbnRzXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcbiRmb250LXdlaWdodC1zZW1pbGlnaHQ6IDMwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcblxuJGZvbnQtc2l6ZS14czogLjc1cmVtOyAgICAvLyAxMnB4XG4kZm9udC1zaXplLXM6IC44NzVyZW07ICAgIC8vIDE0cHhcbiRmb250LXNpemUtbTogMXJlbTsgICAgICAvLyAxNnB4XG4kZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgLy8gMjBweFxuJGZvbnQtc2l6ZS14eGw6IDEuNTYyNXJlbTsgICAvLyAyNXB4XG5cbi8vIE1lZGlhc1xuJG1lZGlhLXNjcmVlbi14eHM6IDM2MHB4O1xuJG1lZGlhLXNjcmVlbi14czogNjQwcHg7XG4kbWVkaWEtc2NyZWVuLXM6IDc2OHB4O1xuJG1lZGlhLXNjcmVlbi1tOiAxMDI0cHg7XG4kbWVkaWEtc2NyZWVuLWw6IDEyODBweDtcbiRtZWRpYS1zY3JlZW4teGw6IDE0NDBweDtcbiRtZWRpYS1zY3JlZW4teHhsOiAxNjgwcHg7XG4kbWVkaWEtc2NyZWVuLXh4eGw6IDE5MjBweDtcblxuLy8gQm9yZGVyc1xuJGJvcmRlci1saWdodDogMXB4O1xuXG4vLyBJbWFnZXNcbiRpbWFnZV9wYXRoOiAnL2Fzc2V0cy9pbWFnZXMvJztcbiRpbWFnZS1hcnJvd19kb3duOiAnI3skaW1hZ2VfcGF0aH1hcnJvdy1kb3duLnBuZyc7XG4iXX0= */");

/***/ }),

/***/ "OlNY":
/*!****************************************************!*\
  !*** ./src/modules/catalog/catalog.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".esh-catalog-title {\n  position: relative;\n  top: 74.2857142857px;\n}\n.esh-catalog-filters {\n  height: 65px;\n}\n.esh-catalog-filters-wrapper {\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.esh-catalog-filter-wrapper {\n  margin-right: 0.5rem;\n  position: relative;\n}\n.esh-catalog-filter-wrapper:after {\n  border-bottom: 1px solid #292929;\n  border-right: 1px solid #292929;\n  bottom: 1rem;\n  content: \"\";\n  height: 0.5rem;\n  pointer-events: none;\n  position: absolute;\n  right: 0.9rem;\n  transform: rotate(45deg);\n  width: 0.5rem;\n  z-index: 1;\n}\n.esh-catalog-filter {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: transparent;\n  border: solid 3px #292929;\n  border-radius: 0;\n  cursor: pointer;\n  margin-right: 1rem;\n  min-width: 140px;\n  outline-color: #292929;\n  padding-left: 0.5rem;\n  padding-right: 2rem;\n}\n.esh-catalog-filter option {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: unset;\n}\n.esh-catalog-filter option:hover {\n  background-color: #f66f61;\n  color: #fff;\n  cursor: pointer;\n}\n.esh-catalog-filter option:active {\n  background-color: #f66f61;\n  color: #fff;\n}\n.esh-catalog-filter option:focus {\n  background-color: #f66f61;\n  color: #fff;\n}\n.esh-catalog-filter option:current {\n  background-color: #f66f61;\n  color: #fff;\n}\n.esh-catalog-filter option:selected {\n  background-color: #f66f61;\n  color: #fff;\n}\n.esh-catalog-label {\n  display: inline-block;\n  font-size: 1rem;\n  margin-bottom: 0;\n  position: relative;\n  z-index: 0;\n}\n.esh-catalog-items {\n  margin-top: 1rem;\n}\n.esh-catalog-item {\n  cursor: pointer;\n  margin-bottom: 1.5rem;\n  width: 100%;\n}\n.esh-catalog-item:hover {\n  background-color: #fff;\n}\n.esh-catalog-item:hover .esh-catalog-thumbnail-icon {\n  opacity: 1;\n}\n.esh-catalog-item.is-disabled {\n  background-color: unset;\n  cursor: default;\n}\n.esh-catalog-item.is-disabled .esh-catalog-thumbnail-icon {\n  display: none !important;\n}\n.esh-catalog-thumbnail-wrapper {\n  background-color: #dbdede;\n  height: 0;\n  overflow: hidden;\n  padding-top: 100%;\n  position: relative;\n}\n.esh-catalog-thumbnail-icon {\n  background-color: #f66f61;\n  border-radius: 50%;\n  height: 3.5rem;\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 3.5rem;\n  z-index: 20;\n  transition: all 0.35s;\n}\n.esh-catalog-thumbnail-icon-svg {\n  height: auto;\n  width: 1.5rem;\n}\n.esh-catalog-thumbnail {\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n  z-index: 10;\n}\n.esh-catalog-details {\n  height: 4rem;\n}\n.esh-catalog-name {\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n.esh-catalog-price {\n  color: #f66f61;\n  font-size: 1rem;\n}\n.esh-catalog-price::before {\n  content: \"$\";\n}\n.esh-catalog-alert {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdGFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQUpSO0FBU0k7RUFDSSxZQUhZO0FBSnBCO0FBVUk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FBUlI7QUFXSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFUUjtBQVdRO0VBQ0ksZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQVRaO0FBYUk7RUFDSSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQzdDVTtFRDhDVixvQkFBQTtFQUNBLG1CQUFBO0FBWFI7QUFhUTtFQUNJLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLGFBQUE7QUFYWjtBQWFZO0VBQ0kseUJDeERBO0VEeURBLFdDakRFO0VEa0RGLGVBQUE7QUFYaEI7QUFjWTtFQUNJLHlCQzlEQTtFRCtEQSxXQ3ZERTtBRDJDbEI7QUFlWTtFQUNJLHlCQ25FQTtFRG9FQSxXQzVERTtBRCtDbEI7QUFnQlk7RUFDSSx5QkN4RUE7RUR5RUEsV0NqRUU7QURtRGxCO0FBaUJZO0VBQ0kseUJDN0VBO0VEOEVBLFdDdEVFO0FEdURsQjtBQW9CSTtFQUNJLHFCQUFBO0VBQ0EsZUM1RE07RUQ2RE4sZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFsQlI7QUFnQ0k7RUFDSSxnQkFBQTtBQTlCUjtBQWlDSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUEvQlI7QUFpQ1E7RUFDSSxzQkN4R007QUR5RWxCO0FBaUNZO0VBQ0ksVUFBQTtBQS9CaEI7QUFtQ1E7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFqQ1o7QUFtQ1k7RUFDSSx3QkFBQTtBQWpDaEI7QUFzQ0k7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFwQ1I7QUF1Q0k7RUFDSSx5QkMxSVE7RUQySVIsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFyQ1I7QUF3Q0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQXRDUjtBQXlDSTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQXZDUjtBQTBDSTtFQUNJLFlBQUE7QUF4Q1I7QUEyQ0k7RUFDSSxlQ2xKTTtFRG1KTix5QkFBQTtBQXpDUjtBQTRDSTtFQUNJLGNDaExRO0VEaUxSLGVDeEpNO0FEOEdkO0FBNENRO0VBQ0ksWUFBQTtBQTFDWjtBQThDSTtFQUNJLGdCQUFBO0FBNUNSIiwiZmlsZSI6ImNhdGFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbi5lc2gtY2F0YWxvZyB7XG4gICAgJGJhbm5lci1oZWlnaHQ6IDI2MHB4O1xuXG4gICAgJi10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAkYmFubmVyLWhlaWdodCAvIDMuNTtcbiAgICB9XG4gXG4gICAgJGZpbHRlci1oZWlnaHQ6IDY1cHg7XG5cbiAgICAmLWZpbHRlcnMge1xuICAgICAgICBoZWlnaHQ6ICRmaWx0ZXItaGVpZ2h0O1xuICAgIH1cblxuICAgICYtZmlsdGVycy13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgfVxuXG4gICAgJi1maWx0ZXItd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3Itc2Vjb25kYXJ5O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yLXNlY29uZGFyeTtcbiAgICAgICAgICAgIGJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgaGVpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IC45cmVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgd2lkdGg6IC41cmVtO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtZmlsdGVyIHtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4ICRjb2xvci1zZWNvbmRhcnk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgICAgICBvdXRsaW5lLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuXG4gICAgICAgIG9wdGlvbiB7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1icmlnaHRlc3Q7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1icmlnaHRlc3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItYnJpZ2h0ZXN0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmN1cnJlbnQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItYnJpZ2h0ZXN0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG5cbiAgICAgICAgLy8gJjpiZWZvcmUge1xuICAgICAgICAvLyAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICAvLyAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zO1xuICAgICAgICAvLyAgICAgbGVmdDogLjdyZW07XG4gICAgICAgIC8vICAgICB0b3A6IC4ycmVtO1xuICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvLyAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgLy8gICAgIHotaW5kZXg6IDE7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAmLWl0ZW1zIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYnJpZ2h0ZXN0O1xuXG4gICAgICAgICAgICAuZXNoLWNhdGFsb2ctdGh1bWJuYWlsLWljb24ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmlzLWRpc2FibGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAgICAgICAuZXNoLWNhdGFsb2ctdGh1bWJuYWlsLWljb24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtdGh1bWJuYWlsLXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkZWRlO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgJi10aHVtYm5haWwtaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJGFuaW1hdGlvbi1zcGVlZC1kZWZhdWx0O1xuICAgIH1cblxuICAgICYtdGh1bWJuYWlsLWljb24tc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgIH1cblxuICAgICYtdGh1bWJuYWlsIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG5cbiAgICAmLWRldGFpbHMge1xuICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgfVxuXG4gICAgJi1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgJi1wcmljZSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLW07XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICckJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtYWxlcnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn1cbiIsIi8vIENvbG9yc1xuJGNvbG9yLXByaW1hcnk6ICNmNjZmNjE7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMyOTI5Mjk7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodDogIzgxODI4ZDtcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVzdDogI2YzZjRmMztcblxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XG4kY29sb3ItYnJpZ2h0ZXN0OiAjZmZmO1xuXG5cbi8vIEFuaW1hdGlvbnNcbiRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDogLjM1cztcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xuJGFuaW1hdGlvbi1zcGVlZC1mYXN0OiAuMTVzO1xuXG4vLyBGb250c1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XG4kZm9udC13ZWlnaHQtc2VtaWxpZ2h0OiAzMDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XG5cbiRmb250LXNpemUteHM6IC43NXJlbTsgICAgLy8gMTJweFxuJGZvbnQtc2l6ZS1zOiAuODc1cmVtOyAgICAvLyAxNHB4XG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxuJGZvbnQtc2l6ZS1sOiAxLjEyNXJlbTsgICAvLyAxOHB4XG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgIC8vIDIwcHhcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxuXG4vLyBNZWRpYXNcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcbiRtZWRpYS1zY3JlZW4teHM6IDY0MHB4O1xuJG1lZGlhLXNjcmVlbi1zOiA3NjhweDtcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xuJG1lZGlhLXNjcmVlbi1sOiAxMjgwcHg7XG4kbWVkaWEtc2NyZWVuLXhsOiAxNDQwcHg7XG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xuJG1lZGlhLXNjcmVlbi14eHhsOiAxOTIwcHg7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItbGlnaHQ6IDFweDtcblxuLy8gSW1hZ2VzXG4kaW1hZ2VfcGF0aDogJy9hc3NldHMvaW1hZ2VzLyc7XG4kaW1hZ2UtYXJyb3dfZG93bjogJyN7JGltYWdlX3BhdGh9YXJyb3ctZG93bi5wbmcnO1xuIl19 */");

/***/ }),

/***/ "Qdu6":
/*!****************************************!*\
  !*** ./src/modules/app.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.esh-app-header {\n  background: url(\"/assets/images/header.jpg\") center -2.7rem no-repeat, linear-gradient(90deg, #5F6571 0%, #5F6571 35%, #CFC6BF 65%, #CFC6BF 100%);\n  background-size: 94rem, auto;\n  height: 13rem;\n  padding-top: 2.25rem;\n  position: relative;\n  transition: all 0.35s;\n}\n\n.esh-app-header--expanded {\n  background-position: center top;\n  background-size: 87rem, auto;\n  height: 29rem;\n}\n\n.esh-app-header--expanded .esh-app-header-promo {\n  opacity: 1;\n}\n\n.esh-app-header-brand {\n  height: auto;\n  width: 92px;\n}\n\n.esh-app-header-promo {\n  bottom: 3.5rem;\n  opacity: 0;\n  position: absolute;\n  text-align: center;\n  transition: all 0.35s;\n  width: 100%;\n}\n\n.esh-app-header-promo-title {\n  display: block;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 5rem;\n  line-height: 5rem;\n  word-wrap: none;\n}\n\n@media screen and (min-width: 768px) {\n  .esh-app-header-promo-title {\n    font-size: 9rem;\n    line-height: 9rem;\n  }\n}\n\n.esh-app-header-promo-subtitle {\n  display: block;\n  color: #fff;\n  font-size: 1.5625rem;\n}\n\n.esh-app-footer {\n  background-color: #81828d;\n  color: #fff;\n  font-size: 1rem;\n  display: flex;\n  height: 7rem;\n  margin-top: auto;\n}\n\n.esh-app-footer-brand {\n  height: auto;\n  width: 104px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQU1JO0VBQ0ksaUpBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFIUjs7QUFLUTtFQUNJLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBSFo7O0FBS1k7RUFDSSxVQUFBO0FBSGhCOztBQVFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFOUjs7QUFTSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQVBSOztBQVVJO0VBQ0ksY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVJSOztBQVVRO0VBUEo7SUFRUSxlQUFBO0lBQ0EsaUJBQUE7RUFQVjtBQUNGOztBQVVJO0VBQ0ksY0FBQTtFQUNBLFdDakRVO0VEa0RWLG9CQzlCUTtBRHNCaEI7O0FBV0k7RUFDSSx5QkMzRGlCO0VENERqQixXQ3ZEVTtFRHdEVixlQ3ZDTTtFRHdDTixhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBVFI7O0FBV1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQVRaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uZXNoLWFwcCB7XG5cbiAgICAmLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLmpwZycpIGNlbnRlciAtMi43cmVtIG5vLXJlcGVhdCwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNUY2NTcxIDAlLCAjNUY2NTcxIDM1JSwgI0NGQzZCRiA2NSUsICNDRkM2QkYgMTAwJSk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogOTRyZW0sIGF1dG87XG4gICAgICAgIGhlaWdodDogMTNyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAyLjI1cmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ7XG5cbiAgICAgICAgJi0tZXhwYW5kZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogODdyZW0sIGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IDI5cmVtO1xuXG4gICAgICAgICAgICAuZXNoLWFwcC1oZWFkZXItcHJvbW8ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWhlYWRlci1icmFuZCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDkycHg7XG4gICAgfVxuXG4gICAgJi1oZWFkZXItcHJvbW8ge1xuICAgICAgICBib3R0b206IDMuNXJlbTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICYtaGVhZGVyLXByb21vLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvci1icmlnaHRlc3QsIC4zKTtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNXJlbTtcbiAgICAgICAgd29yZC13cmFwOiBub25lO1xuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtZWRpYS1zY3JlZW4tcykge1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDlyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWhlYWRlci1wcm9tby1zdWJ0aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4bDtcbiAgICB9XG5cbiAgICAmLWZvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnktYnJpZ2h0O1xuICAgICAgICBjb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcblxuICAgICAgICAmLWJyYW5kIHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvbG9yc1xuJGNvbG9yLXByaW1hcnk6ICNmNjZmNjE7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMyOTI5Mjk7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodDogIzgxODI4ZDtcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVzdDogI2YzZjRmMztcblxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XG4kY29sb3ItYnJpZ2h0ZXN0OiAjZmZmO1xuXG5cbi8vIEFuaW1hdGlvbnNcbiRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDogLjM1cztcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xuJGFuaW1hdGlvbi1zcGVlZC1mYXN0OiAuMTVzO1xuXG4vLyBGb250c1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XG4kZm9udC13ZWlnaHQtc2VtaWxpZ2h0OiAzMDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XG5cbiRmb250LXNpemUteHM6IC43NXJlbTsgICAgLy8gMTJweFxuJGZvbnQtc2l6ZS1zOiAuODc1cmVtOyAgICAvLyAxNHB4XG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxuJGZvbnQtc2l6ZS1sOiAxLjEyNXJlbTsgICAvLyAxOHB4XG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgIC8vIDIwcHhcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxuXG4vLyBNZWRpYXNcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcbiRtZWRpYS1zY3JlZW4teHM6IDY0MHB4O1xuJG1lZGlhLXNjcmVlbi1zOiA3NjhweDtcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xuJG1lZGlhLXNjcmVlbi1sOiAxMjgwcHg7XG4kbWVkaWEtc2NyZWVuLXhsOiAxNDQwcHg7XG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xuJG1lZGlhLXNjcmVlbi14eHhsOiAxOTIwcHg7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItbGlnaHQ6IDFweDtcblxuLy8gSW1hZ2VzXG4kaW1hZ2VfcGF0aDogJy9hc3NldHMvaW1hZ2VzLyc7XG4kaW1hZ2UtYXJyb3dfZG93bjogJyN7JGltYWdlX3BhdGh9YXJyb3ctZG93bi5wbmcnO1xuIl19 */");

/***/ }),

/***/ "QilE":
/*!********************************************************!*\
  !*** ./src/modules/shared/components/header/header.ts ***!
  \********************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _raw_loader_header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./header.html */ "21Fg");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "oFGJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Header = class Header {
};
Header.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Header = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-header',
        template: _raw_loader_header_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], Header);



/***/ }),

/***/ "ROcs":
/*!****************************************************!*\
  !*** ./src/modules/shared/pipes/uppercase.pipe.ts ***!
  \****************************************************/
/*! exports provided: UppercasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UppercasePipe", function() { return UppercasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let UppercasePipe = class UppercasePipe {
    transform(value) {
        return value.toUpperCase();
    }
};
UppercasePipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'appfUppercase'
    })
], UppercasePipe);



/***/ }),

/***/ "UboX":
/*!***********************************************************************!*\
  !*** ./src/modules/orders/orders-detail/orders-detail.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".esh-orders_detail-titles {\n  color: #81828d;\n  font-size: 1.125rem;\n  font-weight: 300;\n  margin-bottom: 1.5rem;\n  text-transform: uppercase;\n}\n.esh-orders_detail-title {\n  color: #81828d;\n  font-size: 1.125rem;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n.esh-orders_detail-items {\n  font-size: 1rem;\n  font-weight: 400;\n}\n.esh-orders_detail-thumbnail-container {\n  width: 10rem;\n}\n.esh-orders_detail-thumbnail-wrapper {\n  background-color: #dbdede;\n  height: 0;\n  overflow: hidden;\n  padding-top: 100%;\n  position: relative;\n}\n.esh-orders_detail-thumbnail {\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlcnMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksY0NEaUI7RURFakIsbUJDcUJNO0VEcEJOLGdCQ1lnQjtFRFhoQixxQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFNSTtFQUNJLGNDVGlCO0VEVWpCLG1CQ2FNO0VEWk4sZ0JDSWdCO0VESGhCLHlCQUFBO0FBSlI7QUFPSTtFQUNJLGVDTU07RURMTixnQkNEYTtBREpyQjtBQVFJO0VBQ0ksWUFBQTtBQU5SO0FBU0k7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVVJO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFSUiIsImZpbGUiOiJvcmRlcnMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4uZXNoLW9yZGVyc19kZXRhaWwge1xuXG4gICAgJi10aXRsZXMge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeS1icmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sO1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgICYtdGl0bGUge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeS1icmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sO1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAmLWl0ZW1zIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsO1xuICAgIH1cblxuICAgICYtdGh1bWJuYWlsLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICB9XG5cbiAgICAmLXRodW1ibmFpbC13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGVkZTtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICYtdGh1bWJuYWlsIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn1cbiIsIi8vIENvbG9yc1xuJGNvbG9yLXByaW1hcnk6ICNmNjZmNjE7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMyOTI5Mjk7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodDogIzgxODI4ZDtcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVzdDogI2YzZjRmMztcblxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XG4kY29sb3ItYnJpZ2h0ZXN0OiAjZmZmO1xuXG5cbi8vIEFuaW1hdGlvbnNcbiRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDogLjM1cztcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xuJGFuaW1hdGlvbi1zcGVlZC1mYXN0OiAuMTVzO1xuXG4vLyBGb250c1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XG4kZm9udC13ZWlnaHQtc2VtaWxpZ2h0OiAzMDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XG5cbiRmb250LXNpemUteHM6IC43NXJlbTsgICAgLy8gMTJweFxuJGZvbnQtc2l6ZS1zOiAuODc1cmVtOyAgICAvLyAxNHB4XG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxuJGZvbnQtc2l6ZS1sOiAxLjEyNXJlbTsgICAvLyAxOHB4XG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgIC8vIDIwcHhcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxuXG4vLyBNZWRpYXNcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcbiRtZWRpYS1zY3JlZW4teHM6IDY0MHB4O1xuJG1lZGlhLXNjcmVlbi1zOiA3NjhweDtcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xuJG1lZGlhLXNjcmVlbi1sOiAxMjgwcHg7XG4kbWVkaWEtc2NyZWVuLXhsOiAxNDQwcHg7XG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xuJG1lZGlhLXNjcmVlbi14eHhsOiAxOTIwcHg7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItbGlnaHQ6IDFweDtcblxuLy8gSW1hZ2VzXG4kaW1hZ2VfcGF0aDogJy9hc3NldHMvaW1hZ2VzLyc7XG4kaW1hZ2UtYXJyb3dfZG93bjogJyN7JGltYWdlX3BhdGh9YXJyb3ctZG93bi5wbmcnO1xuIl19 */");

/***/ }),

/***/ "Wpjk":
/*!**************************************************!*\
  !*** ./src/modules/orders/orders.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".esh-orders-wrapper {\n  background-color: #fff;\n  padding-bottom: 4rem;\n  padding-top: 4rem;\n}\n.esh-orders-titles {\n  color: #81828d;\n  font-size: 1.125rem;\n  font-weight: 300;\n  margin-bottom: 1rem;\n  padding-left: 5rem;\n  text-transform: uppercase;\n}\n.esh-orders-item {\n  font-size: 1rem;\n  font-weight: 400;\n  height: 6rem;\n  line-height: 6rem;\n  padding-left: 5rem;\n  position: relative;\n}\n.esh-orders-link {\n  color: #f66f61;\n  text-decoration: none;\n  transition: color 0.35s;\n}\n.esh-orders-link:hover {\n  color: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVycy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSxzQkNJVTtFREhWLG9CQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQU1JO0VBQ0ksY0NQaUI7RURRakIsbUJDZU07RURkTixnQkNNZ0I7RURMaEIsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSlI7QUFPSTtFQUVJLGVDS007RURKTixnQkNGYTtFREdiLFlBSFM7RUFJVCxpQkFKUztFQUtULGtCQUFBO0VBQ0Esa0JBQUE7QUFOUjtBQVNJO0VBQ0ksY0M3QlE7RUQ4QlIscUJBQUE7RUFDQSx1QkFBQTtBQVBSO0FBU1E7RUFDSSxjQ2hDTTtBRHlCbEIiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4uZXNoLW9yZGVycyB7XG5cbiAgICAmLXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYnJpZ2h0ZXN0O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgfVxuXG4gICAgJi10aXRsZXMge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeS1icmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sO1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlsaWdodDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgICYtaXRlbSB7XG4gICAgICAgICRoZWlnaHQ6IDZyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tO1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcbiAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgJi1saW5rIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yICRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gQ29sb3JzXG4kY29sb3ItcHJpbWFyeTogI2Y2NmY2MTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzI5MjkyOTtcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0OiAjODE4MjhkO1xuJGNvbG9yLXNlY29uZGFyeS1icmlnaHRlcjogIzk3OTc5NztcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXN0OiAjZjNmNGYzO1xuXG4kY29sb3ItZGFya2VzdDogIzAwMDtcbiRjb2xvci1icmlnaHRlc3Q6ICNmZmY7XG5cblxuLy8gQW5pbWF0aW9uc1xuJGFuaW1hdGlvbi1zcGVlZC1kZWZhdWx0OiAuMzVzO1xuJGFuaW1hdGlvbi1zcGVlZC1zbG93OiAuNXM7XG4kYW5pbWF0aW9uLXNwZWVkLWZhc3Q6IC4xNXM7XG5cbi8vIEZvbnRzXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDIwMDtcbiRmb250LXdlaWdodC1zZW1pbGlnaHQ6IDMwMDtcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcblxuJGZvbnQtc2l6ZS14czogLjc1cmVtOyAgICAvLyAxMnB4XG4kZm9udC1zaXplLXM6IC44NzVyZW07ICAgIC8vIDE0cHhcbiRmb250LXNpemUtbTogMXJlbTsgICAgICAvLyAxNnB4XG4kZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcbiRmb250LXNpemUteGw6IDEuMjVyZW07ICAgLy8gMjBweFxuJGZvbnQtc2l6ZS14eGw6IDEuNTYyNXJlbTsgICAvLyAyNXB4XG5cbi8vIE1lZGlhc1xuJG1lZGlhLXNjcmVlbi14eHM6IDM2MHB4O1xuJG1lZGlhLXNjcmVlbi14czogNjQwcHg7XG4kbWVkaWEtc2NyZWVuLXM6IDc2OHB4O1xuJG1lZGlhLXNjcmVlbi1tOiAxMDI0cHg7XG4kbWVkaWEtc2NyZWVuLWw6IDEyODBweDtcbiRtZWRpYS1zY3JlZW4teGw6IDE0NDBweDtcbiRtZWRpYS1zY3JlZW4teHhsOiAxNjgwcHg7XG4kbWVkaWEtc2NyZWVuLXh4eGw6IDE5MjBweDtcblxuLy8gQm9yZGVyc1xuJGJvcmRlci1saWdodDogMXB4O1xuXG4vLyBJbWFnZXNcbiRpbWFnZV9wYXRoOiAnL2Fzc2V0cy9pbWFnZXMvJztcbiRpbWFnZS1hcnJvd19kb3duOiAnI3skaW1hZ2VfcGF0aH1hcnJvdy1kb3duLnBuZyc7XG4iXX0= */");

/***/ }),

/***/ "ZCVb":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/shared/components/identity/identity.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"esh-identity\">\n    <section class=\"esh-identity-section\"\n             *ngIf=\"!authenticated\">\n        <div class=\"u-cursor-pointer pt-2 pb-2\" (click)=\"login()\">\n\n            <div class=\"esh-identity-name d-flex align-items-center\">LOGIN \n                <img class=\"esh-identity-image ml-2\" src=\"assets/images/user.svg\">\n            </div>\n        </div>\n    </section>\n\n    <section class=\"esh-identity-section u-cursor-pointer pt-2 pb-2\"\n         *ngIf=\"authenticated\">\n\n        <div class=\"esh-identity-name\">{{userName}}</div>\n        <img class=\"esh-identity-image ml-2\" src=\"assets/images/user.svg\">\n    </section>\n\n    <section class=\"esh-identity-drop\"\n             *ngIf=\"authenticated\">\n\n        <div class=\"esh-identity-item\"\n             [routerLink]=\"['orders']\">\n            <div class=\"esh-identity-name\">My orders</div>\n        </div>\n\n        <div class=\"esh-identity-item\"\n             (click)=\"logoutClicked($event)\">\n            <div class=\"esh-identity-name\">Log Out</div>\n        </div>\n    </section>\n</div>\n");

/***/ }),

/***/ "aMt0":
/*!************************************************!*\
  !*** ./src/modules/orders/orders.component.ts ***!
  \************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _orders_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.component.scss */ "Wpjk");
/* harmony import */ var _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders.component.html */ "jomK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.service */ "J6to");
/* harmony import */ var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/configuration.service */ "b7Aq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/signalr.service */ "HClI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let OrdersComponent = class OrdersComponent {
    constructor(service, configurationService, signalrService) {
        this.service = service;
        this.configurationService = configurationService;
        this.signalrService = signalrService;
        this.interval = null;
    }
    ngOnInit() {
        if (this.configurationService.isReady) {
            this.getOrders();
        }
        else {
            this.configurationService.settingsLoaded$.subscribe(x => {
                this.getOrders();
            });
        }
        this.signalrService.msgReceived$
            .subscribe(x => this.getOrders());
    }
    getOrders() {
        this.errorReceived = false;
        this.service.getOrders()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => this.handleError(err)))
            .subscribe(orders => {
            this.orders = orders;
            this.oldOrders = this.orders;
            console.log('orders items retrieved: ' + orders.length);
        });
    }
    cancelOrder(orderNumber) {
        this.errorReceived = false;
        this.service.cancelOrder(orderNumber)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => this.handleError(err)))
            .subscribe(() => {
            console.log('order canceled: ' + orderNumber);
        });
    }
    handleError(error) {
        this.errorReceived = true;
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
    { type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] },
    { type: _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__["SignalrService"] }
];
OrdersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-orders .esh-orders .mb-5',
        template: _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"], _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__["SignalrService"]])
], OrdersComponent);



/***/ }),

/***/ "aTV3":
/*!**************************************************************!*\
  !*** ./src/modules/shared/components/identity/identity.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".esh-identity {\n  position: relative;\n}\n.esh-identity-section {\n  width: 100%;\n}\n.esh-identity-name {\n  font-size: 0.875rem;\n  display: inline-block;\n}\n.esh-identity-name--upper {\n  text-transform: uppercase;\n}\n.esh-identity-image {\n  height: auto;\n  width: 1.5rem;\n}\n.esh-identity-drop {\n  background: #fff;\n  height: 0;\n  min-width: 10rem;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 2.5rem;\n  transition: height 0.35s;\n}\n.esh-identity:hover .esh-identity-drop {\n  height: 5rem;\n}\n.esh-identity-item {\n  color: #f66f61;\n  cursor: pointer;\n  font-size: 0.875rem;\n  line-height: 2.5rem;\n  padding: 0 1rem;\n  transition: all 0.35s;\n}\n.esh-identity-item:hover {\n  background-color: #f3f4f3;\n  color: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaWRlbnRpdHkuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUFESjtBQUdJO0VBQ0ksV0FBQTtBQURSO0FBSUk7RUFDSSxtQkNlTTtFRGROLHFCQUFBO0FBRlI7QUFJUTtFQUNJLHlCQUFBO0FBRlo7QUFNSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBSlI7QUFPSTtFQUNJLGdCQ2ZVO0VEZ0JWLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBTFI7QUFRSTtFQUNJLFlBQUE7QUFOUjtBQVNJO0VBQ0ksY0N0Q1E7RUR1Q1IsZUFBQTtFQUNBLG1CQ2hCTTtFRGlCTixtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVBSO0FBU1E7RUFDSSx5QkN6Q2dCO0VEMENoQixjQzdDTTtBRHNDbEIiLCJmaWxlIjoiaWRlbnRpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcblxuLmVzaC1pZGVudGl0eSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJi1zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJi1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXM7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAmLS11cHBlciB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1pbWFnZSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICB9XG5cbiAgICAmLWRyb3Age1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYnJpZ2h0ZXN0O1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMTByZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMi41cmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgJGFuaW1hdGlvbi1zcGVlZC1kZWZhdWx0O1xuICAgIH1cblxuICAgICY6aG92ZXIgJi1kcm9wIHtcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgIH1cblxuICAgICYtaXRlbSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtcztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJGFuaW1hdGlvbi1zcGVlZC1kZWZhdWx0O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeS1icmlnaHRlc3Q7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvbG9yc1xuJGNvbG9yLXByaW1hcnk6ICNmNjZmNjE7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMyOTI5Mjk7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodDogIzgxODI4ZDtcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVzdDogI2YzZjRmMztcblxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XG4kY29sb3ItYnJpZ2h0ZXN0OiAjZmZmO1xuXG5cbi8vIEFuaW1hdGlvbnNcbiRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDogLjM1cztcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xuJGFuaW1hdGlvbi1zcGVlZC1mYXN0OiAuMTVzO1xuXG4vLyBGb250c1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XG4kZm9udC13ZWlnaHQtc2VtaWxpZ2h0OiAzMDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XG5cbiRmb250LXNpemUteHM6IC43NXJlbTsgICAgLy8gMTJweFxuJGZvbnQtc2l6ZS1zOiAuODc1cmVtOyAgICAvLyAxNHB4XG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxuJGZvbnQtc2l6ZS1sOiAxLjEyNXJlbTsgICAvLyAxOHB4XG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgIC8vIDIwcHhcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxuXG4vLyBNZWRpYXNcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcbiRtZWRpYS1zY3JlZW4teHM6IDY0MHB4O1xuJG1lZGlhLXNjcmVlbi1zOiA3NjhweDtcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xuJG1lZGlhLXNjcmVlbi1sOiAxMjgwcHg7XG4kbWVkaWEtc2NyZWVuLXhsOiAxNDQwcHg7XG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xuJG1lZGlhLXNjcmVlbi14eHhsOiAxOTIwcHg7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItbGlnaHQ6IDFweDtcblxuLy8gSW1hZ2VzXG4kaW1hZ2VfcGF0aDogJy9hc3NldHMvaW1hZ2VzLyc7XG4kaW1hZ2UtYXJyb3dfZG93bjogJyN7JGltYWdlX3BhdGh9YXJyb3ctZG93bi5wbmcnO1xuIl19 */");

/***/ }),

/***/ "abXn":
/*!*********************!*\
  !*** ./src/guid.ts ***!
  \*********************/
/*! exports provided: Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}


/***/ }),

/***/ "agb9":
/*!************************************************************!*\
  !*** ./src/modules/shared/components/identity/identity.ts ***!
  \************************************************************/
/*! exports provided: Identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
/* harmony import */ var _raw_loader_identity_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./identity.html */ "ZCVb");
/* harmony import */ var _identity_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.scss */ "aTV3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/security.service */ "x8Yk");
/* harmony import */ var _services_signalr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/signalr.service */ "HClI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let Identity = class Identity {
    constructor(service, signalrService) {
        this.service = service;
        this.signalrService = signalrService;
        this.authenticated = false;
        this.userName = '';
    }
    ngOnInit() {
        this.subscription = this.service.authenticationChallenge$.subscribe(res => {
            this.authenticated = res;
            this.userName = this.service.UserData.email;
        });
        if (window.location.hash) {
            this.service.AuthorizedCallback();
        }
        console.log('identity component, checking authorized' + this.service.IsAuthorized);
        this.authenticated = this.service.IsAuthorized;
        if (this.authenticated) {
            if (this.service.UserData)
                this.userName = this.service.UserData.email;
        }
    }
    logoutClicked(event) {
        event.preventDefault();
        console.log('Logout clicked');
        this.logout();
    }
    login() {
        this.service.Authorize();
    }
    logout() {
        this.signalrService.stop();
        this.service.Logoff();
    }
};
Identity.ctorParameters = () => [
    { type: _services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"] },
    { type: _services_signalr_service__WEBPACK_IMPORTED_MODULE_4__["SignalrService"] }
];
Identity = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'esh-identity',
        template: _raw_loader_identity_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_identity_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"], _services_signalr_service__WEBPACK_IMPORTED_MODULE_4__["SignalrService"]])
], Identity);



/***/ }),

/***/ "b7Aq":
/*!**************************************************************!*\
  !*** ./src/modules/shared/services/configuration.service.ts ***!
  \**************************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "tfFe");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ConfigurationService = class ConfigurationService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        // observable that is fired when settings are loaded from server
        this.settingsLoadedSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.settingsLoaded$ = this.settingsLoadedSource.asObservable();
        this.isReady = false;
    }
    load() {
        const baseURI = document.baseURI.endsWith('/') ? document.baseURI : `${document.baseURI}/`;
        let url = `${baseURI}Home/Configuration`;
        this.http.get(url).subscribe((response) => {
            console.log('server settings loaded');
            this.serverSettings = response;
            console.log(this.serverSettings);
            this.storageService.store('identityUrl', this.serverSettings.identityUrl);
            this.storageService.store('purchaseUrl', this.serverSettings.purchaseUrl);
            this.storageService.store('signalrHubUrl', this.serverSettings.signalrHubUrl);
            this.storageService.store('activateCampaignDetailFunction', this.serverSettings.activateCampaignDetailFunction);
            this.isReady = true;
            this.settingsLoadedSource.next();
        });
    }
};
ConfigurationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
];
ConfigurationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
], ConfigurationService);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "fGsj":
/*!*****************************************************!*\
  !*** ./src/modules/shared/services/data.service.ts ***!
  \*****************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security.service */ "x8Yk");
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../guid */ "abXn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Implementing a Retry-Circuit breaker policy 
// is pending to do for the SPA app
let DataService = class DataService {
    constructor(http, securityService) {
        this.http = http;
        this.securityService = securityService;
    }
    get(url, params) {
        let options = {};
        this.setHeaders(options);
        return this.http.get(url, options)
            .pipe(
        // retry(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    postWithId(url, data, params) {
        return this.doPost(url, data, true, params);
    }
    post(url, data, params) {
        return this.doPost(url, data, false, params);
    }
    putWithId(url, data, params) {
        return this.doPut(url, data, true, params);
    }
    doPost(url, data, needId, params) {
        let options = {};
        this.setHeaders(options, needId);
        return this.http.post(url, data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    delete(url, params) {
        let options = {};
        this.setHeaders(options);
        console.log('data.service deleting');
        this.http.delete(url, options)
            .subscribe((res) => {
            console.log('deleted');
        });
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Client side network error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend - ' +
                `status: ${error.status}, ` +
                `statusText: ${error.statusText}, ` +
                `message: ${error.error.message}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error || 'server error');
    }
    doPut(url, data, needId, params) {
        let options = {};
        this.setHeaders(options, needId);
        return this.http.put(url, data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    setHeaders(options, needId) {
        if (needId && this.securityService) {
            options["headers"] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append('authorization', 'Bearer ' + this.securityService.GetToken())
                .append('x-requestid', _guid__WEBPACK_IMPORTED_MODULE_5__["Guid"].newGuid());
        }
        else if (this.securityService) {
            options["headers"] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append('authorization', 'Bearer ' + this.securityService.GetToken());
        }
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"] }
];
DataService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]])
], DataService);



/***/ }),

/***/ "fvGp":
/*!***********************************!*\
  !*** ./src/modules/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "xfXm");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "ywjI");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "x8Oy");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "uQzi");
/* harmony import */ var _catalog_catalog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catalog/catalog.module */ "qdmN");
/* harmony import */ var _orders_orders_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders/orders.module */ "EDuJ");
/* harmony import */ var _basket_basket_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basket/basket.module */ "uIi5");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "EApP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
            _app_routes__WEBPACK_IMPORTED_MODULE_4__["routing"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            // Only module that app module loads
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot(),
            _catalog_catalog_module__WEBPACK_IMPORTED_MODULE_8__["CatalogModule"],
            _orders_orders_module__WEBPACK_IMPORTED_MODULE_9__["OrdersModule"],
            _basket_basket_module__WEBPACK_IMPORTED_MODULE_10__["BasketModule"]
        ],
        providers: [
            _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "gL9z":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/basket/basket.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"esh-basket\">\n    <div class=\"container\">\n        <h1 class=\"mb-4 mt-5\">[ Shopping Bag ]</h1>\n        <div *ngFor=\"let errorMessage of errorMessages\">\n            <div class=\"esh-basket-items-margin-left1 row\">\n                <div class=\"alert alert-warning\" role=\"alert\">&nbsp;{{errorMessage}}</div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-6 col-md-8 col-lg-9\">\n                <div class=\"esh-basket-items row\">\n                    <div *ngFor=\"let item of basket?.items\" class=\"col-12 col-md-6 col-lg-4\">\n                        <article class=\"esh-basket-item\">\n                            <div class=\"esh-basket-thumbnail-wrapper\">\n                                <div class=\"esh-basket-delete\" (click)=\"deleteItem(item.id)\">\n                                    <img class=\"esh-basket-delete-svg\" src=\"assets/images/delete.svg\" />\n                                </div>\n                                <img class=\"esh-basket-thumbnail\" src=\"{{item.pictureUrl}}\"/>\n                            </div>\n                            <div class=\"esh-basket-title\">{{item.productName}}</div>\n                            <div class=\"esh-basket-description divider d-flex align-items-center justify-content-between\">\n                                <div class=\"\">$ {{item.unitPrice | number:'.2-2'}}</div>\n                                <div class=\"esh-basket-buttons d-flex justify-content-center\">\n                                    <button \n                                        [ngClass]=\"{'esh-basket-button': true, 'is-disabled': item.quantity === 1}\" \n                                        (click)=\"itemQuantityChanged(item, item.quantity-1)\">\n                                            <img \n                                            class=\"esh-basket-button-svg\" \n                                            src=\"assets/images/minus.svg\" />\n                                    </button>\n                                    <div class=\"esh-basket-quantity\">{{item.quantity}}</div>\n                                    <button \n                                        class=\"esh-basket-button\" \n                                        (click)=\"itemQuantityChanged(item, item.quantity+1)\">\n                                            <img \n                                            class=\"esh-basket-button-svg\" \n                                            src=\"assets/images/plus.svg\" />\n                                    </button>\n                                </div>\n                                <div class=\"esh-basket-price text-right\">$ {{(item.unitPrice * item.quantity) | number:'.2-2'}}</div>\n                            </div>\n                            <div class=\"\" *ngIf=\"item.oldUnitPrice > 0\">\n                                &nbsp;Note that the price of this article changed in our Catalog. The old price when you originally added it to the basket was $ {{item.oldUnitPrice}}\n                            </div>\n                        </article>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6 col-md-4 col-lg-3\">\n                <div class=\"esh-basket-checkout p-4\">\n                    <h2 class=\"esh-basket-checkout-title\">Your shopping bag</h2>\n                    <div class=\"mb-3 u-text-sm\">({{basket?.items ? basket?.items.length : 0}} items)</div>\n\n                    <div class=\"d-flex justify-content-between align-items-center font-weight-bolder\">\n                        <div>TOTAL</div>\n                        <div>${{totalPrice | number:'.2-2'}}</div>\n                    </div>\n                </div>\n\n                <div class=\"divider u-background-brightest p-4\">\n                    <div>\n                        <button class=\"btn btn-primary u-width-100 u-minwidth-unset\" (click)=\"checkOut($event)\">Checkout</button>\n                    </div>\n                </div>\n                <div class=\"p-4\">\n                    <a class=\"btn btn-secondary u-width-100 u-minwidth-unset\" routerLink=\"/catalog\">Continue Shopping</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "h7ng":
/*!***************************************************************!*\
  !*** ./src/modules/shared/services/basket.wrapper.service.ts ***!
  \***************************************************************/
/*! exports provided: BasketWrapperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketWrapperService", function() { return BasketWrapperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/security.service */ "x8Yk");
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../guid */ "abXn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BasketWrapperService = class BasketWrapperService {
    constructor(identityService) {
        this.identityService = identityService;
        // observable that is fired when a product is added to the cart
        this.addItemToBasketSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.addItemToBasket$ = this.addItemToBasketSource.asObservable();
        this.orderCreatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.orderCreated$ = this.orderCreatedSource.asObservable();
    }
    addItemToBasket(item) {
        if (this.identityService.IsAuthorized) {
            let basketItem = {
                pictureUrl: item.pictureUri,
                productId: item.id,
                productName: item.name,
                quantity: 1,
                unitPrice: item.price,
                id: _guid__WEBPACK_IMPORTED_MODULE_3__["Guid"].newGuid(),
                oldUnitPrice: 0
            };
            this.addItemToBasketSource.next(basketItem);
        }
        else {
            this.identityService.Authorize();
        }
    }
    orderCreated() {
        this.orderCreatedSource.next();
    }
};
BasketWrapperService.ctorParameters = () => [
    { type: _services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"] }
];
BasketWrapperService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]])
], BasketWrapperService);



/***/ }),

/***/ "iXAA":
/*!********************************************************!*\
  !*** ./src/modules/shared/components/pager/pager.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".esh-pager-wrapper {\n  padding-top: 1rem;\n  text-align: center;\n}\n.esh-pager-item {\n  font-size: 0.875rem;\n  margin: 0 5vw;\n}\n.esh-pager-item.is-disabled {\n  opacity: 0;\n  pointer-events: none;\n}\n.esh-pager-item--navigable {\n  cursor: pointer;\n  display: inline-block;\n}\n.esh-pager-item--navigable:hover {\n  color: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFnZXIuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTUk7RUFDSSxtQkNlTTtFRGROLGFBQUE7QUFKUjtBQU1RO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0FBSlo7QUFPUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUxaO0FBT1k7RUFDSSxjQ3BCRTtBRGVsQiIsImZpbGUiOiJwYWdlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4uZXNoLXBhZ2VyIHtcblxuICAgICYtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXM7XG4gICAgICAgIG1hcmdpbjogMCA1dnc7XG5cbiAgICAgICAgJi5pcy1kaXNhYmxlZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmLS1uYXZpZ2FibGUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvbG9yc1xuJGNvbG9yLXByaW1hcnk6ICNmNjZmNjE7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMyOTI5Mjk7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodDogIzgxODI4ZDtcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVzdDogI2YzZjRmMztcblxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XG4kY29sb3ItYnJpZ2h0ZXN0OiAjZmZmO1xuXG5cbi8vIEFuaW1hdGlvbnNcbiRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDogLjM1cztcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xuJGFuaW1hdGlvbi1zcGVlZC1mYXN0OiAuMTVzO1xuXG4vLyBGb250c1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XG4kZm9udC13ZWlnaHQtc2VtaWxpZ2h0OiAzMDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XG5cbiRmb250LXNpemUteHM6IC43NXJlbTsgICAgLy8gMTJweFxuJGZvbnQtc2l6ZS1zOiAuODc1cmVtOyAgICAvLyAxNHB4XG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxuJGZvbnQtc2l6ZS1sOiAxLjEyNXJlbTsgICAvLyAxOHB4XG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgIC8vIDIwcHhcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxuXG4vLyBNZWRpYXNcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcbiRtZWRpYS1zY3JlZW4teHM6IDY0MHB4O1xuJG1lZGlhLXNjcmVlbi1zOiA3NjhweDtcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xuJG1lZGlhLXNjcmVlbi1sOiAxMjgwcHg7XG4kbWVkaWEtc2NyZWVuLXhsOiAxNDQwcHg7XG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xuJG1lZGlhLXNjcmVlbi14eHhsOiAxOTIwcHg7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItbGlnaHQ6IDFweDtcblxuLy8gSW1hZ2VzXG4kaW1hZ2VfcGF0aDogJy9hc3NldHMvaW1hZ2VzLyc7XG4kaW1hZ2UtYXJyb3dfZG93bjogJyN7JGltYWdlX3BhdGh9YXJyb3ctZG93bi5wbmcnO1xuIl19 */");

/***/ }),

/***/ "jomK":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/orders/orders.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"esh-orders\">\n    <div class=\"container\">\n        <h1 class=\"mb-4 mt-5\">[ Order List ]</h1>\n        <div class=\"esh-orders-alert alert\" role=\"alert\" [hidden]=\"!errorReceived\">\n            Error requesting order list, please try later on\n        </div>\n\n        <div class=\"esh-orders-wrapper\">\n            <article class=\"esh-orders-titles row\">\n                <section class=\"col-1\"></section>\n                <section class=\"col-3\">Date</section>\n                <section class=\"col-2\">Total</section>\n                <section class=\"col-2\">Status</section>\n                <section class=\"col-2\"></section>\n                <section class=\"col-2\"></section>\n            </article>\n    \n            <article class=\"esh-orders-item divider row\"\n                     *ngFor=\"let order of orders\">\n                <section class=\"col-1\">{{order.ordernumber}}</section>\n                <section class=\"col-3\">{{order.date | date:'short'}}</section>\n                <section class=\"col-2\">${{order.total}}</section>\n                <section class=\"col-2\">{{order.status}}</section>\n                <section class=\"col-2\">\n                    <a *ngIf=\"order.status.toLowerCase() === 'submitted'\" (click)=\"cancelOrder(order.ordernumber)\" class=\"esh-orders-link u-cursor-pointer\">Cancel</a>\n                </section>\n                <section class=\"col-2\">\n                    <a class=\"esh-orders-link\" routerLink=\"/orders/{{order.ordernumber}}\">Details</a>\n                </section>\n            </article>\n    \n            <aside class=\"d-flex justify-content-end mt-5 pr-5\">\n                <a class=\"btn btn-secondary\" routerLink=\"/catalog\">Continue Shopping</a>\n            </aside>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "oFGJ":
/*!**********************************************************!*\
  !*** ./src/modules/shared/components/header/header.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".esh-header {\n  background-color: #f66f61;\n  height: 4rem;\n}\n.esh-header-back {\n  color: rgba(255, 255, 255, 0.5);\n  line-height: 4rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: color 0.35s;\n}\n.esh-header-back:hover {\n  color: #fff;\n  transition: color 0.35s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdJLHlCQ0pZO0VES1osWUFIZ0I7QUFBcEI7QUFLSTtFQUNJLCtCQUFBO0VBQ0EsaUJBUFk7RUFRWixxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUFIUjtBQUtRO0VBQ0ksV0NQTTtFRFFOLHVCQUFBO0FBSFoiLCJmaWxlIjoiaGVhZGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbi5lc2gtaGVhZGVyIHtcbiAgICAkaGVhZGVyLWhlaWdodDogNHJlbTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG5cbiAgICAmLWJhY2sge1xuICAgICAgICBjb2xvcjogcmdiYSgkY29sb3ItYnJpZ2h0ZXN0LCAuNSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAkYW5pbWF0aW9uLXNwZWVkLWRlZmF1bHQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJyaWdodGVzdDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yICRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvbG9yc1xuJGNvbG9yLXByaW1hcnk6ICNmNjZmNjE7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMyOTI5Mjk7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodDogIzgxODI4ZDtcbiRjb2xvci1zZWNvbmRhcnktYnJpZ2h0ZXI6ICM5Nzk3OTc7XG4kY29sb3Itc2Vjb25kYXJ5LWJyaWdodGVzdDogI2YzZjRmMztcblxuJGNvbG9yLWRhcmtlc3Q6ICMwMDA7XG4kY29sb3ItYnJpZ2h0ZXN0OiAjZmZmO1xuXG5cbi8vIEFuaW1hdGlvbnNcbiRhbmltYXRpb24tc3BlZWQtZGVmYXVsdDogLjM1cztcbiRhbmltYXRpb24tc3BlZWQtc2xvdzogLjVzO1xuJGFuaW1hdGlvbi1zcGVlZC1mYXN0OiAuMTVzO1xuXG4vLyBGb250c1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAyMDA7XG4kZm9udC13ZWlnaHQtc2VtaWxpZ2h0OiAzMDA7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XG5cbiRmb250LXNpemUteHM6IC43NXJlbTsgICAgLy8gMTJweFxuJGZvbnQtc2l6ZS1zOiAuODc1cmVtOyAgICAvLyAxNHB4XG4kZm9udC1zaXplLW06IDFyZW07ICAgICAgLy8gMTZweFxuJGZvbnQtc2l6ZS1sOiAxLjEyNXJlbTsgICAvLyAxOHB4XG4kZm9udC1zaXplLXhsOiAxLjI1cmVtOyAgIC8vIDIwcHhcbiRmb250LXNpemUteHhsOiAxLjU2MjVyZW07ICAgLy8gMjVweFxuXG4vLyBNZWRpYXNcbiRtZWRpYS1zY3JlZW4teHhzOiAzNjBweDtcbiRtZWRpYS1zY3JlZW4teHM6IDY0MHB4O1xuJG1lZGlhLXNjcmVlbi1zOiA3NjhweDtcbiRtZWRpYS1zY3JlZW4tbTogMTAyNHB4O1xuJG1lZGlhLXNjcmVlbi1sOiAxMjgwcHg7XG4kbWVkaWEtc2NyZWVuLXhsOiAxNDQwcHg7XG4kbWVkaWEtc2NyZWVuLXh4bDogMTY4MHB4O1xuJG1lZGlhLXNjcmVlbi14eHhsOiAxOTIwcHg7XG5cbi8vIEJvcmRlcnNcbiRib3JkZXItbGlnaHQ6IDFweDtcblxuLy8gSW1hZ2VzXG4kaW1hZ2VfcGF0aDogJy9hc3NldHMvaW1hZ2VzLyc7XG4kaW1hZ2UtYXJyb3dfZG93bjogJyN7JGltYWdlX3BhdGh9YXJyb3ctZG93bi5wbmcnO1xuIl19 */");

/***/ }),

/***/ "pWar":
/*!**********************************************************************************!*\
  !*** ./src/modules/shared/components/page-not-found/page-not-found.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "F5ZD");
/* harmony import */ var _page_not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.component.scss */ "tAv4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent.ctorParameters = () => [];
PageNotFoundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'appc-page-not-found',
        template: _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_page_not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "pujc":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/orders/orders-new/orders-new.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1 class=\"mb-4 mt-5\">[ Checkout ]</h1>\n    <div class=\"alert\" role=\"alert\" [hidden]=\"!errorReceived\">\n        Not possible to create a new order, please try later on\n    </div>\n    <form [formGroup]=\"newOrderForm\" (ngSubmit)=\"submitForm(newOrderForm.value)\">\n        <section class=\"u-background-brightest p-5\">\n            <h2 class=\"mb-4\">Shipping Address</h2>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['street'].valid && newOrderForm.controls['street'].touched}\">\n                        <label>Address</label>\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"Street\" [formControl]=\"newOrderForm.controls['street']\">\n                        <div *ngIf=\"newOrderForm.controls['street'].hasError('required') && newOrderForm.controls['street'].touched\" class=\"alert alert-danger\">Required field.</div>\n                    </div>\n                </div>\n                <div class=\"col-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['city'].valid && newOrderForm.controls['city'].touched}\">\n                        <label>City</label>\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"City\" [formControl]=\"newOrderForm.controls['city']\">\n                        <div *ngIf=\"newOrderForm.controls['city'].hasError('required') && newOrderForm.controls['city'].touched\" class=\"alert alert-danger\">Required field.</div>\n                    </div>\n                </div>\n                <div class=\"col-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['state'].valid && newOrderForm.controls['state'].touched}\">\n                        <label>State</label>\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"state\" [formControl]=\"newOrderForm.controls['state']\">\n                        <div *ngIf=\"newOrderForm.controls['state'].hasError('required') && newOrderForm.controls['state'].touched\" class=\"alert alert-danger\">Required field.</div>\n                    </div>\n                </div>\n                <div class=\"col-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['country'].valid && newOrderForm.controls['country'].touched}\">\n                        <label>Country</label>\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"country\" [formControl]=\"newOrderForm.controls['country']\">\n                        <div *ngIf=\"newOrderForm.controls['country'].hasError('required') && newOrderForm.controls['country'].touched\" class=\"alert alert-danger\">Required field.</div>\n                    </div>\n                </div>\n            </div>\n            <h2 class=\"mt-5 mb-4\">Payment method</h2>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['cardnumber'].valid && newOrderForm.controls['cardnumber'].touched}\">\n                        <label>Card number</label>\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"000000000000000\" [formControl]=\"newOrderForm.controls['cardnumber']\">\n                        <div *ngIf=\"newOrderForm.controls['cardnumber'].hasError('required') && newOrderForm.controls['cardnumber'].touched\" class=\"alert alert-danger\">Required field.</div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['cardholdername'].valid && newOrderForm.controls['cardholdername'].touched}\">\n                        <label>Cardholder name</label>\n                        <input class=\"form-control form-input w-100 u-maxwidth-unset\" type=\"text\" placeholder=\"Card holder\" [formControl]=\"newOrderForm.controls['cardholdername']\">\n                        <div *ngIf=\"newOrderForm.controls['cardholdername'].hasError('required') && newOrderForm.controls['cardholdername'].touched\" class=\"alert alert-danger\">Required field.</div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['expirationdate'].valid && newOrderForm.controls['expirationdate'].touched}\">\n                        <label>Expiration date</label>\n                        <input class=\"form-control form-input w-50 u-maxwidth-unset\" type=\"text\" placeholder=\"MM/YY\" [formControl]=\"newOrderForm.controls['expirationdate']\">\n                        <div *ngIf=\"newOrderForm.controls['expirationdate'].hasError('required') && newOrderForm.controls['expirationdate'].touched\" class=\"alert alert-danger\">Required field.</div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" [ngClass]=\"{'has-error':!newOrderForm.controls['securitycode'].valid && newOrderForm.controls['securitycode'].touched}\">\n                        <label class=\"esh-orders_new-title\">Security code</label>\n                        <input class=\"form-control form-input w-50 u-maxwidth-unset\" type=\"text\" placeholder=\"000\" [formControl]=\"newOrderForm.controls['securitycode']\">\n                        <div *ngIf=\"newOrderForm.controls['securitycode'].hasError('required') && newOrderForm.controls['securitycode'].touched\" class=\"alert alert-danger\">Required field.</div>\n                    </div>\n                </div>\n            </div>\n\n            <h2 class=\"mt-5 mb-4\">Order details</h2>\n            <article class=\"divider divider--bottom d-flex align-items-center pb-3 mt-3 u-text-sm\"\n                     *ngFor=\"let item of order.orderItems\">\n                <div class=\"esh-orders_new-thumbnail-container\">\n                    <div class=\"esh-orders_new-thumbnail-wrapper\">\n                        <img class=\"esh-orders_new-thumbnail\" src=\"{{item.pictureurl}}\">\n                    </div>\n                </div>\n                <div class=\"row w-100 ml-3\">\n                    <div class=\"col-6\">{{item.productname}}</div>\n                    <div class=\"col-2\">$ {{item.unitprice | number:'.2-2'}}</div>\n                    <div class=\"col-2\">{{item.units}}</div>\n                    <div class=\"col-2 text-right\">$ {{(item.units * item.unitprice) | number:'.2-2'}}</div>\n                </div>\n            </article>\n\n            <div class=\"divider d-flex align-items-center justify-content-end mb-4 pt-4 text-uppercase u-text-xl\">\n                <div>Total</div>\n                <div class=\"ml-3\">${{ order.total | number:'.2-2'}}</div>\n            </div>\n\n            <div class=\"esh-orders_new-buttons d-flex justify-content-end align-items-center\">\n                <a class=\"btn btn-secondary\" routerLink=\"/basket\">Back to basket</a>\n\n                <button class=\"btn btn-primary ml-3\" [disabled]=\"!newOrderForm.valid || isOrderProcessing\">Place Order</button>\n            </div>\n        </section>\n    </form>\n</div>");

/***/ }),

/***/ "qdmN":
/*!***********************************************!*\
  !*** ./src/modules/catalog/catalog.module.ts ***!
  \***********************************************/
/*! exports provided: CatalogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogModule", function() { return CatalogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "uQzi");
/* harmony import */ var _catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog.component */ "9fF1");
/* harmony import */ var _catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog.service */ "GIIC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CatalogModule = class CatalogModule {
};
CatalogModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"]],
        providers: [_catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"]]
    })
], CatalogModule);



/***/ }),

/***/ "tAv4":
/*!************************************************************************************!*\
  !*** ./src/modules/shared/components/page-not-found/page-not-found.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "tfFe":
/*!********************************************************!*\
  !*** ./src/modules/shared/services/storage.service.ts ***!
  \********************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let StorageService = class StorageService {
    constructor() {
        this.storage = sessionStorage; // localStorage;
    }
    retrieve(key) {
        let item = this.storage.getItem(key);
        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    }
    store(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }
};
StorageService.ctorParameters = () => [];
StorageService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StorageService);



/***/ }),

/***/ "uIi5":
/*!*********************************************!*\
  !*** ./src/modules/basket/basket.module.ts ***!
  \*********************************************/
/*! exports provided: BasketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketModule", function() { return BasketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "uQzi");
/* harmony import */ var _basket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket.component */ "AiEP");
/* harmony import */ var _basket_status_basket_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basket-status/basket-status.component */ "FwHL");
/* harmony import */ var _basket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basket.service */ "GsTr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BasketModule_1;





let BasketModule = BasketModule_1 = class BasketModule {
    static forRoot() {
        return {
            ngModule: BasketModule_1,
            providers: [
                // Providers
                _basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"]
            ]
        };
    }
};
BasketModule = BasketModule_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
        declarations: [_basket_component__WEBPACK_IMPORTED_MODULE_2__["BasketComponent"], _basket_status_basket_status_component__WEBPACK_IMPORTED_MODULE_3__["BasketStatusComponent"]],
        providers: [_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"]],
        exports: [_basket_status_basket_status_component__WEBPACK_IMPORTED_MODULE_3__["BasketStatusComponent"]]
    })
], BasketModule);



/***/ }),

/***/ "uQzi":
/*!*********************************************!*\
  !*** ./src/modules/shared/shared.module.ts ***!
  \*********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ "fGsj");
/* harmony import */ var _services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/basket.wrapper.service */ "h7ng");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/security.service */ "x8Yk");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/configuration.service */ "b7Aq");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/storage.service */ "tfFe");
/* harmony import */ var _services_signalr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/signalr.service */ "HClI");
/* harmony import */ var _components_pager_pager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pager/pager */ "+fjr");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header */ "QilE");
/* harmony import */ var _components_identity_identity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/identity/identity */ "agb9");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "pWar");
/* harmony import */ var _pipes_uppercase_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/uppercase.pipe */ "ROcs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SharedModule_1;






// Services






// Components:




// Pipes:

let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [
                // Providers
                _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
                _services_basket_wrapper_service__WEBPACK_IMPORTED_MODULE_7__["BasketWrapperService"],
                _services_security_service__WEBPACK_IMPORTED_MODULE_8__["SecurityService"],
                _services_configuration_service__WEBPACK_IMPORTED_MODULE_9__["ConfigurationService"],
                _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"],
                _services_signalr_service__WEBPACK_IMPORTED_MODULE_11__["SignalrService"]
            ]
        };
    }
};
SharedModule = SharedModule_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            // No need to export as these modules don't expose any components/directive etc'
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"]
        ],
        declarations: [
            _components_pager_pager__WEBPACK_IMPORTED_MODULE_12__["Pager"],
            _components_header_header__WEBPACK_IMPORTED_MODULE_13__["Header"],
            _components_identity_identity__WEBPACK_IMPORTED_MODULE_14__["Identity"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
            _pipes_uppercase_pipe__WEBPACK_IMPORTED_MODULE_16__["UppercasePipe"]
        ],
        exports: [
            // Modules
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            // Providers, Components, directive, pipes
            _components_pager_pager__WEBPACK_IMPORTED_MODULE_12__["Pager"],
            _components_header_header__WEBPACK_IMPORTED_MODULE_13__["Header"],
            _components_identity_identity__WEBPACK_IMPORTED_MODULE_14__["Identity"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
            _pipes_uppercase_pipe__WEBPACK_IMPORTED_MODULE_16__["UppercasePipe"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "x8Oy":
/*!**************************************!*\
  !*** ./src/modules/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss */ "Qdu6");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "Ah7w");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/security.service */ "x8Yk");
/* harmony import */ var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/configuration.service */ "b7Aq");
/* harmony import */ var _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/signalr.service */ "HClI");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "EApP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
 * App Component
 * Top Level Component
 */
let AppComponent = class AppComponent {
    constructor(titleService, router, securityService, configurationService, signalrService, toastr, vcr) {
        this.titleService = titleService;
        this.router = router;
        this.securityService = securityService;
        this.configurationService = configurationService;
        this.signalrService = signalrService;
        this.toastr = toastr;
        this.Authenticated = false;
        // TODO: Set Taster Root (Overlay) container
        //this.toastr.setRootViewContainerRef(vcr);
        this.Authenticated = this.securityService.IsAuthorized;
    }
    ngOnInit() {
        console.log('app on init');
        this.subscription = this.securityService.authenticationChallenge$.subscribe(res => this.Authenticated = res);
        //Get configuration from server environment variables:
        console.log('configuration');
        this.configurationService.load();
    }
    setTitle(newTitle) {
        this.titleService.setTitle('eShopOnContainers');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"] },
    { type: _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"] },
    { type: _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__["SignalrService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'esh-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_services_security_service__WEBPACK_IMPORTED_MODULE_5__["SecurityService"],
        _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"],
        _shared_services_signalr_service__WEBPACK_IMPORTED_MODULE_7__["SignalrService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]])
], AppComponent);



/***/ }),

/***/ "x8Yk":
/*!*********************************************************!*\
  !*** ./src/modules/shared/services/security.service.ts ***!
  \*********************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration.service */ "b7Aq");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ "tfFe");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let SecurityService = class SecurityService {
    constructor(_http, _router, route, _configurationService, _storageService) {
        this._http = _http;
        this._router = _router;
        this.route = route;
        this._configurationService = _configurationService;
        this._storageService = _storageService;
        this.authenticationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authenticationChallenge$ = this.authenticationSource.asObservable();
        this.authorityUrl = '';
        //private retrieve(key: string): any {
        //    let item = this.storage.getItem(key);
        //    if (item && item !== 'undefined') {
        //        return JSON.parse(this.storage.getItem(key));
        //    }
        //    return;
        //}
        //private store(key: string, value: any) {
        //    this.storage.setItem(key, JSON.stringify(value));
        //}
        this.getUserData = () => {
            if (this.authorityUrl === '') {
                this.authorityUrl = this.storage.retrieve('IdentityUrl');
            }
            const options = this.setHeaders();
            return this._http.get(`${this.authorityUrl}/connect/userinfo`, options)
                .pipe((info) => info);
        };
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.storage = _storageService;
        this._configurationService.settingsLoaded$.subscribe(x => {
            this.authorityUrl = this._configurationService.serverSettings.identityUrl;
            this.storage.store('IdentityUrl', this.authorityUrl);
        });
        if (this.storage.retrieve('IsAuthorized') !== '') {
            this.IsAuthorized = this.storage.retrieve('IsAuthorized');
            this.authenticationSource.next(true);
            this.UserData = this.storage.retrieve('userData');
        }
    }
    GetToken() {
        return this.storage.retrieve('authorizationData');
    }
    ResetAuthorizationData() {
        this.storage.store('authorizationData', '');
        this.storage.store('authorizationDataIdToken', '');
        this.IsAuthorized = false;
        this.storage.store('IsAuthorized', false);
    }
    SetAuthorizationData(token, id_token) {
        if (this.storage.retrieve('authorizationData') !== '') {
            this.storage.store('authorizationData', '');
        }
        this.storage.store('authorizationData', token);
        this.storage.store('authorizationDataIdToken', id_token);
        this.IsAuthorized = true;
        this.storage.store('IsAuthorized', true);
        this.getUserData()
            .subscribe(data => {
            this.UserData = data;
            this.storage.store('userData', data);
            // emit observable
            this.authenticationSource.next(true);
            window.location.href = location.origin;
        }, error => this.HandleError(error), () => {
            console.log(this.UserData);
        });
    }
    Authorize() {
        this.ResetAuthorizationData();
        let authorizationUrl = this.authorityUrl + '/connect/authorize';
        let client_id = 'js';
        let redirect_uri = location.origin + '/';
        let response_type = 'id_token token';
        let scope = 'openid profile orders basket webshoppingagg orders.signalrhub';
        let nonce = 'N' + Math.random() + '' + Date.now();
        let state = Date.now() + '' + Math.random();
        this.storage.store('authStateControl', state);
        this.storage.store('authNonce', nonce);
        let url = authorizationUrl + '?' +
            'response_type=' + encodeURI(response_type) + '&' +
            'client_id=' + encodeURI(client_id) + '&' +
            'redirect_uri=' + encodeURI(redirect_uri) + '&' +
            'scope=' + encodeURI(scope) + '&' +
            'nonce=' + encodeURI(nonce) + '&' +
            'state=' + encodeURI(state);
        window.location.href = url;
    }
    AuthorizedCallback() {
        this.ResetAuthorizationData();
        let hash = window.location.hash.substr(1);
        let result = hash.split('&').reduce(function (result, item) {
            let parts = item.split('=');
            result[parts[0]] = parts[1];
            return result;
        }, {});
        console.log(result);
        let token = '';
        let id_token = '';
        let authResponseIsValid = false;
        if (!result.error) {
            if (result.state !== this.storage.retrieve('authStateControl')) {
                console.log('AuthorizedCallback incorrect state');
            }
            else {
                token = result.access_token;
                id_token = result.id_token;
                let dataIdToken = this.getDataFromToken(id_token);
                // validate nonce
                if (dataIdToken.nonce !== this.storage.retrieve('authNonce')) {
                    console.log('AuthorizedCallback incorrect nonce');
                }
                else {
                    this.storage.store('authNonce', '');
                    this.storage.store('authStateControl', '');
                    authResponseIsValid = true;
                    console.log('AuthorizedCallback state and nonce validated, returning access token');
                }
            }
        }
        if (authResponseIsValid) {
            this.SetAuthorizationData(token, id_token);
        }
    }
    Logoff() {
        let authorizationUrl = this.authorityUrl + '/connect/endsession';
        let id_token_hint = this.storage.retrieve('authorizationDataIdToken');
        let post_logout_redirect_uri = location.origin + '/';
        let url = authorizationUrl + '?' +
            'id_token_hint=' + encodeURI(id_token_hint) + '&' +
            'post_logout_redirect_uri=' + encodeURI(post_logout_redirect_uri);
        this.ResetAuthorizationData();
        // emit observable
        this.authenticationSource.next(false);
        window.location.href = url;
    }
    HandleError(error) {
        console.log(error);
        if (error.status == 403) {
            this._router.navigate(['/Forbidden']);
        }
        else if (error.status == 401) {
            // this.ResetAuthorizationData();
            this._router.navigate(['/Unauthorized']);
        }
    }
    urlBase64Decode(str) {
        let output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    }
    getDataFromToken(token) {
        let data = {};
        if (typeof token !== 'undefined') {
            let encoded = token.split('.')[1];
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    }
    setHeaders() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
        };
        httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/json');
        httpOptions.headers = httpOptions.headers.set('Accept', 'application/json');
        const token = this.GetToken();
        if (token !== '') {
            httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${token}`);
        }
        return httpOptions;
    }
};
SecurityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
SecurityService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"], _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
], SecurityService);



/***/ }),

/***/ "xfXm":
/*!***********************************!*\
  !*** ./src/modules/app.routes.ts ***!
  \***********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _basket_basket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket/basket.component */ "AiEP");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog/catalog.component */ "9fF1");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders/orders.component */ "aMt0");
/* harmony import */ var _orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/orders-detail/orders-detail.component */ "H5iX");
/* harmony import */ var _orders_orders_new_orders_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders/orders-new/orders-new.component */ "6lyU");






const routes = [
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: 'basket', component: _basket_basket_component__WEBPACK_IMPORTED_MODULE_1__["BasketComponent"] },
    { path: 'catalog', component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"] },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"] },
    { path: 'orders/:id', component: _orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__["OrdersDetailComponent"] },
    { path: 'order', component: _orders_orders_new_orders_new_component__WEBPACK_IMPORTED_MODULE_5__["OrdersNewComponent"] },
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' });


/***/ }),

/***/ "ywjI":
/*!************************************!*\
  !*** ./src/modules/app.service.ts ***!
  \************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppService = class AppService {
    constructor() { }
};
AppService.ctorParameters = () => [];
AppService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppService);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _modules_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/app.module */ "fvGp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_modules_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map