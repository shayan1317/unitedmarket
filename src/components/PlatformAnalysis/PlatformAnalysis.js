import { Box, Container, HStack, SimpleGrid } from 'native-base';
import React from 'react';
import PerformAnalysisbox from './PerformAnalysisbox';
import Title from '../Title/Title';
function PlatformAnalysis() {
	const data = [
		{
			imgUrl: 'one',
			value: '2,500',
			name: 'opportunities',
			text: 'Collaboration is unorganized',
			description:
				'We have curated placement and sync licensing opportunities for United Market members. We are onboarding hundreds of A&R’s over the next few months to offer exclusive opportunities to United Market members',
		},
		{
			imgUrl: 'two',
			value: '12,000',
			name: 'files sent',
			text: 'Focused on press more than member success',
			description:
				'With our integration with Discord + easy file sharing our members never miss an opportunity. ',
		},

		{
			imgUrl: 'four',
			value: '50,000',
			name: 'artists',
			text: 'Collaboration is unorganized',
			description:
				'With so many talented musicians on the platform, we are vetting United Market 2.0 applicants.',
		},
		{
			imgUrl: 'three',
			value: '10,000',
			name: 'music producers',
			text: 'Ineffective when sharing or receiving audio files',
			description:
				'With so many talented musicians on the platform, we are vetting United Market 2.0 applicants.',
		},
	];
	return (
		<div id='analysis'>
			<Box width={{ md: '100%', base: '98%' }}>
				<Title
					heading1='Platform '
					heading2='Activity'
					isFlag={true}
					paragraph='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.'
				/>
				<Box
					py={5}
					backgroundColor='#1C1B1B'
					// display="flex"
					// alignItems="center"
					// justifyContent="center"
				>
					<Box width='98%' marginX='auto'>
						<HStack justifyContent='center' flexWrap={'wrap'}>
							{data.map((each, index) => {
								return (
									<PerformAnalysisbox
										key={index}
										imgSizeXl='66%'
										imgSizeLg='70%'
										wXl='18%'
										spaceXl='3rem'
										wlg='16%'
										spaceLg='2.2rem'
										// mxXl="6rem"

										wMd='17%'
										spaceMd='0.5rem'
										imgSizeMd='64%'
										// mxMd="1rem"
										wSm='27%'
										spaceSm='3rem'
										imgSizeSm='53%'
										// wXl="22%"
										// wLg="22%"
										// mxLg="0.5rem"
										// wMd="20%"
										// mxMd="1rem"
										name={each.name}
										folder='perform analysis'
										imgUrl={each.imgUrl}
										description={each.description}
										value={each.value}
									/>
								);
							})}
						</HStack>
					</Box>
				</Box>
			</Box>
		</div>
	);
}

export default PlatformAnalysis;
