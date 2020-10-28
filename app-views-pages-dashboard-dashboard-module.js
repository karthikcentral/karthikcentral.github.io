(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<br><br>\n\t<div class=\"row bg-white\">\n\t\t<div class=\"col-xs-10 col-sm-6 col-lg-3\">\n\t\t\t<div class=\"font-w700 text-gray-darker animated fadeIn \">Number of Orders</div>\n\t\t\t<div class=\"text-muted animated fadeIn\"><small><i class=\"flaticon-calendar\"></i> All Time</small></div>\n\t\t\t<h2 class=\"h2 font-w300 font-size-lg text-primary animated flipInX pt-3\">{{orderCount}}</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-lg-3\">\n\t\t\t<div class=\"font-weight-bold text-gray-darker animated fadeIn\">Total Revenue</div>\n\t\t\t<div class=\"text-muted animated fadeIn\"><small><i class=\"flaticon-calendar\"></i> All Time</small></div>\n\t\t\t<h2 class=\"h2 font-w300 text-primary animated flipInX  pt-3\">\t<i class=\"fas fa-rupee-sign\"></i>\n{{orderRevenue }}</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-lg-3\">\n\t\t\t<div class=\"font-weight-bold text-gray-darker animated fadeIn\">Amount Spent</div>\n\t\t\t<div class=\"text-muted animated fadeIn\"><small><i class=\"flaticon-calendar\"></i> All Time</small></div>\n\t\t\t<h2 class=\"h2 font-w300 text-primary animated flipInX  pt-3\">\t<i class=\"fas fa-rupee-sign\"></i>\n{{orderSpent }}</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-lg-3\">\n\t\t\t<div class=\"font-weight-bold text-gray-darker animated fadeIn\">Total Profit</div>\n\t\t\t<div class=\"text-muted animated fadeIn\"><small><i class=\"flaticon-calendar\"></i> All Time</small></div>\n\t\t\t<h2 class=\"h2 font-w300 text-primary animated flipInX  pt-3\">\t<i class=\"fas fa-rupee-sign\"></i>\n{{orderProfit }}</h2>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row pt-3 mt-3\" >\n\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n\t\t\t<div class=\"block-content block-content-full clearfix mr-2  bg-white p-2\">\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<i class=\"fa fa-exclamation-circle fa-2x text-danger\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"h2 text-danger\">{{onHold}}</div>\n\t\t\t\t<div class=\"text-uppercase font-w600 font-s12 text-muted\">On Hold Orders</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n\t\t\t<div class=\"block-content block-content-full clearfix mr-2  bg-white  p-2\">\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<i class=\"fa fa-cog fa-2x text-primary\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"h2 text-primary\">{{processing}}</div>\n\t\t\t\t<div class=\"text-uppercase font-w600 font-s12 text-muted\">Processing</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n\t\t\t<div class=\"block-content block-content-full clearfix mr-2  bg-white  p-2\">\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<i class=\"fa fa-home fa-2x text-smooth\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"h2 text-smooth\">{{rtd}}</div>\n\t\t\t\t<div class=\"text-uppercase font-w600 font-s12 text-muted\">Ready to Ship</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-md-3 bg-white\">\n\t\t\t<div class=\"block-content block-content-full clearfix mr-2  bg-white  p-2\">\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<i class=\"fa fa-undo fa-2x text-amethyst\"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"h2 text-amethyst\">{{rto}}</div>\n\t\t\t\t<div class=\"text-uppercase font-w600 font-s12 text-muted\">Returns</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"kt-space-30\"></div>\n\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-6\">\n\t\t\t<kt-widget12></kt-widget12>\n\t\t</div>\n\t\t<div class=\"col-xl-6\">\n\t\t\t<kt-widget12></kt-widget12>\n\t\t</div>\n\t</div>\n\n\t<div class=\"kt-space-20\"></div>\n\n\t<div class=\"row bg-white p-3\">\n\t\t<div class=\"col-xs-10 col-sm-6 col-lg-3\">\n\t\t\t<div class=\"font-weight-bold  text-gray-darker animated fadeIn \">PENDING RECEIVABLE</div>\n<h2 class=\"h2 font-w300 font-size-lg text-primary animated flipInX pt-4\"><i class=\"fas fa-rupee-sign\"></i>\n\t{{orderCount}}</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-lg-3\">\n\t\t\t<div class=\"font-weight-bold text-gray-darker animated fadeIn\">PENDING REMITANCE</div>\n<h2 class=\"h2 font-w300 text-primary animated flipInX pt-4\">\t<i class=\"fas fa-rupee-sign\"></i>\n{{orderRevenue }}</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-lg-3\">\n\t\t\t<div class=\"font-weight-bold text-gray-darker animated fadeIn\">LAST COD REMITANCE</div>\n<h2 class=\"h2 font-w300 text-primary animated flipInX pt-4\">\n\t<i class=\"fas fa-rupee-sign\"></i>\n\t{{orderSpent }}</h2>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-lg-3\">\n\t\t\t<div class=\"font-weight-bold text-gray-darker animated fadeIn\">TOTAL COD REMITANCE</div>\n<h2 class=\"h2 font-w300 text-primary animated flipInX pt-4\" >\t<i class=\"fas fa-rupee-sign\"></i>\n{{orderProfit }}</h2>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9LYXJ0aGlrL1dlYnN0b3JtUHJvamVjdHMvRnJlZWxhbmNlclByb2plY3QvZnVua3l0ZWVzL3NyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdHLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0OjpuZy1kZWVwIHtcclxuXHRcdG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");

// Angular


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        this.orderCount = 10;
        this.orderRevenue = 10;
        this.orderSpent = 10;
        this.orderProfit = 10;
        this.onHold = 0;
        this.processing = 0;
        this.rtd = 0;
        this.rto = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.chartOptions1 = {
            data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
            color: this.layoutConfigService.getConfig('colors.state.brand'),
            border: 3
        };
        this.chartOptions2 = {
            data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
            color: this.layoutConfigService.getConfig('colors.state.danger'),
            border: 3
        };
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");

// Angular



// Core Module



var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
                    },
                ]),
            ],
            providers: [],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-dashboard-dashboard-module.js.map