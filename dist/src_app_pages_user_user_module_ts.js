"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_user_user_module_ts"],{

/***/ 80354:
/*!********************************************************!*\
  !*** ./src/app/pages/user/password.match.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EqualValidator": () => (/* binding */ EqualValidator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);



class EqualValidator {
  constructor(ngx_validateEqual) {
    this.ngx_validateEqual = ngx_validateEqual;
  }
  validate(c) {
    // self value (e.g. retype password)
    const v = c.value;
    // control value (e.g. password)
    const e = c.root.get(this.ngx_validateEqual);
    // value not equal
    if (e && v !== e.value) {
      return {
        ngx_validateEqual: false
      };
    }
    return null;
  }
  static {
    this.ɵfac = function EqualValidator_Factory(t) {
      return new (t || EqualValidator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('ngx_validateEqual'));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EqualValidator,
      selectors: [["", "ngx_validateEqual", "", "formControlName", ""], ["", "ngx_validateEqual", "", "formControl", ""], ["", "ngx_validateEqual", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => EqualValidator),
        multi: true
      }])]
    });
  }
}

/***/ }),

/***/ 90412:
/*!**********************************************!*\
  !*** ./src/app/pages/user/user-component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsUserComponent": () => (/* binding */ FormsUserComponent)
/* harmony export */ });
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal.component */ 57844);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 47152);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
// import { UserDatabase } from './user-database.component';
// import { UserDataSource } from './user-datasource.component';












const _c0 = ["filter"];
function FormsUserComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 23);
  }
}
function FormsUserComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 24);
  }
}
function FormsUserComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "general.ID"));
  }
}
function FormsUserComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](row_r17.data.user_id);
  }
}
function FormsUserComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "user.Username"));
  }
}
function FormsUserComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r18.data.username, "");
  }
}
function FormsUserComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User.fname"));
  }
}
function FormsUserComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", row_r19.data.first_name, " ", row_r19.data.last_name, "");
  }
}
function FormsUserComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "user.lname"));
  }
}
function FormsUserComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r20.data.last_name, " ");
  }
}
function FormsUserComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User.email"));
  }
}
function FormsUserComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r21.data.email, "");
  }
}
function FormsUserComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "general.operations"));
  }
}
function FormsUserComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 26)(1, "button", 28)(2, "mat-icon")(3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 28)(6, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsUserComponent_td_33_Template_mat_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const user_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.showStaticModal(user_r22.data.user_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/user/user/", user_r22.data.user_id, "");
  }
}
function FormsUserComponent_nb_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r25);
  }
}
function FormsUserComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" | Showing ", ctx_r15.startIndex, " - ", ctx_r15.minimumItems, " of ", ctx_r15.length, " items ");
  }
}
const _c1 = function () {
  return ["/pages/user/user/new"];
};
const _c2 = function (a0) {
  return {
    "disabled-icon": a0
  };
};
class FormsUserComponent {
  constructor(user_service, dataSourceBuilder, modalService) {
    this.user_service = user_service;
    this.dataSourceBuilder = dataSourceBuilder;
    this.modalService = modalService;
    this.items_page = [5, 10, 25, 100];
    this.pageSize = 10;
    this.startIndex = 0;
    this.current_items = [];
    this.displayedColumns = ['user_id', 'username', 'first_name', 'last_name', 'email', 'Operations'];
  }
  ngOnInit() {
    this.getUserlist();
  }
  getUserlist() {
    this.user_service.get_UserList().then(data => {
      this.aUser = data.sort((a, b) => b.user_id - a.user_id);
      this.length = data.length;
      this.paginate(this.pageSize);
      this.UserDataSource = this.dataSourceBuilder.create(this.current_items.map(item => ({
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
    this.current_items = this.aUser.slice(this.startIndex, end);
    this.UserDataSource = this.dataSourceBuilder.create(this.current_items.map(item => ({
      data: item
    })));
  }
  deleteUser(user_id) {
    this.user_service.delete_User(user_id).then(response => {}).catch(this.handleError);
    this.getUserlist();
  }
  // Modal related
  showStaticModal(user_id) {
    const activeModal = this.modalService.open(_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, {
      size: 'sm',
      container: 'nb-layout'
    });
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = `Are you sure you want to delete ${user_id}?`;
    activeModal.result.then(result => {
      this.closeResult = result;
      if (this.closeResult === 'yes_click') {
        this.deleteUser(user_id);
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
    this.ɵfac = function FormsUserComponent_Factory(t) {
      return new (t || FormsUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.AUserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridDataSourceBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FormsUserComponent,
      selectors: [["ngx-user-component"]],
      viewQuery: function FormsUserComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      decls: 45,
      vars: 27,
      consts: [["nbInput", "", "fullWidth", "", "id", "search", 1, "form-control", "cc", 2, "float", "right", 3, "placeholder", "nbFilterInput"], ["type", "button", "mat-raised-button", "", "color", "primary", 2, "font-size", "15px", 3, "routerLink"], [1, "fa", "fa-plus"], [3, "nbTreeGrid", "nbSort"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], ["nbTreeGridColumnDef", "user_id"], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridColumnDef", "username"], ["nbTreeGridColumnDef", "first_name"], ["nbTreeGridColumnDef", "last_name"], ["nbTreeGridColumnDef", "email"], ["nbTreeGridColumnDef", "Operations"], ["nbTreeGridHeaderCell", "", 4, "nbTreeGridHeaderCellDef"], [2, "padding", "30px", "display", "flex", "justify-content", "flex-end"], [2, "text-align", "center", "padding-top", "10px"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding-top", "10px"], ["icon", "arrowhead-left-outline", 2, "margin", "0 25px", 3, "ngClass", "click"], ["icon", "arrowhead-right-outline", 2, "margin", "0 25px", 3, "ngClass", "click"], [4, "ngIf"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader"], ["nbTreeGridCell", ""], ["nbTreeGridHeaderCell", ""], ["mat-icon-button", "", "color", "primary", 2, "font-size", "20px"], ["title", "Edit", 3, "routerLink"], ["icon", "edit-2-outline"], [2, "color", "red", 3, "click"], ["icon", "trash-2-outline", "title", "Delete"], [3, "value"]],
      template: function FormsUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-card-body")(7, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br")(12, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "table", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FormsUserComponent_tr_14_Template, 1, 0, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FormsUserComponent_tr_15_Template, 1, 0, "tr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, FormsUserComponent_th_17_Template, 3, 3, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FormsUserComponent_td_18_Template, 2, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, FormsUserComponent_th_20_Template, 3, 3, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, FormsUserComponent_td_21_Template, 2, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, FormsUserComponent_th_23_Template, 3, 3, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, FormsUserComponent_td_24_Template, 2, 2, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, FormsUserComponent_th_26_Template, 3, 3, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, FormsUserComponent_td_27_Template, 2, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, FormsUserComponent_th_29_Template, 3, 3, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, FormsUserComponent_td_30_Template, 2, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](31, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, FormsUserComponent_th_32_Template, 3, 3, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, FormsUserComponent_td_33_Template, 8, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 15)(35, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Items per page: \u00A0\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "nb-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormsUserComponent_Template_nb_select_ngModelChange_37_listener($event) {
            return ctx.pageSize = $event;
          })("ngModelChange", function FormsUserComponent_Template_nb_select_ngModelChange_37_listener($event) {
            return ctx.paginate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, FormsUserComponent_nb_option_38_Template, 2, 2, "nb-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 19)(40, "nb-icon", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsUserComponent_Template_nb_icon_click_40_listener() {
            return ctx.startIndex > 0 ? ctx.paginate("previous") : null;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "nb-icon", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsUserComponent_Template_nb_icon_click_43_listener() {
            return ctx.startIndex + ctx.pageSize < (ctx.aUser == null ? null : ctx.aUser.length) ? ctx.paginate("next") : null;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, FormsUserComponent_span_44_Template, 2, 3, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 16, "User.list"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 18, "User.filter"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbFilterInput", ctx.UserDataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 20, "User.add"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGrid", ctx.UserDataSource)("nbSort", ctx.UserDataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items_page);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c2, ctx.startIndex === 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Page ", ctx.currentPage, " of ", ctx.total_pages, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c2, ctx.startIndex + ctx.pageSize >= (ctx.aUser == null ? null : ctx.aUser.length)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.aUser == null ? null : ctx.aUser.length) > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridRowDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridRowComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridCellDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridCellDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderRowDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderRowComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderCellDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderCellDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridColumnDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSortDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSortHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbFilterInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbOptionComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-height: 500px;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-left: 32px;\n}\n\n.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  overflow: hidden;\n  word-wrap: break-word;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: rgb(10, 238, 10);\n}\n\n.fa-trash[_ngcontent-%COMP%]:hover {\n  color: rgb(138, 4, 4);\n}\n\n.mat-input-container[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-left: 32px;\n  margin-top: 8px;\n}\n\n.cc[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.disabled-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlci91c2VyLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4ubWF0LWNlbGwsXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHJnYigxMCwgMjM4LCAxMCk7XG59XG5cbi5mYS10cmFzaDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTM4LCA0LCA0KTtcbn1cblxuLm1hdC1pbnB1dC1jb250YWluZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmNjIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmRpc2FibGVkLWljb24ge1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 39925:
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-form-component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserComponent": () => (/* binding */ AddUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ 43842);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ 84640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 47152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _password_match_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password.match.directive */ 80354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);












function AddUserComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "user.invalid_email"), " ");
  }
}
function AddUserComponent_div_802_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "input", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AddUserComponent_div_802_Template_input_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const rol_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.onChange(rol_r9.role_id, $event.target.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rol_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", rol_r9.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rol_r9.name, "");
  }
}
function AddUserComponent_div_803_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "button", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddUserComponent_div_803_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.updateUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "buttons.update"));
  }
}
function AddUserComponent_div_804_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "button", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddUserComponent_div_804_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.addUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "buttons.submit"));
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class AddUserComponent {
  constructor(http, route, user_service, router) {
    this.http = http;
    this.route = route;
    this.user_service = user_service;
    this.router = router;
    // form1: any= {};
    this.user = new _user__WEBPACK_IMPORTED_MODULE_0__.User();
    this.user_id = null;
    this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
  }
  ngOnInit() {
    this.getAllRoles();
    this.route.params.subscribe(params => {
      this.user_id = +params['id'];
      const test_url = this.router.url.split('/');
      const lastsegment = test_url[test_url.length - 1];
      if (lastsegment === 'new') {
        return null;
      } else {
        return this.user_service.get_UserData(this.user_id).then(data => {
          this.user = data;
          this.getUserRoles(this.user.user_id);
        });
      }
    });
  }
  getAllRoles() {
    this.user_service.get_RoleList().then(response => {
      this.role = response;
      this.role.forEach(element => {
        element.state = null;
      });
    });
  }
  getUserRoles(user_id) {
    this.user_service.getUserRoles(user_id).then(response => {
      if (response.length != 0) {
        response.forEach(element => {
          this.role.forEach(roles => {
            if (element.role_id == roles.role_id) {
              roles.state = true;
            }
          });
        });
      }
    });
  }
  addUser() {
    this.user_service.add_User(this.user).then(response => {
      this.setRoles(response);
      this.router.navigate(['../../user'], {
        relativeTo: this.route
      });
    });
  }
  updateUser() {
    this.user_service.update_User(this.user).then(() => {
      this.setRoles(this.user.user_id);
      this.router.navigate(['../../user'], {
        relativeTo: this.route
      });
    });
  }
  addRoles(user_id, role_id) {
    this.user_service.setRole(user_id, role_id).then(response => {});
  }
  setRoles(user_id) {
    this.role.forEach(element => {
      if (element.state == true) {
        this.addRoles(user_id, element.role_id);
      } else if (element.state == null || element.state == false) {
        this.deleteRoles(user_id, element.role_id);
      }
    });
  }
  deleteRoles(user_id, role_id) {
    this.user_service.deleteRoles(user_id, role_id).then(response => {});
  }
  onChange(role_id, is_checked) {
    this.role.forEach(element => {
      if (role_id == element.role_id) {
        element.state = is_checked;
      }
    });
  }
  handleError(error) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  static {
    this.ɵfac = function AddUserComponent_Factory(t) {
      return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__.AUserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AddUserComponent,
      selectors: [["ngx-add-user-component"]],
      decls: 805,
      vars: 123,
      consts: [[1, "col-lg-12"], ["id", "form"], ["f1", "ngForm"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "username"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "password"], ["type", "password", "nbInput", "", "fullWidth", "", "id", "password", "required", "", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "name"], ["type", "password", "nbInput", "", "fullWidth", "", "id", "confirmPassword", "required", "", "ngx_validateEqual", "password", "name", "confirmPassword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["for", "first_name"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "first_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "last_name"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "last_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "phone"], ["type", "phone", "id", "phone", "nbInput", "", "fullWidth", "", "pattern", "[0-9]*", "minlength", "11", "maxlength", "16", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["phone", "ngModel"], [3, "hidden"], ["for", "email"], ["type", "email", "id", "email", "nbInput", "", "fullWidth", "", "email", "", "pattern", "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["for", "address"], ["nbInput", "", "fullWidth", "", "id", "address", "rows", "10", "cols", "30", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "country_id"], ["name", "country_id", 1, "dddd", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "4"], ["value", "248"], ["value", "8"], ["value", "12"], ["value", "16"], ["value", "20"], ["value", "24"], ["value", "660"], ["value", "10"], ["value", "28"], ["value", "32"], ["value", "51"], ["value", "533"], ["value", "36"], ["value", "40"], ["value", "31"], ["value", "44"], ["value", "48"], ["value", "50"], ["value", "52"], ["value", "112"], ["value", "56"], ["value", "84"], ["value", "204"], ["value", "60"], ["value", "64"], ["value", "68"], ["value", "535"], ["value", "70"], ["value", "72"], ["value", "74"], ["value", "76"], ["value", "86"], ["value", "96"], ["value", "100"], ["value", "854"], ["value", "108"], ["value", "116"], ["value", "120"], ["value", "124"], ["value", "132"], ["value", "136"], ["value", "140"], ["value", "148"], ["value", "152"], ["value", "156"], ["value", "162"], ["value", "166"], ["value", "170"], ["value", "174"], ["value", "178"], ["value", "180"], ["value", "184"], ["value", "188"], ["value", "384"], ["value", "191"], ["value", "192"], ["value", "531"], ["value", "196"], ["value", "203"], ["value", "208"], ["value", "262"], ["value", "212"], ["value", "214"], ["value", "218"], ["value", "818"], ["value", "222"], ["value", "226"], ["value", "232"], ["value", "233"], ["value", "231"], ["value", "238"], ["value", "234"], ["value", "242"], ["value", "246"], ["value", "250"], ["value", "254"], ["value", "258"], ["value", "260"], ["value", "266"], ["value", "270"], ["value", "268"], ["value", "276"], ["value", "288"], ["value", "292"], ["value", "300"], ["value", "304"], ["value", "308"], ["value", "312"], ["value", "316"], ["value", "320"], ["value", "831"], ["value", "324"], ["value", "624"], ["value", "328"], ["value", "332"], ["value", "334"], ["value", "336"], ["value", "340"], ["value", "344"], ["value", "348"], ["value", "352"], ["value", "356"], ["value", "360"], ["value", "364"], ["value", "368"], ["value", "372"], ["value", "833"], ["value", "376"], ["value", "380"], ["value", "388"], ["value", "392"], ["value", "832"], ["value", "400"], ["value", "398"], ["value", "404"], ["value", "296"], ["value", "408"], ["value", "410"], ["value", "414"], ["value", "417"], ["value", "418"], ["value", "428"], ["value", "422"], ["value", "426"], ["value", "430"], ["value", "434"], ["value", "438"], ["value", "440"], ["value", "442"], ["value", "446"], ["value", "807"], ["value", "450"], ["value", "454"], ["value", "458"], ["value", "462"], ["value", "466"], ["value", "470"], ["value", "584"], ["value", "474"], ["value", "478"], ["value", "480"], ["value", "175"], ["value", "484"], ["value", "583"], ["value", "498"], ["value", "492"], ["value", "496"], ["value", "499"], ["value", "500"], ["value", "504"], ["value", "508"], ["value", "104"], ["value", "516"], ["value", "520"], ["value", "524"], ["value", "528"], ["value", "540"], ["value", "554"], ["value", "558"], ["value", "562"], ["value", "566"], ["value", "570"], ["value", "574"], ["value", "580"], ["value", "578"], ["value", "512"], ["value", "586"], ["value", "585"], ["value", "275"], ["value", "591"], ["value", "598"], ["value", "600"], ["value", "604"], ["value", "608"], ["value", "612"], ["value", "616"], ["value", "620"], ["value", "630"], ["value", "634"], ["value", "638"], ["value", "642"], ["value", "643"], ["value", "646"], ["value", "652"], ["value", "654"], ["value", "659"], ["value", "662"], ["value", "663"], ["value", "666"], ["value", "670"], ["value", "882"], ["value", "674"], ["value", "678"], ["value", "682"], ["value", "686"], ["value", "688"], ["value", "690"], ["value", "694"], ["value", "702"], ["value", "534"], ["value", "703"], ["value", "705"], ["value", "90"], ["value", "706"], ["value", "710"], ["value", "239"], ["value", "728"], ["value", "724"], ["value", "144"], ["value", "729"], ["value", "740"], ["value", "744"], ["value", "748"], ["value", "752"], ["value", "756"], ["value", "760"], ["value", "158"], ["value", "762"], ["value", "834"], ["value", "764"], ["value", "626"], ["value", "768"], ["value", "772"], ["value", "776"], ["value", "780"], ["value", "788"], ["value", "792"], ["value", "795"], ["value", "796"], ["value", "798"], ["value", "800"], ["value", "804"], ["value", "784"], ["value", "826"], ["value", "840"], ["value", "581"], ["value", "858"], ["value", "860"], ["value", "548"], ["value", "862"], ["value", "704"], ["value", "92"], ["value", "850"], ["value", "876"], ["value", "732"], ["value", "887"], ["value", "894"], ["value", "716"], ["for", "timezone_id"], ["name", "timezone_id", 1, "dddd", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["timezone_id", "1", "gmtAdjustment", "GMT-12:00", "useDaylightTime", "0", "value", "-12"], ["timezone_id", "2", "gmtAdjustment", "GMT-11:00", "useDaylightTime", "0", "value", "-11"], ["timezone_id", "3", "gmtAdjustment", "GMT-10:00", "useDaylightTime", "0", "value", "-10"], ["timezone_id", "4", "gmtAdjustment", "GMT-09:00", "useDaylightTime", "1", "value", "-9"], ["timezone_id", "5", "gmtAdjustment", "GMT-08:00", "useDaylightTime", "1", "value", "-8"], ["timezone_id", "6", "gmtAdjustment", "GMT-08:00", "useDaylightTime", "1", "value", "-8"], ["timezone_id", "7", "gmtAdjustment", "GMT-07:00", "useDaylightTime", "0", "value", "-7"], ["timezone_id", "8", "gmtAdjustment", "GMT-07:00", "useDaylightTime", "1", "value", "-7"], ["timezone_id", "9", "gmtAdjustment", "GMT-07:00", "useDaylightTime", "1", "value", "-7"], ["timezone_id", "10", "gmtAdjustment", "GMT-06:00", "useDaylightTime", "0", "value", "-6"], ["timezone_id", "11", "gmtAdjustment", "GMT-06:00", "useDaylightTime", "1", "value", "-6"], ["timezone_id", "12", "gmtAdjustment", "GMT-06:00", "useDaylightTime", "1", "value", "-6"], ["timezone_id", "13", "gmtAdjustment", "GMT-06:00", "useDaylightTime", "0", "value", "-6"], ["timezone_id", "14", "gmtAdjustment", "GMT-05:00", "useDaylightTime", "0", "value", "-5"], ["timezone_id", "15", "gmtAdjustment", "GMT-05:00", "useDaylightTime", "1", "value", "-5"], ["timezone_id", "16", "gmtAdjustment", "GMT-05:00", "useDaylightTime", "1", "value", "-5"], ["timezone_id", "17", "gmtAdjustment", "GMT-04:00", "useDaylightTime", "1", "value", "-4"], ["timezone_id", "18", "gmtAdjustment", "GMT-04:00", "useDaylightTime", "0", "value", "-4"], ["timezone_id", "19", "gmtAdjustment", "GMT-04:00", "useDaylightTime", "0", "value", "-4"], ["timezone_id", "20", "gmtAdjustment", "GMT-04:00", "useDaylightTime", "1", "value", "-4"], ["timezone_id", "21", "gmtAdjustment", "GMT-03:30", "useDaylightTime", "1", "value", "-3.5"], ["timezone_id", "22", "gmtAdjustment", "GMT-03:00", "useDaylightTime", "1", "value", "-3"], ["timezone_id", "23", "gmtAdjustment", "GMT-03:00", "useDaylightTime", "0", "value", "-3"], ["timezone_id", "24", "gmtAdjustment", "GMT-03:00", "useDaylightTime", "1", "value", "-3"], ["timezone_id", "25", "gmtAdjustment", "GMT-03:00", "useDaylightTime", "1", "value", "-3"], ["timezone_id", "26", "gmtAdjustment", "GMT-02:00", "useDaylightTime", "1", "value", "-2"], ["timezone_id", "27", "gmtAdjustment", "GMT-01:00", "useDaylightTime", "0", "value", "-1"], ["timezone_id", "28", "gmtAdjustment", "GMT-01:00", "useDaylightTime", "1", "value", "-1"], ["timezone_id", "29", "gmtAdjustment", "GMT+00:00", "useDaylightTime", "0", "value", "0"], ["timezone_id", "30", "gmtAdjustment", "GMT+00:00", "useDaylightTime", "1", "value", "0"], ["timezone_id", "31", "gmtAdjustment", "GMT+01:00", "useDaylightTime", "1", "value", "1"], ["timezone_id", "32", "gmtAdjustment", "GMT+01:00", "useDaylightTime", "1", "value", "1"], ["timezone_id", "33", "gmtAdjustment", "GMT+01:00", "useDaylightTime", "1", "value", "1"], ["timezone_id", "34", "gmtAdjustment", "GMT+01:00", "useDaylightTime", "1", "value", "1"], ["timezone_id", "35", "gmtAdjustment", "GMT+01:00", "useDaylightTime", "1", "value", "1"], ["timezone_id", "36", "gmtAdjustment", "GMT+02:00", "useDaylightTime", "1", "value", "2"], ["timezone_id", "37", "gmtAdjustment", "GMT+02:00", "useDaylightTime", "1", "value", "2"], ["timezone_id", "38", "gmtAdjustment", "GMT+02:00", "useDaylightTime", "1", "value", "2"], ["timezone_id", "39", "gmtAdjustment", "GMT+02:00", "useDaylightTime", "1", "value", "2"], ["timezone_id", "40", "gmtAdjustment", "GMT+02:00", "useDaylightTime", "0", "value", "2"], ["timezone_id", "41", "gmtAdjustment", "GMT+02:00", "useDaylightTime", "1", "value", "2"], ["timezone_id", "42", "gmtAdjustment", "GMT+02:00", "useDaylightTime", "1", "value", "2"], ["timezone_id", "43", "gmtAdjustment", "GMT+02:00", "useDaylightTime", "1", "value", "2"], ["timezone_id", "44", "gmtAdjustment", "GMT+02:00", "useDaylightTime", "1", "value", "2"], ["timezone_id", "45", "gmtAdjustment", "GMT+03:00", "useDaylightTime", "0", "value", "3"], ["timezone_id", "46", "gmtAdjustment", "GMT+03:00", "useDaylightTime", "1", "value", "3"], ["timezone_id", "47", "gmtAdjustment", "GMT+03:00", "useDaylightTime", "0", "value", "3"], ["timezone_id", "48", "gmtAdjustment", "GMT+03:00", "useDaylightTime", "0", "value", "3"], ["timezone_id", "49", "gmtAdjustment", "GMT+03:30", "useDaylightTime", "1", "value", "3.5"], ["timezone_id", "50", "gmtAdjustment", "GMT+04:00", "useDaylightTime", "0", "value", "4"], ["timezone_id", "51", "gmtAdjustment", "GMT+04:00", "useDaylightTime", "1", "value", "4"], ["timezone_id", "52", "gmtAdjustment", "GMT+04:00", "useDaylightTime", "1", "value", "4"], ["timezone_id", "53", "gmtAdjustment", "GMT+04:30", "useDaylightTime", "0", "value", "4.5"], ["timezone_id", "54", "gmtAdjustment", "GMT+05:00", "useDaylightTime", "1", "value", "5"], ["timezone_id", "55", "gmtAdjustment", "GMT+05:00", "useDaylightTime", "0", "value", "5"], ["timezone_id", "56", "gmtAdjustment", "GMT+05:30", "useDaylightTime", "0", "value", "5.5"], ["timezone_id", "57", "gmtAdjustment", "GMT+05:30", "useDaylightTime", "0", "value", "5.5"], ["timezone_id", "58", "gmtAdjustment", "GMT+05:45", "useDaylightTime", "0", "value", "5.75"], ["timezone_id", "59", "gmtAdjustment", "GMT+06:00", "useDaylightTime", "1", "value", "6"], ["timezone_id", "60", "gmtAdjustment", "GMT+06:00", "useDaylightTime", "0", "value", "6"], ["timezone_id", "61", "gmtAdjustment", "GMT+06:30", "useDaylightTime", "0", "value", "6.5"], ["timezone_id", "62", "gmtAdjustment", "GMT+07:00", "useDaylightTime", "0", "value", "7"], ["timezone_id", "63", "gmtAdjustment", "GMT+07:00", "useDaylightTime", "1", "value", "7"], ["timezone_id", "64", "gmtAdjustment", "GMT+08:00", "useDaylightTime", "0", "value", "8"], ["timezone_id", "65", "gmtAdjustment", "GMT+08:00", "useDaylightTime", "0", "value", "8"], ["timezone_id", "66", "gmtAdjustment", "GMT+08:00", "useDaylightTime", "0", "value", "8"], ["timezone_id", "67", "gmtAdjustment", "GMT+08:00", "useDaylightTime", "0", "value", "8"], ["timezone_id", "68", "gmtAdjustment", "GMT+08:00", "useDaylightTime", "0", "value", "8"], ["timezone_id", "69", "gmtAdjustment", "GMT+09:00", "useDaylightTime", "0", "value", "9"], ["timezone_id", "70", "gmtAdjustment", "GMT+09:00", "useDaylightTime", "0", "value", "9"], ["timezone_id", "71", "gmtAdjustment", "GMT+09:00", "useDaylightTime", "1", "value", "9"], ["timezone_id", "72", "gmtAdjustment", "GMT+09:30", "useDaylightTime", "0", "value", "9.5"], ["timezone_id", "73", "gmtAdjustment", "GMT+09:30", "useDaylightTime", "0", "value", "9.5"], ["timezone_id", "74", "gmtAdjustment", "GMT+10:00", "useDaylightTime", "0", "value", "10"], ["timezone_id", "75", "gmtAdjustment", "GMT+10:00", "useDaylightTime", "1", "value", "10"], ["timezone_id", "76", "gmtAdjustment", "GMT+10:00", "useDaylightTime", "1", "value", "10"], ["timezone_id", "77", "gmtAdjustment", "GMT+10:00", "useDaylightTime", "0", "value", "10"], ["timezone_id", "78", "gmtAdjustment", "GMT+10:00", "useDaylightTime", "1", "value", "10"], ["timezone_id", "79", "gmtAdjustment", "GMT+11:00", "useDaylightTime", "1", "value", "11"], ["timezone_id", "80", "gmtAdjustment", "GMT+12:00", "useDaylightTime", "1", "value", "12"], ["timezone_id", "81", "gmtAdjustment", "GMT+12:00", "useDaylightTime", "0", "value", "12"], ["timezone_id", "82", "gmtAdjustment", "GMT+13:00", "useDaylightTime", "0", "value", "13"], ["for", "active"], ["type", "radio", "name", "active", "value", "0", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "radio", "name", "active", "value", "1", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "company"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "company", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "checked", "change"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
      template: function AddUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0)(4, "form", 1, 2)(6, "nb-card")(7, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nb-card-body")(11, "div", 3)(12, "div", 4)(13, "div", 5)(14, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.user.username = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nb-card")(19, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "nb-card-body")(23, "div", 4)(24, "div", 5)(25, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "input", 9, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.user.password = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 5)(34, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "input", 13, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.user.confirmPassword = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "nb-card")(43, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "nb-card-body")(47, "div", 3)(48, "div", 4)(49, "div", 5)(50, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_53_listener($event) {
            return ctx.user.first_name = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 4)(55, "div", 5)(56, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_59_listener($event) {
            return ctx.user.last_name = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "nb-card")(61, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](63, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "nb-card-body")(65, "div", 4)(66, "div", 5)(67, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](69, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "input", 20, 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_70_listener($event) {
            return ctx.user.phone = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 11)(73, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](75, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](78, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 4)(80, "div", 5)(81, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](83, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "input", 24, 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_84_listener($event) {
            return ctx.user.email = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, AddUserComponent_div_87_Template, 3, 3, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 4)(89, "div", 5)(90, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](92, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "textarea", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_textarea_ngModelChange_93_listener($event) {
            return ctx.user.address = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "nb-card")(95, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](97, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "nb-card-body")(99, "div", 3)(100, "div", 4)(101, "div", 5)(102, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](104, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "nb-select", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_nb_select_ngModelChange_105_listener($event) {
            return ctx.user.country_id = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "nb-option", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Afghanistan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "nb-option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "\u00C5land Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "nb-option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Albania");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "nb-option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Algeria");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "nb-option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "American Samoa");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "nb-option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "Andorra");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "nb-option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Angola");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "nb-option", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "Anguilla");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "nb-option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "Antarctica");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "nb-option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Antigua and Barbuda");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "nb-option", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "Argentina");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "nb-option", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Armenia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "nb-option", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "Aruba");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "nb-option", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Australia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "nb-option", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "Austria");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "nb-option", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "Azerbaijan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "nb-option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "Bahamas");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "nb-option", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Bahrain");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "nb-option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "Bangladesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "nb-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, "Barbados");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "nb-option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "Belarus");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "nb-option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "Belgium");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "nb-option", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "Belize");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "nb-option", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Benin");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "nb-option", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "Bermuda");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "nb-option", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "Bhutan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "nb-option", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "Bolivia, Plurinational State of");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "nb-option", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, "Bonaire, Sint Eustatius and Saba");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "nb-option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "Bosnia and Herzegovina");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "nb-option", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "Botswana");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "nb-option", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, "Bouvet Island");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "nb-option", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](169, "Brazil");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "nb-option", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, "British Indian Ocean Territory");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "nb-option", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "Brunei Darussalam");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "nb-option", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "Bulgaria");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "nb-option", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177, "Burkina Faso");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "nb-option", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, "Burundi");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "nb-option", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181, "Cambodia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "nb-option", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183, "Cameroon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "nb-option", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](185, "Canada");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "nb-option", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "Cape Verde");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "nb-option", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "Cayman Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "nb-option", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](191, "Central African Republic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "nb-option", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, "Chad");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "nb-option", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](195, "Chile");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "nb-option", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197, "China");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "nb-option", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, "Christmas Island");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "nb-option", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201, "Cocos (Keeling) Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](202, "nb-option", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](203, "Colombia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "nb-option", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "Comoros");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "nb-option", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207, "Congo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "nb-option", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, "Congo, the Democratic Republic of the");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "nb-option", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](211, "Cook Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](212, "nb-option", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](213, "Costa Rica");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "nb-option", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](215, "C\u00F4te d'Ivoire");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "nb-option", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "Croatia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "nb-option", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "Cuba");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](220, "nb-option", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](221, "Cura\u00E7ao");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "nb-option", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](223, "Cyprus");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "nb-option", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](225, "Czech Republic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "nb-option", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](227, "Denmark");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "nb-option", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](229, "Djibouti");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "nb-option", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](231, "Dominica");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](232, "nb-option", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](233, "Dominican Republic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](234, "nb-option", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](235, "Ecuador");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](236, "nb-option", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](237, "Egypt");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "nb-option", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](239, "El Salvador");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "nb-option", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](241, "Equatorial Guinea");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "nb-option", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](243, "Eritrea");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "nb-option", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](245, "Estonia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "nb-option", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](247, "Ethiopia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "nb-option", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](249, "Falkland Islands (Malvinas)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](250, "nb-option", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](251, "Faroe Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "nb-option", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](253, "Fiji");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "nb-option", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](255, "Finland");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "nb-option", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](257, "France");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "nb-option", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](259, "French Guiana");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "nb-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](261, "French Polynesia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "nb-option", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](263, "French Southern Territories");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "nb-option", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](265, "Gabon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "nb-option", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](267, "Gambia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "nb-option", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](269, "Georgia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](270, "nb-option", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](271, "Germany");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "nb-option", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](273, "Ghana");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "nb-option", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](275, "Gibraltar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "nb-option", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](277, "Greece");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "nb-option", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](279, "Greenland");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](280, "nb-option", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](281, "Grenada");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](282, "nb-option", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](283, "Guadeloupe");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](284, "nb-option", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](285, "Guam");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "nb-option", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](287, "Guatemala");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "nb-option", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](289, "Guernsey");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "nb-option", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](291, "Guinea");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](292, "nb-option", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](293, "Guinea-Bissau");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](294, "nb-option", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](295, "Guyana");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "nb-option", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](297, "Haiti");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](298, "nb-option", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](299, "Heard Island and McDonald Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](300, "nb-option", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](301, "Holy See (Vatican City State)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](302, "nb-option", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](303, "Honduras");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "nb-option", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](305, "Hong Kong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](306, "nb-option", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](307, "Hungary");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "nb-option", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](309, "Iceland");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "nb-option", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](311, "India");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](312, "nb-option", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](313, "Indonesia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](314, "nb-option", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](315, "Iran, Islamic Republic of");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](316, "nb-option", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](317, "Iraq");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](318, "nb-option", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](319, "Ireland");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](320, "nb-option", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](321, "Isle of Man");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "nb-option", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](323, "Israel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "nb-option", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](325, "Italy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](326, "nb-option", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](327, "Jamaica");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](328, "nb-option", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](329, "Japan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "nb-option", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](331, "Jersey");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](332, "nb-option", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](333, "Jordan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](334, "nb-option", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](335, "Kazakhstan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](336, "nb-option", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](337, "Kenya");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](338, "nb-option", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](339, "Kiribati");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "nb-option", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](341, "Korea, Democratic People's Republic of");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](342, "nb-option", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](343, "Korea, Republic of");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](344, "nb-option", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](345, "Kuwait");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](346, "nb-option", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](347, "Kyrgyzstan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](348, "nb-option", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](349, "Lao People's Democratic Republic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](350, "nb-option", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](351, "Latvia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](352, "nb-option", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](353, "Lebanon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](354, "nb-option", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](355, "Lesotho");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](356, "nb-option", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](357, "Liberia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](358, "nb-option", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](359, "Libya");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](360, "nb-option", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](361, "Liechtenstein");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](362, "nb-option", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](363, "Lithuania");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](364, "nb-option", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](365, "Luxembourg");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](366, "nb-option", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](367, "Macao");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](368, "nb-option", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](369, "Macedonia, the former Yugoslav Republic of");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](370, "nb-option", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](371, "Madagascar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](372, "nb-option", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](373, "Malawi");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](374, "nb-option", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](375, "Malaysia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](376, "nb-option", 166);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](377, "Maldives");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](378, "nb-option", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](379, "Mali");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](380, "nb-option", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](381, "Malta");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](382, "nb-option", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](383, "Marshall Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](384, "nb-option", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](385, "Martinique");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](386, "nb-option", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](387, "Mauritania");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](388, "nb-option", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](389, "Mauritius");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](390, "nb-option", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](391, "Mayotte");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](392, "nb-option", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](393, "Mexico");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](394, "nb-option", 175);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](395, "Micronesia, Federated States of");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](396, "nb-option", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](397, "Moldova, Republic of");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](398, "nb-option", 177);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](399, "Monaco");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "nb-option", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](401, "Mongolia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](402, "nb-option", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](403, "Montenegro");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](404, "nb-option", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](405, "Montserrat");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](406, "nb-option", 181);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](407, "Morocco");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](408, "nb-option", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](409, "Mozambique");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](410, "nb-option", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](411, "Myanmar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](412, "nb-option", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](413, "Namibia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](414, "nb-option", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](415, "Nauru");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](416, "nb-option", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](417, "Nepal");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](418, "nb-option", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](419, "Netherlands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](420, "nb-option", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](421, "New Caledonia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](422, "nb-option", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](423, "New Zealand");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](424, "nb-option", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](425, "Nicaragua");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](426, "nb-option", 191);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](427, "Niger");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](428, "nb-option", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](429, "Nigeria");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](430, "nb-option", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](431, "Niue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](432, "nb-option", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](433, "Norfolk Island");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](434, "nb-option", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](435, "Northern Mariana Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](436, "nb-option", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](437, "Norway");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](438, "nb-option", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](439, "Oman");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](440, "nb-option", 198);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](441, "Pakistan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](442, "nb-option", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](443, "Palau");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](444, "nb-option", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](445, "Palestinian Territory, Occupied");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](446, "nb-option", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](447, "Panama");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](448, "nb-option", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](449, "Papua New Guinea");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](450, "nb-option", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](451, "Paraguay");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](452, "nb-option", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](453, "Peru");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](454, "nb-option", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](455, "Philippines");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](456, "nb-option", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](457, "Pitcairn");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](458, "nb-option", 207);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](459, "Poland");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](460, "nb-option", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](461, "Portugal");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](462, "nb-option", 209);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](463, "Puerto Rico");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](464, "nb-option", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](465, "Qatar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](466, "nb-option", 211);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](467, "R\u00E9union");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](468, "nb-option", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](469, "Romania");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](470, "nb-option", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](471, "Russian Federation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](472, "nb-option", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](473, "Rwanda");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](474, "nb-option", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](475, "Saint Barth\u00E9lemy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](476, "nb-option", 216);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](477, "Saint Helena, Ascension and Tristan da Cunha");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](478, "nb-option", 217);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](479, "Saint Kitts and Nevis");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](480, "nb-option", 218);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](481, "Saint Lucia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](482, "nb-option", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](483, "Saint Martin (French part)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](484, "nb-option", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](485, "Saint Pierre and Miquelon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](486, "nb-option", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](487, "Saint Vincent and the Grenadines");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](488, "nb-option", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](489, "Samoa");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](490, "nb-option", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](491, "San Marino");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](492, "nb-option", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](493, "Sao Tome and Principe");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](494, "nb-option", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](495, "Saudi Arabia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](496, "nb-option", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](497, "Senegal");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](498, "nb-option", 227);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](499, "Serbia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](500, "nb-option", 228);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](501, "Seychelles");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](502, "nb-option", 229);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](503, "Sierra Leone");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](504, "nb-option", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](505, "Singapore");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](506, "nb-option", 231);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](507, "Sint Maarten (Dutch part)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](508, "nb-option", 232);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](509, "Slovakia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](510, "nb-option", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](511, "Slovenia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](512, "nb-option", 234);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](513, "Solomon Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](514, "nb-option", 235);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](515, "Somalia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](516, "nb-option", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](517, "South Africa");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](518, "nb-option", 237);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](519, "South Georgia and the South Sandwich Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](520, "nb-option", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](521, "South Sudan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](522, "nb-option", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](523, "Spain");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](524, "nb-option", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](525, "Sri Lanka");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](526, "nb-option", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](527, "Sudan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](528, "nb-option", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](529, "Suriname");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](530, "nb-option", 243);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](531, "Svalbard and Jan Mayen");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](532, "nb-option", 244);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](533, "Swaziland");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](534, "nb-option", 245);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](535, "Sweden");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](536, "nb-option", 246);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](537, "Switzerland");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](538, "nb-option", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](539, "Syrian Arab Republic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](540, "nb-option", 248);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](541, "Taiwan, Province of China");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](542, "nb-option", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](543, "Tajikistan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](544, "nb-option", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](545, "Tanzania, United Republic of");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](546, "nb-option", 251);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](547, "Thailand");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](548, "nb-option", 252);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](549, "Timor-Leste");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](550, "nb-option", 253);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](551, "Togo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](552, "nb-option", 254);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](553, "Tokelau");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](554, "nb-option", 255);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](555, "Tonga");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](556, "nb-option", 256);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](557, "Trinidad and Tobago");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](558, "nb-option", 257);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](559, "Tunisia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](560, "nb-option", 258);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](561, "Turkey");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](562, "nb-option", 259);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](563, "Turkmenistan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](564, "nb-option", 260);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](565, "Turks and Caicos Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](566, "nb-option", 261);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](567, "Tuvalu");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](568, "nb-option", 262);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](569, "Uganda");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](570, "nb-option", 263);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](571, "Ukraine");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](572, "nb-option", 264);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](573, "United Arab Emirates");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](574, "nb-option", 265);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](575, "United Kingdom");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](576, "nb-option", 266);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](577, "United States");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](578, "nb-option", 267);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](579, "United States Minor Outlying Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](580, "nb-option", 268);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](581, "Uruguay");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](582, "nb-option", 269);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](583, "Uzbekistan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](584, "nb-option", 270);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](585, "Vanuatu");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](586, "nb-option", 271);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](587, "Venezuela, Bolivarian Republic of");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](588, "nb-option", 272);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](589, "Viet Nam");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](590, "nb-option", 273);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](591, "Virgin Islands, British");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](592, "nb-option", 274);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](593, "Virgin Islands, U.S.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](594, "nb-option", 275);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](595, "Wallis and Futuna");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](596, "nb-option", 276);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](597, "Western Sahara");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](598, "nb-option", 277);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](599, "Yemen");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](600, "nb-option", 278);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](601, "Zambia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](602, "nb-option", 279);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](603, "Zimbabwe");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](604, "div", 4)(605, "div", 5)(606, "label", 280);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](607);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](608, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](609, "nb-select", 281);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_nb_select_ngModelChange_609_listener($event) {
            return ctx.user.timezone_id = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](610, "nb-option", 282);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](611, "(GMT-12:00) International Date Line West");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](612, "nb-option", 283);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](613, "(GMT-11:00) Midway Island, Samoa");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](614, "nb-option", 284);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](615, "(GMT-10:00) Hawaii");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](616, "nb-option", 285);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](617, "(GMT-09:00) Alaska");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](618, "nb-option", 286);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](619, "(GMT-08:00) Pacific Time (US & Canada)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](620, "nb-option", 287);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](621, "(GMT-08:00) Tijuana, Baja California");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](622, "nb-option", 288);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](623, "(GMT-07:00) Arizona");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](624, "nb-option", 289);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](625, "(GMT-07:00) Chihuahua, La Paz, Mazatlan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](626, "nb-option", 290);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](627, "(GMT-07:00) Mountain Time (US & Canada)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](628, "nb-option", 291);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](629, "(GMT-06:00) Central America");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](630, "nb-option", 292);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](631, "(GMT-06:00) Central Time (US & Canada)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](632, "nb-option", 293);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](633, "(GMT-06:00) Guadalajara, Mexico City, Monterrey");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](634, "nb-option", 294);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](635, "(GMT-06:00) Saskatchewan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](636, "nb-option", 295);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](637, "(GMT-05:00) Bogota, Lima, Quito, Rio Branco");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](638, "nb-option", 296);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](639, "(GMT-05:00) Eastern Time (US & Canada)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](640, "nb-option", 297);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](641, "(GMT-05:00) Indiana (East)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](642, "nb-option", 298);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](643, "(GMT-04:00) Atlantic Time (Canada)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](644, "nb-option", 299);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](645, "(GMT-04:00) Caracas, La Paz");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](646, "nb-option", 300);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](647, "(GMT-04:00) Manaus");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](648, "nb-option", 301);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](649, "(GMT-04:00) Santiago");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](650, "nb-option", 302);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](651, "(GMT-03:30) Newfoundland");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](652, "nb-option", 303);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](653, "(GMT-03:00) Brasilia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](654, "nb-option", 304);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](655, "(GMT-03:00) Buenos Aires, Georgetown");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](656, "nb-option", 305);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](657, "(GMT-03:00) Greenland");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](658, "nb-option", 306);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](659, "(GMT-03:00) Montevideo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](660, "nb-option", 307);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](661, "(GMT-02:00) Mid-Atlantic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](662, "nb-option", 308);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](663, "(GMT-01:00) Cape Verde Is.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](664, "nb-option", 309);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](665, "(GMT-01:00) Azores");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](666, "nb-option", 310);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](667, "(GMT+00:00) Casablanca, Monrovia, Reykjavik");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](668, "nb-option", 311);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](669, "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](670, "nb-option", 312);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](671, "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](672, "nb-option", 313);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](673, "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](674, "nb-option", 314);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](675, "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](676, "nb-option", 315);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](677, "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](678, "nb-option", 316);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](679, "(GMT+01:00) West Central Africa");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](680, "nb-option", 317);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](681, "(GMT+02:00) Amman");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](682, "nb-option", 318);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](683, "(GMT+02:00) Athens, Bucharest, Istanbul");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](684, "nb-option", 319);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](685, "(GMT+02:00) Beirut");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](686, "nb-option", 320);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](687, "(GMT+02:00) Cairo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](688, "nb-option", 321);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](689, "(GMT+02:00) Harare, Pretoria");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](690, "nb-option", 322);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](691, "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](692, "nb-option", 323);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](693, "(GMT+02:00) Jerusalem");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](694, "nb-option", 324);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](695, "(GMT+02:00) Minsk");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](696, "nb-option", 325);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](697, "(GMT+02:00) Windhoek");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](698, "nb-option", 326);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](699, "(GMT+03:00) Kuwait, Riyadh, Baghdad");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](700, "nb-option", 327);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](701, "(GMT+03:00) Moscow, St. Petersburg, Volgograd");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](702, "nb-option", 328);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](703, "(GMT+03:00) Nairobi");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](704, "nb-option", 329);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](705, "(GMT+03:00) Tbilisi");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](706, "nb-option", 330);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](707, "(GMT+03:30) Tehran");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](708, "nb-option", 331);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](709, "(GMT+04:00) Abu Dhabi, Muscat");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](710, "nb-option", 332);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](711, "(GMT+04:00) Baku");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](712, "nb-option", 333);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](713, "(GMT+04:00) Yerevan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](714, "nb-option", 334);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](715, "(GMT+04:30) Kabul");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](716, "nb-option", 335);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](717, "(GMT+05:00) Yekaterinburg");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](718, "nb-option", 336);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](719, "(GMT+05:00) Islamabad, Karachi, Tashkent");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](720, "nb-option", 337);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](721, "(GMT+05:30) Sri Jayawardenapura");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](722, "nb-option", 338);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](723, "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](724, "nb-option", 339);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](725, "(GMT+05:45) Kathmandu");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](726, "nb-option", 340);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](727, "(GMT+06:00) Almaty, Novosibirsk");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](728, "nb-option", 341);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](729, "(GMT+06:00) Astana, Dhaka");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](730, "nb-option", 342);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](731, "(GMT+06:30) Yangon (Rangoon)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](732, "nb-option", 343);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](733, "(GMT+07:00) Bangkok, Hanoi, Jakarta");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](734, "nb-option", 344);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](735, "(GMT+07:00) Krasnoyarsk");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](736, "nb-option", 345);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](737, "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](738, "nb-option", 346);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](739, "(GMT+08:00) Kuala Lumpur, Singapore");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](740, "nb-option", 347);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](741, "(GMT+08:00) Irkutsk, Ulaan Bataar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](742, "nb-option", 348);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](743, "(GMT+08:00) Perth");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](744, "nb-option", 349);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](745, "(GMT+08:00) Taipei");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](746, "nb-option", 350);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](747, "(GMT+09:00) Osaka, Sapporo, Tokyo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](748, "nb-option", 351);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](749, "(GMT+09:00) Seoul");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](750, "nb-option", 352);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](751, "(GMT+09:00) Yakutsk");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](752, "nb-option", 353);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](753, "(GMT+09:30) Adelaide");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](754, "nb-option", 354);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](755, "(GMT+09:30) Darwin");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](756, "nb-option", 355);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](757, "(GMT+10:00) Brisbane");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](758, "nb-option", 356);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](759, "(GMT+10:00) Canberra, Melbourne, Sydney");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](760, "nb-option", 357);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](761, "(GMT+10:00) Hobart");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](762, "nb-option", 358);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](763, "(GMT+10:00) Guam, Port Moresby");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](764, "nb-option", 359);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](765, "(GMT+10:00) Vladivostok");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](766, "nb-option", 360);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](767, "(GMT+11:00) Magadan, Solomon Is., New Caledonia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](768, "nb-option", 361);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](769, "(GMT+12:00) Auckland, Wellington");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](770, "nb-option", 362);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](771, "(GMT+12:00) Fiji, Kamchatka, Marshall Is.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](772, "nb-option", 363);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](773, "(GMT+13:00) Nuku'alofa");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](774, "nb-card")(775, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](776);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](777, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](778, "nb-card-body")(779, "div", 3)(780, "div", 4)(781, "div", 5)(782, "label", 364);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](783);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](784, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](785, "input", 365);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_785_listener($event) {
            return ctx.user.active = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](786);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](787, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](788, "input", 366);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_788_listener($event) {
            return ctx.user.active = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](789);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](790, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](791, "div", 4)(792, "div", 5)(793, "label", 367);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](794);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](795, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](796, "input", 368);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_796_listener($event) {
            return ctx.user.company = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](797, "nb-card")(798, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](799);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](800, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](801, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](802, AddUserComponent_div_802_Template, 4, 2, "div", 369);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](803, AddUserComponent_div_803_Template, 4, 3, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](804, AddUserComponent_div_804_Template, 4, 3, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](38);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](71);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 60, "user.add"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 62, "user.user_info"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 64, "user.Username"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](112, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 66, "user.password"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 68, "user.password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 70, "user.password_required"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 72, "user.confirm_password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.confirmPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 74, "user.password_mismatch"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 76, "user.name"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 78, "user.fname"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.first_name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](113, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](58, 80, "user.lname"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.last_name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](114, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](63, 82, "user.address"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](69, 84, "user.phone"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.phone)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](115, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !_r3.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](75, 86, "user.password_required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !_r3.hasError("pattern"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](78, 88, "user.phone_shd"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](83, 90, "user.Email"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.email)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](116, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", _r4.valid || _r4.untouched);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r4.errors && _r4.errors.pattern);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](92, 92, "user.address"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.address)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](117, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](97, 94, "user.choose_country_timezone"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](104, 96, "user.country"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.country_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](118, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](502);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](608, 98, "user.timezone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.timezone_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](119, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](167);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](777, 100, "user.company_active"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](784, 102, "user.active"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.active)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](120, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](787, 104, "user.no"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.active)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](121, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](790, 106, "user.yes"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](795, 108, "user.company"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.user.company)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](122, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](800, 110, "user.select_role"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user_id > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.user_id);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbOptionComponent, _password_match_directive__WEBPACK_IMPORTED_MODULE_3__.EqualValidator, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.dddd[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlci91c2VyLWZvcm0tY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5kZGRkIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 78873:
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule),
/* harmony export */   "routedComponents": () => (/* binding */ routedComponents)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ 46860);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-component */ 90412);
/* harmony import */ var _user_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-form-component */ 39925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: '',
  component: _user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent,
  children: [{
    path: 'user',
    component: _user_component__WEBPACK_IMPORTED_MODULE_1__.FormsUserComponent
  }, {
    path: 'user/new',
    component: _user_form_component__WEBPACK_IMPORTED_MODULE_2__.AddUserComponent
  }, {
    path: 'user/:id',
    component: _user_form_component__WEBPACK_IMPORTED_MODULE_2__.AddUserComponent
  }, {
    path: 'user/:id/delete',
    component: _user_form_component__WEBPACK_IMPORTED_MODULE_2__.AddUserComponent
  }]
}];
class UserRoutingModule {
  static {
    this.ɵfac = function UserRoutingModule_Factory(t) {
      return new (t || UserRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: UserRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();
const routedComponents = [_user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent, _user_component__WEBPACK_IMPORTED_MODULE_1__.FormsUserComponent, _user_form_component__WEBPACK_IMPORTED_MODULE_2__.AddUserComponent];

/***/ }),

/***/ 46860:
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class UserComponent {
  static {
    this.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["ngx-form-elements"]],
      decls: 1,
      vars: 0,
      template: function UserComponent_Template(rf, ctx) {
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

/***/ 99321:
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-routing.module */ 78873);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/table */ 59673);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _password_match_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.match.directive */ 80354);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ 46860);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-component */ 90412);
/* harmony import */ var _user_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-form-component */ 39925);





















class UserModule {
  static {
    this.ɵfac = function UserModule_Factory(t) {
      return new (t || UserModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: UserModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTableModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserRoutingModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__.CdkTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbOptionModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [_password_match_directive__WEBPACK_IMPORTED_MODULE_2__.EqualValidator, _user_component__WEBPACK_IMPORTED_MODULE_3__.UserComponent, _user_component__WEBPACK_IMPORTED_MODULE_4__.FormsUserComponent, _user_form_component__WEBPACK_IMPORTED_MODULE_5__.AddUserComponent],
    imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTableModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_1__.UserRoutingModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__.CdkTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbOptionModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_user_module_ts.js.map