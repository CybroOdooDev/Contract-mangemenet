odoo.define('xf_partner_contract.demo', function (require) {
'use strict';

const components = {
    demo: require('documents.controllerMixin'),
};

const { patch } = require('web.utils');

patch(components.demo, 'xf_partner_contract.demo', {

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    /**
     * @override
     */
    _getFileUploadRoute() {
        console.log('demo1')
        var url;
        if (this.context.active_ids && this.context.active_model=='xf.partner.contract')  {
            var active_id = this.context.active_ids[0];
            url = ('/documents/upload_attachment/'+ active_id);
        }
        else{
            url = ('/documents/upload_attachment/');
        };

        return url;
    },


    _onClickDocumentsUpload(ev) {
        console.log('demo2')
        this.context = this.model.get(this.handle).getContext();
        this._uploadFilesHandler(true)(ev);
    },
});

});
