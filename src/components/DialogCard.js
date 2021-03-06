import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

const DialogCard = ({ children, isDialogOpen = false, closeModal, title }) => {
  let completeButtonRef = useRef(null)

  return (
    <Transition show={isDialogOpen} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={completeButtonRef}
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
              <div className="border border-gray-200 inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-center pt-6 px-6"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2 pb-6 px-6">{children}</div>
                <div className="w-full flex flex-row">
                  <div className="w-full"><Button type="button" text="Accept" color="primary" className="rounded-bl-md" onClick={() => closeModal(true)}/></div>
                  <div className="w-full"><Button ref={completeButtonRef} type="button" text="Cancel" color="secondary" onClick={() => closeModal(false)}/></div>
                </div>
              </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogCard;
