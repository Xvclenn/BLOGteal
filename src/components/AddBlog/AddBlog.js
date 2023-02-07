import { useNavigate } from "react-router-dom";
import "./AddBlog.css";

export function AddBlog() {
    const navigate = useNavigate();
    const handleClick = () => navigate("/addBlog/create");

    return (
        <>
            <h3 className="createBlogTitle mt-5">Add New Blog</h3>
            <div className="AddBlog">
                <button className="Add" type="button" onClick={handleClick}>
                    Add New Blog
                </button>
            </div>
        </>
    );
}
