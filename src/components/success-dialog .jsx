const SuccessDialog = ({onConfirm}) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center  justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex flex-col items-center">
                <img src="/assets/images/success.png" className="w-1/2 "></img>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-2xl leading-6 font-medium text-primary-400 font-bold"
                    id="modal-title"
                  >
                    คุณได้เพิ่มตารางทานยา
                  </h3>
                  <div className="mt-2">
                    <p className="text-xl text-gray-600">กรุณารอรับการแจ้งเตือน</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 flex items-center gap-x-4">
              <button
              onClick={onConfirm}
                type="button"
                className="w-full h-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-400 text-lg font-medium text-white"
              >
                ตกลง
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessDialog;
