import React from 'react';
import { Hidden, Link } from 'native-base';
// import headerLogo from "../../assets/headersAa/headerlogo.jpg";
import { useBreakpointValue } from 'native-base';
import { useScrollTo } from 'react-use-window-scroll';
import {
	Box,
	Container,
	Image,
	Flex,
	Spacer,
	Button,
	Menu,
	Pressable,
	HamburgerIcon,
} from 'native-base';
import { Dimensions } from 'react-native-web';
import { useNavigate } from 'react-router-dom';

function HeaderComp() {
	const scrollTo = useScrollTo();
	const width = Dimensions.get('window').width;
	const navigate = useNavigate();

	return (
		<Box backgroundColor='#1C1B1B' h='60px'>
			<Container marginX='auto' w='100%'>
				<Flex
					direction='row'
					alignItems='center'
					h='60px'
					w='100%'
					// justifyContent="space-between"
				>
					<Box flex={1}>
						<Link href='#home'>
							<Image
								h='40px'
								width='50px'
								resizeMode='contain'
								source={require('../../assets/headersAa/headerLogo.png')}
								alt='image'
							/>
						</Link>
					</Box>
					<Hidden from='base' till='md'>
						<Box flex={3}>
							<Flex direction='row' justify='center'>
								<Link
									href='#home'
									textDecoration='none'
									textTransform='uppercase'
									_text={{ color: '#E3E3E3', textDecoration: 'none' }}
									marginX={5}
								>
									<Button
										justifyContent={'center'}
										alignSelf={'center'}
										variant={'ghost'}
										p={0}
										py={2}
										m={0}
										backgroundColor='transparent'
										_text={{
											color: '#fff',
											fontSize: { md: '16px', sm: '14px', base: '14px' },
										}}
										_hover={{
											_text: {
												color: '#2EBA55',
											},
										}}
										w={'100%'}
										textTransform='uppercase'
									>
										Home
									</Button>
								</Link>
								<Link
									href='#features'
									textTransform='uppercase'
									_text={{ color: '#E3E3E3', textDecoration: 'none' }}
									marginX={5}
								>
									<Button
										// onPress={() =>
										// 	scrollTo({ top: 1900, left: 0, behavior: 'smooth' })
										// }
										justifyContent={'center'}
										alignSelf={'center'}
										variant={'ghost'}
										p={0}
										py={2}
										m={0}
										backgroundColor='transparent'
										_text={{
											color: '#fff',
											fontSize: { md: '16px', sm: '14px', base: '14px' },
										}}
										_hover={{
											_text: {
												color: '#2EBA55',
											},
										}}
										w={'100%'}
										textTransform='uppercase'
									>
										features
									</Button>
								</Link>
								<Link
									textTransform='uppercase'
									_text={{ color: '#E3E3E3', textDecoration: 'none' }}
									marginX={5}
								>
									<Button
										justifyContent={'center'}
										alignSelf={'center'}
										variant={'ghost'}
										p={0}
										py={2}
										m={0}
										backgroundColor='transparent'
										_text={{
											color: '#fff',
											fontSize: { md: '16px', sm: '14px', base: '14px' },
										}}
										_hover={{
											_text: {
												color: '#2EBA55',
											},
										}}
										w={'100%'}
										textTransform='uppercase'
									>
										studionow
									</Button>
								</Link>
								<Link
									textTransform='uppercase'
									_text={{ color: '#E3E3E3', textDecoration: 'none' }}
									marginX={5}
								>
									<Button
										justifyContent={'center'}
										alignSelf={'center'}
										variant={'ghost'}
										p={0}
										py={2}
										m={0}
										backgroundColor='transparent'
										_text={{
											color: '#fff',
											fontSize: { md: '16px', sm: '14px', base: '14px' },
										}}
										_hover={{
											_text: {
												color: '#2EBA55',
											},
										}}
										w={'100%'}
										textTransform='uppercase'
									>
										blog
									</Button>
								</Link>
							</Flex>
						</Box>
						<Box flex={1}>
							<Flex direction='row' justify='flex-end' alignItems={'center'}>
								<Link onPress={() => navigate('/login')}>
									<Button
										justifyContent={'flex-start'}
										borderColor='#2EBA55'
										borderWidth={1}
										variant={'ghost'}
										px={5}
										mx={4}
										py={2}
										backgroundColor='transparent'
										_text={{
											color: '#2EBA55',
											fontSize: { md: '16px', sm: '14px', base: '14px' },
										}}
										_hover={{
											backgroundColor: '#2EBA55',
											_text: {
												color: '#fff',
											},
										}}
									>
										Sign In
									</Button>
								</Link>

								<Link onPress={() => navigate('/signup')}>
									<Button
										justifyContent={'flex-start'}
										borderColor='#2EBA55'
										borderWidth={1}
										variant={'ghost'}
										px={5}
										m={0}
										py={2}
										// textTransform="capitalize"
										backgroundColor='#2EBA55'
										_text={{
											color: '#fff',
											fontSize: { md: '16px', sm: '14px', base: '14px' },
										}}
										_hover={{
											backgroundColor: 'transparent',
											_text: {
												color: '#2EBA55',
											},
										}}
									>
										Sign Up
									</Button>
								</Link>
							</Flex>
						</Box>
					</Hidden>

					<Hidden from='md'>
						<Box>
							<Menu
								w={'100%'}
								overflow={'hidden'}
								backgroundColor='rgba(0,0,0,0.7)'
								top='20px'
								right='0'
								width={`${width}px`}
								trigger={(triggerProps) => {
									return (
										<Pressable
											accessibilityLabel='More options menu'
											{...triggerProps}
										>
											<HamburgerIcon />
										</Pressable>
									);
								}}
							>
								{/* <Link href="#home"> */}
								<Menu.Item p={0} m={0} backgroundColor={'transparent'}>
									<Link
										href='#home'
										textDecoration='none'
										textTransform='uppercase'
										_text={{ color: '#E3E3E3', textDecoration: 'none' }}
										marginX={5}
									>
										<Button
											justifyContent={'flex-start'}
											variant={'ghost'}
											p={0}
											py={2}
											m={0}
											backgroundColor='transparent'
											_text={{
												color: '#fff',
												fontSize: { md: '16px', sm: '14px', base: '14px' },
											}}
											_hover={{
												_text: {
													color: '#2EBA55',
												},
											}}
											w={'100%'}
											textTransform='uppercase'
										>
											Home
										</Button>
									</Link>
								</Menu.Item>
								<Menu.Item p={0} m={0} backgroundColor={'transparent'}>
									<Link
										// href='#features'
										textDecoration='none'
										textTransform='uppercase'
										_text={{ color: '#E3E3E3', textDecoration: 'none' }}
										marginX={5}
									>
										<Button
											onPress={() =>
												scrollTo({ top: 1700, left: 0, behavior: 'smooth' })
											}
											justifyContent={'flex-start'}
											variant={'ghost'}
											px={0}
											py={2}
											m={0}
											backgroundColor='transparent'
											_text={{
												color: '#fff',
												fontSize: { md: '16px', sm: '14px', base: '14px' },
											}}
											_hover={{
												_text: {
													color: '#2EBA55',
												},
											}}
											w={'100%'}
											textTransform='uppercase'
										>
											features
										</Button>
									</Link>
								</Menu.Item>
								<Menu.Item p={0} m={0} backgroundColor={'transparent'}>
									<Link
										textDecoration='none'
										textTransform='uppercase'
										_text={{ color: '#E3E3E3', textDecoration: 'none' }}
										marginX={5}
									>
										<Button
											justifyContent={'flex-start'}
											variant={'ghost'}
											px={0}
											m={0}
											py={2}
											backgroundColor='transparent'
											_text={{
												color: '#fff',
												fontSize: { md: '16px', sm: '14px', base: '14px' },
											}}
											_hover={{
												_text: {
													color: '#2EBA55',
												},
											}}
											w={'100%'}
											textTransform='uppercase'
										>
											StudioNow
										</Button>
									</Link>
								</Menu.Item>
								<Menu.Item p={0} m={0} backgroundColor={'transparent'}>
									<Link
										textDecoration='none'
										textTransform='uppercase'
										_text={{ color: '#E3E3E3', textDecoration: 'none' }}
										marginX={5}
									>
										<Button
											justifyContent={'flex-start'}
											variant={'ghost'}
											px={0}
											m={0}
											py={2}
											backgroundColor='transparent'
											_text={{
												color: '#fff',
												fontSize: { md: '16px', sm: '14px', base: '14px' },
											}}
											_hover={{
												_text: {
													color: '#2EBA55',
												},
											}}
											w={'100%'}
											textTransform='uppercase'
										>
											Blogs
										</Button>
									</Link>
								</Menu.Item>
								{/* </Link> */}

								<Menu.Item backgroundColor={'transparent'}>
									<Link onPress={() => navigate('/login')}>
										<Button
											justifyContent={'flex-start'}
											borderColor='#2EBA55'
											borderWidth={1}
											variant={'ghost'}
											px={2}
											m={0}
											py={2}
											backgroundColor='transparent'
											_text={{
												color: '#2EBA55',
											}}
											_hover={{
												backgroundColor: '#2EBA55',
												_text: {
													color: '#fff',
													fontSize: { md: '16px', sm: '14px', base: '14px' },
												},
											}}
										>
											Sign In
										</Button>
									</Link>
								</Menu.Item>
								<Menu.Item backgroundColor={'transparent'}>
									<Link onPress={() => navigate('/signup')}>
										<Button
											justifyContent={'flex-start'}
											borderColor='#2EBA55'
											borderWidth={1}
											variant={'ghost'}
											px={2}
											m={0}
											py={2}
											backgroundColor='#2EBA55'
											_text={{
												color: '#fff',
												fontSize: { md: '16px', sm: '14px', base: '14px' },
											}}
											_hover={{
												backgroundColor: 'transparent',
												_text: {
													color: '#2EBA55',
												},
											}}
											h='35px'
										>
											Sign Up
										</Button>
									</Link>
								</Menu.Item>
							</Menu>
						</Box>
					</Hidden>
				</Flex>
			</Container>
		</Box>
	);
}

export default HeaderComp;
