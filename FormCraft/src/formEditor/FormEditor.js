import { CKEditor } from 'ckeditor4-react';
import { Button, Dialog, DialogTitle, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Timestamp, addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { auth, firestore } from '../firebase-config/firebase-config';


const FormEditor = ({ form, formEditorOpen, setFormEditorOpen }) => {

    const [saveButtonDisable, setSaveButtonDisable] = useState(true);

    useEffect(() => {
        console.log(form);
        // fetchPost();
    }, [formEditorOpen]);

    const editorContent = useRef(null);

    const handleEditorChange = (event, editor) => {
        setSaveButtonDisable(false);
        const text = event.editor.getData();
        editorContent.current = text;
        console.log(editorContent);
    };

    const saveForm = async (event) => {
        event.preventDefault();

        if (form === null) {
            try {
                await addDoc(collection(firestore, 'form_templates'), {
                    title: "Test",
                    created: Timestamp.now(),
                    rawData: editorContent.current,
                    user: auth.currentUser.uid
                })

                setFormEditorOpen()
            } catch (err) {
                alert(err)
            }
        } else {
            try {
                
                await updateDoc(doc(firestore, "form_templates", form.id), {
                    title: form.data().title,
                    // created: Timestamp.now(),
                    rawData: editorContent.current,
                    user: auth.currentUser.uid
                })

                setFormEditorOpen()
            } catch (err) {
                alert(err)
            }
        }


    }

    return (
        <>
            <Transition.Root show={formEditorOpen} as={Fragment} >
                <Dialog className="relative z-10" onClose={() => { setFormEditorOpen() }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-11/12">
                                    <DialogTitle as="h2" className="text-xl font-medium bg-gradient-to-bl  from-[#816ed6] p-4">
                                        <input id="formName" type='text' className="bg-inherit border-none focus:border-none" defaultValue={form === null ? "Test" : form.data().title} />
                                    </DialogTitle>
                                    <div>
                                        <CKEditor
                                            onChange={handleEditorChange}
                                            initData={form?.data().rawData}
                                        />
                                    </div>
                                    <div className="flex p-4 justify-end space-x-2">
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md bg-indigo-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={saveForm}
                                            disabled={saveButtonDisable}>
                                            Save
                                        </Button>
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md bg-gray-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={setFormEditorOpen}>
                                            Cancel
                                        </Button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}

export default FormEditor;