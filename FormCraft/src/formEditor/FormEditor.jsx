import { CKEditor } from 'ckeditor4-react';


const FormEditor = () => {
    return (<>

        <CKEditor
            initData="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>"
        />

    </>);

}

export default FormEditor;