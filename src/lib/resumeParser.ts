import axios from 'axios'

export async function parseResume(file: File) {
  // This is a placeholder. You'd need to implement the actual API call to a resume parsing service.
  const formData = new FormData()
  formData.append('resume', file)

  try {
    const response = await axios.post('https://api.resumeparser.io/v2/parse', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${process.env.RESUME_PARSER_API_KEY}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Failed to parse resume:', error)
    throw new Error('Failed to parse resume')
  }
}