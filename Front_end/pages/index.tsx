import type { NextPage } from 'next'
import Main from '../components/main page/main'
import Main_compress_info from '../components/main page/main_compress_info'
import Main_decompress_info from '../components/main page/main_decompress_info'
import Overview from '../components/main page/overview'
import Footer from '../components/main page/footer'

const Home: NextPage = () => {
	return (
		<div className="">
			<div className="flex min-h-screen h-fit w-fit min-w-full flex-col">
				<Main />
				<Main_compress_info />
				<Main_decompress_info />
				<Overview />
				<Footer />
			</div>
		</div>
	)
}

export default Home
