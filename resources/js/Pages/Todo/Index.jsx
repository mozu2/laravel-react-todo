import { useState } from 'react';
import './Index.css';
import Create from "./Create.jsx";
import ShowTask from "./ShowTask.jsx";


const Index = ({ todos }) => {

    const [showCreate, setShowCreate] = useState(false);

    const ShowCreate = () => {
        setShowCreate(true);
    }

    return (
        <>
            <div className='todo'>
                <h1>To Do アプリ</h1>
                <button className='createbtn' onClick={ShowCreate}>作成する</button>

                <div>
                    <ShowTask todos={todos} />
                </div>
                {/*子コンポーネント(Create)にshowCreateをわたす */}
                <Create showCreate={showCreate} setShowCreate={setShowCreate} />
            </div>
        </>
    )
}

export default Index;
