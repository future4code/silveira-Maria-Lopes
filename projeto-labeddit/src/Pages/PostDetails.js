import React from "react";
import axios from "axios";
import styledComponents from "styled-components";
import useProtectedPage from "../Hooks/useProtectedPage"

function PostDetails () {
    useProtectedPage();
    
    return (
        <div>
              Hello! I'm the PostDetailsPage!
        </div>
    )
}

export default PostDetails;