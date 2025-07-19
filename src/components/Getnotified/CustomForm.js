import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { HStack } from 'native-base';

import Simpleform from './Simpleform';

const url =
	'https://unitedmarket.us4.list-manage.com/subscribe/post?u=ff855a33b74827bad86e56767&id=0b0967223f';

const CustomForm = () => (
	<MailchimpSubscribe
		url={url}
		render={({ subscribe, status, message }) => (
			<HStack>
				<Simpleform
					onSubmitted={(formData) => subscribe(formData)}
					status={status}
					message={message}
				/>
			</HStack>
		)}
	/>
);
export default CustomForm;
