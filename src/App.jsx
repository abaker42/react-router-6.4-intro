import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as allBlogs } from './pages/BlogPosts';
import ErrorPage from './pages/ErrorPage';
import NewPostPage, { action as newAction } from './pages/NewPost';
import PostDetailPage, { loader as singlePost } from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
			<Route index element={<WelcomePage />} />
			<Route path='/blog' element={<BlogLayout />}>
				<Route index element={<BlogPostsPage />} loader={allBlogs} />
				<Route path=':id' element={<PostDetailPage />} loader={singlePost} />
			</Route>
			<Route path='/blog/new' element={<NewPostPage />} action={newAction} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
