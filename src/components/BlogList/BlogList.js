import React, { useEffect, useState } from 'react';
import './BlogList.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export function BlogList() {
    let navigate = useNavigate();
    const [List, setList] = useState();

    useEffect(() => {
        axios.get(`http://localhost:2470/blogList`).then((res) => {
            const { data, status } = res;
            if (status === 200) {
                setList(data);
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }, []);

    return (
        <>
            <h3 className='createBlogTitle mt-5'>Blog List</h3>
            {List &&
                List.map((blog) => {
                    return (
                        <Link
                            key={blog.id}
                            to={`/blogList/${blog.id}`}
                            className='BlogList text-decoration-none'
                            as={Link}
                        >
                            <div className='blogItem'>
                                <div className='blogListItemLeft'>
                                    <h3
                                        className='blogItemTitle'
                                        style={{ color: 'teal' }}
                                    >
                                        {blog.title}
                                    </h3>
                                    <span
                                        className='authorStyle'
                                        style={{ color: 'grey' }}
                                    >
                                        {blog.author}
                                    </span>
                                    <span style={{ color: 'pink' }}>Date</span>
                                </div>
                                <div className='blogListItemRight'>
                                    <img
                                        src={blog.img}
                                        alt='dummy'
                                        height='45px'
                                        width='45px'
                                    />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            <button
                className='hiddenbackButton'
                onClick={() => navigate('/home')}
            >
                Back
            </button>
        </>
    );
}
