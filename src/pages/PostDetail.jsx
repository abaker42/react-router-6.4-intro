import { useLoaderData } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
	const postData = useLoaderData();
	return (
		<>
			<BlogPost title={postData.title} text={postData.body} />
		</>
	);
}
export const loader = ({ params }) => {
	return getPost(params.id);
};

export default PostDetailPage;
