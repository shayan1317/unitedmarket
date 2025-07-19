import { Box, VStack, Text, Image, AspectRatio } from 'native-base';
import React from 'react';
function Nbox(props) {
	console.log(props);
	return (
		<Box
			alignItems={{ md: 'start', base: 'center' }}
			alignSelf={
				props.isFeatures ? 'start' : { md: 'baseline', base: 'center' }
			}
			w={{
				xl: props.wXl,
				lg: props.wlg,
				md: props.wMd,
				sm: props.wSm,
				base: props.baseW,
			}}
			my={8}
			mx={{
				xl: props.spaceXl,
				lg: props.spaceLg,
				md: props.spaceMd,
				sm: props.spaceSm,
				base: '2rem',
			}}
		>
			<VStack
				alignItems={{ md: 'start', base: 'center' }}
				alignSelf={props.isFeatures ? 'start' : 'center'}
				space={props.isFeatures ? 3 : { md: 7, base: 3 }}
				marginBottom={{ md: '30px', lg: '30px', sm: '10px' }}
				textAlign='left'
			>
				<AspectRatio
					w='100%'
					maxH='80px'
					alignSelf={props.isFeatures ? 'start' : 'center'}
					alignItems={{ md: 'start', base: 'center' }}
				>
					<Image
						mx={props.isFeatures ? { md: '', base: 'auto' } : 'auto'}
						size={
							props.isFeatures ? { base: 'md' } : { md: '150px', base: '100px' }
						}
						resizeMode='contain'
						source={require(`../../assets/${props.folder}/${props.imgUrl}`)}
					/>
				</AspectRatio>

				{props.value !== '' && (
					<Text fontSize={{ md: '20px' }} color='#fff' fontFamily='poppins'>
						{props.value}
					</Text>
				)}

				<Box>
					<Text
						fontSize={{ md: '24px', base: '20px' }}
						textTransform='capitalize'
						color='#E3E3E3'
						fontFamily='poppins'
					>
						{props.name}
					</Text>
				</Box>
				<Box>
					<Text
						textAlign={props.isFeatures ? { md: 'start', base: 'center' } : ''}
						w={props.isFeatures ? { md: '100%', base: '200px' } : ''}
						fontSize={{
							xl: props.isFeatures ? '1.1rem' : '1.4rem',
							lg: props.isFeatures ? '1.1rem' : '1.3rem',
							md: '1rem',
							base: '16px',
						}}
						color='#AFAFAF'
						fontFamily='poppins'
					>
						{props.description || ''}
					</Text>
				</Box>
			</VStack>
		</Box>
	);
}

export default Nbox;
