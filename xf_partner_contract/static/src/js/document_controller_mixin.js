odoo.define('xf_partner_contract.document_controller_mixin', function (require) {
'use strict';

var DocumentsCMixin = require('documents.controllerMixin');
console.log('DocumentsCMixin', DocumentsCMixin)
const DocumentViewer = require('documents.DocumentViewer');
const { computeMultiSelection } = require('documents.utils');

const { getMessagingComponent } = require('@mail/utils/messaging_component');

const { _t, qweb } = require('web.core');
const config = require('web.config');
const { Markup } = require('web.utils');
const fileUploadMixin = require('web.fileUploadMixin');
const session = require('web.session');
const { ComponentWrapper } = require('web.OwlCompatibility');
const Dialog = require('web.Dialog');
//const TAGS_SEARCH_LIMIT = 8;


    DocumentsCMixin._getFileUploadRoute = function(){
        if (this.context.active_ids && this.context.active_model=='xf.partner.contract')  {
            var active_id = this.context.active_ids[0];
        }else{
            var active_id = 0;
        };
        var url = ('/documents/upload_attachment/'+ active_id);
        return url;
    }


    DocumentsCMixin._onClickDocumentsUpload = function(ev) {
        this.context = this.model.get(this.handle).getContext();
        this._uploadFilesHandler(true)(ev);
    }
return DocumentsCMixin;
});