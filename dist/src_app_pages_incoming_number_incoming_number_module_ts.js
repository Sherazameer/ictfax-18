"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_incoming_number_incoming_number_module_ts"],{

/***/ 8345:
/*!****************************************************************************!*\
  !*** ./src/app/pages/incoming_number/forward-incoming_number-component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForwardIncomingNumberComponent": () => (/* binding */ ForwardIncomingNumberComponent)
/* harmony export */ });
/* harmony import */ var _incoming_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incoming_number */ 85991);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ 84640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _incoming_number_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incoming_number.service */ 67393);
/* harmony import */ var _did_did_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../did/did.service */ 45557);
/* harmony import */ var _extension_extension_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extension/extension.service */ 74124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);












function ForwardIncomingNumberComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Please Select Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function ForwardIncomingNumberComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ForwardIncomingNumberComponent_div_33_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.incomingNumber.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.incomingNumber.email)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0));
  }
}
function ForwardIncomingNumberComponent_div_34_nb_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ext_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", ext_r7.account_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ext_r7.username, " (", ext_r7.phone, ") ");
  }
}
function ForwardIncomingNumberComponent_div_34_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Please Select Extension");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ForwardIncomingNumberComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "nb-card")(2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Extesnion Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nb-card-body")(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select Extesnion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "nb-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ForwardIncomingNumberComponent_div_34_Template_nb_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.incomingNumber.extension_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ForwardIncomingNumberComponent_div_34_nb_option_9_Template, 2, 3, "nb-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ForwardIncomingNumberComponent_div_34_div_11_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.incomingNumber.extension_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.exts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.incomingNumber.service_name == "forwardtoext" && ctx_r2.incomingNumber.extension_id == undefined);
  }
}
class ForwardIncomingNumberComponent {
  constructor(http, route, in_number_service, router, did_service, ext_service) {
    this.http = http;
    this.route = route;
    this.in_number_service = in_number_service;
    this.router = router;
    this.did_service = did_service;
    this.ext_service = ext_service;
    this.form1 = {};
    this.incomingNumber = new _incoming_number__WEBPACK_IMPORTED_MODULE_0__.IncomingNumber();
    this.id = null;
    this.exts = [];
  }
  ngOnInit() {
    this.getAllExt();
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      const test_url = this.router.url.split('/');
      const lastsegment = test_url[test_url.length - 1];
      if (lastsegment === 'new') {
        return null;
      } else {
        // return this.in_number_service.get_Data(this.id).then(data => {
        this.in_number_service.get_Data(this.id).then(data => {
          this.incomingNumber = data;
          this.incomingNumber.service_name = '';
        }).catch(this.handleError); // Handle errors from the promise
      }
    });
  }

  getAllExt() {
    this.ext_service.get_ExtensionList().then(response => {
      this.exts = response;
    });
  }
  forwardDID() {
    if (this.incomingNumber.service_name == 'no_service') {
      this.did_service.no_service(this.incomingNumber.account_id).then(response => {
        this.router.navigate(['../../../incoming_number'], {
          relativeTo: this.route
        });
      });
    } else if (this.incomingNumber.service_name == 'faxtoemail') {
      if (this.incomingNumber.email == null || this.incomingNumber.email == undefined) {
        this.did_service.send_program(this.incomingNumber).then(response => {
          this.router.navigate(['../../../incoming_number'], {
            relativeTo: this.route
          });
        });
      } else {
        this.in_number_service.update_account(this.incomingNumber).then(data => {
          this.did_service.send_program(this.incomingNumber).then(response => {
            this.router.navigate(['../../../incoming_number'], {
              relativeTo: this.route
            });
          });
        });
      }
    } else if (this.incomingNumber.service_name == 'forwardtoext') {
      this.incomingNumber.did_id = this.incomingNumber.account_id;
      this.in_number_service.forwardtoext(this.incomingNumber).then(response => {
        this.router.navigate(['../../../incoming_number'], {
          relativeTo: this.route
        });
      });
    } else {}
  }
  handleError(error) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  static {
    this.ɵfac = function ForwardIncomingNumberComponent_Factory(t) {
      return new (t || ForwardIncomingNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_incoming_number_service__WEBPACK_IMPORTED_MODULE_2__.IncomingNumberService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_did_did_service__WEBPACK_IMPORTED_MODULE_3__.DIDService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_extension_extension_service__WEBPACK_IMPORTED_MODULE_4__.ExtensionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ForwardIncomingNumberComponent,
      selectors: [["ngx-forward-incoming-component"]],
      decls: 37,
      vars: 22,
      consts: [[1, "col-lg-12"], ["for", "phone"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "phone", "disabled", "", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "dddd", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "", "selected", ""], ["value", "no_service", "selected", ""], ["value", "faxtoemail"], ["value", "forwardtoext"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [2, "color", "red"], ["type", "text", "id", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "user", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]],
      template: function ForwardIncomingNumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 0)(5, "nb-card")(6, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "nb-card-body")(10, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ForwardIncomingNumberComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.incomingNumber.phone = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "nb-card")(16, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nb-card-body")(20, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Select Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "nb-select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ForwardIncomingNumberComponent_Template_nb_select_ngModelChange_23_listener($event) {
            return ctx.incomingNumber.service_name = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "nb-option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "- Select -");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "nb-option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "No service");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "nb-option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Fax to Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "nb-option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Forward to Extension");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ForwardIncomingNumberComponent_div_32_Template, 4, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, ForwardIncomingNumberComponent_div_33_Template, 5, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ForwardIncomingNumberComponent_div_34_Template, 12, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForwardIncomingNumberComponent_Template_button_click_35_listener() {
            return ctx.forwardDID();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 12, "my_dids.forward_did"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 14, "my_dids.did_info"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 16, "my_dids.did_number"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.incomingNumber.phone)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](20, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 18, "my_dids.user_info"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.incomingNumber.service_name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](21, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.incomingNumber.service_name == "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.incomingNumber.service_name == "faxtoemail");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.incomingNumber.service_name == "forwardtoext");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.incomingNumber.service_name == "" || ctx.incomingNumber.service_name == "forwardtoext" && ctx.incomingNumber.extension_id == undefined);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
      styles: [".dddd[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaW5jb21pbmdfbnVtYmVyL2ZvcndhcmQtaW5jb21pbmdfbnVtYmVyLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRkZGQge1xuICB3aWR0aDogMzAwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 80949:
/*!********************************************************************!*\
  !*** ./src/app/pages/incoming_number/incoming_number-component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsIncomingNumberComponent": () => (/* binding */ FormsIncomingNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _incoming_number_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incoming_number.service */ 67393);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/auth */ 69695);
/* harmony import */ var _did_did_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../did/did.service */ 45557);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 33935);













function FormsIncomingNumberComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 18);
  }
}
function FormsIncomingNumberComponent_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 19);
  }
}
function FormsIncomingNumberComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "my_dids.did_number"), ":");
  }
}
function FormsIncomingNumberComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r11.data.username, "");
  }
}
function FormsIncomingNumberComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "my_dids.title"));
  }
}
function FormsIncomingNumberComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r12.data.first_name, "");
  }
}
function FormsIncomingNumberComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "general.operations"));
  }
}
function FormsIncomingNumberComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23)(1, "button", 24)(2, "mat-icon")(3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const in_num_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/incoming_number/incoming_number/", in_num_r13.data.account_id, "/forward");
  }
}
function FormsIncomingNumberComponent_nb_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r14);
  }
}
function FormsIncomingNumberComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" | Showing ", ctx_r9.startIndex, " - ", ctx_r9.minimumItems, " of ", ctx_r9.length, " items ");
  }
}
const _c0 = function (a0) {
  return {
    "disabled-icon": a0
  };
};
class FormsIncomingNumberComponent {
  constructor(in_number_service, IncomingNumberdataSourceBuilder, authService, did_service) {
    this.in_number_service = in_number_service;
    this.IncomingNumberdataSourceBuilder = IncomingNumberdataSourceBuilder;
    this.authService = authService;
    this.did_service = did_service;
    this.length = 0;
    this.items_page = [5, 10, 25, 100];
    this.pageSize = 10;
    this.startIndex = 0;
    this.displayedColumns = ['phone', 'first_name', 'Operations'];
    this.authService.onTokenChange().subscribe(token => {
      if (token && token.getValue()) {
        this.auser = token.getPayload();
      }
    });
  }
  ngOnInit() {
    if (this.auser.is_admin == 0) {
      this.getIncomingNumberlist();
    } else {
      this.getAllList();
    }
  }
  getIncomingNumberlist() {
    this.in_number_service.get_List(this.auser.user_id).then(data => {
      // this.aNumbers = data;
      this.length = data.length;
      this.IncomingNumberDataSource = this.IncomingNumberdataSourceBuilder.create(data.map(item => ({
        data: item
      })));
    }).catch(this.handleError);
  }
  // getIncomingNumberlist() {
  //   this.in_number_service.get_List(this.auser.user_id).then(data => {
  //     this.aNumbers = data;
  //     this.length = data.length;
  //     this.IncomingNumberDataSource = this.IncomingNumberdataSourceBuilder.create(data.map(item => ({ data: item})));
  //   })
  //   .catch(this.handleError);
  // }
  getAllList() {
    this.did_service.get_DIDList().then(response => {
      // this.aNumbers = response;
      this.length = response.length;
      this.paginate(this.pageSize);
      this.IncomingNumberDataSource = this.IncomingNumberdataSourceBuilder.create(response.map(item => ({
        data: item
      })));
    }).catch(error => {
      console.error('Error fetching DID List:', error);
    });
  }
  paginate(page_Items) {
    if (!this.aNumbers || this.aNumbers.length === 0) {
      return;
    }
    if (typeof page_Items === 'string') {
      if (page_Items === 'next') {
        if (this.startIndex + this.pageSize < this.length) {
          this.startIndex += this.pageSize;
        }
      } else if (page_Items === 'previous') {
        if (this.startIndex > 0) {
          this.startIndex -= this.pageSize;
        }
      }
    } else {
      this.pageSize = page_Items;
      this.startIndex = 0;
    }
    this.currentPage = Math.floor(this.startIndex / this.pageSize) + 1;
    this.total_pages = Math.ceil(this.length / this.pageSize);
    this.minimumItems = Math.min(this.startIndex + this.pageSize, this.length);
    const end = Math.min(this.startIndex + this.pageSize, this.length);
    this.current_items = this.aNumbers.slice(this.startIndex, end);
    this.IncomingNumberDataSource = this.IncomingNumberdataSourceBuilder.create(this.current_items.map(item => ({
      data: item
    })));
  }
  handleError(error) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  static {
    this.ɵfac = function FormsIncomingNumberComponent_Factory(t) {
      return new (t || FormsIncomingNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_incoming_number_service__WEBPACK_IMPORTED_MODULE_0__.IncomingNumberService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridDataSourceBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_4__.NbAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_did_did_service__WEBPACK_IMPORTED_MODULE_1__.DIDService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FormsIncomingNumberComponent,
      selectors: [["ngx-incomingnumber-component"]],
      viewQuery: function FormsIncomingNumberComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 28,
      vars: 18,
      consts: [[3, "nbTreeGrid", "nbSort"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], ["nbTreeGridColumnDef", "phone"], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", "style", "text-align:left", 4, "nbTreeGridCellDef"], ["nbTreeGridColumnDef", "first_name"], ["nbTreeGridColumnDef", "Operations"], ["nbTreeGridHeaderCell", "", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], [2, "padding", "30px", "display", "flex", "justify-content", "flex-end"], [2, "text-align", "center", "padding-top", "10px"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding-top", "10px"], ["icon", "arrowhead-left-outline", 2, "margin", "0 25px", 3, "ngClass", "click"], ["icon", "arrowhead-right-outline", 2, "margin", "0 25px", 3, "ngClass", "click"], [4, "ngIf"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader"], ["nbTreeGridCell", "", 2, "text-align", "left"], ["nbTreeGridHeaderCell", ""], ["nbTreeGridCell", ""], ["mat-icon-button", "", "color", "primary", 2, "font-size", "20px"], ["title", "Forward", 3, "routerLink"], [1, "ion-forward"], [3, "value"]],
      template: function FormsIncomingNumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card-body")(5, "table", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FormsIncomingNumberComponent_tr_6_Template, 1, 0, "tr", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FormsIncomingNumberComponent_tr_7_Template, 1, 0, "tr", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FormsIncomingNumberComponent_th_9_Template, 3, 3, "th", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FormsIncomingNumberComponent_td_10_Template, 2, 1, "td", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FormsIncomingNumberComponent_th_12_Template, 3, 3, "th", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FormsIncomingNumberComponent_td_13_Template, 2, 1, "td", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FormsIncomingNumberComponent_th_15_Template, 3, 3, "th", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FormsIncomingNumberComponent_td_16_Template, 5, 1, "td", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Items per page: \u00A0\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nb-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormsIncomingNumberComponent_Template_nb_select_ngModelChange_20_listener($event) {
            return ctx.pageSize = $event;
          })("ngModelChange", function FormsIncomingNumberComponent_Template_nb_select_ngModelChange_20_listener($event) {
            return ctx.paginate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, FormsIncomingNumberComponent_nb_option_21_Template, 2, 2, "nb-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "nb-icon", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsIncomingNumberComponent_Template_nb_icon_click_23_listener() {
            return ctx.startIndex > 0 ? ctx.paginate("previous") : null;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "nb-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsIncomingNumberComponent_Template_nb_icon_click_26_listener() {
            return ctx.startIndex + ctx.pageSize < (ctx.aNumbers == null ? null : ctx.aNumbers.length) ? ctx.paginate("next") : null;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, FormsIncomingNumberComponent_span_27_Template, 2, 3, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 12, "my_dids.did_title"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGrid", ctx.IncomingNumberDataSource)("nbSort", ctx.IncomingNumberDataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items_page);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.startIndex === 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Page ", ctx.currentPage, " of ", ctx.total_pages, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx.startIndex + ctx.pageSize >= (ctx.aNumbers == null ? null : ctx.aNumbers.length)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.aNumbers == null ? null : ctx.aNumbers.length) > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridRowDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridRowComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridCellDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridCellDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridHeaderRowDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridHeaderRowComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridHeaderCellDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridHeaderCellDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbTreeGridColumnDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSortDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSortHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
      styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%]   .mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-left: 32px;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: rgb(10, 238, 10);\n}\n\n.cc[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.disabled-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaW5jb21pbmdfbnVtYmVyL2luY29taW5nX251bWJlci1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0FBRUY7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwgLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gfVxuXG4uZXhhbXBsZS1idXR0b24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogcmdiKDEwLCAyMzgsIDEwKTtcbiAgLy8gY29sb3I6IGRhcmtibHVlO1xufVxuXG4uY2Mge1xuICB3aWR0aDogNDAlO1xufVxuLmRpc2FibGVkLWljb24ge1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 42129:
/*!*************************************************************************!*\
  !*** ./src/app/pages/incoming_number/incoming_number-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomingNumberRoutingModule": () => (/* binding */ IncomingNumberRoutingModule),
/* harmony export */   "routedComponents": () => (/* binding */ routedComponents)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _incoming_number_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incoming_number.component */ 95447);
/* harmony import */ var _incoming_number_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incoming_number-component */ 80949);
/* harmony import */ var _forward_incoming_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forward-incoming_number-component */ 8345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: '',
  component: _incoming_number_component__WEBPACK_IMPORTED_MODULE_0__.IncomingNumberComponent,
  children: [{
    path: 'incoming_number',
    component: _incoming_number_component__WEBPACK_IMPORTED_MODULE_1__.FormsIncomingNumberComponent
  }, {
    path: 'incoming_number/:id/forward',
    component: _forward_incoming_number_component__WEBPACK_IMPORTED_MODULE_2__.ForwardIncomingNumberComponent
  }]
}];
class IncomingNumberRoutingModule {
  static {
    this.ɵfac = function IncomingNumberRoutingModule_Factory(t) {
      return new (t || IncomingNumberRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: IncomingNumberRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](IncomingNumberRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();
const routedComponents = [_incoming_number_component__WEBPACK_IMPORTED_MODULE_0__.IncomingNumberComponent, _incoming_number_component__WEBPACK_IMPORTED_MODULE_1__.FormsIncomingNumberComponent, _forward_incoming_number_component__WEBPACK_IMPORTED_MODULE_2__.ForwardIncomingNumberComponent];

/***/ }),

/***/ 95447:
/*!********************************************************************!*\
  !*** ./src/app/pages/incoming_number/incoming_number.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomingNumberComponent": () => (/* binding */ IncomingNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class IncomingNumberComponent {
  static {
    this.ɵfac = function IncomingNumberComponent_Factory(t) {
      return new (t || IncomingNumberComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IncomingNumberComponent,
      selectors: [["ngx-form-elements"]],
      decls: 1,
      vars: 0,
      template: function IncomingNumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4230:
/*!*****************************************************************!*\
  !*** ./src/app/pages/incoming_number/incoming_number.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomingNumberModule": () => (/* binding */ IncomingNumberModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _incoming_number_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incoming_number-routing.module */ 42129);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ 59673);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _incoming_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incoming_number.component */ 95447);
/* harmony import */ var _incoming_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incoming_number-component */ 80949);
/* harmony import */ var _forward_incoming_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forward-incoming_number-component */ 8345);
















class IncomingNumberModule {
  static {
    this.ɵfac = function IncomingNumberModule_Factory(t) {
      return new (t || IncomingNumberModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: IncomingNumberModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _incoming_number_routing_module__WEBPACK_IMPORTED_MODULE_1__.IncomingNumberRoutingModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__.CdkTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbOptionModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbIconModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](IncomingNumberModule, {
    declarations: [_incoming_number_component__WEBPACK_IMPORTED_MODULE_2__.IncomingNumberComponent, _incoming_number_component__WEBPACK_IMPORTED_MODULE_3__.FormsIncomingNumberComponent, _forward_incoming_number_component__WEBPACK_IMPORTED_MODULE_4__.ForwardIncomingNumberComponent],
    imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _incoming_number_routing_module__WEBPACK_IMPORTED_MODULE_1__.IncomingNumberRoutingModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__.CdkTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbOptionModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbIconModule]
  });
})();

/***/ }),

/***/ 85991:
/*!**********************************************************!*\
  !*** ./src/app/pages/incoming_number/incoming_number.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomingNumber": () => (/* binding */ IncomingNumber)
/* harmony export */ });
class IncomingNumber {
  constructor() {
    this.phone = 0;
    this.username = '';
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_incoming_number_incoming_number_module_ts.js.map