import { AspectRatio, Box, Image } from 'native-base';
import { Dimensions } from 'react-native-web';

import React from 'react';

function CustomersBox(props) {
	return (
		<Box
			alignItems='center'
			mx={{ lg: 3, md: 2, base: 2 }}
			w={{ lg: props.wlg, md: props.wmd, sm: props.wsm, base: props.wbase }}
			my={{ md: 10, base: 1 }}
		>
			<AspectRatio w='100%' maxH='50px'>
				<Image
					// flex={2}
					mx='auto'
					size={{ md: props.imgsizeXl, base: props.imgSizeBase }}
					style={{ transform: 'translate3d(0,0,0)' }}
					resizeMode='contain'
					height={{
						md: props.h,
						sm: '40px',
					}}
					source={require(`../..//assets/customers/Desktop/${props.imgUrls}`)}
				/>
			</AspectRatio>
		</Box>
	);
}

export default CustomersBox;
