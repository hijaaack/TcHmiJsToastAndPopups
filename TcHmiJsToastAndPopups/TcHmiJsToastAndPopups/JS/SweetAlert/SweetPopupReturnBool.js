// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiJsToastAndPopups;
        (function (TcHmiJsToastAndPopups) {
            function SweetPopupReturnBool(ctx) {

                Swal.fire({
                    title: 'Do you want to save the changes?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                    denyButtonText: `Don't save`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire('Saved!', '', 'success');                     
                        ctx.success(true); //return true
                    } else if (result.isDenied) {
                        Swal.fire('Changes are not saved', '', 'info');                       
                        ctx.success(false); //return false
                    }
                });


            }
            TcHmiJsToastAndPopups.SweetPopupReturnBool = SweetPopupReturnBool;
        })(TcHmiJsToastAndPopups = Functions.TcHmiJsToastAndPopups || (Functions.TcHmiJsToastAndPopups = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('SweetPopupReturnBool', 'TcHmi.Functions.TcHmiJsToastAndPopups', TcHmi.Functions.TcHmiJsToastAndPopups.SweetPopupReturnBool);
