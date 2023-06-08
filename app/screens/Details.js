import React from 'react';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants';
import {
	View,
	Text,
	SafeAreaView,
	Image,
	StatusBar,
	FlatList,
} from 'react-native';
import {
	RoundBtn,
	BoxBtn,
	FocusedStatusBar,
	BidDescription,
	NFTDetails,
	TokenDescription,
} from '../components';

const DetailsHeader = ({ data, navigation }) => (
	<View style={{ width: '100%', height: 373 }}>
		<Image
			source={data.image}
			resizeMode='cover'
			style={{ width: '100%', height: '100%' }}
		/>

		<RoundBtn
			imgUrl={assets.left}
			handlePress={() => navigation.goBack()}
			left={15}
			top={StatusBar.currentHeight + 10}
		/>

		<RoundBtn
			imgUrl={assets.heart}
			right={15}
			top={StatusBar.currentHeight + 10}
		/>
	</View>
);

const Details = ({ route, navigation }) => {
	const { data } = route.params;

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar
				barStyle='dark-content'
				backgroundColor='transparent'
				translucent={true}
			/>

			<View
				style={{
					width: '100%',
					position: 'absolute',
					bottom: 0,
					paddingVertical: SIZES.font,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'rgba(255,255,255,0.5)',
					zIndex: 1,
				}}
			>
				<BoxBtn minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
			</View>

			<FlatList
				data={data.bids}
				renderItem={({ item }) => <BidDescription bid={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: SIZES.extraLarge * 3,
				}}
				ListHeaderComponent={() => (
					<React.Fragment>
						<DetailsHeader data={data} navigation={navigation} />
						<NFTDetails />
						<View style={{ padding: SIZES.font }}>
							<TokenDescription data={data} />

							{data.bids.length > 0 && (
								<Text
									style={{
										fontSize: SIZES.font,
										fontFamily: FONTS.semiBold,
										color: COLORS.primary,
									}}
								>
									Current Bid
								</Text>
							)}
						</View>
					</React.Fragment>
				)}
			/>
		</SafeAreaView>
	);
};

export default Details;
