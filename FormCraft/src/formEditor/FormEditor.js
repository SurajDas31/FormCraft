import { CKEditor } from 'ckeditor4-react';
import { SignInWithGoogle } from '../firebase-config/firebase-config';


const FormEditor = () => {

    return (<>

        <button onClick={SignInWithGoogle}>Sign in with Google</button>

        <CKEditor
            onChange={(event, editor) => {
                console.log(event);
                console.log(editor);
            }}
            initData="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>"
        />

    </>);

}

export default FormEditor;