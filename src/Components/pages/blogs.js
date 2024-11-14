import React from 'react';
import ScrollEffect from '../utils/scrollEffect';

// Helper function to truncate text
const truncateText = (text, limit, type = 'char') => {
    if (type === 'char') {
        // Truncate by character length
        return text.length > limit ? text.slice(0, limit) + '...' : text;
    } else if (type === 'word') {
        // Truncate by word count
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    }
};

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "There Are Many Variations of Passages Label",
            date: "11 May 2017",
            description:
                "Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl. Curabitur tincidunt, nunc et lacinia tempor, justo magna feugiat nulla, ac laoreet lectus libero a nulla.",
            image: "https://www.shutterstock.com/image-photo/caucasian-male-civil-engineer-talking-600nw-2389090189.jpg",
            icon: "fas fa-music"
        },
        {
            id: 2,
            title: "Understanding the Basics of Construction Management",
            date: "12 May 2017",
            description:
                "Mauris fermentum augue ac ligula dictum, id rutrum lectus cursus. Donec sodales nisi vel malesuada consectetur. Ut tincidunt enim vitae urna ultricies, non pretium libero auctor.",
            image: "https://www.shutterstock.com/image-photo/caucasian-male-civil-engineer-talking-600nw-2389090189.jpg",
            icon: "fas fa-music"
        },
        {
            id: 3,
            title: "The Future of Technology in the Construction Industry",
            date: "13 May 2017",
            description:
                "Sed convallis nulla ac lorem dictum, at luctus velit congue. Vivamus varius dolor nec sapien vehicula, eu feugiat risus sodales. Aenean eget posuere libero. In hac habitasse platea dictumst.",
            image: "https://www.shutterstock.com/image-photo/caucasian-male-civil-engineer-talking-600nw-2389090189.jpg",
            icon: "fas fa-video"
        },
    ];

    return (
        <section className="sk-blog-section" id="blogs">
    <ScrollEffect />

            <div className="container">
                <h2 className="sk-blog-title">Our Blogs</h2>
                <p className="sk-blog-subtitle">
                    The generated Lorem Ipsum is therefore always free from repetition,
                    injected humour, or non-characteristic words etc.
                </p>
                <div className="row">
                    {blogs.map((blog) => (
                        <div className="col-md-4 col-sm-6 sk-blog-card" key={blog.id}>
                            <div className="sk-blog-image">
                                <img src={blog.image} alt={blog.title} />
                                <span className="sk-blog-icon">
                                    <i className={blog.icon}></i>
                                </span>
                            </div>
                            <div className="sk-blog-content">
                                <h3>{truncateText(blog.title, 38, 'char')}</h3>
                                <p>{truncateText(blog.description, 10, 'word')}</p>
                                <div className="sk-blog-footer">
                                    <span>
                                        <i className="far fa-calendar-alt"></i> {blog.date}
                                    </span>
                                    <a href="#!" className="sk-blog-read-more">
                                        Read more <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
