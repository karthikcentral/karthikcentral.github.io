(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-theme-content-builder-builder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/content/builder/builder.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/content/builder/builder.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n\t<div>\r\n\t\t<!--<kt-portlet-header [title]=\"'CREATE ORDER'\"></kt-portlet-header>-->\r\n\t\t<br><br>\r\n\t</div>\r\n\t<kt-portlet>\r\n\t\t<kt-portlet-body>\r\n<div class=\"content\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"block block-transparent\">\r\n\t\t\t\t<div class=\"block-content\">\r\n\t\t\t\t\t<div class=\"js-wizard-validation block\" data-ng-class=\"{\r\n                  'block-opt-without-loader-icon': showLoader,\r\n                  }\">\r\n\t\t\t\t\t\t<!-- Large Screens -->\r\n\t\t\t\t\t\t<div ng-if=\"includeDesktopTemplate\" class=\"row row-eq-height ng-scope\">\r\n\t\t\t\t\t\t\t<!-- Thumbnails -->\r\n\t\t\t\t\t\t\t<div class=\"col-md-1\">\r\n\t\t\t\t\t\t\t\t<div id=\"SpecialProductNavDiv\">\r\n\t\t\t\t\t\t\t\t\t<!-- ngIf: showSpecial && showBack -->\r\n\t\t\t\t\t\t\t\t\t<div ng-if=\"showSpecial &amp;&amp; showBack\" class=\"row ng-scope\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-center push-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a role=\"button\" ng-click=\"showView(0)\" data-uib-tooltip=\"Front\" data-tooltip-placement=\"right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-container design-thumbnail-div animated fadeIn shadow\" data-ng-class=\"{\r\n                                       'shadow': showDesignButton == 0,\r\n                                       }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img id=\"front-thumbnail\" src=\"https://datacenter.printrove.com/mockup_layouts_img/315.jpg\" class=\"img-responsive\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-options\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-options-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- end ngIf: showSpecial && showBack -->\r\n\t\t\t\t\t\t\t\t\t<!-- ngIf: showSpecial && showBack -->\r\n\t\t\t\t\t\t\t\t\t<div ng-if=\"showSpecial &amp;&amp; showBack\" class=\"row ng-scope\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a role=\"button\" ng-click=\"showView(1)\" data-uib-tooltip=\"Back\" data-tooltip-placement=\"right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-container design-thumbnail-div animated fadeIn\" data-ng-class=\"{\r\n                                       'shadow': showDesignButton == 1,\r\n                                       }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img id=\"back-thumbnail\" src=\"https://datacenter.printrove.com/mockup_layouts_img/back-315.jpg\" class=\"img-responsive\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-options\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-options-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- end ngIf: showSpecial && showBack -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- FPD Wrapper -->\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\" id=\"DesginCustomiserDiv\">\r\n\t\t\t\t\t\t\t\t<div class=\"row push-30 text-center ng-scope\" ng-if=\"showDesignButton == 0\" id=\"AddDesgignDiv\">\r\n\t\t\t\t\t\t\t\t\t<div ng-if=\"showAddDesign\" class=\"col-md-10 col-md-offset-1 border-b ng-scope\">\r\n\t\t\t\t\t\t\t\t\t\t<button (click)=\"openDesignModal()\" [ngClass]=\"{'kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light': loading}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"kt_login_signin_submit\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-primary btn-elevate kt-login__btn-primary\">Add Design</button>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div #someVar id=\"designer\" class=\"fpd-container fpd-shadow-1 fpd-topbar fpd-tabs fpd-tabs-side fpd-top-actions-centered fpd-bottom-actions-centered fpd-views-inside-left\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"fpd-product\" title=\"Front\" data-thumbnail=\"https://datacenter.printrove.com/mockup_layouts_img/315.jpg\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\t\t</kt-portlet-body>\r\n\t</kt-portlet>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/views/theme/content/builder/builder.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/theme/content/builder/builder.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n.design-thumbnail-div {\n  position: relative;\n  overflow: hidden;\n  padding-bottom: 100%;\n  border: 1.5px solid #bbb;\n  border-radius: 5px; }\n\n.design-thumbnail-div img {\n  position: absolute;\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: auto;\n  height: 99%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%); }\n\n.shadow {\n  box-shadow: 0 10px 6px -6px #777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9LYXJ0aGlrL1dlYnN0b3JtUHJvamVjdHMvRnJlZWxhbmNlclByb2plY3QvZnVua3l0ZWVzL3NyYy9hcHAvdmlld3MvdGhlbWUvY29udGVudC9idWlsZGVyL2J1aWxkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRyxhQUFhLEVBQUE7O0FBS2hCO0VBQ0Msa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxrQkFBa0I7RUFDbEIsc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0RBQTRDO1VBQTVDLDRDQUE0QyxFQUFBOztBQUc3QztFQUdDLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGhlbWUvY29udGVudC9idWlsZGVyL2J1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0OjpuZy1kZWVwIHtcclxuXHRcdG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmRlc2lnbi10aHVtYm5haWwtZGl2IHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzpoaWRkZW47XHJcblx0cGFkZGluZy1ib3R0b206MTAwJTtcclxuXHRib3JkZXI6IDEuNXB4IHNvbGlkICNiYmI7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdC8vYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3ZhcmlvdXMvdHJhc25wYXJlbnQtcGF0dGVybi5wbmcpIGNlbnRlciBjZW50ZXI7XHJcbn1cclxuLmRlc2lnbi10aHVtYm5haWwtZGl2IGltZ3tcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0b2JqZWN0LWZpdDogY29udGFpbjtcclxuXHR3aWR0aDogYXV0bztcclxuXHRoZWlnaHQ6IDk5JTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxuXHRib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/theme/content/builder/builder.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/theme/content/builder/builder.component.ts ***!
  \******************************************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");

// Angular


// Layout

var BuilderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function BuilderComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        /**
         * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
         */
        this.pluginOpts = {
            stageWidth: "1248",
            stageHeight: "909",
            editorMode: false,
            mainBarModules: [],
            boundingBoxProps: {
                strokeWidth: "5",
            },
            customImageParameters: {
                draggable: true,
                removable: true,
                resizable: true,
                rotatable: false,
                autoCenter: true,
                maxH: 4200,
                maxW: 4800,
                allowedImageTypes: ["jpeg"],
            },
            actions: {
                top: [],
                right: [],
                bottom: [],
                left: [],
            },
        };
        this.loading = false;
    }
    /**
     * On init
     */
    BuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = this.layoutConfigService.getConfig();
        this.fpd = new FancyProductDesigner(jQuery("#designer"), this.pluginOpts);
        console.log(this.fpd);
        setTimeout(function () {
            console.log(_this.fpd);
            _this.addProduct();
            _this.loadEditMode();
            setTimeout(function () {
                console.log("Adding Design");
                // this.addDesign(0);
            }, 8000);
            _this.showLoader = false;
        }, 5000);
    };
    BuilderComponent.prototype.loadEditMode = function () {
        // if (product.productValid) {
        // 	$("#saveButton").removeClass("shakingButton");
        // 	this.autoCenter = false;
        // 	if (
        // 		product.back_design_id_selected != "" &&
        // 		product.back_crop_details != null
        // 	) {
        // 		let cropDetails = product.back_crop_details;
        // 		this.backDesignId = product.back_design_id_selected;
        // 		this.cropDetailsToFpdDetails(
        // 			this.backDesignId,
        // 			cropDetails,
        // 			1
        // 		);
        // 	}
        // 	if (
        // 		product.design_id_selected != "" &&
        // 		product.crop_details != null
        // 	) {
        // 		let cropDetails = product.crop_details;
        // 		this.designId = product.design_id_selected;
        // 		this.cropDetailsToFpdDetails(this.designId, cropDetails, 0);
        // 	}
        // } else {
        // 	this.showPriceCalculationLoader = false;
        // 	this.autoCenter = true;
        // }
    };
    BuilderComponent.prototype.addDesign = function (view) {
        //Remove Previous Design from Current View Instance
        this.fpd.selectView(0);
        if (view == 0) {
            var fabricElement = this.fpd.getElementByTitle("Front Design");
            if (fabricElement) {
                this.fpd.currentViewInstance.stage.remove(fabricElement);
            }
            var scale = 0.45;
            var title = "Front Design";
            this.frontDesign = true;
            // this.orderProductData.product.design_id_selected = this.designId;
            var top_1 = null;
            var left = null;
            var designUrl = null;
        }
        else {
            var fabricElement = this.fpd.getElementByTitle("Back Design");
            if (fabricElement) {
                this.fpd.currentViewInstance.stage.remove(fabricElement);
            }
            var scale = 0.45;
            var title = "Back Design";
            this.backDesign = true;
            // this.orderProductData.product.back_design_id_selected =
            // 	this.backDesignId;
            var top_2 = null;
            var left = null;
            var designUrl = null;
        }
        var params = {
            uploadZone: 0,
            autoCenter: true,
            autoSelect: true,
            opacity: 0.9,
            degree: 0,
            price: 0,
            originX: "center",
            originY: "center",
            removable: true,
            draggable: true,
            rotatable: false,
            resizable: true,
            zChangeable: false,
            topped: false,
            uniScalingUnlockable: false,
            excludeFromExport: false,
            advancedEditing: false,
            locked: false,
        };
        // this.fpd.addCustomImage( $rootScope.designFileMain, title, params, view );
        this.fpd.addElement("image", "https://s3.ap-south-1.amazonaws.com/dodatafiles/public/temp_designs_cache/5f589b3a2c990--DES_391864.png", "Font Design", params, view);
        this.loading = false;
    };
    BuilderComponent.prototype.addProduct = function () {
        var params = {
            uploadZone: 0,
            autoCenter: true,
            degree: 0,
            price: 0,
            originX: "center",
            originY: "center",
            removable: false,
            draggable: false,
            rotatable: false,
            resizable: false,
            zChangeable: false,
            topped: false,
            autoSelect: false,
            uniScalingUnlockable: false,
            excludeFromExport: true,
            advancedEditing: false,
            locked: false,
        };
        this.fpd.addElement("image", "https://datacenter.printrove.com/mockup_layouts_img/315.jpg", "Front", params, 0);
        // if (this.productType == "special" && this.showBack) {
        // 	this.fpd.addElement("image", this.backLayout, "Back", params, 1);
        // }
    };
    BuilderComponent.prototype.openDesignModal = function () {
        var view = 0;
        var designWd = 1948;
        var designHt = 1609;
        if (view == 0) {
            this.designId = 123;
            this.frontDesignMain =
                "https://s3.ap-south-1.amazonaws.com/dodatafiles/public/temp_designs_cache/5f589b3a2c990--DES_391864.png";
            this.designOriginalWd = designWd;
            this.designOriginalHt = designHt;
        }
        var boundingBoxHeight = 4800;
        var boundingBoxWidth = 4200;
        var ratio = designWd / designHt;
        //Setting the initial size of the design depending upon the product and design dimensions
        var scaleRatio = 0.9;
        if (designWd < boundingBoxWidth && designHt < boundingBoxHeight) {
            this.initialScale = 1;
            this.backInitialScale = 1;
        }
        else if (designWd < boundingBoxWidth &&
            designHt >= boundingBoxHeight) {
            var resizedDesignHt = boundingBoxHeight;
            this.initialScale = resizedDesignHt / designHt;
            this.backInitialScale = resizedDesignHt / designHt;
        }
        else if (designWd >= boundingBoxWidth &&
            designHt < boundingBoxHeight) {
            var resizedDesignWd = boundingBoxWidth;
            this.initialScale = resizedDesignWd / designWd;
            this.backInitialScale = resizedDesignWd / designWd;
        }
        else {
            //Landscape Bounding Box
            if (designWd > designHt) {
                //Landscape Design
                var resizedDesignWd = boundingBoxWidth;
                this.initialScale = resizedDesignWd / designWd;
                this.backInitialScale = resizedDesignWd / designWd;
                var resizedDesignHt = designHt * this.initialScale;
                if (resizedDesignHt > boundingBoxHeight) {
                    var resizedDesignHt = boundingBoxHeight;
                    this.initialScale = resizedDesignHt / designHt;
                    this.backInitialScale = resizedDesignHt / designHt;
                }
            }
            else {
                var resizedDesignHt = boundingBoxHeight;
                this.initialScale = resizedDesignHt / designHt;
                this.backInitialScale = resizedDesignHt / designHt;
                var resizedDesignWd = this.initialScale * designWd;
                if (resizedDesignWd > boundingBoxWidth) {
                    var resizedDesignWd = boundingBoxWidth;
                    this.initialScale = resizedDesignWd / designWd;
                    this.backInitialScale = resizedDesignWd / designWd;
                }
            }
        }
        this.initialScale = (this.initialScale * scaleRatio) / (10 / 5);
        this.backInitialScale = (this.backInitialScale * scaleRatio) / (10 / 5);
        this.addDesign(view);
    };
    /**
     * Reset preview
     *
     * @param e: Event
     */
    BuilderComponent.prototype.resetPreview = function (e) {
        e.preventDefault();
        this.layoutConfigService.resetConfig();
        location.reload();
    };
    /**
     * Submit preview
     *
     * @param e: Event
     */
    BuilderComponent.prototype.submitPreview = function (e) {
        this.layoutConfigService.setConfig(this.model, true);
        location.reload();
    };
    BuilderComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("form", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], BuilderComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("somelet", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BuilderComponent.prototype, "el", void 0);
    BuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "kt-builder",
            template: __webpack_require__(/*! raw-loader!./builder.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/content/builder/builder.component.html"),
            styles: [__webpack_require__(/*! ./builder.component.scss */ "./src/app/views/theme/content/builder/builder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], BuilderComponent);
    return BuilderComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/content/builder/builder.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/theme/content/builder/builder.module.ts ***!
  \***************************************************************/
/*! exports provided: BuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderModule", function() { return BuilderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _builder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./builder.component */ "./src/app/views/theme/content/builder/builder.component.ts");

// Angular





// NgBootstrap

// Perfect Scrollbar

// Partials

// Highlight JS

// CoreModule

// Builder component

var BuilderModule = /** @class */ (function () {
    function BuilderModule() {
    }
    BuilderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HighlightModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _builder_component__WEBPACK_IMPORTED_MODULE_11__["BuilderComponent"]
                    }
                ]),
                // ng-bootstrap modules
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"],
            ],
            providers: [],
            declarations: [_builder_component__WEBPACK_IMPORTED_MODULE_11__["BuilderComponent"]]
        })
    ], BuilderModule);
    return BuilderModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-theme-content-builder-builder-module.js.map