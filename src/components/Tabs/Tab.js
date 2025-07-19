import React from 'react';
import { Box, HStack, Button, Hidden, VStack } from 'native-base';
function Tab({ toggleTabs, tabValue, activetab, previousTab }) {
	return (
		<Box alignSelf='center'>
			<Hidden from='base' till='md'>
				<HStack
					textTransform='uppercase'
					space={{ md: 5, base: 0 }}
					alignItems='center'
				>
					<Button
						onPress={() => toggleTabs(0)}
						_text={{
							fontSize: { md: '3xl', base: '20px' },
							fontFamily: 'Clash Display',
						}}
						backgroundColor='none'
						borderBottomWidth={tabValue === 0 ? '3px' : ''}
						borderBottomColor='#2EBB55'
					>
						WITH UNITED MARKET
					</Button>
					<Button
						borderBottomWidth={tabValue === 1 ? '3px' : ''}
						borderBottomColor='#2EBB55'
						onPress={() => toggleTabs(1)}
						backgroundColor='none'
						_text={{
							fontSize: { md: '3xl', base: '12px' },
							fontFamily: 'Clash Display',
						}}
					>
						WITHOUT UNITED MARKET
					</Button>

					{/* {tabValue === 1 && (
          <Box width="100px" height={2} backgroundColor="green"></Box>
        )} */}
				</HStack>
			</Hidden>
			<Hidden from='md'>
				<VStack
					textTransform='uppercase'
					space={{ md: 5, base: 0 }}
					alignItems='center'
				>
					<Button
						// onPress={(e) => toggleTabs(e.target.textContent)}
						_text={{
							fontSize: { md: '3xl', base: '20px' },
							fontFamily: 'Clash Display',
						}}
						backgroundColor='none'
						borderBottomWidth={'3px'}
						borderBottomColor='#2EBB55'
					>
						{activetab}
					</Button>
					<Button
						// borderBottomWidth={tabValue === 1 ? "3px" : ""}
						borderBottomColor='#2EBB55'
						// onPress={(e) => toggleTabs(e.target.textContent)}
						onPress={(e) => toggleTabs(e.target.textContent)}
						backgroundColor='none'
						_text={{
							fontSize: { md: '3xl', base: '12px' },
							fontFamily: 'Clash Display',
						}}
					>
						{previousTab}
					</Button>

					{/* {tabValue === 1 && (
          <Box width="100px" height={2} backgroundColor="green"></Box>
        )} */}
				</VStack>
			</Hidden>
		</Box>
	);
}

export default Tab;
