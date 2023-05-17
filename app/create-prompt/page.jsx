'use client';
import React, { useState, useEffect} from 'react';
import { useSession  } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        title: '',
        tag: ''
    })

    const createPrompt = async (e) => {

    }

  return (
   <Form  
     type="Create"
     setPost={setPost}
     post={post}
     submitting={submitting}
     handleSubmit={createPrompt}
   />
  )
}

export default CreatePrompt