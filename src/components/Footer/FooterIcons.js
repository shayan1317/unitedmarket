import { AspectRatio, Box, Image, Link } from 'native-base';
import React from 'react';

function FooterIcons({ imgName, imgUrl }) {
	return (
		<Link href={imgUrl}>
			{' '}
			<Box>
				<AspectRatio width='40px'>
					<Image
						w='100%'
						resizeMode='contain'
						source={require(`../../assets/footers/${imgName}`)}
					/>
				</AspectRatio>
			</Box>
		</Link>
	);
}

export default FooterIcons;
