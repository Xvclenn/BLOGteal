import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './CreateBlog.css';
import axios from 'axios';
import uuid4 from 'uuid4';
import { useNavigate } from 'react-router-dom';

export function CreateBlog() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [img, setImg] = useState('');
    const [List, setList] = useState([]);
    const [blogBody, setBlogBody] = useState('');
    const [date, setDate] = useState();
    const hasInput =
        title === '' || author === '' || img === '' || blogBody === '';
    const navigate = useNavigate();

    useEffect(() => {
        const date = new Date();
        let newDate = date.toLocaleTimeString('en-US', {
            day: 'numeric',
            month: 'numeric',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });
        setDate(newDate);
    }, []);

    const onCreate = () => {
        const newItem = {
            title,
            author,
            img,
            id: uuid4(),
            blogBody,
            date,
        };
        axios
            .post('http://localhost:2470/blogList', newItem)
            .then(function (res) {
                const { data, status } = res;
                if (status === 200) {
                    setAuthor('');
                    setTitle('');
                    setImg('');
                    setBlogBody('');
                    setList(data);
                } else {
                    alert(`Aldaa garlaa: ${status}`);
                }
            });

        navigate('/blogList');
    };

    const style = {
        borderRadius: '2px',
        borderColor: 'teal',
    };
    return (
        <>
            <h3 className='createBlogTitle mt-5'>Add New Blog</h3>
            <div className='createBlog'>
                <label>Blog Title:</label>
                <Form.Control
                    placeholder='Blog Title'
                    type='text'
                    style={style}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <InputGroup style={{ margin: '10px' }}>
                    <Form.Control
                        className='m-0'
                        as='textarea'
                        placeholder='Blog Body'
                        aria-label='With textarea'
                        style={style}
                        value={blogBody}
                        onChange={(e) => setBlogBody(e.target.value)}
                    />
                </InputGroup>
                <label>Blog Author:</label>
                <Form.Control
                    placeholder='Blog Author'
                    style={style}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Blog Image:</label>
                <Form.Control
                    placeholder='Blog Image Url'
                    style={style}
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
                <div className='buttonsss'>
                    <button
                        className='buttonAB'
                        disabled={hasInput}
                        onClick={onCreate}
                        style={{ opacity: hasInput ? '50%' : '100%' }}
                    >
                        Add
                    </button>
                    <button
                        className='buttonAB'
                        onClick={() => navigate(-1)}
                        // style={{ opacity: hasInput ? "50%" : "100%" }}
                    >
                        Back
                    </button>
                </div>
            </div>
        </>
    );
}
