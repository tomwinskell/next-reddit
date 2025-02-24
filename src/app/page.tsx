export default function Home() {
	return (
		<>
			<main>
						<div className='page-header'>
							<h1 className="text-3xl font-bold">Project Reddit</h1>
						</div>

						<div className='posts'>{/* Render posts here */}</div>
						<form className='post-form'>
							<h3>Add a New Post</h3>

							<div>
								<input
									type='text'
									id='post-text'
									className='rounded-lg border p-2'
									placeholder='Post Text'
								/>

								<br />

								<input
									type='text'
									id='post-user'
									className='rounded-lg border p-2'
									placeholder='Your Name'
								/>
							</div>

							<button
								type='button'
								className='rounded-lg p-2 bg-blue-600'
							>
								Post
							</button>
						</form>
			</main>
		</>
	);
}