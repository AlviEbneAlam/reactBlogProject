import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data : blogs, isPending, error}=useFetch('http://localhost:3001/api/blogs');

    const [filteredBlogs, setFilteredBlogs]  = useState ([]);
    const[deletedBlogIds, setDeletedBlogIds] =useState ([]);
    
    useEffect(() => {
      if (blogs) {
          setFilteredBlogs(blogs);
      }
    }, [blogs]);

    const handleDelete= (id) => {
      setDeletedBlogIds([...deletedBlogIds, id]); 
      // setFilteredBlogs(filteredBlogs.filter(filtered_blog=> filtered_blog.id!=id));
    }

    const handleUndo = (id) => {
      setDeletedBlogIds(deletedBlogIds.filter(blogId => blogId !== id));
    };

      return (
        <div className="home">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { blogs && <BlogList blogs={filteredBlogs} deletedBlogIds= {deletedBlogIds}
          onDelete={handleDelete}  onUndo= { handleUndo}/> }
          {/* {lastDeleted && (
                <button className="undo-btn" onClick={handleUndo} >
                    Undo Delete
                </button>
            )} */}
        </div>
      )
    };


export default Home;