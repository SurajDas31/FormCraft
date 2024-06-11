import { Dropdown } from "flowbite-react";
import { auth, firestore, storage } from "../firebase-config/firebase-config";
import { useEffect, useRef, useState } from "react";
import FormEditor from "../formEditor/FormEditor";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

const Dashboard = ({ dashboardOpen, setDashboardOpen }) => {

  const [formEditorOpen, setFormEditorOpen] = useState(false);

  // const [form, setForm] = useState(null);
  const form = useRef(null);

  const [formData, setFormData] = useState([]);

  const imageFormData = useRef({});

  useEffect(() => {
    if (formEditorOpen === false)
      fetchPost();
  }, [formEditorOpen]);

  const fetchPost = async () => {

    const q = await query(collection(firestore, "form_templates"), where('user', '==', auth.currentUser.uid))

    getDocs(q).then((querySnapshot) => {
      setFormData([]);
      querySnapshot.forEach(async element => {
        // console.log(element.data());
        setFormData(arr => [...arr, element])
        await getTemplateImage(element);
        console.log(imageFormData);
      });
    })
  }

  const getTemplateImage = async (element) => {
    console.log(element)

    const fileRef = await ref(storage, `formcraft/form-templates/${element.id}`)
    const url = await getDownloadURL(fileRef);
    const formId = element.id
    // setFormData(arr => [...arr, {"imageUrl": url}])
    // setImageFormData(arr => ({...arr, formId: url}))
    imageFormData.current = { ...imageFormData.current, formId: url }
    return url;
  }



  const openFormEditor = (form1) => {
    setFormEditorOpen(true)
    // setForm(form);
    form.current = form1
  }

  return (
    <>

      {dashboardOpen ? <div className="py-8 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:mx-0 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Form Templates</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className=" mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 sm:mt-10 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {formData.map((form) => (
              <article key={form.id} className="px-8 pt-80 pb-5 relative flex rounded-2xl flex-col items-start justify-between cursor-pointer isolate overflow-hidden">
                <img className="h-full inset-0 w-full -z-10 absolute object-cover " src={imageFormData.current[form.id]} alt="" />

                <div className="absolute top-3 right-4">
                  <Dropdown
                    label={
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 bg-slate-100/60 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                    }
                    inline
                    arrowIcon={false}
                  >
                    <Dropdown.Item className="gap-2" onClick={() => openFormEditor(form)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                      </svg>
                      Share
                    </Dropdown.Item>
                  </Dropdown>
                </div>
                <div className="absolute -z-10 inset-0 bg-gradient-to-t from-[#111827]"></div>

                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={form.data().created} className="text-gray-300 text-sm leading-6 mr-8">
                    {form.data().date}
                  </time>
                  {/* <div className="relative flex items-center gap-x-2">
                    <img src={post.author.imageUrl} alt="" className="h-7 w-7 rounded-full bg-gray-50" />
                    <div className="text-sm">
                      <p className="font-semibold text-gray-300">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                    </div>
                  </div> */}

                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {form.data().title}
                    </a>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div> : ""}
      <FormEditor form={form.current} formEditorOpen={formEditorOpen} setFormEditorOpen={() => setFormEditorOpen(false)} />
    </>
  );

}
export default Dashboard;