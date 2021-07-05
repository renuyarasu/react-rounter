import React from 'react'

const Post = ({match}) => {
    return (
        <div>
            <h1>Writing Posts: {match.params.id}</h1>
            <ul>
                <li>Log in to your WordPress Administration Screen (Dashboard).</li>
                <li>Click the Post tab.</li>
                <li>Click the ‘Add New’ sub-tab.</li>
                <li>Start filling in the blanks: enter your post title in the upper field, and enter your post body content in the main post editing box below it.</li>
                <li>As needed, select a category, add tags, and make other selections from the sections below the post. (Each of these sections is explained below.)</li>
                <li>When you are ready.</li>
            </ul>
        </div>
    )
}

export default Post
