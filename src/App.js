import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarr } from './components/NavBarr/NavBarr';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { AddBlog } from './components/AddBlog/AddBlog';
import { BlogList } from './components/BlogList/BlogList';
import { CreateBlog } from './components/CreateBlog/CreateBlog';
import { BlogsDetial } from './components/BlogDetial/BlogDetial';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBarr />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/addBlog' element={<AddBlog />} />
                    <Route path='/blogList' element={<BlogList />} />
                    <Route path='/blogList/:id' element={<BlogsDetial />} />
                    <Route path='/addBlog/create' element={<CreateBlog />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
