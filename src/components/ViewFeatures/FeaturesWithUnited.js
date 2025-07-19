import React from 'react';
import { Box, Text, Button, Link } from 'native-base';
function FeaturesWithUnited() {
	return (
		<Box mx='auto' marginTop={10}>
			<Box mx='auto' width={{ md: '55%', base: '80%' }}>
				<Text
					textAlign={{ md: 'center', base: 'center' }}
					color='#fff'
					fontSize={{ md: '40px', base: '18px' }}
					fontWeight='400'
				>
					One app to replace them{' '}
					<Text fontWeight='900' fontSize={{ md: '55px', base: '18px' }}>
						ALL
					</Text>{' '}
					focused on{' '}
					<Text
						fontWeight='900'
						fontSize={{ md: '40px', base: '18px' }}
						color='#2EBB55'
					>
						music industry
					</Text>{' '}
					creators and their{' '}
					<Text
						fontWeight='900'
						fontSize={{ md: '40px', base: '18px' }}
						color='#2EBB55'
					>
						teams
					</Text>
				</Text>
			</Box>
			<Box marginTop={10} marginBottom={20}>
				<Link href='#features'>
					<Button
						textTransform='capitalize'
						color='#E3E3E3'
						borderColor='#2EBA55'
						borderWidth={1}
						marginX='auto'
						w='300'
						background='#2EBB55'
						_text={{ fontSize: { md: '20px', sm: '18px', base: '18px' } }}
						_hover={{
							backgroundColor: 'transparent',
							_text: {
								color: '#2EBA55',
							},
						}}
					>
						view features
					</Button>
				</Link>
			</Box>
		</Box>
	);
}

export default FeaturesWithUnited;
