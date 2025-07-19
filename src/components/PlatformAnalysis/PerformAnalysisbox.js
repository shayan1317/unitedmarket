import { Box, Hidden, VStack, Text, Image, AspectRatio } from 'native-base';
import React from 'react';
// import { LogBox } from "react-native-web";
// { name, imgUrl, description, value, folder }
function PerformAnalysisbox(props) {
	return (
		<Box
			w={{
				xl: props.wXl,
				lg: props.wlg,
				md: props.wMd,
				sm: props.wSm,
				base: '50%',
			}}
			my={10}
			mx={{
				xl: props.spaceXl,
				lg: props.spaceLg,
				md: props.spaceMd,
				sm: props.spaceSm,
				base: '0',
			}}
		>
			<VStack
				space={{ md: 5, base: 2 }}
				justifyItems='center'
				alignItems='center'
			>
				<Hidden from='md'>
					<AspectRatio textAlign='center' w='100px'>
						<Image
							mx='auto'
							w={{ md: '60%', base: '60%' }}
							resizeMode='contain'
							source={require(`../../assets/${props.folder}/${props.imgUrl}.png`)}
						/>
					</AspectRatio>
				</Hidden>
				<Text
					fontSize={{ md: '30px', base: '24px' }}
					fontFamily='Clash Display'
					color='white'
				>
					{props.value}
				</Text>

				<Box mt={{ md: '-30', sm: '-20', base: '-2' }} mb={{ md: '50px' }}>
					<Text
						fontSize={{ md: '18px', base: '20px' }}
						textTransform='capitalize'
						color='#E3E3E3'
						fontFamily='poppins'
					>
						{props.name}
					</Text>
				</Box>

				<Hidden from='base' till='md'>
					<AspectRatio textAlign='center' w='100px'>
						<Image
							mx='auto'
							w={{ md: '80%', base: '60%' }}
							resizeMode='contain'
							source={require(`../../assets/${props.folder}/${props.imgUrl}.png`)}
						/>
					</AspectRatio>
				</Hidden>
			</VStack>
		</Box>
	);
}

export default PerformAnalysisbox;
