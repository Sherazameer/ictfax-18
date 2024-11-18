"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_extension_extension_module_ts"],{

/***/ 80597:
/*!********************************************************!*\
  !*** ./src/app/pages/extension/extension-component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsExtensionComponent": () => (/* binding */ FormsExtensionComponent)
/* harmony export */ });
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal.component */ 57844);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extension.service */ 74124);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
// import { ExtensionDatabase } from './extension-database.component';
// import { ExtensionDataSource } from './extension-datasource.component';












const _c0 = ["filter"];
function FormsExtensionComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 22);
  }
}
function FormsExtensionComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 23);
  }
}
function FormsExtensionComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "general.ID"));
  }
}
function FormsExtensionComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r15.data.account_id, "");
  }
}
function FormsExtensionComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "extension.username"));
  }
}
function FormsExtensionComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r16.data.username, "");
  }
}
function FormsExtensionComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "extension.phone"));
  }
}
function FormsExtensionComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r17.data.phone, "");
  }
}
function FormsExtensionComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "extension.email"));
  }
}
function FormsExtensionComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r18.data.email, "");
  }
}
function FormsExtensionComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "general.operations"));
  }
}
function FormsExtensionComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25)(1, "button", 27)(2, "mat-icon")(3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsExtensionComponent_td_30_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const extension_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.showStaticModal(extension_r19.data.account_id, extension_r19.first_name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const extension_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/extension/extension/", extension_r19.data.account_id, "");
  }
}
function FormsExtensionComponent_nb_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r22);
  }
}
function FormsExtensionComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" | Showing ", ctx_r13.startIndex, " - ", ctx_r13.minimumItems, " of ", ctx_r13.length, " items ");
  }
}
const _c1 = function () {
  return ["/pages/extension/extension/new"];
};
const _c2 = function (a0) {
  return {
    "disabled-icon": a0
  };
};
class FormsExtensionComponent {
  constructor(extension_service, dataSourceBuilder, modalService) {
    this.extension_service = extension_service;
    this.dataSourceBuilder = dataSourceBuilder;
    this.modalService = modalService;
    this.items_page = [5, 10, 25, 100];
    this.pageSize = 10;
    this.startIndex = 0;
    this.current_items = [];
    this.displayedColumns = ['account_id', 'username', 'phone', 'email', 'Operations'];
  }
  ngOnInit() {
    // this.getExtensionlist();
  }
  // getExtensionlist() {
  //   this.extension_service.get_ExtensionList().then(data => {
  //     this.aExtension = data.sort((a,b) => b.account_id - a.account_id);
  //     this.length = data.length;
  //     this.paginate(this.pageSize);
  //     this.ExtensionDataSource = this. dataSourceBuilder.create( this.current_items.map(item => ({ data: item})),);
  //   });
  // }
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
    this.current_items = this.aExtension.slice(this.startIndex, end);
    this.ExtensionDataSource = this.dataSourceBuilder.create(this.current_items.map(item => ({
      data: item
    })));
  }
  deleteExtension(account_id) {
    this.extension_service.delete_Extension(account_id).then(response => {}).catch(this.handleError);
    // this.getExtensionlist();
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
        this.deleteExtension(account_id);
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
    this.ɵfac = function FormsExtensionComponent_Factory(t) {
      return new (t || FormsExtensionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_extension_service__WEBPACK_IMPORTED_MODULE_1__.ExtensionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridDataSourceBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FormsExtensionComponent,
      selectors: [["ngx-extension-component"]],
      viewQuery: function FormsExtensionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      decls: 42,
      vars: 27,
      consts: [["nbInput", "", "fullWidth", "", "id", "search", 1, "form-control", "cc", 2, "float", "right", 3, "placeholder", "nbFilterInput"], ["type", "button", "mat-raised-button", "", "color", "primary", 2, "font-size", "15px", 3, "routerLink"], [1, "fa", "fa-plus"], [3, "nbTreeGrid", "nbSort"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], ["nbTreeGridColumnDef", "account_id"], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridColumnDef", "username"], ["nbTreeGridColumnDef", "phone"], ["nbTreeGridColumnDef", "email"], ["nbTreeGridColumnDef", "Operations"], ["nbTreeGridHeaderCell", "", 4, "nbTreeGridHeaderCellDef"], [2, "padding", "30px", "display", "flex", "justify-content", "flex-end"], [2, "text-align", "center", "padding-top", "10px"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding-top", "10px"], ["icon", "arrowhead-left-outline", 2, "margin", "0 25px", 3, "ngClass", "click"], ["icon", "arrowhead-right-outline", 2, "margin", "0 25px", 3, "ngClass", "click"], [4, "ngIf"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader"], ["nbTreeGridCell", ""], ["nbTreeGridHeaderCell", ""], ["mat-icon-button", "", "color", "primary", 2, "font-size", "20px"], ["title", "Edit", 3, "routerLink"], ["icon", "edit-2-outline"], ["mat-icon-button", "", 2, "font-size", "20px", 3, "click"], [2, "color", "red"], ["icon", "trash-2-outline"], [3, "value"]],
      template: function FormsExtensionComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FormsExtensionComponent_tr_14_Template, 1, 0, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FormsExtensionComponent_tr_15_Template, 1, 0, "tr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, FormsExtensionComponent_th_17_Template, 3, 3, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FormsExtensionComponent_td_18_Template, 2, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, FormsExtensionComponent_th_20_Template, 3, 3, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, FormsExtensionComponent_td_21_Template, 2, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, FormsExtensionComponent_th_23_Template, 3, 3, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, FormsExtensionComponent_td_24_Template, 2, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, FormsExtensionComponent_th_26_Template, 3, 3, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, FormsExtensionComponent_td_27_Template, 2, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, FormsExtensionComponent_th_29_Template, 3, 3, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, FormsExtensionComponent_td_30_Template, 8, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14)(32, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Items per page: \u00A0\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "nb-select", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormsExtensionComponent_Template_nb_select_ngModelChange_34_listener($event) {
            return ctx.pageSize = $event;
          })("ngModelChange", function FormsExtensionComponent_Template_nb_select_ngModelChange_34_listener($event) {
            return ctx.paginate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, FormsExtensionComponent_nb_option_35_Template, 2, 2, "nb-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 18)(37, "nb-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsExtensionComponent_Template_nb_icon_click_37_listener() {
            return ctx.startIndex > 0 ? ctx.paginate("previous") : null;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "nb-icon", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormsExtensionComponent_Template_nb_icon_click_40_listener() {
            return ctx.startIndex + ctx.pageSize < (ctx.aExtension == null ? null : ctx.aExtension.length) ? ctx.paginate("next") : null;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, FormsExtensionComponent_span_41_Template, 2, 3, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 16, "extension.list"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 18, "extension.filter"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbFilterInput", ctx.ExtensionDataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 20, "extension.add"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGrid", ctx.ExtensionDataSource)("nbSort", ctx.ExtensionDataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items_page);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](23, _c2, ctx.startIndex === 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Page ", ctx.currentPage, " of ", ctx.total_pages, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c2, ctx.startIndex + ctx.pageSize >= (ctx.aExtension == null ? null : ctx.aExtension.length)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.aExtension == null ? null : ctx.aExtension.length) > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridRowDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridRowComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridCellDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridCellDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderRowDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderRowComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderCellDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridHeaderCellDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTreeGridColumnDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSortDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSortHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbFilterInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSelectComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbOptionComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
      styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-height: 500px;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-left: 32px;\n}\n\n.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  overflow: hidden;\n  word-wrap: break-word;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: rgb(10, 238, 10);\n}\n\n.cc[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.disabled-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZXh0ZW5zaW9uL2V4dGVuc2lvbi1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFNQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSEY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUpGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVNBOztFQUVFLGdCQUFBO0VBQ0EscUJBQUE7QUFORjs7QUFTQTtFQUNFLHVCQUFBO0FBTkY7O0FBU0E7RUFDRSxVQUFBO0FBTkY7O0FBUUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUxGIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cblxuLmV4YW1wbGUtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuXG4ubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xufVxuXG5cbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cblxuLm1hdC1jZWxsLFxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTAsIDIzOCwgMTApO1xufVxuXG4uY2Mge1xuICB3aWR0aDogNDAlO1xufVxuLmRpc2FibGVkLWljb24ge1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 36694:
/*!*************************************************************!*\
  !*** ./src/app/pages/extension/extension-form-component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddExtensionComponent": () => (/* binding */ AddExtensionComponent)
/* harmony export */ });
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extension */ 971);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ 84640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extension.service */ 74124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









function AddExtensionComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "extension.invalid_email"), " ");
  }
}
function AddExtensionComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddExtensionComponent_div_109_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.updateExtension());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "buttons.update"));
  }
}
function AddExtensionComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddExtensionComponent_div_110_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.addExtension());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "buttons.submit"));
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class AddExtensionComponent {
  constructor(route, account_service, router) {
    this.route = route;
    this.account_service = account_service;
    this.router = router;
    // form1: any= {};
    this.extension = new _extension__WEBPACK_IMPORTED_MODULE_0__.Extension();
    this.account_id = null;
    this.settings = new _extension__WEBPACK_IMPORTED_MODULE_0__.Settings();
    this.sendbody = false;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.account_id = +params['id'];
      const test_url = this.router.url.split('/');
      const lastsegment = test_url[test_url.length - 1];
      if (lastsegment === 'new') {
        return null;
      } else {
        // return this.account_service.get_ExtensionData(this.account_id).then(data => {
        //   this.extension = data;
        //   this.fetch_settings();
        // });
      }
    });
  }
  addExtension() {
    this.extension.type = 'extension';
    this.account_service.add_Extension(this.extension).then(response => {
      if (this.sendbody == true) {
        this.updateSettings(response);
      } else {
        this.deleteSettings(response);
      }
      this.router.navigate(['../../extension'], {
        relativeTo: this.route
      });
    });
  }
  updateExtension() {
    this.account_service.update_Extension(this.extension).then(() => {
      if (this.sendbody == true) {
        this.updateSettings(this.extension.account_id);
      } else {
        this.deleteSettings(this.extension.account_id);
      }
      this.router.navigate(['../../extension'], {
        relativeTo: this.route
      });
    }).catch(this.handleError);
  }
  fetch_settings() {
    this.account_service.get_Settings(this.extension.account_id).then(response => {
      this.sendbody = response;
    }).catch(err => this.handleError(err));
  }
  updateSettings(account_id) {
    this.settings.value = 'body';
    this.account_service.update_Settings(account_id, this.settings).then(data => {}).catch(this.handleError);
  }
  deleteSettings(account_id) {
    this.account_service.delete_Settings(account_id).then(data => {}).catch(this.handleError);
  }
  handleError(error) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  static {
    this.ɵfac = function AddExtensionComponent_Factory(t) {
      return new (t || AddExtensionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_extension_service__WEBPACK_IMPORTED_MODULE_2__.ExtensionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AddExtensionComponent,
      selectors: [["ngx-add-extension-component"]],
      decls: 111,
      vars: 94,
      consts: [[1, "col-lg-12"], ["id", "form"], ["f1", "ngForm"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "username"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "passwd"], ["type", "password", "nbInput", "", "fullWidth", "", "id", "passwd", "required", "", "name", "passwd", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "passwd_pin"], ["type", "password", "nbInput", "", "fullWidth", "", "id", "passwd_pin", "required", "", "name", "passwd_pin", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "first_name"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "first_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "last_name"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "last_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "phone"], ["type", "phone", "id", "phone", "nbInput", "", "fullWidth", "", "pattern", "[0-9]*", "minlength", "11", "maxlength", "16", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["phone", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [3, "hidden"], ["for", "email"], ["type", "email", "id", "email", "nbInput", "", "fullWidth", "", "email", "", "pattern", "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["for", "active"], ["type", "radio", "name", "active", "value", "0", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "radio", "name", "active", "value", "1", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "checkbox", 3, "ngModel", "ngModelOptions", "checked", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
      template: function AddExtensionComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddExtensionComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.extension.username = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nb-card")(19, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "nb-card-body")(23, "div", 4)(24, "div", 5)(25, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddExtensionComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.extension.passwd = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 5)(30, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddExtensionComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.extension.passwd_pin = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "nb-card")(35, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "nb-card-body")(39, "div", 3)(40, "div", 4)(41, "div", 5)(42, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddExtensionComponent_Template_input_ngModelChange_45_listener($event) {
            return ctx.extension.first_name = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 4)(47, "div", 5)(48, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddExtensionComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.extension.last_name = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "nb-card")(53, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](55, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "nb-card-body")(57, "div", 4)(58, "div", 5)(59, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](61, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "input", 17, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddExtensionComponent_Template_input_ngModelChange_62_listener($event) {
            return ctx.extension.phone = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 19)(65, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](67, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 4)(72, "div", 5)(73, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](75, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "input", 22, 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddExtensionComponent_Template_input_ngModelChange_76_listener($event) {
            return ctx.extension.email = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, AddExtensionComponent_div_79_Template, 3, 3, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "nb-card")(81, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "nb-card-body")(85, "div", 3)(86, "div", 4)(87, "div", 5)(88, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](90, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddExtensionComponent_Template_input_ngModelChange_91_listener($event) {
            return ctx.extension.active = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](93, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddExtensionComponent_Template_input_ngModelChange_94_listener($event) {
            return ctx.extension.active = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](96, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "nb-card")(98, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](100, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "nb-card-body")(102, "div", 3)(103, "div", 4)(104, "div", 5)(105, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddExtensionComponent_Template_input_ngModelChange_105_listener($event) {
            return ctx.sendbody = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](107, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, AddExtensionComponent_div_109_Template, 4, 3, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](110, AddExtensionComponent_div_110_Template, 4, 3, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](63);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 46, "extension.add"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 48, "extension.extension_info"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 50, "extension.username"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.extension.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](86, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 52, "extension.password"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 54, "extension.password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.extension.passwd);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 56, "extension.password_pin"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.extension.passwd_pin);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 58, "extension.name"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 60, "extension.fname"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.extension.first_name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](87, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 62, "extension.lname"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.extension.last_name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](88, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](55, 64, "extension.user_address"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](61, 66, "extension.phone"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.extension.phone)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](89, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !_r1.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](67, 68, "extension.required_error"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !_r1.hasError("pattern"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](70, 70, "extension.pattern_error"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](75, 72, "extension.email"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.extension.email)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](90, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", _r2.valid || _r2.untouched);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r2.errors && _r2.errors.pattern);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](83, 74, "extension.active"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](90, 76, "extension.active"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.extension.active)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](91, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](93, 78, "extension.no"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.extension.active)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](92, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](96, 80, "extension.yes"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](100, 82, "extension.settings"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.sendbody)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](93, _c0))("checked", ctx.sendbody);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](107, 84, "extension.email_body_attachment"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.account_id > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.account_id);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
      styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZXh0ZW5zaW9uL2V4dGVuc2lvbi1mb3JtLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 20966:
/*!*************************************************************!*\
  !*** ./src/app/pages/extension/extension-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtensionRoutingModule": () => (/* binding */ ExtensionRoutingModule),
/* harmony export */   "routedComponents": () => (/* binding */ routedComponents)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _extension_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extension.component */ 70789);
/* harmony import */ var _extension_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extension-component */ 80597);
/* harmony import */ var _extension_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extension-form-component */ 36694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: '',
  component: _extension_component__WEBPACK_IMPORTED_MODULE_0__.ExtensionComponent,
  children: [{
    path: 'extension',
    component: _extension_component__WEBPACK_IMPORTED_MODULE_1__.FormsExtensionComponent
  }, {
    path: 'extension/new',
    component: _extension_form_component__WEBPACK_IMPORTED_MODULE_2__.AddExtensionComponent
  }, {
    path: 'extension/:id',
    component: _extension_form_component__WEBPACK_IMPORTED_MODULE_2__.AddExtensionComponent
  }, {
    path: 'extension/:id/delete',
    component: _extension_form_component__WEBPACK_IMPORTED_MODULE_2__.AddExtensionComponent
  }]
}];
class ExtensionRoutingModule {
  static {
    this.ɵfac = function ExtensionRoutingModule_Factory(t) {
      return new (t || ExtensionRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ExtensionRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExtensionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();
const routedComponents = [_extension_component__WEBPACK_IMPORTED_MODULE_0__.ExtensionComponent, _extension_component__WEBPACK_IMPORTED_MODULE_1__.FormsExtensionComponent, _extension_form_component__WEBPACK_IMPORTED_MODULE_2__.AddExtensionComponent];

/***/ }),

/***/ 70789:
/*!********************************************************!*\
  !*** ./src/app/pages/extension/extension.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtensionComponent": () => (/* binding */ ExtensionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class ExtensionComponent {
  static {
    this.ɵfac = function ExtensionComponent_Factory(t) {
      return new (t || ExtensionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExtensionComponent,
      selectors: [["ngx-form-elements"]],
      decls: 1,
      vars: 0,
      template: function ExtensionComponent_Template(rf, ctx) {
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

/***/ 5768:
/*!*****************************************************!*\
  !*** ./src/app/pages/extension/extension.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtensionModule": () => (/* binding */ ExtensionModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _extension_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extension-routing.module */ 20966);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ 59673);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _extension_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extension.component */ 70789);
/* harmony import */ var _extension_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extension-component */ 80597);
/* harmony import */ var _extension_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extension-form-component */ 36694);

















class ExtensionModule {
  static {
    this.ɵfac = function ExtensionModule_Factory(t) {
      return new (t || ExtensionModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: ExtensionModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _extension_routing_module__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__.CdkTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbCardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbSelectModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExtensionModule, {
    declarations: [_extension_component__WEBPACK_IMPORTED_MODULE_2__.ExtensionComponent, _extension_component__WEBPACK_IMPORTED_MODULE_3__.FormsExtensionComponent, _extension_form_component__WEBPACK_IMPORTED_MODULE_4__.AddExtensionComponent],
    imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _extension_routing_module__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__.CdkTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbCardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__.NbSelectModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_extension_extension_module_ts.js.map