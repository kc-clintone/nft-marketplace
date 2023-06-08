import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image } from 'react-native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { SubInfo, EthPrice, NFTTitle } from './NFTDetails';
import { BoxBtn, RoundBtn } from './Button';

const NFTCard = ({ data }) => {
	const navigation = useNavigation();

	return (
		<View
			style={{
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				...SHADOWS.dark,
			}}
		>
			<View
				style={{
					width: '100%',
					height: 250,
				}}
			>
				<Image
					source={data.image}
					resizeMode='cover'
					style={{
						width: '100%',
						height: '100%',
						borderTopLeftRadius: SIZES.font,
						borderTopRightRadius: SIZES.font,
					}}
				/>

				<RoundBtn imgUrl={assets.heart} left={10} top={10} />
			</View>

			<SubInfo />

			<View style={{ width: '100%', padding: SIZES.font }}>
				<NFTTitle
					title={data.name}
					subTitle={data.creator}
					titleSize={SIZES.large}
					subTitleSize={SIZES.small}
				/>

				<View
					style={{
						marginTop: SIZES.font,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<BoxBtn
						minWidth={120}
						fontSize={SIZES.font}
						handlePress={() => navigation.navigate('Details', { data })}
					/>
					<EthPrice price={data.price} />
				</View>
			</View>
		</View>
	);
};

export default NFTCard;
