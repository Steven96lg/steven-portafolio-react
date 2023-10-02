
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from 'remark-gfm'
import { useParams} from "react-router-dom"
import '../css/ArticleDetailComponent.css'
import axios from "axios"
import { useEffect, useState } from "react"

export default function ArticleDetailComponent(){
    const { title } = useParams()
    
    const [getMarkdown, setGetMarkdown] = useState()

    useEffect(() => {
        axios.get(`/src/markdowns/${title}.md`)
        .then(response => {
            setGetMarkdown(response.data);
          })
          .catch(error => {
            console.error('Error fetching Markdown:', error);
          });
    }, [])
    
    return(
        <div id="detail-component">
            <ReactMarkdown children={getMarkdown} remarkPlugins={[remarkGfm]}></ReactMarkdown>
        </div>
    )
}