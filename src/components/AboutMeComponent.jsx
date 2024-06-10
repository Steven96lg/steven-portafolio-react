import React, { useContext, useEffect, useState } from 'react';
import UserArticle from './UserArticle.jsx';
import '../css/AboutMeComponent.css';
import { ThemeContext } from "../components/ThemeContext.jsx";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AboutMeComponent() {
    const { theme } = useContext(ThemeContext);

    const [markdownContents, setMarkdownContents] = useState([]);

    useEffect(() => {
        const markdownFiles = [
            "MD/welcome.md",
            'MD/egam.md'
        ];

        const fetchMarkdown = async () => {
            const promises = markdownFiles.map(file => 
                fetch(file)
                    .then(response => response.text())
            );
            const contents = await Promise.all(promises);
            setMarkdownContents(contents);
        };

        fetchMarkdown();
    }, []);
    
    return (
        <div className={`about ${theme}`}>
            <div id="about-me-component">
                {
                    markdownContents.map((content, index) => (
                        <div key={index} className='description-component'>
                            <UserArticle />
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {content}
                            </ReactMarkdown>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
