import React, { useState } from 'react';
import { Box, Button, HStack, Input, FormControl } from 'native-base';
function Simpleform({ onSubmitted, status, message }) {
	const [email, setEmail] = useState('');
	const handleSubmit = (e) => {
		console.log(email);
		e.preventDefault();

		onSubmitted({
			EMAIL: email,
		});
	};

	return (
		<FormControl>
			<Box>
				{status === 'sending' && (
					<div style={{ color: '#fff' }}>sending...</div>
				)}
				{status === 'error' && (
					<div
						style={{ color: 'red' }}
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}
				{status === 'success' && (
					<div style={{ color: 'green' }}>Subscribed !</div>
				)}

				<HStack>
					<Input
						size={{ md: 'xl', base: 'md' }}
						placeholder='YOUR EMAIL ADDRESS'
						borderRadius='none'
						backgroundColor='#323333'
						borderWidth='0'
						onChangeText={setEmail}
						type='email'
						value={email}
						color='#fff'
					/>
					<Button
						borderRadius='none'
						py={3}
						textTransform='uppercase'
						onPress={handleSubmit}
						fontSize={{ md: '20px', base: '16px' }}
						backgroundColor='#2EBB55'
					>
						submit
					</Button>
				</HStack>
			</Box>
		</FormControl>
	);
}

export default Simpleform;
