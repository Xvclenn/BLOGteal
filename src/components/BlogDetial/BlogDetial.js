import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BlogDetial.css';

export function BlogsDetial() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [article, setArticle] = useState([]);
    const onDelete = () =>
        axios
            .delete(`http://localhost:2470/blogList/${id}`)
            .then(function (res) {
                if (res.status === 200) {
                    navigate(-1);
                }
            });

    useEffect(() => {
        axios.get(`http://localhost:2470/blogList/${id}`).then((res) => {
            const { data, status } = res;
            if (status === 200) {
                setArticle(data);
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }, []);

    return (
        <div className='container'>
            <div>
                <h1 className='m-5'>This Is Blog Area</h1>
            </div>
            <div className='blogItemInfo'>
                <div className='blogItemLeft'>
                    <h3 className='Title' style={{ color: 'teal' }}>
                        {article.title}
                    </h3>
                    <p className='authorStyle' style={{ color: 'grey' }}>
                        {article.author}
                    </p>
                </div>
                <div className='blogItemRight'>
                    <img src={article.img} alt='dummy' />
                </div>
            </div>
            <p className='date' style={{ color: 'pink' }}>
                Date
            </p>
            <div className='tealLine'>
                <hr />
            </div>
            <br />
            <div className='blogBody' style={{ fontFamily: 'Montserrat' }}>
                <p>{article.blogBody}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <button className='backButton' onClick={() => navigate(-1)}>
                    Back
                </button>
                <button className='deleteButton' onClick={onDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}
