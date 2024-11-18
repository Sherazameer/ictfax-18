"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_message_message_module_ts"],{

/***/ 34513:
/*!**************************************************************!*\
  !*** ./src/app/pages/message/document/document-component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsDocumentComponent": () => (/* binding */ FormsDocumentComponent)
/* harmony export */ });
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal.component */ 57844);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ 77365);
/* harmony import */ var _sendfax_sendfax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sendfax/sendfax */ 6784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./document.service */ 97394);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _contact_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contact/contact.service */ 75097);
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-completer */ 2661);
/* harmony import */ var _sendfax_sendfax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sendfax/sendfax.service */ 67180);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-pdf-viewer */ 63940);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
// import { DocumentDatabase } from './document-database.component';
// import { DocumentDataSource } from './document-datasource.component';


















const _c0 = ["filter"];
function FormsDocumentComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 22);
  }
}
function FormsDocumentComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 23);
  }
}
function FormsDocumentComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "general.ID"));
  }
}
function FormsDocumentComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r15.data.document_id);
  }
}
function FormsDocumentComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "document.document_name"));
  }
}
function FormsDocumentComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r16.data.name);
  }
}
function FormsDocumentComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "general.operations"));
  }
}
function FormsDocumentComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 25)(1, "button", 27)(2, "mat-icon")(3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 27)(6, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_td_24_Template_mat_icon_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const document_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.showPDF(ctx_r18.pdfViewerTemplate, document_r17.data.document_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "nb-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 27)(9, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_td_24_Template_mat_icon_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const document_r17 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.downloadDocument(document_r17.data.document_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 27)(12, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_td_24_Template_mat_icon_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const document_r17 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.showStaticModal(document_r17.data.name, document_r17.data.document_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 27)(15, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_td_24_Template_mat_icon_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const document_r17 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](37);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.open(_r10, document_r17.data.document_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const document_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/message/document/", document_r17.data.document_id, "");
  }
}
function FormsDocumentComponent_nb_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](option_r23);
  }
}
function FormsDocumentComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" | Showing ", ctx_r9.startIndex, " - ", ctx_r9.minimumItems, " of ", ctx_r9.length, " items ");
  }
}
function FormsDocumentComponent_ng_template_36_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const acc_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", acc_r26.account_id)("selected", i_r27 === ctx_r25.accountArray.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](acc_r26.phone);
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
function FormsDocumentComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37)(1, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_ng_template_36_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 41)(8, "div", 42)(9, "div", 43)(10, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function FormsDocumentComponent_ng_template_36_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.sendfax.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 42)(15, "div", 43)(16, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "ng2-completer", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function FormsDocumentComponent_ng_template_36_Template_ng2_completer_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.sendfax.phone = $event);
    })("selected", function FormsDocumentComponent_ng_template_36_Template_ng2_completer_selected_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.onSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 42)(21, "div", 48)(22, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function FormsDocumentComponent_ng_template_36_Template_select_change_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.onSelectedAccount($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, FormsDocumentComponent_ng_template_36_option_26_Template, 2, 3, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 52)(29, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_ng_template_36_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.addSendDocument());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 13, "transmission.fax.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 15, "transmission.title"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r11.sendfax.title)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](23, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 17, "transmission.phone_num_destination_contact"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inputClass", "form-control form-control-inline")("ngModel", ctx_r11.sendfax.phone)("datasource", ctx_r11.dataService)("minSearchLength", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 19, "account.choose_caller_id"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r11.accountArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r11.sendfax.phone === undefined || ctx_r11.sendfax.phone === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 21, "transmission.fax.title"), "!");
  }
}
function FormsDocumentComponent_ng_template_38_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58)(1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_ng_template_38_ng_template_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.previousPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " < Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_ng_template_38_ng_template_10_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r39.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Next > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r36.page === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r36.totalPages === 1 || ctx_r36.page === ctx_r36.totalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Pages ", ctx_r36.page, " / ", ctx_r36.totalPages, "");
  }
}
function FormsDocumentComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37)(1, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_ng_template_38_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r40.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 41)(8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Loading, please wait ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, FormsDocumentComponent_ng_template_38_ng_template_10_Template, 7, 4, "ng-template", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "pdf-viewer", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("after-load-complete", function FormsDocumentComponent_ng_template_38_Template_pdf_viewer_after_load_complete_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r42.afterLoadComplete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 7, "fax_viewer.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r13.totalPages > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r13.faxDocumentURL)("render-text", true)("original-size", false)("show-all", false)("page", ctx_r13.page);
  }
}
const _c2 = function () {
  return ["/pages/message/document/new"];
};
const _c3 = function (a0) {
  return {
    "disabled-icon": a0
  };
};
class FormsDocumentComponent {
  constructor(document_service, dataSourceBuilder, modalService, contact_service, completerService, sendfax_service) {
    this.document_service = document_service;
    this.dataSourceBuilder = dataSourceBuilder;
    this.modalService = modalService;
    this.contact_service = contact_service;
    this.completerService = completerService;
    this.sendfax_service = sendfax_service;
    this.contactArray = [];
    this.accountArray = [];
    this.displayedColumns = ['document_id', 'name', 'Operations'];
    this.totalPages = 0;
    this.page = 1;
    this.isLoaded = false;
    this.items_page = [5, 10, 25, 100];
    this.pageSize = 10;
    this.startIndex = 0;
    this.current_items = [];
    this.sendfax = new _sendfax_sendfax__WEBPACK_IMPORTED_MODULE_2__.SendFax();
  }
  ngOnInit() {
    this.getDocumentlist();
    this.getContactList();
    this.getAccountList();
  }
  getDocumentlist() {
    this.document_service.get_DocumentList().then(data => {
      this.aDocument = data.sort((a, b) => b.document_id - a.document_id);
      this.length = data.length;
      this.paginate(this.pageSize);
      this.DocumentDataSource = this.dataSourceBuilder.create(this.current_items.map(item => ({
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
    this.current_items = this.aDocument.slice(this.startIndex, end);
    this.DocumentDataSource = this.dataSourceBuilder.create(this.current_items.map(item => ({
      data: item
    })));
  }
  deleteDocument(document_id) {
    this.document_service.delete_Document(document_id).then(response => {}).catch(this.handleError);
    this.getDocumentlist();
  }
  // Modal related
  showStaticModal(name, document_id) {
    const activeModal = this.modalService.open(_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, {
      size: 'sm',
      container: 'nb-layout'
    });
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = `Are you sure you want to delete ${name}?`;
    activeModal.result.then(result => {
      this.closeResult = result;
      if (this.closeResult === 'yes_click') {
        this.deleteDocument(document_id);
      }
    }, reason => {
      this.closeResult = this.getDismissReason(reason);
    });
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // Send Fax related Form
  // open(content, document_id) {
  //   this.documentProgram.document_id = document_id;
  //   this.modalRef = this.modalService.open(content,  { size: 'md' });
  //   this.modalRef.result.then((result) => {
  //     // this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  // Show Fax PDF
  showPDF(content, document_id) {
    this.modalRef = this.modalService.open(content, {
      size: 'md'
    });
    this.viewFaxDocument(document_id);
  }
  // Load PDF document
  viewFaxDocument(document_id) {
    this.totalPages = 0;
    this.isLoaded = false;
    const url = this.document_service.get_ViewFaxDocument(document_id);
    this.faxDocumentURL = url;
  }
  nextPage() {
    this.page += 1;
  }
  previousPage() {
    this.page -= 1;
  }
  afterLoadComplete(pdfData) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }
  closeModal() {
    this.modalRef.close();
  }
  getContactList() {
    this.contact_service.get_ContactList().then(data => {
      this.contactArray = data;
      this.dataService = this.completerService.local(this.contactArray, 'phone', 'phone');
    });
  }
  onSelected(item) {
    if (item != null) {
      this.sendfax.contact_id = item.originalObject.contact_id;
    } else {
      this.sendfax.contact_id = undefined;
    }
  }
  // addSendDocument(): void {
  //   if (this.sendfax.contact_id != undefined) {
  //       this.sendfax.phone = undefined;
  //   }
  //   this.sendfax_service.add_senddocument(this.documentProgram).then(response => {
  //     const program_id = response;
  //     this.sendfax.program_id = program_id;
  //     this.AddTransmission();
  //     this.closeModal();
  //   });
  // }
  AddTransmission() {
    this.sendfax_service.add_SendFax(this.sendfax).then(response => {
      const transmission_id = response;
      this.trans_id = transmission_id;
      this.AddSend(this.trans_id);
    });
  }
  AddSend(trans_id) {
    this.sendfax_service.send_transmission(this.trans_id).then(response => {});
  }
  downloadDocument(document_id) {
    this.document_service.get_Documentdownload(document_id);
  }
  getAccountList() {
    this.sendfax_service.get_AccountList().then(data => {
      this.accountArray = data;
      this.sendfax.account_id = this.accountArray[this.accountArray.length - 1].account_id;
    });
  }
  onSelectedAccount(value) {
    if (value = 0) {
      this.sendfax.account_id = value;
      ;
    } else {
      this.sendfax.account_id = undefined;
    }
  }
  handleError(error) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  static {
    this.ɵfac = function FormsDocumentComponent_Factory(t) {
      return new (t || FormsDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_document_service__WEBPACK_IMPORTED_MODULE_3__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridDataSourceBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_contact_contact_service__WEBPACK_IMPORTED_MODULE_4__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng2_completer__WEBPACK_IMPORTED_MODULE_5__.CompleterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sendfax_sendfax_service__WEBPACK_IMPORTED_MODULE_6__.SendFaxService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: FormsDocumentComponent,
      selectors: [["ngx-document-component"]],
      viewQuery: function FormsDocumentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      decls: 40,
      vars: 27,
      consts: [["nbInput", "", "fullWidth", "", "id", "search", 1, "form-control", "cc", 2, "float", "right", 3, "placeholder", "nbFilterInput"], ["type", "button", "mat-raised-button", "", "color", "primary", 2, "font-size", "15px", 3, "routerLink"], [1, "fa", "fa-plus"], [3, "nbTreeGrid", "nbSort"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], ["nbTreeGridColumnDef", "document_id"], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridColumnDef", "name"], ["nbTreeGridHeaderCell", "", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridColumnDef", "Operations"], [2, "padding", "30px", "display", "flex", "justify-content", "flex-end"], [2, "text-align", "center", "padding-top", "10px"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding-top", "10px"], ["icon", "arrowhead-left-outline", 2, "margin", "0 25px", 3, "ngClass", "click"], ["icon", "arrowhead-right-outline", 2, "margin", "0 25px", 3, "ngClass", "click"], [4, "ngIf"], ["content", ""], ["pdfViewer", ""], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", ""], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader"], ["nbTreeGridCell", ""], ["nbTreeGridHeaderCell", ""], ["mat-icon-button", "", "color", "primary", 2, "font-size", "20px"], ["title", "Edit", 3, "routerLink"], ["icon", "edit-2-outline"], [3, "click"], ["icon", "eye-outline", "title", "View Document"], ["icon", "download-outline", "title", "Download"], [2, "color", "red", 3, "click"], ["icon", "trash-2-outline", "title", "Delete"], ["icon", "paper-plane-outline", "title", "Send Fax"], [3, "value"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-sm-12"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "phone"], ["name", "phone", 3, "inputClass", "ngModel", "datasource", "minSearchLength", "ngModelChange", "selected"], [1, "form-grpup"], ["for", "account"], ["name", "account", 1, "form-control", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "col-sm-6"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [3, "value", "selected"], [1, "pdf-loading"], [3, "ngIf"], [2, "width", "100%", "height", "65vh", "overflow-x", "hidden!important", 3, "src", "render-text", "original-size", "show-all", "page", "after-load-complete"], [1, "pagination"], [1, "prv-page", 3, "disabled", "click"], [1, "nxt-page", 3, "disabled", "click"], [1, "all-pages"]],
      template: function FormsDocumentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "nb-card-body")(7, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "br")(12, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "table", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, FormsDocumentComponent_tr_14_Template, 1, 0, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, FormsDocumentComponent_tr_15_Template, 1, 0, "tr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, FormsDocumentComponent_th_17_Template, 3, 3, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, FormsDocumentComponent_td_18_Template, 2, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, FormsDocumentComponent_th_20_Template, 3, 3, "th", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, FormsDocumentComponent_td_21_Template, 2, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, FormsDocumentComponent_th_23_Template, 3, 3, "th", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, FormsDocumentComponent_td_24_Template, 17, 1, "td", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 12)(26, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Items per page: \u00A0\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "nb-select", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function FormsDocumentComponent_Template_nb_select_ngModelChange_28_listener($event) {
            return ctx.pageSize = $event;
          })("ngModelChange", function FormsDocumentComponent_Template_nb_select_ngModelChange_28_listener($event) {
            return ctx.paginate($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, FormsDocumentComponent_nb_option_29_Template, 2, 2, "nb-option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 16)(31, "nb-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_Template_nb_icon_click_31_listener() {
            return ctx.startIndex > 0 ? ctx.paginate("previous") : null;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "nb-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormsDocumentComponent_Template_nb_icon_click_34_listener() {
            return ctx.startIndex + ctx.pageSize < (ctx.aDocument == null ? null : ctx.aDocument.length) ? ctx.paginate("next") : null;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, FormsDocumentComponent_span_35_Template, 2, 3, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, FormsDocumentComponent_ng_template_36_Template, 32, 24, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, FormsDocumentComponent_ng_template_38_Template, 12, 9, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 16, "document.list"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 18, "document.filter"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbFilterInput", ctx.DocumentDataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](22, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 20, "document.add"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbTreeGrid", ctx.DocumentDataSource)("nbSort", ctx.DocumentDataSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.items_page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](23, _c3, ctx.startIndex === 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Page ", ctx.currentPage, " of ", ctx.total_pages, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](25, _c3, ctx.startIndex + ctx.pageSize >= (ctx.aDocument == null ? null : ctx.aDocument.length)));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.aDocument == null ? null : ctx.aDocument.length) > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbIconComponent, ng2_completer__WEBPACK_IMPORTED_MODULE_5__.CompleterCmp, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__.PdfViewerComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridRowDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridRowComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridCellDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridCellDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridHeaderRowDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridHeaderRowComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridHeaderCellDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridHeaderCellDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTreeGridColumnDefDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSortDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSortHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbFilterInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
      styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header[_ngcontent-%COMP%] {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n\n.dddd[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%]   .mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-left: 32px;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: rgb(10, 238, 10);\n}\n\n.fa-trash[_ngcontent-%COMP%]:hover {\n  color: rgb(138, 4, 4);\n}\n\n.fa-cloud-download[_ngcontent-%COMP%]:hover {\n  color: darkblue;\n}\n\n.cc[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pagination[_ngcontent-%COMP%]   .prv-page[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  line-height: 15px;\n  border: 0;\n  background: none;\n  height: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  float: left;\n}\n\n.pagination[_ngcontent-%COMP%]   .nxt-page[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  line-height: 15px;\n  border: 0;\n  background: none;\n  height: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  float: right;\n}\n\n.pagination[_ngcontent-%COMP%]   .all-pages[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.pdf-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 20% 0;\n  text-align: center;\n  font-size: 16px;\n}\n\n.ng2-pdf-viewer-container[_ngcontent-yff-c423][_ngcontent-%COMP%] {\n  overflow-x: hi;\n}\n\n.disabled-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWVzc2FnZS9kb2N1bWVudC9kb2N1bWVudC1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFHQTtFQUNFLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kZGRkIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tbGVmdDogMzJweDtcblxufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHJnYigxMCwgMjM4LCAxMCk7XG59XG5cbi5mYS10cmFzaDpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMTM4LCA0LCA0KTtcbn1cblxuLmZhLWNsb3VkLWRvd25sb2FkOmhvdmVyIHtcbiAgY29sb3I6IGRhcmtibHVlO1xufVxuXG4uY2Mge1xuICB3aWR0aDogNDAlO1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFnaW5hdGlvbiAucHJ2LXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucGFnaW5hdGlvbiAubnh0LXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnBhZ2luYXRpb24gLmFsbC1wYWdlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGRmLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwJSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5nMi1wZGYtdmlld2VyLWNvbnRhaW5lcltfbmdjb250ZW50LXlmZi1jNDIzXSB7XG4gIG92ZXJmbG93LXg6IGhpO1xufVxuLmRpc2FibGVkLWljb24ge1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 15354:
/*!*******************************************************************!*\
  !*** ./src/app/pages/message/document/document-form-component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDocumentComponent": () => (/* binding */ AddDocumentComponent)
/* harmony export */ });
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document */ 93731);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ 84640);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ 58356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document.service */ 97394);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.service */ 70900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 33935);













function AddDocumentComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "document.unsupported_file"));
  }
}
function AddDocumentComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddDocumentComponent_div_30_Template_i_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](item_r5.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.file == null ? null : item_r5.file.name);
  }
}
function AddDocumentComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddDocumentComponent_div_66_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.updateDocument());
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
function AddDocumentComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddDocumentComponent_div_67_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.addDocument());
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
class AddDocumentComponent {
  constructor(http, route, document_service, app_service, router) {
    this.http = http;
    this.route = route;
    this.document_service = document_service;
    this.app_service = app_service;
    this.router = router;
    this.form1 = {};
    this.file = [];
    this.document = new _document__WEBPACK_IMPORTED_MODULE_0__.Document();
    this.document_id = null;
    this.unsupportedErr = false;
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
    this.document_id = this.route.snapshot.params['id']; // move this line here if you want to capture id early
    this.URL = `${this.app_service.apiUrlDocument}/${this.document_id}/media`;
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__.FileUploader({
      url: this.URL,
      disableMultipart: true
    });
  }
  // public uploader: FileUploader = new FileUploader({url: this.URL, disableMultipart: true });
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.document_id = +params['id'];
      const test_url = this.router.url.split('/');
      const lastsegment = test_url[test_url.length - 1];
      if (lastsegment === 'new') {
        this.document.quality = 'standard';
        return null;
      } else {
        return this.document_service.get_DocumentData(this.document_id).then(data => {
          this.document = data;
        });
      }
    });
    this.uploader.onBeforeUploadItem = item => {
      item.method = 'POST';
      item.url = this.URL;
      item.withCredentials = false;
    };
    this.uploader.onAfterAddingFile = response => {
      console.log(response);
      this.file = response;
      if (response.file.type == 'application/pdf' || response.file.type == 'image/png' || response.file.type == 'image/jpg' || response.file.type == 'image/jpeg' || response.file.type == 'image/tiff' || response.file.type == 'image/tif') {} else {
        this.unsupportedErr = true;
        this.uploader.removeFromQueue(response);
        setTimeout(() => {
          this.unsupportedErr = false;
        }, 2000);
      }
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
      this.router.navigate(['../../document'], {
        relativeTo: this.route
      });
    });
  }
  updateDocument() {
    this.document_service.update_Document(this.document).then(response => {
      this.URL = `${this.app_service.apiUrlDocument}/${this.document_id}/media`;
      if (this.file != null) {
        this.upload();
      }
      this.router.navigate(['../../document'], {
        relativeTo: this.route
      });
    }).catch(this.handleError);
  }
  uploadDocument() {
    this.document_service.upload_Document(this.document).then(response => {
      this.router.navigate(['../../document'], {
        relativeTo: this.route
      });
    });
  }
  upload() {
    this.uploader.uploadAll();
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
    this.ɵfac = function AddDocumentComponent_Factory(t) {
      return new (t || AddDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_document_service__WEBPACK_IMPORTED_MODULE_2__.DocumentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AddDocumentComponent,
      selectors: [["ngx-add-document-component"]],
      decls: 68,
      vars: 51,
      consts: [[1, "col-lg-12"], ["id", "form1"], ["f1", "ngForm"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "name"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "container"], [1, "navbar", "navbar-default"], [1, "col-md-3"], ["type", "file", "nbInput", "", "fullWidth", "", "accept", ".pdf,.tif,.tiff,.png,.jpg,.jpeg", "ng2FileSelect", "", "multiple", "", 3, "uploader"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["for", "type"], ["name", "quality", 1, "dddd", 3, "ngModel", "ngModelOptions", "disabled", "ngModelChange"], ["value", ""], ["value", "standard"], ["value", "fine"], ["value", "super"], ["for", "description"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "description", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["text-center", "", 2, "color", "red"], [1, "nb-close", "smmmm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
      template: function AddDocumentComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddDocumentComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.document.name = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nb-card")(19, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "nb-card-body")(23, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 3)(26, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 11)(28, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, AddDocumentComponent_div_29_Template, 5, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, AddDocumentComponent_div_30_Template, 5, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "nb-card")(32, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "nb-card-body")(36, "div", 4)(37, "div", 5)(38, "div")(39, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "nb-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddDocumentComponent_Template_nb_select_ngModelChange_42_listener($event) {
            return ctx.document.quality = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "nb-option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "nb-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "nb-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "nb-option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](54, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "nb-card")(56, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "nb-card-body")(60, "div", 4)(61, "div", 5)(62, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](64, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddDocumentComponent_Template_input_ngModelChange_65_listener($event) {
            return ctx.document.description = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, AddDocumentComponent_div_66_Template, 4, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, AddDocumentComponent_div_67_Template, 4, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 24, "document.add"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 26, "document.document_info"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 28, "document.document_name"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.document.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](48, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 30, "document.supported_document"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("uploader", ctx.uploader);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.unsupportedErr);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.uploader.queue);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 32, "document.fax_quality"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 34, "outbound_fax.quality_type"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.document.quality)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](49, _c0))("disabled", ctx.document_id > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 36, "outbound_fax.choose"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 38, "outbound_fax.standard"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](51, 40, "outbound_fax.fine"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](54, 42, "outbound_fax.super"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](58, 44, "document.description"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](64, 46, "document.description"), ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.document.description)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](50, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.document_id > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.document_id);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__.FileSelectDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
      styles: [".my-drop-zone[_ngcontent-%COMP%] {\n  border: dotted 3px lightgray;\n}\n\n.nv-file-over[_ngcontent-%COMP%] {\n  border: dotted 3px red;\n}\n\n\n.another-file-over-class[_ngcontent-%COMP%] {\n  border: dotted 3px green;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.dddd[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.smmmm[_ngcontent-%COMP%] {\n  font-size: 25px;\n  display: inline;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWVzc2FnZS9kb2N1bWVudC9kb2N1bWVudC1mb3JtLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUEsZ0RBQUE7QUFFQTtFQUNFLHdCQUFBO0FBQUY7O0FBR0E7O0VBRUUsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZHJvcC16b25lIHtcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IGxpZ2h0Z3JheTtcbn1cblxuLm52LWZpbGUtb3ZlciB7XG4gIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XG59XG5cbi8qIERlZmF1bHQgY2xhc3MgYXBwbGllZCB0byBkcm9wIHpvbmVzIG9uIG92ZXIgKi9cblxuLmFub3RoZXItZmlsZS1vdmVyLWNsYXNzIHtcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IGdyZWVuO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmRkZGQge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5zbW1tbSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjb2xvcjogcmVkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 93105:
/*!*********************************************************!*\
  !*** ./src/app/pages/message/message-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageRoutingModule": () => (/* binding */ MessageRoutingModule),
/* harmony export */   "routedComponents": () => (/* binding */ routedComponents)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.component */ 91070);
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document/document-component */ 34513);
/* harmony import */ var _document_document_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document/document-form-component */ 15354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: '',
  component: _message_component__WEBPACK_IMPORTED_MODULE_0__.MessageComponent,
  children: [{
    path: 'document',
    component: _document_document_component__WEBPACK_IMPORTED_MODULE_1__.FormsDocumentComponent
  }, {
    path: 'document/new',
    component: _document_document_form_component__WEBPACK_IMPORTED_MODULE_2__.AddDocumentComponent
  }, {
    path: 'document/:id',
    component: _document_document_form_component__WEBPACK_IMPORTED_MODULE_2__.AddDocumentComponent
  }, {
    path: 'document/:id/download',
    component: _document_document_component__WEBPACK_IMPORTED_MODULE_1__.FormsDocumentComponent
  }, {
    path: 'document/:id/delete',
    component: _document_document_form_component__WEBPACK_IMPORTED_MODULE_2__.AddDocumentComponent
  }]
}];
class MessageRoutingModule {
  static {
    this.ɵfac = function MessageRoutingModule_Factory(t) {
      return new (t || MessageRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MessageRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MessageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();
const routedComponents = [_message_component__WEBPACK_IMPORTED_MODULE_0__.MessageComponent, _document_document_component__WEBPACK_IMPORTED_MODULE_1__.FormsDocumentComponent, _document_document_form_component__WEBPACK_IMPORTED_MODULE_2__.AddDocumentComponent];

/***/ }),

/***/ 91070:
/*!****************************************************!*\
  !*** ./src/app/pages/message/message.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageComponent": () => (/* binding */ MessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class MessageComponent {
  static {
    this.ɵfac = function MessageComponent_Factory(t) {
      return new (t || MessageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessageComponent,
      selectors: [["ngx-form-elements"]],
      decls: 1,
      vars: 0,
      template: function MessageComponent_Template(rf, ctx) {
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

/***/ 95980:
/*!*************************************************!*\
  !*** ./src/app/pages/message/message.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageModule": () => (/* binding */ MessageModule)
/* harmony export */ });
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-routing.module */ 93105);
/* harmony import */ var _message_document_document_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document/document-component */ 34513);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/table */ 59673);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ 58356);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-completer */ 2661);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-pdf-viewer */ 63940);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.component */ 91070);
/* harmony import */ var _document_document_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document/document-form-component */ 15354);




















class MessageModule {
  static {
    this.ɵfac = function MessageModule_Factory(t) {
      return new (t || MessageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: MessageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _message_routing_module__WEBPACK_IMPORTED_MODULE_1__.MessageRoutingModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__.FileUploadModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, ng2_completer__WEBPACK_IMPORTED_MODULE_3__.Ng2CompleterModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__.PdfViewerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbOptionModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbTableModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MessageModule, {
    declarations: [_message_component__WEBPACK_IMPORTED_MODULE_4__.MessageComponent, _message_document_document_component__WEBPACK_IMPORTED_MODULE_2__.FormsDocumentComponent, _document_document_form_component__WEBPACK_IMPORTED_MODULE_5__.AddDocumentComponent, _message_document_document_component__WEBPACK_IMPORTED_MODULE_2__.FormsDocumentComponent],
    imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _message_routing_module__WEBPACK_IMPORTED_MODULE_1__.MessageRoutingModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__.CdkTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule, ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__.FileUploadModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, ng2_completer__WEBPACK_IMPORTED_MODULE_3__.Ng2CompleterModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__.PdfViewerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbOptionModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbTableModule]
  });
})();

/***/ }),

/***/ 18941:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/debounceTime.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var rxjs_1 = __webpack_require__(/*! rxjs */ 25906);
var debounceTime_1 = __webpack_require__(/*! ../../operator/debounceTime */ 71966);
rxjs_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;

/***/ }),

/***/ 71966:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/debounceTime.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var rxjs_1 = __webpack_require__(/*! rxjs */ 25906);
var operators_1 = __webpack_require__(/*! rxjs/operators */ 26370);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
  if (scheduler === void 0) {
    scheduler = rxjs_1.asyncScheduler;
  }
  return operators_1.debounceTime(dueTime, scheduler)(this);
}
exports.debounceTime = debounceTime;

/***/ }),

/***/ 77365:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/add/operator/debounceTime.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__webpack_require__(/*! rxjs-compat/add/operator/debounceTime */ 18941);

/***/ })

}]);
//# sourceMappingURL=src_app_pages_message_message_module_ts.js.map