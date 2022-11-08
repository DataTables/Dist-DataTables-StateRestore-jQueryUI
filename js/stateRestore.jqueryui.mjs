/*! Bootstrap integration for DataTables' StateRestore
 * © SpryMedia Ltd - datatables.net/license
 */

import DataTable from '';


$.extend(true, DataTable.StateRestoreCollection.classes, {
    checkBox: 'dtsr-check-box form-check-input',
    checkLabel: 'dtsr-check-label form-check-label',
    checkRow: 'dtsr-check-row form',
    creationButton: 'dtsr-creation-button ui-button ui-corner-all ui-widget',
    creationForm: 'dtsr-creation-form modal-body',
    creationText: 'dtsr-creation-text modal-header',
    creationTitle: 'dtsr-creation-title modal-title',
    nameInput: 'dtsr-name-input form-control',
    nameLabel: 'dtsr-name-label form-label',
    nameRow: 'dtsr-name-row medium-6 cell'
});
$.extend(true, DataTable.StateRestore.classes, {
    // eslint-disable-next-line max-len
    confirmationButton: 'dtsr-confirmation-button ui-button ui-state-default ui-button-text-only ui-corner-all ui-widget'
});


export default DataTable;
