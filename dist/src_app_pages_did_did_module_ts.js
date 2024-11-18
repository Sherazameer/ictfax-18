"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_did_did_module_ts"],{

/***/ 59758:
/*!***************************************************!*\
  !*** ./src/app/pages/did/assign-did-component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignDIDComponent": () => (/* binding */ AssignDIDComponent)
/* harmony export */ });
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ 84640);
/* harmony import */ var _did__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./did */ 46006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _did_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./did.service */ 45557);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ 47152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);









function AssignDIDComponent_nb_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", user_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", user_r1.username, " ");
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class AssignDIDComponent {
  constructor(route, did_service, router, user_service) {
    this.route = route;
    this.did_service = did_service;
    this.router = router;
    this.user_service = user_service;
    this.did = new _did__WEBPACK_IMPORTED_MODULE_1__.DID();
    this.form1 = {};
    this.id = null;
    this.user = [];
  }
  ngOnInit() {
    this.getUserList();
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      const test_url = this.router.url.split('/');
      const lastsegment = test_url[test_url.length - 1];
      if (lastsegment === 'new') {
        return null;
      } else {
        return this.did_service.get_DIDData(this.id).then(data => {
          this.did = data;
        });
      }
    });
  }
  getUserList() {
    this.user_service.get_UserList().then(data => {
      this.user = data;
    });
  }
  forwardDID() {
    this.did_service.unassign_DID(this.did).then(response => {
      this.did_service.assign_DID(this.did).then(data => {
        this.router.navigate(['../../../did'], {
          relativeTo: this.route
        });
      });
    });
  }
  get selectedUsr() {
    return this.selectedUser;
  }
  set selectedUsr(value) {
    this.selectedUser = value;
    this.did.user_id = this.selectedUser.user_id;
  }
  handleError(error) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  static {
    this.ɵfac = function AssignDIDComponent_Factory(t) {
      return new (t || AssignDIDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_did_service__WEBPACK_IMPORTED_MODULE_2__.DIDService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_user_user_service__WEBPACK_IMPORTED_MODULE_3__.AUserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AssignDIDComponent,
      selectors: [["ngx-assign-did-component"]],
      decls: 24,
      vars: 5,
      consts: [[1, "col-lg-12"], ["for", "phone"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "DID Number", "disabled", "", "id", "phone", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "user", 1, "dddd", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "ngValue"]],
      template: function AssignDIDComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Assign DID");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0)(4, "nb-card")(5, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " DID Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "nb-card-body")(8, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "DID Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AssignDIDComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.did.phone = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nb-card")(13, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " User Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nb-card-body")(16, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Assign to User");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "nb-select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AssignDIDComponent_Template_nb_select_ngModelChange_19_listener($event) {
            return ctx.selectedUsr = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AssignDIDComponent_nb_option_20_Template, 2, 2, "nb-option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AssignDIDComponent_Template_button_click_22_listener() {
            return ctx.forwardDID();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.did.phone)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedUsr);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.user);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectComponent],
      styles: [".dddd[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGlkL2Fzc2lnbi1kaWQtY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZGRkZCB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 61766:
/*!**************************************************!*\
  !*** ./src/app/pages/did/batch-did-component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BatchDIDComponent": () => (/* binding */ BatchDIDComponent)
/* harmony export */ });
/* harmony import */ var _did__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./did */ 46006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _did_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./did.service */ 45557);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);







const _c0 = function () {
  return {
    standalone: true
  };
};
class BatchDIDComponent {
  constructor(did_service, router, route) {
    this.did_service = did_service;
    this.router = router;
    this.route = route;
    this.did = new _did__WEBPACK_IMPORTED_MODULE_0__.DID();
    this.did.active = 1;
  }
  addDID() {
    for (let i = this.did.range_from; i <= this.did.range_to; i++) {
      this.did.phone = i;
      this.did.username = this.did.phone;
      this.did.first_name = this.did.title + ' ' + i;
      this.did_service.add_DID(this.did).then(response => {});
      if (i == this.did.range_to) {
        this.router.navigate(['../../did'], {
          relativeTo: this.route
        });
      }
    }
  }
  static {
    this.ɵfac = function BatchDIDComponent_Factory(t) {
      return new (t || BatchDIDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_did_service__WEBPACK_IMPORTED_MODULE_1__.DIDService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BatchDIDComponent,
      selectors: [["ngx-batch-did-component"]],
      decls: 43,
      vars: 37,
      consts: [[1, "col-lg-12"], ["id", "form"], ["f1", "ngForm"], [1, "row"], [1, "col-sm-9"], [1, "form-group"], ["for", "range_from"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "range_from", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["range_from", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [3, "hidden"], ["for", "did_number"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "range_to", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["range_to", "ngModel"], ["for", "title"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
      template: function BatchDIDComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0)(4, "form", 1, 2)(6, "nb-card")(7, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nb-card-body")(11, "div", 3)(12, "div", 4)(13, "div", 5)(14, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 7, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BatchDIDComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.did.range_from = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9)(20, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4)(24, "div", 5)(25, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 12, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BatchDIDComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.did.range_to = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 9)(31, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 4)(35, "div", 5)(36, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BatchDIDComponent_Template_input_ngModelChange_39_listener($event) {
            return ctx.did.title = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BatchDIDComponent_Template_button_click_40_listener() {
            return ctx.addDID();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 18, "dids.dids_title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 20, "my_dids.did_info"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 22, "dids.range_from"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.did.range_from)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](34, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !_r1.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 24, "dids.range_from_req"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 26, "dids.range_to"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.did.range_to)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](35, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !_r2.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 28, "dids.range_to_req"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 30, "my_dids.title"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.did.title)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](36, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 32, "button.submit"));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 39391:
/*!********************************************!*\
  !*** ./src/app/pages/did/did-component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsDIDComponent": () => (/* binding */ FormsDIDComponent)
/* harmony export */ });
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal.component */ 57844);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _did_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./did.service */ 45557);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
// import { DIDDatabase } from './did-database.component';
// import { DIDDataSource } from './did-datasource.component';












const _c0 = ["filter"];
function FormsDIDComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 19);
  }
}
function FormsDIDComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 20);
  }
}
function FormsDIDComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "dids.number"));
  }
}
function FormsDIDComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r11.data.phone);
  }
}
function FormsDIDComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "my_dids.title"));
  }
}
function FormsDIDComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r12.data.first_name);
  }
}
function FormsDIDComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "general.operations"));
  }
}
function FormsDIDComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22)(1, "button", 24)(2, "mat-icon")(3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 24)(6, "mat-icon")(7, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 24)(10, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsDIDComponent_td_26_Template_mat_icon_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const did_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.showStaticModal(ctx_r14.deleteTemplate, did_r13.data.account_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const did_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/did/did/", did_r13.data.account_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/did/did/", did_r13.data.account_id, "/assign");
  }
}
function FormsDIDComponent_nb_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r16);
  }
}
function FormsDIDComponent_span_37_Template(rf, ctx) {
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
const _c1 = function () {
  return ["/pages/did/did/new"];
};
const _c2 = function () {
  return ["/pages/did/did/batch"];
};
const _c3 = function (a0) {
  return {
    "disabled-icon": a0
  };
};
class FormsDIDComponent {
  constructor(did_service, dataSourceBuilder, modalService) {
    this.did_service = did_service;
    this.dataSourceBuilder = dataSourceBuilder;
    this.modalService = modalService;
    this.items_page = [5, 10, 25, 100];
    this.pageSize = 10;
    this.startIndex = 0;
    this.current_items = [];
    this.displayedColumns = ['phone', 'first_name', 'Operations'];
  }
  ngOnInit() {
    this.getDIDlist();
  }
  getDIDlist() {
    this.did_service.get_DIDList().then(data => {
      this.aDID = data.sort((a, b) => b.account_id - a.account_id);
      this.length = data.length;
      this.paginate(this.pageSize);
      this.DIDDataSource = this.dataSourceBuilder.create(this.current_items.map(item => ({
        data: item
      })));
    });
  }
  paginate(page_Items) {
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
    this.current_items = this.aDID.slice(this.startIndex, end);
    this.DIDDataSource = this.dataSourceBuilder.create(this.current_items.map(item => ({
      data: item
    })));
  }
  deleteDID(account_id) {
    this.did_service.delete_DID(account_id).then(response => {}).catch(this.handleError);
    this.getDIDlist();
  }
  // Modal related
  showStaticModal(name, account_id) {
    const activeModal = this.modalService.open(_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, {
      size: 'sm',
      container: 'nb-layout'
    });
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = `Are you sure you want to delete ${name}?`;
    activeModal.result.then(result => {
      this.closeResult = result;
      if (this.closeResult === 'yes_click') {
        this.deleteDID(account_id);
      }
    }, reason => {
      this.closeResult = this.getDismissReason(reason);
    });
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  handleError(error) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  static {
    this.ɵfac = function FormsDIDComponent_Factory(t) {
      return new (t || FormsDIDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_did_service__WEBPACK_IMPORTED_MODULE_1__.DIDService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridDataSourceBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FormsDIDComponent,
      selectors: [["ngx-did-component"]],
      viewQuery: function FormsDIDComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      decls: 38,
      vars: 28,
      consts: [["type", "button", "mat-raised-button", "", "color", "primary", 2, "font-size", "15px", 3, "routerLink"], [1, "fa", "fa-plus"], ["nbTreeGrid", "", 3, "nbTreeGrid", "nbSort"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], ["nbTreeGridColumnDef", "phone"], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridColumnDef", "first_name"], ["nbTreeGridColumnDef", "Operations"], ["nbTreeGridHeaderCell", "", 4, "nbTreeGridHeaderCellDef"], [2, "padding", "30px", "display", "flex", "justify-content", "flex-end"], [2, "text-align", "center", "padding-top", "10px"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding-top", "10px"], ["icon", "arrowhead-left-outline", 2, "margin", "0 25px", 3, "ngClass", "click"], ["icon", "arrowhead-right-outline", 2, "margin", "0 25px", 3, "ngClass", "click"], [4, "ngIf"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader"], ["nbTreeGridCell", ""], ["nbTreeGridHeaderCell", ""], ["mat-icon-button", "", "color", "primary", 2, "font-size", "20px"], ["title", "Edit", 3, "routerLink"], ["icon", "edit-2-outline"], ["title", "Assign", 3, "routerLink"], [1, "ion-forward"], [2, "color", "red", 3, "click"], ["icon", "trash-2-outline", "title", "Delete"], [3, "value"]],
      template: function FormsDIDComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card-body")(5, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br")(14, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "table", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FormsDIDComponent_tr_16_Template, 1, 0, "tr", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, FormsDIDComponent_tr_17_Template, 1, 0, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, FormsDIDComponent_th_19_Template, 3, 3, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, FormsDIDComponent_td_20_Template, 2, 1, "td", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, FormsDIDComponent_th_22_Template, 3, 3, "th", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, FormsDIDComponent_td_23_Template, 2, 1, "td", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, FormsDIDComponent_th_25_Template, 3, 3, "th", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, FormsDIDComponent_td_26_Template, 12, 2, "td", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11)(28, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Items per page: \u00A0\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "nb-select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormsDIDComponent_Template_nb_select_ngModelChange_30_listener($event) {
            return ctx.pageSize = $event;
          })("ngModelChange", function FormsDIDComponent_Template_nb_select_ngModelChange_30_listener($event) {
            return ctx.paginate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, FormsDIDComponent_nb_option_31_Template, 2, 2, "nb-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 15)(33, "nb-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsDIDComponent_Template_nb_icon_click_33_listener() {
            return ctx.startIndex > 0 ? ctx.paginate("previous") : null;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "nb-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsDIDComponent_Template_nb_icon_click_36_listener() {
            return ctx.startIndex + ctx.pageSize < (ctx.aDID == null ? null : ctx.aDID.length) ? ctx.paginate("next") : null;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, FormsDIDComponent_span_37_Template, 2, 3, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 16, "dids.list"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 18, "dids.add"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 20, "dids.add_in_batch"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGrid", ctx.DIDDataSource)("nbSort", ctx.DIDDataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items_page);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c3, ctx.startIndex === 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Page ", ctx.currentPage, " of ", ctx.total_pages, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c3, ctx.startIndex + ctx.pageSize >= (ctx.aDID == null ? null : ctx.aDID.length)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.aDID == null ? null : ctx.aDID.length) > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridRowDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridRowComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridCellDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridCellDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderRowDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderRowComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderCellDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderCellDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridColumnDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSortDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSortHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-height: 500px;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-left: 32px;\n}\n\n.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  overflow: hidden;\n  word-wrap: break-word;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: rgb(10, 238, 10);\n}\n\n.cc[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.disabled-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGlkL2RpZC1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7QUFBRjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgIFxufVxuICBcbi5leGFtcGxlLWhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuICBcbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLm1hdC1jZWxsLCAubWF0LWhlYWRlci1jZWxsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHJnYigxMCwgMjM4LCAxMCk7XG4gIC8vIGNvbG9yOiBkYXJrYmx1ZTtcbn1cblxuLmNjIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmRpc2FibGVkLWljb24ge1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 71542:
/*!*************************************************!*\
  !*** ./src/app/pages/did/did-form-component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDIDComponent": () => (/* binding */ AddDIDComponent)
/* harmony export */ });
/* harmony import */ var _did__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./did */ 46006);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ 84640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _did_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./did.service */ 45557);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 33935);










function AddDIDComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddDIDComponent_div_29_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.updateDID());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "button.update"));
  }
}
function AddDIDComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddDIDComponent_div_30_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.addDID());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "button.submit"));
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class AddDIDComponent {
  constructor(http, route, account_service, router) {
    this.http = http;
    this.route = route;
    this.account_service = account_service;
    this.router = router;
    // form1: any= {};
    this.did = new _did__WEBPACK_IMPORTED_MODULE_0__.DID();
    this.account_id = null;
  }
  ngOnInit() {
    this.did.active = 1;
    this.route.params.subscribe(params => {
      this.account_id = +params['id'];
      const test_url = this.router.url.split('/');
      const lastsegment = test_url[test_url.length - 1];
      if (lastsegment === 'new') {
        return null;
      } else {
        return this.account_service.get_DIDData(this.account_id).then(data => {
          this.did = data;
        });
      }
    });
  }
  addDID() {
    this.did.type = 'did';
    this.did.username = this.did.phone;
    this.account_service.add_DID(this.did).then(response => {
      this.router.navigate(['../../did'], {
        relativeTo: this.route
      });
    });
  }
  updateDID() {
    this.account_service.update_DID(this.did).then(() => {
      this.router.navigate(['../../did'], {
        relativeTo: this.route
      });
    }).catch(this.handleError);
  }
  handleError(error) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  static {
    this.ɵfac = function AddDIDComponent_Factory(t) {
      return new (t || AddDIDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_did_service__WEBPACK_IMPORTED_MODULE_2__.DIDService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AddDIDComponent,
      selectors: [["ngx-add-did-component"]],
      decls: 31,
      vars: 25,
      consts: [[1, "col-lg-12"], ["id", "form"], ["f1", "ngForm"], [1, "row"], [1, "col-sm-9"], [1, "form-group"], ["for", "phone"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "phone", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["phone", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [3, "hidden"], ["for", "first_name"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "first_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
      template: function AddDIDComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 0)(4, "form", 1, 2)(6, "nb-card")(7, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nb-card-body")(11, "div", 3)(12, "div", 4)(13, "div", 5)(14, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 7, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddDIDComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.did.phone = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9)(20, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 4)(24, "div", 5)(25, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddDIDComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.did.first_name = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddDIDComponent_div_29_Template, 4, 3, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddDIDComponent_div_30_Template, 4, 3, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 13, "dids.add"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 15, "dids.dids_info"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 17, "dids.dids_number"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.did.phone)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !_r1.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 19, "dids.did_req"), ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 21, "dids.title"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.did.first_name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.account_id > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.account_id);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbInputDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
      styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGlkL2RpZC1mb3JtLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 67824:
/*!*************************************************!*\
  !*** ./src/app/pages/did/did-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIDRoutingModule": () => (/* binding */ DIDRoutingModule),
/* harmony export */   "routedComponents": () => (/* binding */ routedComponents)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _did_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./did.component */ 20191);
/* harmony import */ var _did_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./did-component */ 39391);
/* harmony import */ var _did_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./did-form-component */ 71542);
/* harmony import */ var _batch_did_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batch-did-component */ 61766);
/* harmony import */ var _import_did_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import-did-component */ 23532);
/* harmony import */ var _assign_did_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assign-did-component */ 59758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









const routes = [{
  path: '',
  component: _did_component__WEBPACK_IMPORTED_MODULE_0__.DIDComponent,
  children: [{
    path: 'did',
    component: _did_component__WEBPACK_IMPORTED_MODULE_1__.FormsDIDComponent
  }, {
    path: 'did/new',
    component: _did_form_component__WEBPACK_IMPORTED_MODULE_2__.AddDIDComponent
  }, {
    path: 'did/batch',
    component: _batch_did_component__WEBPACK_IMPORTED_MODULE_3__.BatchDIDComponent
  }, {
    path: 'did/import',
    component: _import_did_component__WEBPACK_IMPORTED_MODULE_4__.ImportDIDComponent
  }, {
    path: 'did/:id',
    component: _did_form_component__WEBPACK_IMPORTED_MODULE_2__.AddDIDComponent
  }, {
    path: 'did/:id/assign',
    component: _assign_did_component__WEBPACK_IMPORTED_MODULE_5__.AssignDIDComponent
  }, {
    path: 'did/:id/delete',
    component: _did_form_component__WEBPACK_IMPORTED_MODULE_2__.AddDIDComponent
  }]
}];
class DIDRoutingModule {
  static {
    this.ɵfac = function DIDRoutingModule_Factory(t) {
      return new (t || DIDRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: DIDRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DIDRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();
const routedComponents = [_did_component__WEBPACK_IMPORTED_MODULE_0__.DIDComponent, _did_component__WEBPACK_IMPORTED_MODULE_1__.FormsDIDComponent, _did_form_component__WEBPACK_IMPORTED_MODULE_2__.AddDIDComponent, _batch_did_component__WEBPACK_IMPORTED_MODULE_3__.BatchDIDComponent, _import_did_component__WEBPACK_IMPORTED_MODULE_4__.ImportDIDComponent, _assign_did_component__WEBPACK_IMPORTED_MODULE_5__.AssignDIDComponent];

/***/ }),

/***/ 20191:
/*!********************************************!*\
  !*** ./src/app/pages/did/did.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIDComponent": () => (/* binding */ DIDComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class DIDComponent {
  static {
    this.ɵfac = function DIDComponent_Factory(t) {
      return new (t || DIDComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DIDComponent,
      selectors: [["ngx-form-elements"]],
      decls: 1,
      vars: 0,
      template: function DIDComponent_Template(rf, ctx) {
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

/***/ 14104:
/*!*****************************************!*\
  !*** ./src/app/pages/did/did.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIDModule": () => (/* binding */ DIDModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _did_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./did-routing.module */ 67824);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/table */ 59673);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload */ 58356);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _did_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./did.component */ 20191);
/* harmony import */ var _did_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./did-component */ 39391);
/* harmony import */ var _did_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./did-form-component */ 71542);
/* harmony import */ var _batch_did_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./batch-did-component */ 61766);
/* harmony import */ var _import_did_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import-did-component */ 23532);
/* harmony import */ var _assign_did_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assign-did-component */ 59758);





















class DIDModule {
  static {
    this.ɵfac = function DIDModule_Factory(t) {
      return new (t || DIDModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: DIDModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTableModule, _did_routing_module__WEBPACK_IMPORTED_MODULE_1__.DIDRoutingModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__.CdkTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__.FileUploadModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbOptionModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbIconModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](DIDModule, {
    declarations: [_did_component__WEBPACK_IMPORTED_MODULE_2__.DIDComponent, _did_component__WEBPACK_IMPORTED_MODULE_3__.FormsDIDComponent, _did_form_component__WEBPACK_IMPORTED_MODULE_4__.AddDIDComponent, _batch_did_component__WEBPACK_IMPORTED_MODULE_5__.BatchDIDComponent, _import_did_component__WEBPACK_IMPORTED_MODULE_6__.ImportDIDComponent, _assign_did_component__WEBPACK_IMPORTED_MODULE_7__.AssignDIDComponent],
    imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTableModule, _did_routing_module__WEBPACK_IMPORTED_MODULE_1__.DIDRoutingModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__.CdkTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__.FileUploadModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbOptionModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbIconModule]
  });
})();

/***/ }),

/***/ 23532:
/*!***************************************************!*\
  !*** ./src/app/pages/did/import-did-component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDIDComponent": () => (/* binding */ ImportDIDComponent)
/* harmony export */ });
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ 58356);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ 84640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _did_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./did.service */ 45557);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ 70900);
/* harmony import */ var _message_document_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message/document/document.service */ 97394);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 96953);










class ImportDIDComponent {
  constructor(http, route, did_service, router, app_service, document_service) {
    this.http = http;
    this.route = route;
    this.did_service = did_service;
    this.router = router;
    this.app_service = app_service;
    this.document_service = document_service;
    this.form1 = {};
    this.document_id = null;
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
    this.URL = `${this.app_service.apiUrlDocument}/${this.document_id}/media`;
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileUploader({
      url: this.URL,
      disableMultipart: true
    });
  }
  // URL = `${this.app_service.apiUrlDocument}/${this.document_id}/media`;
  // public uploader: FileUploader = new FileUploader({url: this.URL, disableMultipart: true });
  ngOnInit() {
    this.uploader.onBeforeUploadItem = item => {
      item.method = 'PUT';
      item.url = this.URL;
      item.withCredentials = false;
    };
    this.uploader.onAfterAddingFile = response => {
      this.file = response;
    };
    const authHeader = this.app_service.upload_Header;
    const uploadOptions = {
      headers: authHeader
    };
    this.uploader.setOptions(uploadOptions);
    this.uploader.onSuccessItem = (item, response, status, headers) => {};
  }
  addDocument() {
    this.document_service.add_Document(this.document).then(response => {
      const document_id = response;
      this.URL = `${this.app_service.apiUrlDocument}/${document_id}/media`;
      this.upload();
      this.router.navigate(['../../did'], {
        relativeTo: this.route
      });
    });
  }
  upload() {
    this.file.upload();
  }
  fileOverBase(e) {
    this.hasBaseDropZoneOver = e;
  }
  fileOverAnother(e) {
    this.hasAnotherDropZoneOver = e;
  }
  handleError(error) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  static {
    this.ɵfac = function ImportDIDComponent_Factory(t) {
      return new (t || ImportDIDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_did_service__WEBPACK_IMPORTED_MODULE_1__.DIDService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_message_document_document_service__WEBPACK_IMPORTED_MODULE_3__.DocumentService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ImportDIDComponent,
      selectors: [["ngx-import-did-component"]],
      decls: 20,
      vars: 1,
      consts: [[1, "col-lg-12"], [1, "container"], [1, "navbar", "navbar-default"], [1, "row"], [1, "col-md-3"], ["type", "file", "ng2FileSelect", "", 3, "uploader"], [2, "display", "inline"], ["href", ""], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
      template: function ImportDIDComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "DID Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 0)(4, "nb-card")(5, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Upload DID List ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nb-card-body")(8, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3)(11, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Example File:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Sample.csv");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ImportDIDComponent_Template_button_click_18_listener() {
            return ctx.addDocument();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("uploader", ctx.uploader);
        }
      },
      dependencies: [ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__.FileSelectDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_did_did_module_ts.js.map