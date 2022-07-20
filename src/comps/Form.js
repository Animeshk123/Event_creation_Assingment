import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { typeContext } from "../formContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const user = useContext(typeContext);
  const navigate = useNavigate();
  const [cover, setCover] = useState({ file: null, name: "" });
  const [logo, setLogo] = useState({ file: null, name: "" });
  const [data, setData] = useState({
    tag: "",
    title: "",
    scdate: "",
    description: "",
    intro: ""
  });

  const Preview = () => {
    user.preview(data);
    navigate("/view/334");
  };

  const save = async () => {
    if (cover.file === null) return;
    if (logo.file === null) return;
    if (
      data.intro == "" &&
      data.scdate == "" &&
      data.tag == "" &&
      data.description == "" &&
      data.title == ""
    ) {
      return;
    }

    const formData = new FormData();
    formData.append("file", cover.file);
    formData.append("fileName", cover.fileName);
    formData.append("file2", logo.file);
    formData.append("file2Name", logo.name);
    formData.append("tag", data.tag);
    formData.append("type", user.type);
    formData.append("description", data.description);
    formData.append("title", data.title);
    formData.append("schedule", data.scdate);
    try {
      const res = await axios.post(
        "http://localhost:3030/events",
        formData
      );
      console.log(res);
      setData({
        tag: "",
        title: "",
        scdate: "",
        description: "",
        intro: ""
      });
      setCover({ file: null, name: "" });
      setLogo({ file: null, name: "" });
      navigate("/");
    } catch (ex) {
      console.log(ex);
      setData({
        tag: "",
        title: "",
        scdate: "",
        description: "",
        intro: ""
      });
      setCover({ file: null, name: "" });
      setLogo({ file: null, name: "" });
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mt-6">
        <label htmlFor="tag">TagLine :</label>
        <input
          type="text"
          id="tag"
          placeholder="type here..."
          name="tag"
          value={data.tag}
          onChange={handleChange}
          className="mb-6 block mt-4 border-2 px-4 py-3 border-gray-900 w-full max-w-md outline-none rounded"
        />
        <label htmlFor="title">Title :</label>
        <textarea
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Max 60 Charectar"
          className="block resize-none mt-4 border-2 px-4 py-3 border-gray-900 w-full max-w-md outline-none rounded"
        ></textarea>
        <label htmlFor="file" className="mt-6 flex items-center cursor-pointer">
          <i className="fa-solid fa-upload mr-4"></i>
          Choose Image
        </label>
        <input
          type="file"
          id="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            setCover({ file: e.target.files[0], name: e.target.files[0].name });
          }}
        />
        <div className="mt-6">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <p>Scheduled on :</p>
              <input
                type="date"
                className="ml-2"
                id="s"
                name="scdate"
                value={data.scdate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <label htmlFor="des" className="mt-6 block">
          Description :
        </label>
        <textarea
          id="des"
          placeholder="type here..."
          name="description"
          value={data.description}
          onChange={handleChange}
          className="h-32 block resize-none mt-4 border-2 px-4 py-3 border-gray-900 w-full max-w-md outline-none rounded"
        ></textarea>

        <label htmlFor="Logo" className="mt-6 flex items-center cursor-pointer">
          <i className="fa-solid fa-upload mr-4"></i>
          Choose A Logo
        </label>
        <input
          type="file"
          id="Logo"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            setLogo({ file: e.target.files[0], name: e.target.files[0].name });
          }}
        />

        <div className="flex mt-6 items-center">
          <input
            type="text"
            name="intro"
            value={data.intro}
            onChange={handleChange}
            placeholder="Enter one Line Initation..."
            className="ml-4 border-2 px-4 py-3 border-gray-900 w-full max-w-md outline-none rounded"
          />
        </div>

        <div className="flex items-center justify-end mt-12">
          <button
            type="button"
            className="cursor-pointer p-3 bg-gray-900 text-white rounded shadow"
            onClick={() => {
              save();
            }}
          >
            Publish Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
