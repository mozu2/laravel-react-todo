import { useState } from 'react';
import './Index.css';
import Create from "./Create.jsx";


const Index = () => {

    const [showCreate, setShowCreate] = useState(false);

    const ShowCreate = () => {
        setShowCreate(true);
    }

    return (
        <div className='todo'>
            <h1>To Do アプリ</h1>
            <button className='createbtn' onClick={ShowCreate}>作成する</button>
            {/*子コンポーネント(Create)にshowCreateをわたす */}
            <Create showCreate={showCreate} setShowCreate={setShowCreate} />

        </div>
    )
}

export default Index;
