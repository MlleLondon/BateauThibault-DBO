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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _manage_stock_manage_stock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-stock/manage-stock.component */ 6764);
/* harmony import */ var _details_product_details_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-product/details-product.component */ 2212);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 6916);
/* harmony import */ var _reporting_reporting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporting/reporting.component */ 6428);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 2080);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ 4100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);









const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'detailsProduit',
  component: _details_product_details_product_component__WEBPACK_IMPORTED_MODULE_1__.DetailsProductComponent
}, {
  path: 'manageStock',
  component: _manage_stock_manage_stock_component__WEBPACK_IMPORTED_MODULE_0__.ManageStockComponent
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
}, {
  path: 'reporting',
  component: _reporting_reporting_component__WEBPACK_IMPORTED_MODULE_3__.ReportingComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
}, {
  path: 'logout',
  component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__.LogoutComponent
}
// { path: 'home', component: HomeComponent, canLoad: [AuthGuard] }
];
class AppRoutingModule {
  static ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
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
/* harmony import */ var _Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5392);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ 1784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ 2656);









function DetailsProductComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailsProductComponent_li_7_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSelectProduct(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.name);
  }
}
class DetailsProductComponent {
  route;
  productsService;
  products = [];
  product = null;
  newPromotion = null;
  newQuantity = null;
  copyDiscount = 0;
  loading = false;
  error = null;
  salePrice = 0;
  constructor(route, productsService) {
    this.route = route;
    this.productsService = productsService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProduct(parseInt(id));
    }
    this.getProductsAll();
  }
  ngOnDestroy() {
    // Cleanup if needed
  }
  getProductsAll() {
    var _this = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      _this.error = null;
      try {
        const products = yield _this.productsService.getProducts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          console.error('Failed loading products:', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        })).toPromise();
        _this.products = products || [];
      } catch (err) {
        _this.error = 'Erreur lors du chargement des produits';
        console.error('Failed loading products:', err);
      } finally {
        _this.loading = false;
      }
    })();
  }
  getProduct(id) {
    var _this2 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.error = null;
      try {
        const products = yield _this2.productsService.getProducts().toPromise();
        if (products) {
          _this2.product = products.find(p => p.tig_id === id) || null;
          if (_this2.product) {
            _this2.salePrice = _this2.product.price * (1 - _this2.product.discount / 100);
          }
        }
      } catch (err) {
        _this2.error = 'Erreur lors du chargement du produit';
        console.error('Failed loading product:', err);
      } finally {
        _this2.loading = false;
      }
    })();
  }
  onSelectProduct(item) {
    this.getProduct(item.tig_id);
    this.copyDiscount = item.discount;
    this.addSale(item);
  }
  onSelectProductId(tigId) {
    this.getProduct(tigId);
  }
  onModifyPromotion(item) {
    var _this3 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.newPromotion === null) {
        return;
      }
      _this3.loading = true;
      _this3.error = null;
      try {
        const updatedProduct = yield _this3.productsService.setPromotion(item.tig_id, _this3.newPromotion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          console.error('Failed to set promotion:', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        })).toPromise();
        if (updatedProduct) {
          _this3.product = updatedProduct;
          _this3.copyDiscount = _this3.newPromotion;
          yield _this3.getProductsAll();
        }
      } catch (err) {
        _this3.error = 'Erreur lors de la modification de la promotion';
        console.error('Failed to set promotion:', err);
      } finally {
        _this3.loading = false;
      }
    })();
  }
  addQuantity(item) {
    var _this4 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.newQuantity === null) {
        return;
      }
      _this4.loading = true;
      _this4.error = null;
      try {
        const updatedProduct = yield _this4.productsService.addQuantity(item.tig_id, _this4.newQuantity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          console.error('Failed to add quantity:', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        })).toPromise();
        if (updatedProduct) {
          _this4.product = updatedProduct;
          yield _this4.getProductsAll();
        }
      } catch (err) {
        _this4.error = 'Erreur lors de l\'ajout de la quantité';
        console.error('Failed to add quantity:', err);
      } finally {
        _this4.loading = false;
      }
    })();
  }
  removeQuantity(item) {
    var _this5 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.newQuantity === null) {
        return;
      }
      _this5.loading = true;
      _this5.error = null;
      try {
        const updatedProduct = yield _this5.productsService.removeQuantity(item.tig_id, _this5.newQuantity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          console.error('Failed to remove quantity:', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        })).toPromise();
        if (updatedProduct) {
          _this5.product = updatedProduct;
          yield _this5.getProductsAll();
        }
      } catch (err) {
        _this5.error = 'Erreur lors de la suppression de la quantité';
        console.error('Failed to remove quantity:', err);
      } finally {
        _this5.loading = false;
      }
    })();
  }
  addSale(item) {
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // TODO: Implement addSale method
  static ɵfac = function DetailsProductComponent_Factory(t) {
    return new (t || DetailsProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DetailsProductComponent,
    selectors: [["app-details-product"]],
    decls: 37,
    vars: 9,
    consts: [[1, "text-center"], [1, "dropdown", "text-center", "margin-bottom-space"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["id", "infosProduct", 1, "card", "col-sm-6", "d-flex", "p-2", "container-fluid"], [1, "margin-bottom-space"], [1, "container-fluid"], [1, "raw"], ["type", "number", "id", "newPromotion", "placeholder", "Ajouter Quantit\u00E9", 1, "col-xs-2", "margin-bottom-space", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "horizontal-space", 3, "click"], [1, "btn", "btn-danger", 3, "click"], ["type", "number", "id", "newPromotion", "placeholder", "Nouvelle Promotion", 1, "col-xs-2", "margin-bottom-space", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], [1, "dropdown-item", 3, "click"]],
    template: function DetailsProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Veuillez saisir le produit dont vous voulez voir les informations");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DetailsProductComponent_li_7_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Page d'affichage du produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul")(12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6)(21, "ul", 7)(22, "li", 8)(23, "div", 8)(24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DetailsProductComponent_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.newQuantity, $event) || (ctx.newQuantity = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8)(26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailsProductComponent_Template_button_click_26_listener() {
          return ctx.addQuantity(ctx.product);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailsProductComponent_Template_button_click_28_listener() {
          return ctx.removeQuantity(ctx.product);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li")(31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DetailsProductComponent_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.newPromotion, $event) || (ctx.newPromotion = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li")(33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailsProductComponent_Template_button_click_33_listener() {
          ctx.onModifyPromotion(ctx.product);
          return ctx.addSale(ctx.product);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "ModifierPromotion");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.product.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Nom : ", ctx.product.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Prix : ", ctx.product.price, " \u20AC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Promotion : ", ctx.copyDiscount, " % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Prix en promotion : ", ctx.salePrice, " \u20AC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.newQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.newPromotion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Quantit\u00E9 en stock : ", ctx.product.quantityInStock, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent],
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
    const token = this.cookieService.get('jwt');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
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
    const token = this.cookieService.get('jwt');
    if (token) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
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
/* harmony import */ var _Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5392);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8600);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1672);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 6716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4040);









class LoginComponent {
  http;
  router;
  form;
  loading = false;
  error = null;
  constructor(formBuilder, http, router) {
    this.http = http;
    this.router = router;
    this.form = formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  submit() {
    var _this = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.form.valid) {
        _this.error = 'Veuillez remplir tous les champs correctement';
        return;
      }
      _this.loading = true;
      _this.error = null;
      try {
        const response = yield _this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/api/login/`, _this.form.getRawValue(), {
          withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => _this.router.navigate(['/home'])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          _this.error = 'Identifiants invalides';
          console.error('Login failed:', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        })).toPromise();
        if (!response) {
          throw new Error('No response from server');
        }
      } catch (err) {
        _this.error = 'Une erreur est survenue lors de la connexion';
        console.error('Login error:', err);
      } finally {
        _this.loading = false;
      }
    })();
  }
  static ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 15,
    vars: 1,
    consts: [[1, "form-signin"], [3, "formGroup", "submit"], [1, "h3", "mb-3", "fw-normal", 2, "margin-bottom", "20px", "font-size", "60px", "text-align", "center"], ["src", "../../assets/logo.png", "alt", "logo", 1, "img-centered"], [1, "form-floating"], ["formControlName", "email", "type", "email", "id", "floatingInput", "placeholder", "dupont@toto.com", 1, "form-control"], ["for", "floatingInput"], ["formControlName", "password", "type", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control"], ["for", "floatingPassword"], ["type", "submit", 1, "w-100", "btn", "btn-lg", "btn-primary"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_1_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Le bateau de Thibault");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "votre adresse email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Se connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
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
  error = null;
  constructor(cookieService, router) {
    this.cookieService = cookieService;
    this.router = router;
  }
  ngOnInit() {
    this.logout();
  }
  logout() {
    try {
      this.cookieService.delete('jwt');
      this.router.navigate(['/login']);
    } catch (error) {
      this.error = 'Une erreur est survenue lors de la déconnexion';
      console.error('Error during logout:', error);
      this.router.navigate(['/login']);
    }
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
/* harmony import */ var _Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5392);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ 1784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ 2656);









function ManageStockComponent_div_5_div_4_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td")(14, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ManageStockComponent_div_5_div_4_tr_32_Template_input_ngModelChange_14_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r5.newQuantity[product_r4.tig_id], $event) || (ctx_r5.newQuantity[product_r4.tig_id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td")(16, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ManageStockComponent_div_5_div_4_tr_32_Template_input_ngModelChange_16_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r7.prixTransaction[product_r4.tig_id], $event) || (ctx_r7.prixTransaction[product_r4.tig_id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td")(18, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ManageStockComponent_div_5_div_4_tr_32_Template_input_ngModelChange_18_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r8.newPromotion[product_r4.tig_id], $event) || (ctx_r8.newPromotion[product_r4.tig_id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td")(20, "div", 18)(21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageStockComponent_div_5_div_4_tr_32_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.addQuantity(product_r4.tig_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageStockComponent_div_5_div_4_tr_32_Template_button_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.removeQuantity(product_r4.tig_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Enlever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.quantityInStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.nombre_produit_vendu);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r4.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.newQuantity[product_r4.tig_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.prixTransaction[product_r4.tig_id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.newPromotion[product_r4.tig_id]);
  }
}
function ManageStockComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "table", 12)(3, "thead")(4, "tr")(5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Prix");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Promotion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Vendus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Commentaires");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Ajout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Prix ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " transac");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Ajout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " promo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ManageStockComponent_div_5_div_4_tr_32_Template, 25, 9, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", category_r1.products);
  }
}
function ManageStockComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageStockComponent_div_5_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const category_r1 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.onclick(category_r1.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ManageStockComponent_div_5_div_4_Template, 33, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "List", category_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.visibility[category_r1.name]);
  }
}
class ManageStockComponent {
  productsService;
  categories = [];
  visibility = {};
  newPromotion = {};
  newQuantity = {};
  prixTransaction = {};
  loading = false;
  error = null;
  constructor(productsService) {
    this.productsService = productsService;
  }
  ngOnInit() {
    this.getCategories();
  }
  ngOnDestroy() {
    // Cleanup if needed
  }
  getCategories() {
    var _this = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      _this.error = null;
      try {
        const categories = yield _this.productsService.getCategories().toPromise();
        if (categories) {
          _this.categories = categories.map(category => ({
            ...category,
            products: []
          }));
          yield _this.getProductsAll();
        }
      } catch (err) {
        _this.error = 'Erreur lors du chargement des catégories';
        console.error('Failed loading categories:', err);
      } finally {
        _this.loading = false;
      }
    })();
  }
  getProductsAll() {
    var _this2 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.error = null;
      try {
        yield Promise.all(_this2.categories.map(category => _this2.getProductsCategory(category.name)));
      } catch (err) {
        _this2.error = 'Erreur lors du chargement des produits';
        console.error('Failed loading products:', err);
      } finally {
        _this2.loading = false;
      }
    })();
  }
  getProductsCategory(category) {
    var _this3 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const products = yield _this3.productsService.getProductCategories(category).toPromise();
        const targetCategory = _this3.categories.find(c => c.name === category);
        if (targetCategory) {
          targetCategory.products = products;
        }
      } catch (err) {
        console.error(`Failed loading products for category ${category}:`, err);
        throw err;
      }
    })();
  }
  onModifyPromotion() {
    var _this4 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.loading = true;
      _this4.error = null;
      try {
        yield Promise.all(Object.entries(_this4.newPromotion).filter(([_, promotion]) => promotion).map(([tig_id, promotion]) => _this4.productsService.setPromotion(Number(tig_id), promotion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          console.error(`Failed to set promotion for product ${tig_id}:`, err);
          return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        })).toPromise()));
        yield _this4.getProductsAll();
      } catch (err) {
        _this4.error = 'Erreur lors de la modification des promotions';
        console.error('Failed to set promotions:', err);
      } finally {
        _this4.loading = false;
      }
    })();
  }
  addTransaction(tig_id, type) {
    var _this5 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.newQuantity[tig_id] || _this5.prixTransaction[tig_id] === undefined) {
        return;
      }
      _this5.loading = true;
      _this5.error = null;
      try {
        const transaction = {
          price: _this5.prixTransaction[tig_id],
          quantity: _this5.newQuantity[tig_id],
          tig_id,
          type
        };
        yield _this5.productsService.postTransaction(transaction).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          console.error('Failed to post transaction:', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        })).toPromise();
        yield _this5.getProductsAll();
      } catch (err) {
        _this5.error = 'Erreur lors de l\'ajout de la transaction';
        console.error('Failed to post transaction:', err);
      } finally {
        _this5.loading = false;
      }
    })();
  }
  addQuantity(tig_id) {
    var _this6 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6.newQuantity[tig_id]) {
        return;
      }
      _this6.loading = true;
      _this6.error = null;
      try {
        yield _this6.productsService.addQuantity(tig_id, _this6.newQuantity[tig_id]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          console.error('Failed to add quantity:', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        })).toPromise();
        yield _this6.getProductsAll();
        _this6.newQuantity[tig_id] = 0;
      } catch (err) {
        _this6.error = 'Erreur lors de l\'ajout de la quantité';
        console.error('Failed to add quantity:', err);
      } finally {
        _this6.loading = false;
      }
    })();
  }
  removeQuantity(tig_id) {
    var _this7 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this7.newQuantity[tig_id]) {
        return;
      }
      _this7.loading = true;
      _this7.error = null;
      try {
        yield _this7.productsService.removeQuantity(tig_id, _this7.newQuantity[tig_id]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          console.error('Failed to remove quantity:', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
        })).toPromise();
        yield _this7.getProductsAll();
        _this7.newQuantity[tig_id] = 0;
      } catch (err) {
        _this7.error = 'Erreur lors de la suppression de la quantité';
        console.error('Failed to remove quantity:', err);
      } finally {
        _this7.loading = false;
      }
    })();
  }
  onclick(item) {
    this.visibility[item] = !this.visibility[item];
  }
  static ɵfac = function ManageStockComponent_Factory(t) {
    return new (t || ManageStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ManageStockComponent,
    selectors: [["app-manage-stock"]],
    decls: 9,
    vars: 1,
    consts: [[1, "text-center", 2, "margin-bottom", "90px"], [1, "row", "justify-content-md-center", "container-fluid"], [1, "row"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-md-center", 2, "margin", "30px 0"], [1, "btn", "btn-primary", 2, "width", "auto", 3, "click"], [1, "col-sm-6"], ["type", "button", 1, "btn", "btn-secondary", "margin-bottom-space", "justify-content-md-center", "container-fluid", 3, "id", "click"], [1, "card-title", 2, "text-align", "center"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-body", "justify-content-md-center"], [1, "table", "container-fluid", "justify-content-md-center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "number", "id", "newQuantity", "placeholder", "...", 1, "small-input", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "prixTransaction", "placeholder", "\u20AC", 1, "small-input", 3, "ngModel", "ngModelChange"], ["type", "number", "id", "newPromotion", "placeholder", "%", 1, "small-input", 3, "ngModel", "ngModelChange"], [1, "btn-group"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]],
    template: function ManageStockComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Modification simultan\u00E9e de produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ManageStockComponent_div_5_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageStockComponent_Template_button_click_7_listener() {
          return ctx.onModifyPromotion();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Appliquer toutes les promotions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent],
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
/* harmony import */ var _Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5392);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ 9428);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ 1784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ 2656);








const _c0 = ["myChart"];
function ReportingComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportingComponent_li_7_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.getTransactionCategory(item_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.name);
  }
}
function ReportingComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportingComponent_li_12_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.getchiffresAffaire(item_r5.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.name);
  }
}
chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_4__.registerables);
class ReportingComponent {
  productsService;
  datePipe;
  myChart;
  chart = null;
  transactions = [];
  categories = [];
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
  chiffresAffaire = {};
  marge = {};
  impot = 0;
  loading = false;
  error = null;
  constructor(productsService, datePipe) {
    this.productsService = productsService;
    this.datePipe = datePipe;
  }
  ngOnInit() {
    this.getCategories();
    this.getTransaction();
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
  getCategories() {
    var _this = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const categories = yield _this.productsService.getCategories().toPromise();
        if (categories) {
          _this.categories = categories;
        }
      } catch (err) {
        console.error('Failed loading categories:', err);
      }
    })();
  }
  getTransaction() {
    var _this2 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.error = null;
      try {
        const transactions = yield _this2.productsService.getTransaction().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
          console.error('Failed loading transactions:', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
        })).toPromise();
        if (transactions) {
          _this2.transactions = transactions;
          yield _this2.getchiffresAffaire("année");
          yield _this2.getMarge();
          _this2.updateChart();
        }
      } catch (err) {
        _this2.error = 'Erreur lors du chargement des transactions';
        console.error('Failed loading transactions:', err);
      } finally {
        _this2.loading = false;
      }
    })();
  }
  getTransactionCategory(idCategory) {
    var _this3 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loading = true;
      _this3.error = null;
      try {
        const transactions = yield _this3.productsService.getTransactionCategory(idCategory).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
          console.error('Failed loading transactions by category:', err);
          return rxjs__WEBPACK_IMPORTED_MODULE_6__.EMPTY;
        })).toPromise();
        if (transactions) {
          _this3.transactions = transactions;
          yield _this3.getchiffresAffaire("année");
          yield _this3.getMarge();
          _this3.updateChart();
        }
      } catch (err) {
        _this3.error = 'Erreur lors du chargement des transactions par catégorie';
        console.error('Failed loading transactions by category:', err);
      } finally {
        _this3.loading = false;
      }
    })();
  }
  getchiffresAffaire(period) {
    var _this4 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.chiffresAffaire = {};
      _this4.transactions.forEach(transaction => {
        const date = new Date(transaction.created || '');
        let key = '';
        switch (period) {
          case "année":
            key = date.getFullYear().toString();
            break;
          case "mois":
            key = `${date.getFullYear()}-${date.getMonth() + 1}`;
            break;
          case "jour":
            key = date.toISOString().split('T')[0];
            break;
        }
        if (key) {
          _this4.chiffresAffaire[key] = (_this4.chiffresAffaire[key] || 0) + transaction.price * transaction.quantity;
        }
      });
    })();
  }
  getMarge() {
    var _this5 = this;
    return (0,_Users_nutfdt_Desktop_Cours_MASTER_SI_4E_Back_office_BateauThibault_DBO_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.marge = {};
      _this5.transactions.forEach(transaction => {
        const date = new Date(transaction.created || '');
        const key = date.getFullYear().toString();
        if (transaction.type === 'Sale') {
          _this5.marge[key] = (_this5.marge[key] || 0) + transaction.price * transaction.quantity;
        }
      });
    })();
  }
  getImpot() {
    this.impot = this.marge[Object.keys(this.marge)[0]] * 0.2;
  }
  updateChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const ctx = this.myChart.nativeElement.getContext('2d');
    this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(this.chiffresAffaire),
        datasets: [{
          label: 'Chiffres d\'affaires',
          data: Object.values(this.chiffresAffaire),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }, {
          label: 'Marge',
          data: Object.values(this.marge),
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  static ɵfac = function ReportingComponent_Factory(t) {
    return new (t || ReportingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ReportingComponent,
    selectors: [["app-reporting"]],
    viewQuery: function ReportingComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.myChart = _t.first);
      }
    },
    decls: 21,
    vars: 6,
    consts: [[1, "text-center", 2, "margin-bottom", "90px"], [1, "dropdown", "text-center", "margin-bottom-space"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["id", "myChart"], [1, "dropdown-item", 3, "click"]],
    template: function ReportingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Statistiques");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Selectionner la category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ReportingComponent_li_7_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Selectionner le type de filtre\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ReportingComponent_li_12_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "canvas", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filtrage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Chiffre d'affaires : ", ctx.chiffresAffaire, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Resultat comptable : ", ctx.marge, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Impot sur les societes : ", ctx.impot, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.chart);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent],
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 6716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3712);



class ProductsService {
  http;
  urlApi = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getProducts() {
    return this.http.get(`${this.urlApi}/infoproducts/`);
  }
  getCategories() {
    return this.http.get(`${this.urlApi}/categories/`);
  }
  setPromotion(id, discount) {
    return this.http.put(`${this.urlApi}/modifyDiscount/${id}/${discount}/`, {});
  }
  addQuantity(id, quantity) {
    return this.http.put(`${this.urlApi}/incrementStock/${id}/${quantity}/`, {});
  }
  removeQuantity(id, quantity) {
    return this.http.put(`${this.urlApi}/decrementStock/${id}/${quantity}/`, {});
  }
  getProductCategories(category) {
    return this.http.get(`${this.urlApi}/${category}/`);
  }
  postTransaction(trans) {
    return this.http.post(`${this.urlApi}/transactions/`, trans);
  }
  getTransaction() {
    return this.http.get(`${this.urlApi}/transactions/`);
  }
  getTransactionCategory(category) {
    return this.http.get(`${this.urlApi}/transactions/${category}/`);
  }
  static ɵfac = function ProductsService_Factory(t) {
    return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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
  production: false,
  apiUrl: 'http://localhost:8000'
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