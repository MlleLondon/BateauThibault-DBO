"use strict";
(self["webpackChunkcorrection_tp1"] = self["webpackChunkcorrection_tp1"] || []).push([["main"],{

/***/ 484:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _manage_stock_manage_stock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-stock/manage-stock.component */ 6764);
/* harmony import */ var _details_product_details_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-product/details-product.component */ 2212);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 6916);
/* harmony import */ var _reporting_reporting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporting/reporting.component */ 6428);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 2080);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ 6820);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ 4100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4280);










const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'detailsProduit',
  component: _details_product_details_product_component__WEBPACK_IMPORTED_MODULE_1__.DetailsProductComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
}, {
  path: 'manageStock',
  component: _manage_stock_manage_stock_component__WEBPACK_IMPORTED_MODULE_0__.ManageStockComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
}, {
  path: 'reporting',
  component: _reporting_reporting_component__WEBPACK_IMPORTED_MODULE_3__.ReportingComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
}, {
  path: 'logout',
  component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__.LogoutComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
}
// { path: 'home', component: HomeComponent, canLoad: [AuthGuard] }
];
class AppRoutingModule {
  static ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 6108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);


class AppComponent {
  title = 'correctionTP1';
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5204:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 484);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6108);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 3712);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _details_product_details_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-product/details-product.component */ 2212);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 6916);
/* harmony import */ var _manage_stock_manage_stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-stock/manage-stock.component */ 6764);
/* harmony import */ var _reporting_reporting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporting/reporting.component */ 6428);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ 2080);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ 2656);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ 5116);
/* harmony import */ var _guards_not_logged_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/not-logged.guard */ 7720);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ 6820);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/logout.component */ 4100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4280);

















class AppModule {
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__.CookieService, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__.AuthGuard, _guards_not_logged_guard__WEBPACK_IMPORTED_MODULE_8__.NotLoggedGuard],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _details_product_details_product_component__WEBPACK_IMPORTED_MODULE_2__.DetailsProductComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _manage_stock_manage_stock_component__WEBPACK_IMPORTED_MODULE_4__.ManageStockComponent, _reporting_reporting_component__WEBPACK_IMPORTED_MODULE_5__.ReportingComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__.NavComponent, _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__.LogoutComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 2212:
/*!**************************************************************!*\
  !*** ./src/app/details-product/details-product.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsProductComponent: () => (/* binding */ DetailsProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/products.service */ 1784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/nav.component */ 2656);





function DetailsProductComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsProductComponent_li_7_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onSelectProduct(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
  }
}
class DetailsProductComponent {
  productsService;
  products;
  product;
  newPromotion;
  newQuantity;
  salePrice;
  copyDiscount;
  constructor(productsService) {
    this.productsService = productsService;
    this.products = [];
    this.product = {
      name: 'Selectioner un produit',
      price: 0,
      discount: 0,
      quantityInStock: 0
    };
    this.salePrice = 0;
    this.copyDiscount = 0;
  }
  ngOnInit() {
    this.getProductsAll();
    this.getProductId(1);
    this.onSelectProductId(12);
  }
  getProductsAll() {
    this.productsService.getProducts().subscribe(res => {
      this.products = res;
    }, err => {
      alert('failed loading json data');
    });
  }
  getProductId(tig_id) {
    for (let p of this.products) {
      if (p.tig_id == tig_id) {
        this.product = p;
      }
    }
  }
  addSale(item) {
    // this.copyDiscount = item.discount
    this.salePrice = Math.round(item.price / 100 * (100 - this.copyDiscount) * 100) / 100;
  }
  onSelectProduct(item) {
    this.getProductId(item.tig_id);
    this.copyDiscount = item.discount;
    this.addSale(item);
  }
  onSelectProductId(tigId) {
    this.getProductId(tigId);
  }
  onModifyPromotion(item) {
    if (this.newPromotion) {
      this.copyDiscount = this.newPromotion;
      this.productsService.setPromotion(item.tig_id, this.newPromotion).subscribe(res => {
        this.product = res;
      }, err => {
        alert('failed loading json data');
      });
      this.getProductsAll();
    }
  }
  addQuantity(item) {
    if (this.newQuantity) {
      this.productsService.addQuantity(item.tig_id, this.newQuantity).subscribe(res => {
        this.product = res;
      }, err => {
        alert('failed loading json data');
      });
      this.getProductsAll();
    }
  }
  removeQuantity(item) {
    if (this.newQuantity) {
      this.productsService.removeQuantity(item.tig_id, this.newQuantity).subscribe(res => {
        this.product = res;
      }, err => {
        alert('failed loading json data');
      });
      this.getProductsAll();
    }
  }
  static ɵfac = function DetailsProductComponent_Factory(t) {
    return new (t || DetailsProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DetailsProductComponent,
    selectors: [["app-details-product"]],
    decls: 37,
    vars: 9,
    consts: [[1, "text-center"], [1, "dropdown", "text-center", "margin-bottom-space"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["id", "infosProduct", 1, "card", "col-sm-6", "d-flex", "p-2", "container-fluid"], [1, "margin-bottom-space"], [1, "container-fluid"], [1, "raw"], ["type", "number", "id", "newPromotion", "placeholder", "Ajouter Quantit\u00E9", 1, "col-xs-2", "margin-bottom-space", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "horizontal-space", 3, "click"], [1, "btn", "btn-danger", 3, "click"], ["type", "number", "id", "newPromotion", "placeholder", "Nouvelle Promotion", 1, "col-xs-2", "margin-bottom-space", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], [1, "dropdown-item", 3, "click"]],
    template: function DetailsProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Veuillez saisir le produit dont vous voulez voir les informations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DetailsProductComponent_li_7_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Page d'affichage du produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul")(12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6)(21, "ul", 7)(22, "li", 8)(23, "div", 8)(24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function DetailsProductComponent_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.newQuantity, $event) || (ctx.newQuantity = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 8)(26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsProductComponent_Template_button_click_26_listener() {
          return ctx.addQuantity(ctx.product);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsProductComponent_Template_button_click_28_listener() {
          return ctx.removeQuantity(ctx.product);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li")(31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function DetailsProductComponent_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.newPromotion, $event) || (ctx.newPromotion = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li")(33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsProductComponent_Template_button_click_33_listener() {
          ctx.onModifyPromotion(ctx.product);
          return ctx.addSale(ctx.product);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "ModifierPromotion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.product.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Nom : ", ctx.product.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Prix : ", ctx.product.price, " \u20AC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Promotion : ", ctx.copyDiscount, " % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Prix en promotion : ", ctx.salePrice, " \u20AC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.newQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.newPromotion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Quantit\u00E9 en stock : ", ctx.product.quantityInStock, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent],
    styles: ["#infosProduct[_ngcontent-%COMP%]{\n    text-align: center;\n}\n\nul[_ngcontent-%COMP%]{\n    list-style-type:none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGV0YWlscy1wcm9kdWN0L2RldGFpbHMtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiI2luZm9zUHJvZHVjdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6820:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ 5116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);



class AuthGuard {
  cookieService;
  router;
  constructor(cookieService, router) {
    this.cookieService = cookieService;
    this.router = router;
  }
  canActivate() {
    let token = this.cookieService.get('jwt');
    if (token == '') {
      console.log("if");
      this.router.navigate(['login']);
      return false;
    } else return true;
  }
  static ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7720:
/*!********************************************!*\
  !*** ./src/app/guards/not-logged.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotLoggedGuard: () => (/* binding */ NotLoggedGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ 5116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);



class NotLoggedGuard {
  cookieService;
  router;
  constructor(cookieService, router) {
    this.cookieService = cookieService;
    this.router = router;
  }
  canActivate() {
    let token = this.cookieService.get('jwt');
    console.log(token);
    if (token.length > 0) {
      this.router.navigate(['home']);
      return false;
    } else return true;
  }
  static ɵfac = function NotLoggedGuard_Factory(t) {
    return new (t || NotLoggedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NotLoggedGuard,
    factory: NotLoggedGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6916:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/nav.component */ 2656);



class HomeComponent {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 24,
    vars: 0,
    consts: [[1, "text-center"], [1, "row", "justify-content-md-center"], [1, "col-sm-4"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "solid"], [1, "card-text"], ["routerLink", "/detailsProduit", 1, "btn", "btn-primary"], ["routerLink", "/manageStock", 1, "btn", "btn-primary"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bateau Thibault");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Details Produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Afficher les details d'un produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Envoyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2)(15, "div", 3)(16, "div", 4)(17, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "G\u00E9rer les Produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "G\u00E9rer tous les produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Envoyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2080:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);




class LoginComponent {
  formBuilder;
  http;
  router;
  form;
  constructor(formBuilder, http, router) {
    this.formBuilder = formBuilder;
    this.http = http;
    this.router = router;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  submit() {
    this.http.post('http://localhost:8000/api/login/', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(() => this.router.navigate(['/home']));
  }
  static ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 15,
    vars: 1,
    consts: [[1, "form-signin"], [3, "formGroup", "submit"], [1, "h3", "mb-3", "fw-normal", 2, "margin-bottom", "20px", "font-size", "60px", "text-align", "center"], ["src", "../../assets/logo.png", "alt", "logo", 1, "img-centered"], [1, "form-floating"], ["formControlName", "email", "type", "email", "id", "floatingInput", "placeholder", "dupont@toto.com", 1, "form-control"], ["for", "floatingInput"], ["formControlName", "password", "type", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control"], ["for", "floatingPassword"], ["type", "submit", 1, "w-100", "btn", "btn-lg", "btn-primary"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_1_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Le bateau de Thibault");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "votre addresse email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Se connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4100:
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutComponent: () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ 5116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);



class LogoutComponent {
  cookieService;
  router;
  constructor(cookieService, router) {
    this.cookieService = cookieService;
    this.router = router;
  }
  ngOnInit() {
    this.logout();
  }
  logout() {
    this.cookieService.delete('jwt');
    this.router.navigate(['login']);
  }
  static ɵfac = function LogoutComponent_Factory(t) {
    return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LogoutComponent,
    selectors: [["app-logout"]],
    decls: 2,
    vars: 0,
    template: function LogoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6764:
/*!********************************************************!*\
  !*** ./src/app/manage-stock/manage-stock.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManageStockComponent: () => (/* binding */ ManageStockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/products.service */ 1784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/nav.component */ 2656);





function ManageStockComponent_div_5_div_4_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td")(14, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ManageStockComponent_div_5_div_4_tr_30_Template_input_ngModelChange_14_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r5.newQuantity[product_r4.tig_id], $event) || (ctx_r5.newQuantity[product_r4.tig_id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ManageStockComponent_div_5_div_4_tr_30_Template_input_ngModelChange_16_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r7.prixTransaction[product_r4.tig_id], $event) || (ctx_r7.prixTransaction[product_r4.tig_id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td")(18, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ManageStockComponent_div_5_div_4_tr_30_Template_input_ngModelChange_18_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r8.newPromotion[product_r4.tig_id], $event) || (ctx_r8.newPromotion[product_r4.tig_id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.quantityInStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.nombre_produit_vendu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.newQuantity[product_r4.tig_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.prixTransaction[product_r4.tig_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.newPromotion[product_r4.tig_id]);
  }
}
function ManageStockComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "table", 14)(3, "thead", 14)(4, "tr")(5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Prix");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Promotion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Vendus");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Commentaires");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Ajout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Prix ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " transac");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Ajout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " promo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tbody", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ManageStockComponent_div_5_div_4_tr_30_Template, 19, 9, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", category_r1.products);
  }
}
function ManageStockComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageStockComponent_div_5_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const category_r1 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.onclick(category_r1.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ManageStockComponent_div_5_div_4_Template, 31, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "List", category_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.visibility[category_r1.name]);
  }
}
class ManageStockComponent {
  productsService;
  productsPoisson;
  productsCrustaces;
  productsCoquillages;
  newQuantity;
  newPromotion;
  prixTransaction;
  categories = [{
    "id": 1,
    "name": "poissons",
    "products": null
  }, {
    "id": 2,
    "name": "crustaces",
    "products": null
  }, {
    "id": 3,
    "name": "coquillages",
    "products": null
  }];
  poissons = true;
  crustaces = true;
  coquillages = true;
  visibility = [];
  constructor(productsService) {
    this.productsService = productsService;
  }
  ngOnInit() {
    this.newQuantity = [];
    this.newPromotion = [];
    this.prixTransaction = [];
    this.getProductsAll();
  }
  getProductsAll() {
    for (let i = 0; i < this.categories.length; i++) {
      this.getProductsCategory(this.categories[i].name);
      console.log(this.categories[i].products);
    }
  }
  getProductsCategory(category) {
    this.productsService.getProductCategories(category).subscribe(res => {
      for (let i = 0; i < this.categories.length; i++) if (this.categories[i].name == category) {
        this.categories[i].products = res;
      }
    }, err => {
      alert('failed loading json data');
    });
  }
  onModifyPromotion() {
    for (let tig_id = 0; tig_id < this.newPromotion.length; tig_id++) {
      if (this.newPromotion[tig_id]) {
        this.productsService.setPromotion(tig_id, this.newPromotion[tig_id]).subscribe(res => {
          res;
        }, err => {
          alert('failed loading json data');
        });
      }
    }
    console.log(this.newPromotion);
    this.getProductsAll();
  }
  addQuantity() {
    for (let tig_id = 0; tig_id < this.newQuantity.length; tig_id++) {
      if (this.newQuantity[tig_id]) {
        if (this.prixTransaction[tig_id]) {
          this.addTransaction(tig_id, "Purchase");
          /*this.productsService.addQuantity(tig_id, this.newQuantity[tig_id]).subscribe(res => {
            res;
          },
            (err) => {
              alert(err + 'failed loading json data');
            });*/
        }
      }
    }
    console.log(this.newQuantity);
    this.getProductsAll();
  }
  removeQuantity() {
    for (let tig_id = 0; tig_id < this.newQuantity.length; tig_id++) {
      if (this.newQuantity[tig_id]) {
        if (this.prixTransaction[tig_id]) {
          if (this.prixTransaction[tig_id] == 0) this.addTransaction(tig_id, "Unsold");else this.addTransaction(tig_id, "Sale");
          /*this.productsService.removeQuantity(tig_id, this.newQuantity[tig_id]).subscribe(res => {
            res;
          },
            (err) => {
              alert(err + 'failed loading json data');
            });*/
        }
      }
    }
    console.log(this.newQuantity);
    this.getProductsAll();
  }
  modifyStock() {
    this.addQuantity();
    this.onModifyPromotion();
    this.getProductsAll();
  }
  addTransaction(tig_id, type) {
    if (this.newQuantity[tig_id] && this.prixTransaction[tig_id]) {
      let trans = {
        "price": this.prixTransaction[tig_id],
        "quantity": this.newQuantity[tig_id],
        "tig_id": tig_id,
        "type": type
      };
      this.productsService.postTransaction(trans).subscribe(res => {
        res;
      }, err => {
        alert(err + 'failed loading json data');
      });
    }
  }
  onclick(item) {
    if (item == "poissons") {
      //this.poissons = !this.poissons;
      this.visibility["poissons"] = !this.visibility["poissons"];
    }
    if (item == "coquillages") {
      //this.coquillages = !this.coquillages;
      this.visibility["coquillages"] = !this.visibility["coquillages"];
    }
    if (item == "crustaces") {
      //this.crustaces = !this.crustaces;
      this.visibility["crustaces"] = !this.visibility["crustaces"];
    }
  }
  static ɵfac = function ManageStockComponent_Factory(t) {
    return new (t || ManageStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ManageStockComponent,
    selectors: [["app-manage-stock"]],
    decls: 13,
    vars: 1,
    consts: [[1, "text-center", 2, "margin-bottom", "90px"], [1, "row", "justify-content-md-center", "container-fluid"], [1, "row"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-md-center", 2, "margin-bottom", "50px"], [1, "btn", "btn-success", "col-sm-4", "horizontal-space", 2, "width", "10%", "margin-top", "30px", 3, "click"], [1, "btn", "btn-danger", "col-sm-4", "horizontal-space", 2, "width", "10%", "margin-top", "30px", 3, "click"], [1, "btn", "btn-primary", "col-sm-4", 2, "width", "10%", "margin-top", "30px", 3, "click"], [1, "col-sm-6"], ["type", "button", 1, "btn", "btn-secondary", "margin-bottom-space", "justify-content-md-center", "container-fluid", 3, "id", "click"], [1, "card-title", 2, "text-align", "center"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-body", "justify-content-md-center"], [1, "table", "container-fluid", "justify-content-md-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "number", "id", "newQuantity", "placeholder", "...", 1, "small-input", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "prixTransaction", "placeholder", "\u20AC", 1, "small-input", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "newPromotion", "placeholder", "%", 1, "small-input", 3, "ngModel", "ngModelChange"]],
    template: function ManageStockComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Modification simultan\u00E9e de produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ManageStockComponent_div_5_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageStockComponent_Template_a_click_7_listener() {
          ctx.addQuantity();
          return ctx.getProductsAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Ajouter dans le stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageStockComponent_Template_a_click_9_listener() {
          ctx.removeQuantity();
          return ctx.getProductsAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Enlever dans le stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageStockComponent_Template_a_click_11_listener() {
          ctx.onModifyPromotion();
          return ctx.getProductsAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Ajouter une promotion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2656:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavComponent: () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);


class NavComponent {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function NavComponent_Factory(t) {
    return new (t || NavComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavComponent,
    selectors: [["app-nav"]],
    decls: 22,
    vars: 0,
    consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "mb-4", 2, "padding-bottom", "0px", "padding-top", "0px"], [1, "container-fluid", 2, "padding-left", "0px", "padding-right", "0px"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-md-0"], [1, "nav-item"], ["routerLinkActive", "anavlink", "aria-current", "page", "routerLink", "/home", 1, "nav-link", 2, "width", "55px"], ["src", "../assets/logo.png", "alt", "Home", 2, "width", "110%"], ["routerLinkActive", "anavlink", "aria-current", "page", "routerLink", "/detailsProduit", 1, "nav-link"], ["routerLinkActive", "anavlink", "aria-current", "page", "routerLink", "/manageStock", 1, "nav-link"], ["routerLinkActive", "anavlink", "aria-current", "page", "routerLink", "/reporting", 1, "nav-link"], [1, ""], [1, "nav-item", "navbar-dark", "navbar-nav"], ["routerLinkActive", "anavlink", "aria-current", "page", "routerLink", "/logout", 1, "nav-link", 2, "padding-bottom", "0", "padding-left", "0"]],
    template: function NavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Details Produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6)(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "G\u00E9rer les produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6)(16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Statistiques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 12)(19, "li", 13)(20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Se d\u00E9connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6428:
/*!**************************************************!*\
  !*** ./src/app/reporting/reporting.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingComponent: () => (/* binding */ ReportingComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 9428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/products.service */ 1784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/nav.component */ 2656);





function ReportingComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReportingComponent_li_7_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.getTransactionCategory(item_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.name);
  }
}
function ReportingComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReportingComponent_li_12_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.getchiffresAffaire(item_r5.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.name);
  }
}
chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_3__.registerables);
class ReportingComponent {
  productsService;
  datePipe;
  chart = null;
  labels = [];
  dataCA = [];
  dataCout = [];
  dataMarge = [];
  data = {
    labels: this.labels,
    datasets: [{
      label: 'Chiffres d\'affaires',
      data: this.dataCA,
      fill: false,
      borderColor: 'rgb(0, 0, 255)',
      backgroundColor: 'rgb(0, 0, 0)',
      tension: 0.1
    }, {
      label: 'Cout',
      data: this.dataCout,
      fill: false,
      borderColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgb(0, 0, 0)',
      tension: 0.1
    }, {
      label: 'Marge',
      data: this.dataMarge,
      fill: false,
      borderColor: 'rgb(0, 255, 0)',
      backgroundColor: 'rgb(0, 0, 0)',
      tension: 0.1
    }]
  };
  transactions = null;
  filtrage = [{
    name: 'all'
  }, {
    name: 'année'
  }, {
    name: 'trimestre'
  }, {
    name: 'mois'
  }, {
    name: 'semaine'
  }, {
    name: 'jour'
  }];
  chiffreAffaires = 0;
  marge = 0;
  impot = 0;
  categories = [{
    "id": 0,
    "name": "poissons",
    "products": null
  }, {
    "id": 2,
    "name": "crustaces",
    "products": null
  }, {
    "id": 1,
    "name": "coquillages",
    "products": null
  }];
  constructor(productsService, datePipe) {
    this.productsService = productsService;
    this.datePipe = datePipe;
  }
  ngOnInit() {
    this.getTransaction();
    this.getMarge();
  }
  getTransaction() {
    this.productsService.getTransaction().subscribe(res => {
      this.transactions = res;
      this.getchiffresAffaire("année");
      this.getMarge();
    }, err => {
      alert('failed loading json data');
    });
  }
  getTransactionCategory(idCategory) {
    this.productsService.getTransactionCategory(idCategory).subscribe(res => {
      this.transactions = res;
      this.getchiffresAffaire("année");
      this.getMarge();
    }, err => {
      alert('failed loading json data');
    });
  }
  convertDate(filtrage, date) {
    let dateConvert = "";
    if (filtrage == "année") {
      dateConvert = date.toLocaleString('default', {
        month: 'long'
      });
    } else if (filtrage == "mois") {
      dateConvert = date.getDate();
    } else if (filtrage == "semaine") {
      dateConvert = date.toLocaleString('default', {
        weekday: 'long'
      });
    } else if (filtrage == "jour") {
      dateConvert = date.getHours();
    } else {
      dateConvert = date.getFullYear();
    }
    return dateConvert;
  }
  getchiffresAffaire(filtrage) {
    this.labels = [];
    this.dataCA = [];
    this.dataCout = [];
    this.dataMarge = [];
    this.chiffreAffaires = 0;
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayTrimestre = Math.ceil((today.getMonth() + 1) / 4);
    let todayMonth = today.toLocaleString('default', {
      month: 'long'
    });
    let todayMonthDay = today.getDate();
    for (let i = 0; i < this.transactions.length; i++) {
      let dateExist = false;
      let date = new Date(this.transactions[i].created);
      let transacYear = date.getFullYear();
      let transacTrimestre = Math.ceil((date.getMonth() + 1) / 4);
      let transacMonth = date.toLocaleString('default', {
        month: 'long'
      });
      let transacMonthDay = date.getDate();
      let transacWeekday = date.toLocaleString('default', {
        weekday: 'long'
      });
      let transacHour = date.getHours();
      if (this.transactions[i].type == "Sale") {
        if (filtrage == "année") {
          if (transacYear == todayYear) {
            this.chiffreAffaires = this.chiffreAffaires + this.transactions[i].price;
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j] == transacMonth) {
                this.dataCA[j] = this.dataCA[j] + this.transactions[i].price;
                this.dataMarge[j] = this.dataMarge[j] + this.transactions[i].price;
                dateExist = true;
              }
            }
            if (dateExist == false) {
              this.dataCout[this.dataCout.length] = 0;
              this.dataCA[this.dataCA.length] = this.transactions[i].price;
              this.labels[this.labels.length] = transacMonth;
              this.dataMarge[this.dataMarge.length] = this.transactions[i].price;
            }
          }
        } else if (filtrage == "trimestre") {
          if (transacYear == todayYear) {
            this.chiffreAffaires = this.chiffreAffaires + this.transactions[i].price;
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j] == transacTrimestre) {
                this.dataCA[j] = this.dataCA[j] + this.transactions[i].price;
                this.dataMarge[j] = this.dataMarge[j] + this.transactions[i].price;
                dateExist = true;
              }
            }
            if (dateExist == false) {
              this.dataCout[this.dataCout.length] = 0;
              this.dataCA[this.dataCA.length] = this.transactions[i].price;
              this.labels[this.labels.length] = transacTrimestre;
              this.dataMarge[this.dataMarge.length] = this.transactions[i].price;
            }
          }
        } else if (filtrage == "mois") {
          if (transacYear == todayYear && transacMonth == todayMonth) {
            this.chiffreAffaires = this.chiffreAffaires + this.transactions[i].price;
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j] == transacMonthDay) {
                this.dataCA[j] = this.dataCA[j] + this.transactions[i].price;
                this.dataMarge[j] = this.dataMarge[j] + this.transactions[i].price;
                dateExist = true;
              }
            }
            if (dateExist == false) {
              this.dataCout[this.dataCout.length] = 0;
              this.dataCA[this.dataCA.length] = this.transactions[i].price;
              this.labels[this.labels.length] = transacMonthDay;
              this.dataMarge[this.dataMarge.length] = this.transactions[i].price;
            }
          }
        } else if (filtrage == "semaine") {
          if (transacYear == todayYear && transacMonth == todayMonth) {
            this.chiffreAffaires = this.chiffreAffaires + this.transactions[i].price;
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j] == transacWeekday) {
                this.dataCA[j] = this.dataCA[j] + this.transactions[i].price;
                this.dataMarge[j] = this.dataMarge[j] + this.transactions[i].price;
                dateExist = true;
              }
            }
            if (dateExist == false) {
              this.dataCout[this.dataCout.length] = 0;
              this.dataCA[this.dataCA.length] = this.transactions[i].price;
              this.labels[this.labels.length] = transacWeekday;
              this.dataMarge[this.dataMarge.length] = this.transactions[i].price;
            }
          }
        } else if (filtrage == "jour") {
          if (transacYear == todayYear && transacMonth == todayMonth && transacMonthDay == todayMonthDay) {
            this.chiffreAffaires = this.chiffreAffaires + this.transactions[i].price;
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j] == transacHour) {
                this.dataCA[j] = this.dataCA[j] + this.transactions[i].price;
                this.dataMarge[j] = this.dataMarge[j] + this.transactions[i].price;
                dateExist = true;
              }
            }
            if (dateExist == false) {
              this.dataCout[this.dataCout.length] = 0;
              this.dataCA[this.dataCA.length] = this.transactions[i].price;
              this.labels[this.labels.length] = transacHour;
              this.dataMarge[this.dataMarge.length] = this.transactions[i].price;
            }
          }
        } else {
          this.chiffreAffaires = this.chiffreAffaires + this.transactions[i].price;
          for (let j = 0; j < this.labels.length; j++) {
            if (this.labels[j] == transacYear) {
              this.dataCA[j] = this.dataCA[j] + this.transactions[i].price;
              this.dataMarge[j] = this.dataMarge[j] + this.transactions[i].price;
              dateExist = true;
            }
          }
          if (dateExist == false) {
            this.dataCout[this.dataCout.length] = 0;
            this.dataCA[this.dataCA.length] = this.transactions[i].price;
            this.labels[this.labels.length] = transacYear;
            this.dataMarge[this.dataMarge.length] = this.transactions[i].price;
          }
        }
      } else if (this.transactions[i].type == "Purchase") {
        if (filtrage == "année") {
          if (transacYear == todayYear) {
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j] == transacMonth) {
                this.dataCout[j] = this.dataCout[j] + this.transactions[i].price;
                this.dataMarge[j] = this.dataMarge[j] - this.transactions[i].price;
                dateExist = true;
              }
            }
            if (dateExist == false) {
              this.dataCA[this.dataCA.length] = 0;
              this.dataCout[this.dataCout.length] = this.transactions[i].price;
              this.labels[this.labels.length] = transacMonth;
              this.dataMarge[this.dataMarge.length] = 0 - this.transactions[i].price;
            }
          }
        }
        if (filtrage == "trimestre") {
          if (transacYear == todayYear) {
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j] == transacTrimestre) {
                this.dataCout[j] = this.dataCout[j] + this.transactions[i].price;
                this.dataMarge[j] = this.dataMarge[j] - this.transactions[i].price;
                dateExist = true;
              }
            }
            if (dateExist == false) {
              this.dataCA[this.dataCA.length] = 0;
              this.dataCout[this.dataCout.length] = this.transactions[i].price;
              this.labels[this.labels.length] = transacTrimestre;
              this.dataMarge[this.dataMarge.length] = 0 - this.transactions[i].price;
            }
          }
        } else if (filtrage == "mois") {
          if (transacYear == todayYear && transacMonth == todayMonth) {
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j] == transacMonthDay) {
                this.dataCout[j] = this.dataCout[j] + this.transactions[i].price;
                this.dataMarge[j] = this.dataMarge[j] - this.transactions[i].price;
                dateExist = true;
              }
            }
            if (dateExist == false) {
              this.dataCA[this.dataCA.length] = 0;
              this.dataCout[this.dataCout.length] = this.transactions[i].price;
              this.labels[this.labels.length] = transacMonthDay;
              this.dataMarge[this.dataMarge.length] = 0 - this.transactions[i].price;
            }
          }
        } else if (filtrage == "semaine") {
          if (transacYear == todayYear && transacMonth == todayMonth) {
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j] == transacWeekday) {
                this.dataCout[j] = this.dataCout[j] + this.transactions[i].price;
                this.dataMarge[j] = this.dataMarge[j] - this.transactions[i].price;
                dateExist = true;
              }
            }
            if (dateExist == false) {
              this.dataCA[this.dataCA.length] = 0;
              this.dataCout[this.dataCout.length] = this.transactions[i].price;
              this.labels[this.labels.length] = transacWeekday;
              this.dataMarge[this.dataMarge.length] = 0 - this.transactions[i].price;
            }
          }
        } else if (filtrage == "jour") {
          if (transacYear == todayYear && transacMonth == todayMonth && transacMonthDay == todayMonthDay) {
            for (let j = 0; j < this.labels.length; j++) {
              if (this.labels[j] == transacHour) {
                this.dataCout[j] = this.dataCout[j] + this.transactions[i].price;
                this.dataMarge[j] = this.dataMarge[j] - this.transactions[i].price;
                dateExist = true;
              }
            }
            if (dateExist == false) {
              this.dataCA[this.dataCA.length] = 0;
              this.dataCout[this.dataCout.length] = this.transactions[i].price;
              this.labels[this.labels.length] = transacHour;
              this.dataMarge[this.dataMarge.length] = 0 - this.transactions[i].price;
            }
          }
        } else {
          for (let j = 0; j < this.labels.length; j++) {
            if (this.labels[j] == transacYear) {
              this.dataCout[j] = this.dataCout[j] + this.transactions[i].price;
              this.dataMarge[j] = this.dataMarge[j] - this.transactions[i].price;
              dateExist = true;
            }
          }
          if (dateExist == false) {
            this.dataCA[this.dataCA.length] = 0;
            this.dataCout[this.dataCout.length] = this.transactions[i].price;
            this.labels[this.labels.length] = transacYear;
            this.dataMarge[this.dataMarge.length] = 0 - this.transactions[i].price;
          }
        }
      }
    }
    this.initChart();
  }
  getWeek(d) {
    var firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
  }
  getMarge() {
    this.marge = 0;
    let today = new Date();
    let todayYear = today.getFullYear();
    for (let i = 0; i < this.transactions.length; i++) {
      let dateExist = false;
      let date = new Date(this.transactions[i].created);
      let transacYear = date.getFullYear();
      if (transacYear == todayYear) {
        if (this.transactions[i].type == "Sale") {
          this.marge = this.marge + this.transactions[i].price;
        } else if (this.transactions[i].type == "Purchase") {
          this.marge = this.marge - this.transactions[i].price;
        }
      }
    }
    this.getImpot();
  }
  getImpot() {
    this.impot = this.marge * 30 / 100;
  }
  initChart() {
    try {
      this.chart.destroy();
    } catch (error) {}
    chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.defaults.scales.linear.min = 0;
    this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart('myChart', {
      type: 'line',
      data: this.data
    });
    this.chart.data.labels = this.labels;
    this.chart.data.datasets.forEach(dataset => {
      if (dataset.label == 'Cout') dataset.data = this.dataCout;else if (dataset.label == 'Marge') dataset.data = this.dataMarge;else dataset.data = this.dataCA;
    });
    this.chart.update();
  }
  static ɵfac = function ReportingComponent_Factory(t) {
    return new (t || ReportingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ReportingComponent,
    selectors: [["app-reporting"]],
    decls: 21,
    vars: 6,
    consts: [[1, "text-center", 2, "margin-bottom", "90px"], [1, "dropdown", "text-center", "margin-bottom-space"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["id", "myChart"], [1, "dropdown-item", 3, "click"]],
    template: function ReportingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Statistiques");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Selectionner la category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ReportingComponent_li_7_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1)(9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Selectionner le type de filtre\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ReportingComponent_li_12_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "canvas", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filtrage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Chiffre d'affaires : ", ctx.chiffreAffaires, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Resultat comptable : ", ctx.marge, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Impot sur les societes : ", ctx.impot, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.chart);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1784:
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsService: () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3712);


class ProductsService {
  http;
  urlApi;
  constructor(http) {
    this.http = http;
    this.urlApi = "http://localhost:8000";
  }
  getProducts() {
    return this.http.get(this.urlApi + "/infoproducts/");
  }
  setPromotion(id, discount) {
    return this.http.get(this.urlApi + "/modifyDiscount/" + id + "/" + discount + "/");
  }
  addQuantity(id, quantity) {
    return this.http.get(this.urlApi + "/incrementStock/" + id + "/" + quantity + "/");
  }
  removeQuantity(id, quantity) {
    return this.http.get(this.urlApi + "/decrementStock/" + id + "/" + quantity + "/");
  }
  getProductCategories(category) {
    return this.http.get(this.urlApi + "/" + category + "/");
  }
  postTransaction(trans) {
    return this.http.post(this.urlApi + "/transactions/", trans);
  }
  getTransaction() {
    return this.http.get(this.urlApi + "/transactions/");
  }
  getTransactionCategory(category) {
    console.log(category);
    return this.http.get(this.urlApi + "/transactions/" + category + "/");
  }
  static ɵfac = function ProductsService_Factory(t) {
    return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProductsService,
    factory: ProductsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6716:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6716);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map