import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BlogDetial.css';

export function BlogsDetial() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [article, setArticle] = useState();

    useEffect(() => {
        axios.get(`http://localhost:247/blogList/${id}`).then((res) => {
            const { data, status } = res;
            if (status === 200) {
                setArticle(data);
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }, []);

    return (
        <>
            <div>
                <h1 className='m-5'>This Is Blog Area</h1>
            </div>
            <div className='blogItemInfo'>
                <div className='blogItemLeft'>
                    <h3 className='Title' style={{ color: 'teal' }}>
                        {article.title}
                    </h3>
                    <p style={{ color: 'grey' }}>{article.author}</p>
                </div>
                <div className='blogItemRight'>
                    <img
                        src={article.img}
                        alt='dummy'
                        height='250px'
                        // width="2px"
                    />
                </div>
            </div>
            <span style={{ color: 'pink' }}>Date</span>
            <div className='tealLine'>
                <hr />
            </div>
            <br />
            <div className='blogBody'>
                <p>{article.blogBody}</p>
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
            {/* <button onClick={onDelete}>Delete</button> */}
        </>
    );
}
