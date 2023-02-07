import React, { useEffect, useState } from 'react';
import './BlogList.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export function BlogList() {
    // let navigate = useNavigate();
    const [List, setList] = useState();

    useEffect(() => {
        axios.get(`http://localhost:247/blogList`).then((res) => {
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
            <div>BlogListArea</div>
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
                                <div className='blogItemLeft'>
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
                                <div className='blogItemRight'>
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
        </>
    );
}
