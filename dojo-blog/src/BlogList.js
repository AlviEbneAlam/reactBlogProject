import {Link} from 'react-router-dom';
import { FaTrash, FaUndo } from 'react-icons/fa';

const BlogList= ({blogs, deletedBlogIds,onDelete, onUndo})=>{
    
    //const blogs= props.blogs;
    
    return(

        <div className="blog-list">
              {
                blogs.map(blog =>
                {
                    const isDeleted= deletedBlogIds.includes(blog.id); 

                    return (
                        <div className="blog-preview" key={blog.id}>

                            <div className="blog-header">

                                        <Link to={`/blogs/${blog.id}`}>
                                            <h2>{blog.title}</h2>
                                            {!isDeleted && <p>Written by {blog.author}</p>}
                                        </Link>
                                        

                                        {isDeleted? 
                                            
                                            (<button className="undo-btn" onClick={() => onUndo(blog.id)}>
                                            <FaUndo  className="undo-icon"/>
                                            </button>)
                                              :
                                              (
                                              <button className="delete-btn" onClick={() => onDelete(blog.id)}>
                                            <FaTrash  className="delete-icon"/>
                                             </button>)
                                        }                                       
                            </div>       
                        </div>
                    )
                })
            }
        </div>

    );
}

export default BlogList;