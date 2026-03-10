import React from "react";
import './Create.css';
import { useForm } from "@inertiajs/react";



const Create = (props) => {

    const { data, setData, post, reset } = useForm({
        title: '',
        due_date: '',
        description: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        post('/', {
            onSuccess: () => {
                closeCreate();
                reset();
            },
        });
    }




    const closeCreate = () => {
        props.setShowCreate(false);
    }

    return (
        <div>
            {props.showCreate ? (
                <div className="overlay">

                    <form className="createForm" onSubmit={handleSubmit}>
                        <button onClick={closeCreate} className="clsbtn">×</button>
                        <h1 className="createTitle">入力してください</h1>
                        <label className="title" >タイトル</label>
                        <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} />
                        <label >いつまで</label>
                        <input type="date" value={data.due_date} onChange={e => setData('due_date', e.target.value)} />
                        <label >内容</label>
                        <textarea name="description" id="" className="description" value={data.description} onChange={e => setData('description', e.target.value)} ></textarea>
                        <button type="submit" className="smtbtn" >作成する</button>
                    </form>

                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Create;