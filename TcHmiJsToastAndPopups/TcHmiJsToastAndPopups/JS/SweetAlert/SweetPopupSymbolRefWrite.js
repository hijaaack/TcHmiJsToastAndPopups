// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiJsToastAndPopups;
        (function (TcHmiJsToastAndPopups) {
            function SweetPopupSymbolRefWrite(symbolRef) {

                Swal.fire({
                    title: 'Do you want to save the changes?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                    denyButtonText: `Don't save`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire('Saved!', '', 'success');
                        symbolRef.write(true);
                    } else if (result.isDenied) {
                        Swal.fire('Changes are not saved', '', 'info');
                        symbolRef.write(false);
                    }
                });


            }
            TcHmiJsToastAndPopups.SweetPopupSymbolRefWrite = SweetPopupSymbolRefWrite;
        })(TcHmiJsToastAndPopups = Functions.TcHmiJsToastAndPopups || (Functions.TcHmiJsToastAndPopups = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('SweetPopupSymbolRefWrite', 'TcHmi.Functions.TcHmiJsToastAndPopups', TcHmi.Functions.TcHmiJsToastAndPopups.SweetPopupSymbolRefWrite);
