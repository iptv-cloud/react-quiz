import React, { useState,useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post,setPost] = useState({});
    const [hello,setHello] = useState();
    const [helloFromButtonClick,setHelloFromButtonClick] = useState(hello);
    const handleClick = () => {setHelloFromButtonClick(hello)}

    useEffect(()=>{
        axios
            .get(`https://api.datamuse.com/words?rel_rhy=${hello}&max=20`)
            .then(res=>{
                console.log(res);
                setPost(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    }, [helloFromButtonClick])

    return (
        <div>
            <input type="text" value={hello} onChange={e=> setHello(e.target.value)}  />
            <button type='button' onClick={handleClick}> Fetch Post</button>

            <ul>
                {
                    post.map(post=>
                    <li key={post.id}>
                        {post.word}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching;
