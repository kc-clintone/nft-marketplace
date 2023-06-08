import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
	return (
		<>
			<SectionWrapper
				title='Welcome to NFT online, store for NFTs. Start Selling & Growing'
				description='Buy, store, collect NFTs, exchange & earn crypto. Join millions online using ProNef Marketplace mobile app.'
				showBtn
				mockupImg={assets.homeHero}
				banner='banner'
			/>
			<SectionWrapper
				title='Beautiful and Elegant UI Marketplace'
				description='Experience a flowless UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design to give users an unforgetable moments.'
				mockupImg={assets.homeCards}
				reverse
			/>
			<Features />
			<SectionWrapper
				title='Development and Deployment'
				description="ProNef is built using the Expo tool which allows users to run the application any device natively. You can easily get your app into people's hands"
				mockupImg={assets.feature}
				reverse
			/>
			<SectionWrapper
				title='Creative way to showcase the store'
				description='The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT.'
				mockupImg={assets.mockup}
				banner='banner02'
			/>
			<Download />
		</>
	);
};

export default App;
